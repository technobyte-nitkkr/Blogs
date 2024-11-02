import React from 'react';

const WriteForUs = () => {
    return (
        <div className="w-full h-[70%] bg-grid-pattern bg-[length:139px_152px] bg-[#0B0D18]">
            <div className="flex md:max-w-full items-center ">
                <div className="md:max-h-full md:py-32 md:pl-20 pl-10">
                    <h1 className="md:text-6xl text-2xl font-extralight text-white text-wrap md:m-8 m-2">Write for Us</h1>
                    <p className="max-w-full md:text-xl text-sm text-white font-normal text-wrap md:mx-8 m-2">
                        Have a unique tech insight or a breakthrough project you'd like to share? Join our community of writers and make your mark on the tech world. Your expertise and experiences can inspire and educate fellow students and tech enthusiasts. Start writing today and contribute to our growing collection of technical blogs.
                    </p>
                    <button className="bg-blue-500 text-white md:max-w-full md:w-28 w-16 h-10 rounded-3xl m-8 hover:bg-[#65558F] ease-out">
                        Write
                    </button>
                </div>
                <img src="/Saly-38.png" alt="Write for Us" className="hidden md:block" />
                <img src="/Saly-38.png" alt="Write for Us" className=" block h-[250px] w-[200px]  md:hidden" />
            </div>
        </div>
    );
};

export default WriteForUs;
