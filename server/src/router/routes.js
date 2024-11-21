import { adminMiddleware } from "../middleware/admin.middleware.js";
import { userMiddleware } from "../middleware/user.middleware.js";
import newsRoutes from "../controllers/newsletter.controller.js";
import blogsRoutes from "../controllers/blog.controller.js";
import adminRoutes from "../controllers/admin.controller.js";

function routes(app) {
  app.get("/health", (req, res) => {
    console.log("GET /");
    res.send("Server is up and running");
  });
  app.use("/newsletter", adminMiddleware, newsRoutes);
  app.use("/blog", userMiddleware, blogsRoutes);
  app.use("/admin", adminMiddleware, adminRoutes);
}

export default routes;
