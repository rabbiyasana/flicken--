import NavBar from "../components/NavBar/navbar";
import React from "react";
import Carouseel from "../components/carousel/Carouseel";
import Footer from "../components/Footer/footer";
import AboutUs from "../components/AboutUs/AboutUs";
import Services from "../components/Services/Services";
import Testimonial from "../components/Testimonials/Testimonial";
import WorkingProcess from "../components/workingProcess/WorkingProcess";
const Home = () => {
  return (
    <>
      <NavBar />
      <Carouseel />
      <AboutUs />
      <Services />
      <WorkingProcess />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;
