import { adminMiddleware } from "../middleware/admin.middleware.js";
import { userMiddleware } from "../middleware/user.middleware.js";
import newsRoutes from "./newsletter.js";
import commentroute from "./blog.js";
import blogRoutes from "./blog.js";
import postAdmin from "./post-admin.js";
import { reviewBlog } from "../controllers/blog-review.js";
import updateBlog from "../controllers/blog-update.js";

function routes(app) {
  app.get("/", (req, res) => {
    console.log("GET /");
    res.send("Hello from server");
  });

  app.use("/newsletter", (req, res, next) => {
    console.log("USE /newsletter");
    next();
  }, newsRoutes);

  app.use("blogs/comment", userMiddleware, (req, res, next) => {
    console.log("USE blogs/comment");
    next();
  }, commentroute);

  app.post("/admin", adminMiddleware, (req, res, next) => {
    console.log("POST /admin");
    next();
  }, postAdmin);

  app.use("/admin/blog/review/:id", (req, res, next) => {
    console.log(`USE /admin/blog/review/${req.params.id}`);
    next();
  }, reviewBlog);

  app.use("/blog/search", (req, res, next) => {
    console.log("USE /blog/search");
    next();
  }, blogRoutes);

  app.patch("/blog/update/:id", (req, res, next) => {
    console.log(`PATCH /blog/update/${req.params.id}`);
    next();
  }, updateBlog);
}

export default routes;
