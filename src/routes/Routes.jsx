import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Services from "../pages/Services";
import About from "../pages/About";
import Career from "../pages/career";
import ContactUs from "../pages/ContactUs";
export default function () {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/About" element={<About />}></Route>
        <Route exact path="/Services" element={<Services />}></Route>
        <Route exact path="/career" element={<Career />}></Route>
        <Route exact path="/contact" element={<ContactUs />}></Route>
      </Routes>
    </>
  );
}
