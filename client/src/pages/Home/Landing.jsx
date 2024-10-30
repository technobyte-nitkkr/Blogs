import Card from "../../components/Home/Card/CardLatest";
import HomeNav from "../../components/Home/HomeNav/HomeNav";
import HomeLayout from "../../layout/HomeLayout";
import PostCard from "../../components/Home/Card/PostCard";
import HeroSection from "../../components/Home/HeroSection/HeroSection";
// import LatestCard from "./LatestCard";
import WriteForUs from "../../components/Home/WriteForUs/WriteForUs";
export default function Landing({ title }) {
    return (
        <HomeLayout>
            <div className="flex flex-col justify-center items-center h-full w-full overflow-hidden bg-black">
                <div className="w-[95%]">
                    <div className="border-b-2" style={{
      borderImageSource: 'linear-gradient(141.07deg, #D51B10 3.32%, #00336C 95.71%)',
      borderImageSlice: 1,
    }}>
                    <HeroSection/>
                    </div>
                    <div className="border-b-2 my-8" style={{
      borderImageSource: 'linear-gradient(141.07deg, #D51B10 3.32%, #00336C 95.71%)',
      borderImageSlice: 1,

    }}>
                    <HomeNav />
                    </div>
                    <div>
                        <PostCard logo={"/Profilelogo.png"} image={"/CardImg.png"} author={"Matthew"} category="Free Factor" title={"How Did a Generation Become So Stupid "} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ratione nesciunt sunt quaerat vero. At nihil ad repellendus quidem voluptas."} date={"Jun 8"} likes={"10.5K"} comments={241} />
                        <PostCard logo={"/Profilelogo.png"} image={"/CardImg.png"} author={"Matthew"} category="Free Factor" title={"How Did a Generation Become So Stupid "} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ratione nesciunt sunt quaerat vero. At nihil ad repellendus quidem voluptas."} date={"Jun 8"} likes={"10.5K"} comments={241} />
                        <PostCard logo={"/Profilelogo.png"} image={"/CardImg.png"} author={"Matthew"} category="Free Factor" title={"How Did a Generation Become So Stupid "} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ratione nesciunt sunt quaerat vero. At nihil ad repellendus quidem voluptas."} date={"Jun 8"} likes={"10.5K"} comments={241} />
                    </div>
                    <h1 className="text-white text-3xl mb-2 text-left">Latest</h1>
                    <div className="bg-[#0B0D18] w-full h-full flex flex-wrap items-center justify-evenly py-10  gap-y-6 border-t-2 border-red-600 p-4 rounded-md">
                        <Card logo={"/Profilelogo.png"} author={"Matthew"} category="Free Factor" title={"How Did a Generation Become So Stupid? "} date={"Jun 8"} likes={"10.5K"} comments={241} />
                        <Card logo={"/Profilelogo.png"} author={"Matthew"} category="Free Factor" title={"How Did a Generation Become So Stupid? "} date={"Jun 8"} likes={"10.5K"} comments={241} />
                        <Card logo={"/Profilelogo.png"} author={"Matthew"} category="Free Factor" title={"How Did a Generation Become So Stupid? "} date={"Jun 8"} likes={"10.5K"} comments={241} />
                        <Card logo={"/Profilelogo.png"} author={"Matthew"} category="Free Factor" title={"How Did a Generation Become So Stupid? "} date={"Jun 8"} likes={"10.5K"} comments={241} />
                        <Card logo={"/Profilelogo.png"} author={"Matthew"} category="Free Factor" title={"How Did a Generation Become So Stupid? "} date={"Jun 8"} likes={"10.5K"} comments={241} />
                        <Card logo={"/Profilelogo.png"} author={"Matthew"} category="Free Factor" title={"How Did a Generation Become So Stupid? "} date={"Jun 8"} likes={"10.5K"} comments={241} />
                    </div>
                    <WriteForUs/>
                   
                </div>
            </div>
        </HomeLayout>
    );
}