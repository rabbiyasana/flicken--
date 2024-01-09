// Login.js
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSignup = () => {
    // Basic validation, you can replace this with your actual authentication logic
    if (username && password && email) {
      // Store user info in local storage
      localStorage.setItem("username", username);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);

      localStorage.setItem("issignedUp", true);
      navigate("/login");
    } else {
      // Handle invalid login
      alert("Invalid credentials");
    }
  };

  return (
    <div className="container-fluiud ">
      <div className="container mt-5">
        <div className="row text-center">
          <div className="col-sm-12 col-md-12 col-lg-4 mt-3 align-self-center">
            <h2>Signup</h2>
            <form action="">
              <div>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mt-3">
                <input
                  className="form-control"
                  type="email"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mt-3">
                <input
                  className="form-control"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mt-3">
                <small>
                  Already have an account? <Link to="/login">Login</Link>
                </small>
              </div>
              <button
                className="form-control btn btn-primary mt-3"
                onClick={handleSignup}
              >
                signup
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
