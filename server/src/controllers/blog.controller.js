import express from "express";
import createComment from "../services/comment.service.js";
import {
  handleBlogSearch,
  returnBlogById,
  returnAllBlogs,
} from "../services/blog.service.js";
const router = express.Router();

router.post(
  "/comment/:id",
  (req, res, next) => {
    console.log(`Creating comment for blog with ID: ${req.params.id}`);
    next();
  },
  createComment
);

router.get(
  "/search",
  (req, res, next) => {
    console.log("GET /blog/search");
    next();
  },
  handleBlogSearch
);

router.get(
  "/:id",
  (req, res, next) => {
    const { id } = req.params;
    console.log(`GET /blog/${id}`);
    next();
  },
  returnBlogById
);

router.get(
  "/",
  (req, res, next) => {
    console.log("GET /blog");
    next();
  },
  returnAllBlogs
);


export default router;
