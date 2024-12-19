// BlogCard.jsx
import React from "react";
import "./BlogCard.css";

const BlogCard = () => {
  const blogs = [
    {
      id: 1,
      title: "Title",
      content: "Content content Content content Content content content...",
      lastEdited: "last edited 10 days ago",
      imageSrc:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSfeJXWuc3Qla7qsjLMi-NCkYyGjqX7goJNIHdUd4UekEjFWCP3",
    },
    {
      id: 2,
      title: "Title",
      content: "Content content Content content Content content content...",
      lastEdited: "last edited 5 days ago",
      imageSrc:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSfeJXWuc3Qla7qsjLMi-NCkYyGjqX7goJNIHdUd4UekEjFWCP3",
    },
    {
      id: 3,
      title: "Title",
      content: "Content content Content content Content content content...",
      lastEdited: "last edited 1 day ago",
      imageSrc:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSfeJXWuc3Qla7qsjLMi-NCkYyGjqX7goJNIHdUd4UekEjFWCP3",
    },
  ];

  const blogCards = [];

  blogs.forEach((blog) => {
    blogCards.push(
      <div key={blog.id} className="blog-card">
        <div className="blog-content">
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
          <div className="edit-section">
            <span>{blog.lastEdited}</span>
            <button className="edit-btn">Edit</button>
          </div>
        </div>
        <div className="blog-image">
          <img src={blog.imageSrc} alt="Blog Thumbnail" />
        </div>
      </div>
    );
  });

  return <div className="blog-list">{blogCards}</div>;
};

export default BlogCard;
