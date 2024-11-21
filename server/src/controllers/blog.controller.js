import express from "express";
import createComment from "../services/comment.service.js";
import { handleBlogSearch, returnBlogById } from "../services/blog.service.js";
const router = express.Router();

router.post(
  "/comment/:id",
  (req, res, next) => {
    console.log(`Creating comment for blog with ID: ${req.params.id}`);
    next();
  },
  createComment
);

router.get("/:id",(req,res,next) => {
  console.log(`GET /blog/${id}`);
  next();
}, returnBlogById)

router.get(
  "/search",
  (req, res, next) => {
    console.log("Searching blogs");
    next();
  },
  handleBlogSearch
);

export default router;
