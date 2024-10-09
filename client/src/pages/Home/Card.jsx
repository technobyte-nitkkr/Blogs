import React from "react";

const PostCard = ({ image, title, description, date, likes, comments, author, category }) => {
  return (
    <div className="bg-[#151829] rounded-lg shadow-lg overflow-hidden mb-6 transition-transform duration-300 hover:scale-105">
      <div className="flex">
        {/* Image Section */}
        <img
          src={image}
          alt={title}
          className="w-1/3 object-cover"
        />
        
        {/* Content Section */}
        <div className="p-4 w-2/3">
          <div className="flex items-center text-sm text-gray-400 mb-1">
            <span className="font-semibold">{author}</span>
            <span className="mx-1">in</span>
            <span className="text-blue-400">{category}</span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-white mb-2 leading-tight">
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-sm mb-4 line-clamp-3">
            {description}
          </p>

          {/* Footer (Date, Likes, Comments) */}
          <div className="flex items-center text-gray-400 text-sm space-x-4">
            <span>{date}</span>
            <span>👍 {likes}</span>
            <span>💬 {comments}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
