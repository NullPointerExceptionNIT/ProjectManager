import logo from "./assets/project-manager-logo.png";
import { AuthContext } from "./contexts/AuthContext";
import { useContext } from "react";

const Profile = () => {
  const { user, logout } = useContext(AuthContext);
  if (user == null)
    return (
      <div className="navbar-start pl-2">
        <div className="dropdown dropdown-hover">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7" />
          </svg>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li><a href="Login">Login</a></li>
            <li><a href="SignUp">Sign up</a></li>
          </ul>
        </div>
      </div>
    );
  else
    return (
      <>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><a>Homepage</a></li>
              <li><a>Portfolio</a></li>
              <li><a>About</a></li>
            </ul>
          </div>
        </div>

      </>
    );
};
const Header = () => {
  return (
    <header>
      <div className="navbar bg-red-100" >
        <Profile />
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl" href="/">Task Manager</a>
        </div>
        <div className="navbar-end">
          <a href="/"><img src={logo} alt="Logo" className="h-20 mr-2" /></a>
        </div>
      </div>
    </header>
  );
};

export default Header;
