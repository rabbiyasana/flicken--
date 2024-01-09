import Navbar from "../components/navbar";
import SideBar from "../components/SideBarNav";
import React from "react";

const Home = () => {
  const username = localStorage.getItem("username");

  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Navbar />
            </div>
          </div>
          <SideBar />
        </div>
      </div>
    </>
  );
};

export default Home;
