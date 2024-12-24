import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default:
      "https://revenuearchitects.com/wp-content/uploads/2017/02/Blog_pic-1030x584.png",
  },
  review: {
    type: String,
    enum: ["pending", "approved", "update"],
    default: "pending",
  },
  reviewMessage: {
    type: String,
  },
  tags: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tag",
    },
  ],
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
  description: {
    type: String,
    required: true,
  },
});
const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
