import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HomeLayout from "../../layout/HomeLayout";
import "./SingleBlog.css";
import profileImage from "./profile.png";
import likeIcon from "../../assets/like-icon.png";
import commentIcon from "../../assets/comment-icon.png";
import { Link } from "react-router-dom";

export default function SingleBlog({ title }) {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const url = `${import.meta.env.VITE_BACKEND_URL}/blog/${id}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error fetching blog`);
        }
        const data = await response.json();
        setBlog(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <HomeLayout>
        <div className="main-background"></div>
        <div className="blog-content-wrapper">
          <h1 className="blog-title">Loading...</h1>
        </div>
      </HomeLayout>
    );
  }

  if (error) {
    return (
      <HomeLayout>
        <div className="main-background"></div>
        <div className="blog-content-wrapper">
          <h1 className="blog-title">Error while fetching the blog</h1>
        </div>
      </HomeLayout>
    );
  }

  if (!blog) {
    return (
      <HomeLayout>
        <div className="main-background"></div>
        <div className="blog-content-wrapper">
          <h1 className="blog-title">Blog not found!</h1>
        </div>
      </HomeLayout>
    );
  }

  return (
    <HomeLayout>
      {/* Main Background */}
      <div className="main-background"></div>

      <div className="blog-content-wrapper">
        {/* Blog Title and Author Details */}
        <div className="blog-header">
          <h1 className="blog-title">{blog.title}</h1>
          <div className="blog-author-info">
            {/* Profile Image and Name */}
            <div className="author-profile">
              <img className="profile-image" src={profileImage} alt="Author" />

              <div className="author-details">
                <p className="author-name">{blog.author}</p>
                <p className="author-date">
                  {new Date(blog.date).toISOString().split("T")[0]}
                </p>
              </div>
            </div>

            {/* Edit Button */}
            <Link to={`/write/${blog.id}`}>
              <button className="edit-button">Edit</button>
            </Link>
          </div>
          {/* Interaction Section */}
          <div className="interaction-info">
            {/* Horizontal line above */}
            <div className="horizontal-line"></div>

            {/* Likes and Comments */}
            <div className="likes-comments">
              <div className="icon-container">
                <img src={likeIcon} alt="Like" className="interaction-icon" />
                <span>{blog.likes}</span>
              </div>
              <div className="icon-container">
                <img
                  src={commentIcon}
                  alt="Comments"
                  className="interaction-icon"
                />
                <span>{blog.comments.length}</span>
              </div>
            </div>

            {/* Horizontal line below */}
            <div className="horizontal-line"></div>
          </div>
        </div>

        <div className="blog-image-section">
          <p className="blog-paragraph">{blog.description}</p>
        </div>

        {/* TODO: Interaction Section is incomplete, add option to add comments and view comments*/}
        <div className="interaction-info">
          <div className="horizontal-line"></div>

          {/* Likes and Comments */}
          <div className="likes-comments">
            <div className="icon-container">
              <img src={likeIcon} alt="Like" className="interaction-icon" />
              <span>{blog.likes}</span>
            </div>
            <div className="icon-container">
              <img
                src={commentIcon}
                alt="Comments"
                className="interaction-icon"
              />
              <span>{blog.comments.length}</span>
            </div>
          </div>

          <div className="horizontal-line"></div>
        </div>
      </div>
    </HomeLayout>
  );
}
