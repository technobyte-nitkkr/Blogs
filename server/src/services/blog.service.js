import Blog from "../model/blog.js";
import Tag from "../model/tags.js";
import Comment from "../model/comment.js";
import User from "../model/user.js";

const handleBlogSearch = async (req, res) => {
  const { tags, time, query } = req.query;

  console.log("Search parameters:", { tags, time, query });

  try {
    const filter = {};
    if (tags) {
      const tagNames = tags.split(",").map((tag) => tag.trim());
      const tagIds = await Tag.find({ name: { $in: tagNames } }).select("_id");
      filter.tags = { $in: tagIds.map((tag) => tag._id) };
    }

    if (time) {
      const parsedTime = new Date(time);
      if (isNaN(parsedTime)) {
        return res.status(400).json({ message: "Invalid time format" });
      }
      filter.date = { $gte: parsedTime };
    }

    if (query) {
      filter.$or = [
        { title: { $regex: query, $options: "i" } },
        { content: { $regex: query, $options: "i" } },
      ];
    }

    const requiredBlogs = await Blog.find(filter)
      .populate("tags")
      .populate({
        path: "comments",
        populate: { path: "user", model: "User" },
      });

    res.status(200).json(requiredBlogs);
  } catch (error) {
    console.error("Error during blog search:", error);
    res
      .status(500)
      .json({ message: "Failed to search blogs based on given params", error });
  }
};

const returnBlogById = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findById(id)
      .populate("tags")
      .populate({
        path: "comments",
        populate: { path: "user", model: "User" },
      });
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    return res.status(200).json(blog);
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const returnAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({})
      .populate("tags")
      .populate({
        path: "comments",
        populate: { path: "user", model: "User" },
      });
    return res.status(200).json(blogs);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export { handleBlogSearch, returnBlogById, returnAllBlogs };
