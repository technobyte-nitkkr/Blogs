import Blog from "../model/blog.js";
import Tag from "../model/tags.js";

const getAllDataForAdmin = async (req, res) => {
  try {
    const publishedBlogs = await Blog.find({ review: "approved" }).lean();
    const updatedReview = await Blog.find({ review: "update" }).lean();
    const review = await Blog.find({ review: "pending" }).lean();

    return res.status(200).json({
      success: true,
      message: "Admin data fetched successfully",
      data: {
        publishedBlogs,
        updatedReview,
        review,
      },
    });
  } catch (err) {
    console.error("Error fetching admin data:", err.message);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const createBlog = async (req, res) => {
  try {
    const { title, content, image, description, tags } = req.body;

    if (!title || !content) {
      return res
        .status(400)
        .json({ message: "Title and content are required." });
    }

    let tagIds = [];
    if (tags && Array.isArray(tags)) {
      for (const tagName of tags) {
        let tag = await Tag.findOne({ name: tagName });
        if (!tag) {
          tag = new Tag({ name: tagName });
          await tag.save();
        }
        tagIds.push(tag._id);
      }
    }

    const newBlog = new Blog({
      title,
      content,
      image: image || "",
      description: description || "",
      review: "pending",
      reviewMessage: "",
      tags: tagIds,
      comments: [],
      date: new Date(),
    });

    await newBlog.save();

    res.status(201).json({
      success: true,
      message: "Blog post created successfully.",
      blog: newBlog,
    });
  } catch (error) {
    console.error("Error creating blog post:", error);
    res.status(500).json({
      success: false,
      message: "Error creating blog post.",
    });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "Blog ID is required." });
    }

    const deletedBlog = await Blog.findByIdAndDelete(id);

    if (!deletedBlog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Blog deleted successfully.",
    });
  } catch (error) {
    console.error("Error deleting blog:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};

const reviewBlog = async (req, res) => {
  const { id } = req.params;
  const { reviewStatus, reviewMessage } = req.body;

  try {
    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found." });
    }

    switch (reviewStatus) {
      case "pending":
        blog.review = "pending";
        blog.reviewMessage = "";
        break;
      case "approved":
        blog.review = "approved";
        blog.reviewMessage = "";
        break;
      case "update":
        if (!reviewMessage || reviewMessage.trim() === "") {
          return res.status(400).json({
            message: "Review message is required for status 'update'.",
          });
        }
        blog.review = "update";
        blog.reviewMessage = reviewMessage;
        break;
      default:
        return res.status(400).json({ message: "Invalid review status." });
    }

    await blog.save();

    res.status(200).json({
      success: true,
      message: "Blog review updated successfully.",
      updatedBlog: blog,
    });
  } catch (error) {
    console.error("Error reviewing blog:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};

const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, image } = req.body;

    if (!id) {
      return res.status(400).json({ message: "Blog ID is required." });
    }

    const data = {};
    if (title) data.title = title;
    if (content) data.content = content;
    if (image) data.image = image;

    if (Object.keys(data).length === 0) {
      return res.status(400).json({ message: "No update data provided." });
    }

    const updatedBlog = await Blog.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });

    if (!updatedBlog) {
      return res.status(404).json({ message: "Blog not found." });
    }

    res.status(200).json({
      success: true,
      message: "Blog updated successfully.",
      updatedBlog,
    });
  } catch (error) {
    console.error("Error updating blog:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};

export { getAllDataForAdmin, createBlog, deleteBlog, reviewBlog, updateBlog };
