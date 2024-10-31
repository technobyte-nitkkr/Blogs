import React from "react";

function Card({ logo, title, description, date, likes, comments, author, category}) {
    return (
        <div className="bg-custom-gradient-card h-[420px] md:w-[370px] w-[340px] py-6 border-r-[6px] border-b-8 
    hover:border-r-[9px] hover:border-b-[19px] transition-all duration-300 ease-in rounded-3xl"
    style={{
        borderImageSource: 'linear-gradient(141.07deg, #D51B10 3.32%, #00336C 95.71%)',
        borderImageSlice: 1,

      }}>
            <div className="h-[346px] w-full">
                <img src="CardImg.png" className="w-full h-[196px]" />
                <div className="h-[126px] w-full px-6 flex ">
                    <div className="p-4 w-[324px]">
                        <div className="flex items-center text-sm text-gray-400 mb-1 space-x-2">
                            <img src={logo} className="rounded-full h-8 w-8" alt="logo" />
                            <span className="font-semibold text-white">{author}</span>
                            <span className="mx-1 text-[#FFB5B5]">in</span>
                            <span className="font-semibold text-white">{category}</span>
                        </div>

                        {/* Title */}
                        <h3 className="w-full text-lg font-bold text-white my-4 leading-tight">
                            {title}
                        </h3>

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
        </div>
    )
}

export default Card;