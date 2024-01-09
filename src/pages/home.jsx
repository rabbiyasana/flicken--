import Navbar from "../components/navbar";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Navbar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
