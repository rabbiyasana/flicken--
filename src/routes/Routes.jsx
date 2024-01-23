import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import DetailForm from "../pages/DetailForm";
import Career from "../pages/career";
import ContactUs from "../pages/ContactUs";
import Blogs from "../pages/blogs";
import BlogPost from "../components/blogpost/blogPost";
const blogsData = [
  { id: 1, title: "Blog Post 1", description: "Description for Blog Post 1" },
  { id: 2, title: "Blog Post 2", description: "Description for Blog Post 2" },
  { id: 3, title: "Blog Post 3", description: "Description for Blog Post 3" },
];
const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/detailform" element={<DetailForm />} />
        <Route path="/blogs" element={<Blogs blogsData={blogsData} />} />
        {blogsData.map((blog) => (
          <Route
            key={blog.id}
            path={`blog/${blog.id}`}
            element={
              <BlogPost title={blog.title} description={blog.description} />
            }
          />
        ))}
      </Routes>
    </>
  );
};
export { AllRoutes };
