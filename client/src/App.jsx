import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Landing from "./pages/Home/Landing";
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
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/services" element={<Browse />} /> */}
        {/* <Route path="/contact" element={<ContactUs />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}

export default App;