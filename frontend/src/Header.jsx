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
        <>
            <div className="flex space-x-2 mr-10">
                <a onClick={logout} className="text-red-500 hover:underline">
                Logout
                </a>
            </div>
            <div>
                <header className="flex justify-between items-center bg-red-50 shadow pr-6">
                    <div className="flex items-center">
                        <img src={logo} alt="Logo" className="h-20 mr-2"/>
                        <h1 className="font-bold text-xxl font-playwrite text-gray-700">Task Manager</h1>
                    </div>
                    <div className="relative">
                        <button id="menu-toggle" className="focus:outline-none text-2xl">☰</button>
                        <div id="dropdown" className="hidden absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
                            <img src={user} alt="user img" className="w-16 h-16 rounded-full mx-auto mt-2"/>
                            <div className="py-2 px-4 hover:bg-gray-200 cursor-pointer"><a href="ProfilePage">Profile</a></div>
                            <div className="py-2 px-4 hover:bg-gray-200 cursor-pointer">Add Project</div>
                            <div className="py-2 px-4 hover:bg-gray-200 cursor-pointer">Progress</div>
                        </div>
                    </div>
                </header>
            </div>
        </>
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
