import "./App.css";
import { Routes, Route } from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.css";
import Landing from "./pages/Home/Landing";
import SingleBlog from "./pages/Blog/SingleBlog";
import BlogCardList from "./components/Admin/BlogCard/BlogCard";
import AdminLayout from "./layout/AdminLayout";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminHeader from "./components/Admin/Header/AdminHeader";
import Dashboard from "./pages/Dashboard/Dashboard";

// Pages
const landingProps = {
  title: "Welcome to the Techno Blogs",
};

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing {...landingProps} />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/services" element={<Browse />} /> */}
        {/* <Route path="/contact" element={<ContactUs />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
        <Route path="/blog/:id" element={<SingleBlog />} />
        <Route path="/admin" element={<AdminLayout><AdminDashboard /></AdminLayout>} />
        <Route path="/blogs" element={<BlogCardList />} />
        <Route path="/dashboard" element={<Dashboard/>}></Route>
      </Routes>
    </>
  );
}

export default App;