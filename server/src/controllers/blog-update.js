import Blog from '../model/blog.js';

export const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, image } = req.body;

    const data = {};
    if (title !== undefined) data.title = title;
    if (content !== undefined) data.content = content;
    if (image !== undefined) data.image = image;

    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      data,
      { new: true, runValidators: true }
    );

    if (!updatedBlog) {
      return res.status(404).json({ message: "Blog not found!" });
    }

    return res.status(200).json({ message: 'Blog Updated Successfully!' });
  } catch (error) {
    console.error("Error updating blog:", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export default updateBlog;