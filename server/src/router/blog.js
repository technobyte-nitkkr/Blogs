import express from "express";
import { reviewBlog } from "../controllers/blog-review.js";
import { adminMiddleware } from "../middleware/admin.middleware.js";
import deleteBlog from "../controllers/blog-delete.js";
import CreateComment from "../controllers/comment.js";
import handleSearchBlogs from "../controllers/search-blog.js";

const router = express.Router();

router.post("/admin/blog/review/:id", (req, res, next) => {
  console.log(`Reviewing blog with ID: ${req.params.id}`);
  next();
}, reviewBlog);

router.delete("/admin/blog/delete/:id", adminMiddleware, (req, res, next) => {
  console.log(`Deleting blog with ID: ${req.params.id}`);
  next();
}, deleteBlog);

router.post("/:id", (req, res, next) => {
  console.log(`Creating comment for blog with ID: ${req.params.id}`);
  next();
}, CreateComment);

router.get('/', (req, res, next) => {
  console.log('Searching blogs');
  next();
}, handleSearchBlogs);

router.post("/create", async (req, res) => {
  try {
    const { title, content, image, description } = req.body;

    console.log('Creating a new blog post with the following data:', { title, content, image, description });

    if (!title || !content) {
      console.log('Title or content missing');
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

    console.log('Blog post created successfully:', newBlog);

    res.status(201).json({
      message: "Blog post created successfully",
      blog: newBlog,
    });
  } catch (error) {
    console.error("Error creating blog post:", error);
    res.status(500).json({ message: "Error creating blog post" });
  }
});

export default router;
