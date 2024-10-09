import HomeNav from "../../components/Home/HomeNav";
import HomeLayout from "../../layout/HomeLayout";

export default function Landing({ title }) {
    return (
        <HomeLayout>
            <div className="flex flex-col justify-center items-center h-full w-full overflow-hidden">
                <div className="w-[88%] h-[75%] bg-grid-pattern bg-[length:130px_130px]">
                    <div className="flex">
                        <div className="max-w-full max-h-full py-32 px-20">
                            <h1 className="text-6xl font-extralight text-white text-wrap m-8">Innovate, Learn, Connect</h1>
                            <p className="max-w-full text-xl text-white font-normal text-wrap mx-8">Explore the latest tech trends, gain insights from industry experts, and engage with fellow tech enthusiasts. From AI breakthroughs to coding tips, our blog is your go-to resource for all things.</p>
                            <div className=" flex justify-start items-center w-full">
                                <button
                                    className="bg-blue-500 text-white max-w-full w-28 h-10 rounded-3xl m-8">Sign Up</button>
                                <button
                                    className="bg-blue-500 text-white max-w-full w-28 h-10 rounded-3xl">Write</button>
                            </div>
                        </div>
                        <div
                            className=" w-[800px] max-h-full my-28">
                            <img src="/Saly-11.png"
                            />
                        </div>
                    </div>
                </div>
                {/* Your other content */}
                <HomeNav />
            </div>
        </HomeLayout>
    );
}
