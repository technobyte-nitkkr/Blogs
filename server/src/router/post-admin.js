import Blog from "../model/blog.js";

export default async function postAdmin(req, res) {
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
}
