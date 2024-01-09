import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Services from "../pages/Services";
import About from "../pages/About";

export default function () {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/About" element={<About />}></Route>
        <Route exact path="/Services" element={<Services />}></Route>
      </Routes>
    </>
  );
}
