import Blog from "../model/blog.js";

async function handleBlogSearch(req, res) {
    const { tags, time, query } = req.query;

    console.log("Search parameters:", { tags, time, query });

    try {
        let requiredBlogs = await Blog.find({});
        console.log("Initial blogs fetched:", requiredBlogs.length);

        if (tags) {
            const taglist = tags.split(",");
            requiredBlogs = requiredBlogs.filter(blog =>
                taglist.every(tag => blog.tags.includes(tag))
            );
            console.log("Blogs after filtering by tags:", requiredBlogs.length);
        }

        if (time) {
            requiredBlogs = requiredBlogs.filter(blog =>
                blog.date === time
            );
            console.log("Blogs after filtering by time:", requiredBlogs.length);
        }

        if (query) {
            requiredBlogs = requiredBlogs.filter(blog =>
                blog.content.toLowerCase().includes(query.toLowerCase()) ||
                blog.title.toLowerCase().includes(query.toLowerCase())
            );
            console.log("Blogs after filtering by query:", requiredBlogs.length);
        }

        res.json(requiredBlogs);
    } catch (error) {
        console.error("Error during blog search:", error);
        res.status(500).json({ message: "Failed to search blogs based on given params", error });
    }
}

export default handleBlogSearch;