import logo from "./assets/project-manager-logo.png";
import { AuthContext } from "./contexts/AuthContext";
import { useContext } from "react";

const Profile = () => {
  const { user, logout } = useContext(AuthContext);
  if (user == null)
    return (
      <>
        <li>
          <a href="Login">Login</a>
        </li>
        <li>
          <a href="SignUp">Sign up</a>
        </li>
      </>
    );
  else
    return (
      <>
        <li>
          <a onClick={logout}>Logout</a>
        </li>
        <li>
          <a href="Profile">Profile</a>
        </li>
        <li>
          <a href="chatBox">Chat</a>
        </li>
        <li>
          <a href="AddProject">Add Project</a>
        </li>
        <li>
          <a href="Projects">Home</a>
        </li>
      </>
    );
};
const Header = () => {
  return (
    <header>
      <div className="navbar bg-red-100">
        <div className="navbar-start pl-2">
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn m-1 max-h:">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <Profile />
            </ul>
          </div>
        </div>

        <div className="navbar-center">
          <a className="btn btn-ghost text-xl" href="/">
            Task Manager
          </a>
        </div>
        <div className="navbar-end">
          <a href="/">
            <img src={logo} alt="Logo" className="h-20 mr-2" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
