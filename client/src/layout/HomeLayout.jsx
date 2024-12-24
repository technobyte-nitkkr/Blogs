import Footer from "../components/Footer";
import Header from "../components/Navbar";

export default function HomeLayout({ children }) {
  return (
    <>
      <Header />
      <div className="container">{children}</div>
      <Footer />
    </>
  );
}
