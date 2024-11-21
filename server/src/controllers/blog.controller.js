import express from "express";
import CreateComment from "../services/comment.service.js";
import { handleBlogSearch } from "../services/blog.service.js";
const router = express.Router();

router.post(
  "/comment/:id",
  (req, res, next) => {
    console.log(`Creating comment for blog with ID: ${req.params.id}`);
    next();
  },
  CreateComment
);

router.get(
  "/search",
  (req, res, next) => {
    console.log("Searching blogs");
    next();
  },
  handleBlogSearch
);

export default router;
