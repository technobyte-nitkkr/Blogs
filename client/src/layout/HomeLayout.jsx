import Footer from "../components/Footer";
import Header from "../components/Header";

export default function HomeLayout({ children }) {
    return (
        <>
            <Header />
            <div className="container">
                {children}
            </div>
            <Footer />
        </>
    )
}