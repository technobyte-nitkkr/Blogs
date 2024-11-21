import Blog from "../model/blog.js";

const handleBlogSearch = async (req, res) => {
  const { tags, time, query } = req.query;

  console.log("Search parameters:", { tags, time, query });

  try {
    let requiredBlogs = await Blog.find({});

    if (tags) {
      const taglist = tags.split(",");
      requiredBlogs = requiredBlogs.filter((blog) =>
        taglist.some((tag) => blog.tags.includes(tag))
      );
      console.log("Blogs after filtering by tags:", requiredBlogs.length);
    }

    if (time) {
      // TODO: change the time logic. either less than or equal to
      requiredBlogs = requiredBlogs.filter((blog) => blog.date === time);
      console.log("Blogs after filtering by time:", requiredBlogs.length);
    }

    if (query) {
      requiredBlogs = requiredBlogs.filter(
        (blog) =>
          blog.content.toLowerCase().includes(query.toLowerCase()) ||
          blog.title.toLowerCase().includes(query.toLowerCase())
      );
      console.log("Blogs after filtering by query:", requiredBlogs.length);
    }

    res.json(requiredBlogs);
  } catch (error) {
    console.error("Error during blog search:", error);
    res
      .status(500)
      .json({ message: "Failed to search blogs based on given params", error });
  }
};

const returnBlogById = async (req, res) => {
  const { id } = req.params.id;
  try {
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    return res.status(200).json(blog);
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export { handleBlogSearch, returnBlogById };
