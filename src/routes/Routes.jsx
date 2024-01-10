import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import DetailForm from "../pages/DetailForm";
import Career from "../pages/career";
import ContactUs from "../pages/ContactUs";
export default function () {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>

        <Route exact path="/career" element={<Career />}></Route>
        <Route exact path="/contact" element={<ContactUs />}></Route>
        <Route exact path="/detailform" element={<DetailForm />}></Route>
      </Routes>
    </>
  );
}
