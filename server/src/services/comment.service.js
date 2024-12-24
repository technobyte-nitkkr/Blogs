import Blog from "../model/blog.js";
import Comment from "../model/comment.js";
import User from "../model/user.js";

export async function createComment(req, res) {
  const id = req.params.id;
  if (!req.user) {
    return res
      .status(403)
      .json({ message: "you must be logged in to comment" });
  }
  try {
    const user = User.find({ email: req.user.email });
    const blog = Blog.findById(id);
    if (!blog) return res.status(404).json({ message: "Blog don't exist" });
    Comment.create({
      content: req.body.content,
      blog: blog._id,
      user: user._id,
    });
  } catch (error) {
    res.json({ message: "Comment creation failed", err: error });
  }
  res.json({ message: "Comment created successfully" });
}

export default createComment;
