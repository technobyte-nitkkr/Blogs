import Card from "../../components/Card/Card2";
import HomeNav from "../../components/Home/HomeNav";
import Navbar from "../../components/Navbar";
import HomeLayout from "../../layout/HomeLayout";

export default function Landing({ title }) {
    return (
        <HomeLayout>
            <div className="flex flex-col justify-center items-center h-full w-full overflow-hidden bg-black">
            <Card />
                <div className="w-[92%] h-[70%] bg-grid-pattern bg-[length:139px_152px] bg-[#0B0D18]">
                    <div className="flex max-w-full">
                        <div className=" max-h-full py-32 px-20">
                            <h1 className="text-6xl font-extralight text-white text-wrap m-8">Innovate, Learn, Connect</h1>
                            <p className="max-w-full text-xl text-white font-normal text-wrap mx-8">Explore the latest tech trends, gain insights from industry experts, and engage with fellow tech enthusiasts. From AI breakthroughs to coding tips, our blog is your go-to resource for all things.</p>
                            <div className=" flex justify-start items-center w-full">
                                <button
                                    className="bg-blue-500 text-white max-w-full w-28 h-10 rounded-3xl m-8 hover:bg-[#65558F] ease-out">Sign Up</button>
                                <button
                                    className="bg-[#A3C8F0] text-black max-w-full w-28 h-10 rounded-3xl">Write</button>
                            </div>
                        </div>
                        <div
                            className="flex items-end w-[900px] max-h-full mt-28">
                            <img src="/Saly-11.png"
                                className="h-full " />
                        </div>
                    </div>
                    <HomeNav />
                </div>
                <div className="w-[92%] h-[70%] bg-grid-pattern bg-[length:139px_152px] bg-[#0B0D18]">
                    <div className="flex max-w-full">
                        <div className=" max-h-full py-32 pl-20">
                            <h1 className="text-6xl font-extralight text-white text-wrap m-8">Write for Us</h1>
                            <p className="max-w-full text-xl text-white font-normal text-wrap mx-8">Have a unique tech insight or a breakthrough project you'd like to share? Join our community of writers and make your mark on the tech world. Your expertise and experiences can inspire and educate fellow students and tech enthusiasts. Start writing today and contribute to our growing collection of technical blogs.</p>
                            <button
                                className="bg-blue-500 text-white max-w-full w-28 h-10 rounded-3xl m-8 hover:bg-[#65558F] ease-out">Write</button>
                        </div>
                        <img src="/Saly-38.png"
                            className="mt-28" />
                    </div>
                </div>
            </div>
        </HomeLayout>
    );
}
