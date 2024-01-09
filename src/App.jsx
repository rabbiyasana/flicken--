import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/home";
import Navbar from "./components/navbar";
// import Login from "./pages/Signup";
function App() {
  return (
    <>
      <Navbar />
    </>
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<SignUp />} />
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/home" element={<Home />} />
    //   </Routes>
    // </Router>
  );
}

export default App;
