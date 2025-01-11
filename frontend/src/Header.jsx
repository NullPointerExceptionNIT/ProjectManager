import logo from "./assets/project-manager-logo.png";
import { AuthContext } from "./contexts/AuthContext";
import { useContext } from "react";
const Profile = () => {
  const { user, logout } = useContext(AuthContext);
  if (user == null)
    return (
      <div className="flex space-x-2 mr-5">
        <a href="Login" className="text-red-500 hover:underline">
          Login
        </a>
        <a className="text-red-500">/</a>
        <a href="SignUp" className="text-red-500 hover:underline">
          Sign Up
        </a>
      </div>
    );
  else
    return (
      <div className="flex space-x-2 mr-5">
        <a onClick={logout} className="text-red-500 hover:underline">
          Logout
        </a>
      </div>
    );
};
const Header = () => {
  return (
    <header className="flex justify-between items-center bg-red-50 shadow">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-20 mr-2" />
        <h1 className="tex-center font-bold text-xxl font-playwrite">
          Task Manager
        </h1>
      </div>
      <Profile />
    </header>
  );
};

export default Header;
