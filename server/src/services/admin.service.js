import Blog from "../model/blog.js";

const getAllDataForAdmin = async (req, res) => {
  try {
    console.log("Fetching published blogs...");
    const published_blogs = await Blog.find({ review: "approved" });
    console.log("Published blogs fetched:", published_blogs);

    console.log("Fetching blogs with review update...");
    const updated_review = await Blog.find({ review: "update" });
    console.log("Blogs with review update fetched:", updated_review);

    console.log("Fetching blogs with pending review...");
    const review = await Blog.find({ review: "pending" });
    console.log("Blogs with pending review fetched:", review);

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

export { getAllDataForAdmin, createBlog };
