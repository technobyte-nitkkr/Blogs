import HomeLayout from "../../layout/HomeLayout";

export default function SingleBlog({ title }) {
    return (
        <HomeLayout>
            <h1 className="text-xl bg-black text-yellow-300 font-mono">
                This is the page that you guyz need to create! Don't mind the above header and footer
            </h1>
        </HomeLayout>
    );
}
