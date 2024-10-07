import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Landing from "./pages/Home/Landing";
import SingleBlog from "./pages/Blog/SingleBlog";
import BlogCardList from "./components/Admin/BlogCard/BlogCard";
import AdminLayout from "./layout/AdminLayout";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminHeader from "./components/Admin/Header/AdminHeader";

// Pages
const landingProps = {
  title: "Welcome to the Techno Blogs",
};

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing {...landingProps} />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
        <Route path="/admin" element={<AdminLayout><AdminDashboard /></AdminLayout>} />
        <Route path="/blogs" element={<BlogCardList />} />

        {/* Uncomment additional routes as needed */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/services" element={<Browse />} /> */}
        {/* <Route path="/contact" element={<ContactUs />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}

export default App;