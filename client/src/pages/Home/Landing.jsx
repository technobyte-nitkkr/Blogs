import Card from "../../components/Home/Card/CardLatest";
import HomeNav from "../../components/Home/HomeNav/HomeNav";
import HomeLayout from "../../layout/HomeLayout";
import PostCard from "../../components/Home/Card/PostCard";
import HeroSection from "../../components/Home/HeroSection/HeroSection";
// import LatestCard from "./LatestCard";
export default function Landing({ title }) {
    return (
        <HomeLayout>
            <div className="flex flex-col justify-center items-center h-full w-full overflow-hidden bg-black">
                <div className="w-[95%]">
                    <HeroSection/>
                    <HomeNav />
                    <div>
                        <PostCard logo={"/Profilelogo.png"} image={"/CardImg.png"} author={"Matthew"} category="Free Factor" title={"How Did a Generation Become So Stupid "} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ratione nesciunt sunt quaerat vero. At nihil ad repellendus quidem voluptas."} date={"Jun 8"} likes={"10.5K"} comments={241} />
                        <PostCard logo={"/Profilelogo.png"} image={"/CardImg.png"} author={"Matthew"} category="Free Factor" title={"How Did a Generation Become So Stupid "} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ratione nesciunt sunt quaerat vero. At nihil ad repellendus quidem voluptas."} date={"Jun 8"} likes={"10.5K"} comments={241} />
                        <PostCard logo={"/Profilelogo.png"} image={"/CardImg.png"} author={"Matthew"} category="Free Factor" title={"How Did a Generation Become So Stupid "} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ratione nesciunt sunt quaerat vero. At nihil ad repellendus quidem voluptas."} date={"Jun 8"} likes={"10.5K"} comments={241} />
                    </div>
                    <h1 className="text-white text-3xl mb-2">Latest</h1>
                    <div className="bg-[#0B0D18] w-full h-full flex flex-wrap items-center justify-evenly py-10  gap-y-6 border-t-2 border-red-600 p-4 rounded-md">
                        <Card logo={"/Profilelogo.png"} author={"Matthew"} category="Free Factor" title={"How Did a Generation Become So Stupid? "} date={"Jun 8"} likes={"10.5K"} comments={241} />
                        <Card logo={"/Profilelogo.png"} author={"Matthew"} category="Free Factor" title={"How Did a Generation Become So Stupid? "} date={"Jun 8"} likes={"10.5K"} comments={241} />
                        <Card logo={"/Profilelogo.png"} author={"Matthew"} category="Free Factor" title={"How Did a Generation Become So Stupid? "} date={"Jun 8"} likes={"10.5K"} comments={241} />
                        <Card logo={"/Profilelogo.png"} author={"Matthew"} category="Free Factor" title={"How Did a Generation Become So Stupid? "} date={"Jun 8"} likes={"10.5K"} comments={241} />
                        <Card logo={"/Profilelogo.png"} author={"Matthew"} category="Free Factor" title={"How Did a Generation Become So Stupid? "} date={"Jun 8"} likes={"10.5K"} comments={241} />
                        <Card logo={"/Profilelogo.png"} author={"Matthew"} category="Free Factor" title={"How Did a Generation Become So Stupid? "} date={"Jun 8"} likes={"10.5K"} comments={241} />
                       
                    </div>
                    <div className="w-full h-[70%] bg-grid-pattern bg-[length:139px_152px] bg-[#0B0D18]">
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
            </div>
        </HomeLayout>
    );
}