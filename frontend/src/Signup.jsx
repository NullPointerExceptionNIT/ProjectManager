import "./App.css";
import background from "./assets/login-signup.png";
import Header from "./Header";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";
function Signup() {
  const [failed, setfailed] = useState(false);
  const [error_message, seterror_message] = useState();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    skills: "",
    experience: "",
  });
  const { register, user } = useContext(AuthContext);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    register(
      formData.username,
      formData.email,
      formData.password,
      formData.skills,
      formData.experience
    ).catch((result) => {
      console.log("asdasd");
      console.log(result);
      setfailed(true);
      let msg;
      try {
        msg = result.response.data.detail[0].msg;
      } catch (error) {
        error.console(error)
        msg = "Unknown error";
      }
      seterror_message(msg);
    });
  };
  if (user != null) navigate("/");
  return (
    <div style={{ backgroundImage: `url(${background})` }} className="min-h-screen max-h">
      <Header />
      <div className="hero hero-content flex-col lg:flex-row-reverse">
        <div className="bg-white rounded-lg p-10 shadow-2xl w-96">
          <h2 className="text-black text-center font-bold mb-8">Sign Up</h2>
          <div role="tablist" className="tabs tabs-lifted">
            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab"
              aria-label="Tab1"
              defaultChecked
            />
            <div
              role="tabpanel"
              className="bg-white tab-content bg-base-100 border-base-300 rounded-box p-6"
            >
              <form className="text-black">
                <label className="input input-bordered flex items-center gap-2 mb-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                  </svg>
                  <input type="text" className="grow" placeholder="Username" />
                </label>

                <label className="input input-bordered flex items-center gap-2 mb-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path
                      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  <input type="text" className="grow" placeholder="Email" />
                </label>

                <div className="mb-4 relative">
                  <label className="input input-bordered flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-4 w-4 opacity-70">
                      <path
                        fillRule="evenodd"
                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                        clipRule="evenodd" />
                    </svg>
                    <input type="password" className="grow" placeholder="Password" />
                  </label>
                  <button
                    id="togglePassword"
                    type="button"
                    className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                  >
                    <svg
                      id="eyeOpen"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    <svg
                      id="eyeClosed"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 hidden"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M17.94 17.94A10.97 10.97 0 0 1 12 20c-7 0-11-8-11-8a10.97 10.97 0 0 1 4.14-5.41m3.77-1.64A11 11 0 0 1 12 4c7 0 11 8 11 8a10.97 10.97 0 0 1-1.66 2.92m-4.14 2.64c-.96.28-2.05.44-3.2.44-3.87 0-7.5-2.24-9.88-6m16.72 2.72L3 3" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab"
              aria-label="Tab2"
            />
            <div
              role="tabpanel"
              className="bg-white tab-content bg-base-100 border-base-300 rounded-box p-6"
              id="page2"
            >
              <form className="text-black" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Skils"
                  className="input input-bordered input-primary w-full max-w-xs mb-5" />

                <input
                  type="text"
                  placeholder="Write your experience here"
                  className="input input-bordered input-primary w-full max-w-xs" />

                <div className="mt-2">
                  <input className="m-1 btn hover:bg-yellow-400" type="radio" name="options" defaultChecked aria-label="Normal User" />
                  <input className="m-1 btn hover:bg-yellow-400" type="radio" name="options" aria-label="Member" />
                  <input className="m-1 btn hover:bg-yellow-400" type="radio" name="options" aria-label="Project Manager" />
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-primary bg-yellow-500 hover:bg-yellow-400">Sign Up</button>
                </div>

              </form>
              {failed && (
                <div role="alert" className="alert alert-error">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 shrink-0 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Error! {error_message}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
