import HomeLayout from "../../layout/HomeLayout";

export default function Landing({ title }) {
    return (
        <HomeLayout>
            <h1 className="text-xl bg-black text-yellow-300 font-mono">
                {title}
            </h1>
        </HomeLayout>
    );
}
