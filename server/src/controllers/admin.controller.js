import express from "express";
import {
  createBlog,
  getAllDataForAdmin,
  updateBlog,
} from "../services/admin.service.js";
import { deleteBlog, reviewBlog } from "../services/admin.service.js";
const router = express.Router();

router.get(
  "/",
  (req, res, next) => {
    console.log("GET /admin");
    next();
  },
  getAllDataForAdmin
);

router.patch(
  "/blog/review/:id",
  (req, res, next) => {
    console.log(`USE /admin/blog/review/${req.params.id}`);
    next();
  },
  reviewBlog
);

// TODO: test
router.post(
  "/blog/create",
  (req, res, next) => {
    console.log("POST /admin/blog/create");
    next();
  },
  createBlog
);

router.delete(
  "/blog/delete/:id",
  (req, res, next) => {
    const { id } = req.params;
    console.log(`DELETE /blog/delete/${id}`);
    next();
  },
  deleteBlog
);

// TODO: test
router.patch(
  "/blog/update/:id",
  (req, res, next) => {
    const { id } = req.params;
    console.log(`PATCH /blog/update/${id}`);
    next();
  },
  updateBlog
);

export default router;
