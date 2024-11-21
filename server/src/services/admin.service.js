import Blog from "../model/blog.js";

const getAllDataForAdmin = async (req, res) => {
  try {
    const published_blogs = await Blog.find({ review: "approved" });
    const updated_review = await Blog.find({ review: "update" });
    const review = await Blog.find({ review: "pending" });

    return res.status(200).json({
      success: true,
      message: "Admin data fetched successfully",
      published_blogs,
      updated_review,
      review,
    });
  } catch (err) {
    console.error("Error fetching admin data:", err.message);
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const createBlog = async (req, res) => {
  try {
    const { title, content, image, description } = req.body;

    console.log("Creating a new blog post with the following data:", {
      title,
      content,
      image,
      description,
    });

    if (!title || !content) {
      console.log("Title or content missing");
      return res
        .status(400)
        .json({ message: "Title and content are required" });
    }

    const newBlog = new Blog({
      title,
      content,
      image: image || "", // image type to be decided later
      description: description || "", // description = summary of blog
      review: "pending",
      reviewMessage: "",
      tags: [],
      comments: [],
      date: Date.now(),
    });

    await newBlog.save();

    console.log("Blog post created successfully:", newBlog);

    res.status(201).json({
      message: "Blog post created successfully",
      blog: newBlog,
    });
  } catch (error) {
    console.error("Error creating blog post:", error);
    res.status(500).json({ message: "Error creating blog post" });
  }
};

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

export { getAllDataForAdmin, createBlog, deleteBlog, reviewBlog, updateBlog };
