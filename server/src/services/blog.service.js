import Blog from "../model/blog.js";

// admin
const deleteBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    const deletedBlog = await Blog.findByIdAndDelete(blogId);
    if (!deletedBlog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }
    res.json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting blog:", error);
    res.status(500).json({
      success: false,
      message: "Error deleting Blog",
    });
  }
};

// admin
const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, image } = req.body;

    const data = {};
    if (title !== undefined) data.title = title;
    if (content !== undefined) data.content = content;
    if (image !== undefined) data.image = image;

    const updatedBlog = await Blog.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });

    if (!updatedBlog) {
      return res.status(404).json({ message: "Blog not found!" });
    }

    return res.status(200).json({ message: "Blog Updated Successfully!" });
  } catch (error) {
    console.error("Error updating blog:", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// user
const handleBlogSearch = async (req, res) => {
  const { tags, time, query } = req.query;

  console.log("Search parameters:", { tags, time, query });

  try {
    let requiredBlogs = await Blog.find({});
    console.log("Initial blogs fetched:", requiredBlogs.length);

    if (tags) {
      const taglist = tags.split(",");
      requiredBlogs = requiredBlogs.filter((blog) =>
        taglist.every((tag) => blog.tags.includes(tag))
      );
      console.log("Blogs after filtering by tags:", requiredBlogs.length);
    }

    if (time) {
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

// admin
const reviewBlog = async (req, res) => {
  const blogId = req.params.id;
  const { reviewStatus, reviewMessage } = req.body;

  try {
    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    //   const user = req.user;
    //   if (!user) {
    //     return res.status(404).json({ message: 'User not found' });
    //   }

    //   if (user.role != 'admin') {
    //     return res.status(403).json({ message: 'Only admins can review blogs' });
    //   }

    let message = "";

    switch (reviewStatus) {
      case "pending":
        blog.review = "pending";
        blog.reviewMessage = "";
        message = "Blog review pending.";
        break;
      case "approved":
        blog.review = "approved";
        blog.reviewMessage = "";
        //function call for publishing the blog
        message = "Blog approved and published for everyone.";
        break;
      case "update":
        if (!reviewMessage || reviewMessage.trim() === "") {
          return res
            .status(400)
            .json({ message: "Review message is required for update" });
        }
        blog.review = "update";
        blog.reviewMessage = reviewMessage;
        message = `Blog requires updates. Please review the comments: ${blog.reviewMessage}`;
        break;
      default:
        return res.status(400).json({ message: "Invalid review status" });
    }

    await blog.save();

    //for updating the blog
    const updatedBlog = await Blog.findByIdAndUpdate(
      blogId,
      {
        review: blog.review,
        isPublished: blog.isPublished,
        reviewMessage: blog.reviewMessage,
      },
      { new: true }
    );

    res.json({ message, updatedBlog });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

export { handleBlogSearch, updateBlog, reviewBlog, deleteBlog };
