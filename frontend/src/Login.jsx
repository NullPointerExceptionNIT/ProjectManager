import { useState, useContext, useEffect } from "react";
import { AuthContext } from "./contexts/AuthContext";
import "./App.css";
import bg from "./assets/login-signup.png";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [failed, setfailed] = useState(false);

  const { login, user } = useContext(AuthContext);

  useEffect(() => {
    if (user != null) {
      navigate("/Projects");
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isSuccess = login(formData.username, formData.password);
    console.log(isSuccess);
    isSuccess.catch(()=>{setfailed(true);})
    
  };

  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className=" min-h-screen max"
    >
      {failed && (
        <div className="toast">
          <div className="alert alert-info bg-purple-300">
            <span>Failed To login!</span>
          </div>
          <div className="alert alert-error">
            <span>Incorrect username or password!</span>
          </div>
        </div>
      )}
      <Header />
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control">
                <h1 className="pb-10 text-center font-bold">Login</h1>
                <label className="input input-bordered flex items-center gap-2 mb-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                  </svg>
                  <input
                    type="text"
                    className="grow"
                    placeholder="Username"
                    name="username"
                    onChange={handleChange}
                  />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input
                    type="password"
                    className="grow"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                  />
                </label>
                <label className="label mt-10">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                  <button className="btn btn-primary bg-yellow-500 hover:bg-yellow-400">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
