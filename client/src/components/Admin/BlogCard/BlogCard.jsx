import React from 'react';
import './BlogCard.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const BlogCard = ({ image, author, title, date, likes, comments }) => {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <div className="author-info">
          <img src="author-profile-url.jpg" alt={author} className="author-profile-pic" />
          <span>{author}</span> in <span className="category">Free Factor</span>
        </div>
        <h2 className="blog-title">{title}</h2>
        <div className="post-meta">
          <span className="post-date">{date}</span>
          <div className="engagement">
            <span className="likes">
              <i className="fas fa-heart"></i> {likes}
            </span>
            <span className="comments">
              <i className="fas fa-comment"></i> {comments}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Rendering multiple cards
const BlogCardList = () => {
  return (
    <div className="blog-card-container">
      <BlogCard
        image="https://via.placeholder.com/300x200"
        author="Matthew"
        title="How Did a Generation Become So Stupid?"
        date="Jun 8"
        likes="10.5K"
        comments="241"
      />
      <BlogCard
        image="https://via.placeholder.com/300x200"
        author="John Doe"
        title="The Rise of Minimalism in Modern Society"
        date="Jul 12"
        likes="8.2K"
        comments="198"
      />
      <BlogCard
        image="https://via.placeholder.com/300x200"
        author="Jane Smith"
        title="Why Remote Work is Here to Stay"
        date="Aug 5"
        likes="12.1K"
        comments="302"
      />
    </div>
  );
};

export default BlogCardList;