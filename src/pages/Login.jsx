import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = () => {
    // Basic validation, you can replace this with your actual authentication logic
    if (username && password) {
      // Store user info in local storage
      let reg_name = localStorage.getItem("username");
      let reg_pw = localStorage.getItem("password");

      if (username == reg_name && password == reg_pw) {
        navigate("/home");
      }
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
            <h2>logIn</h2>
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
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                className="form-control btn btn-primary mt-3"
                onClick={handleLogin}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
