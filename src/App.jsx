import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import Allroutes from "./routes/Routes";
import Navbar from "./components/navbar";
// import Login from "./pages/Signup";
function App() {
  return (
    <>
      <BrowserRouter>
        <Allroutes />
      </BrowserRouter>
    </>
  );
}

export default App;
