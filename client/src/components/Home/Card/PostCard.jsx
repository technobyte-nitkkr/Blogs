import React from "react";

const PostCard = ({ logo, image, title, description, date, likes, comments, author, category }) => {
  return (
    <div className="bg-custom-gradient-card h-full p-4 w-full max-w-[850px] rounded-2xl shadow-lg overflow-hidden mb-6 transition-transform duration-300 hover:scale-105 border-4 mx-auto " 
    style={{
      borderImageSource: 'linear-gradient(141.07deg, #D51B10 3.32%, #00336C 95.71%)',
      borderImageSlice: 1,

    }}>
      <div className="flex flex-col md:flex-row">
        {/* Image Section */}
        <img
          src={image}
          alt={title}
          className="h-[196px] w-full md:w-[370px] p-2 object-cover rounded-t-2xl md:rounded-l-2xl"
        />
        
        {/* Content Section */}
        <div className="p-4 w-full md:w-2/3">
          <div className="flex items-center text-sm text-gray-400 mb-1 space-x-2">
            <img src={logo} className="rounded-full h-8 w-8" alt="logo" />
            <span className="font-semibold text-white">{author}</span>
            <span className="mx-1 text-[#FFB5B5]">in</span>
            <span className="font-semibold text-white">{category}</span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-white mb-2 leading-tight">
            {title}
          </h3>

          {/* Description */}
          <div className="text-white text-sm mb-4 line-clamp-3">
            {description}
          </div>

          {/* Footer (Date, Likes, Comments) */}
          <div className="flex items-center text-gray-400 text-sm space-x-4">
            <div className="text-[#FFB5B5]">{date}</div>
            <div className="text-[#FFB5B5] flex items-center space-x-2">
              <img src="like.png" className="h-4" alt="likes" />
              <p>{likes}</p>
            </div>
            <div className="text-[#FFB5B5] flex items-center space-x-2">
              <img src="comments.png" className="h-4" alt="comments" />
              <p>{comments}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
