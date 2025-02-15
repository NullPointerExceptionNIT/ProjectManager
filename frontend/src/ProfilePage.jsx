import user from "./assets/user.png";
import { API } from "./api";
import { useQuery } from "react-query";
import { AuthContext } from "./contexts/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
    const { token } = useContext(AuthContext);
  const navigate = useNavigate();
  const retrieveProjects = async () => {
    try {
      const response = await API.get("/projects/", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      if (error.response.status == 401) navigate("/");
      throw error;
    }
  };
  const {
    data: all_project,
    error,
    isLoading,
  } = useQuery("postsData", retrieveProjects);

  if (isLoading)
    return (
      <div className="h-screen bg-red-200 flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );

  if (error)
    return (
      <div className="h-screen bg-red-200 flex items-center justify-center">
        <p>error!</p>
      </div>
    );
  return (
    <div>
      <div className="bg-white min-h-screen">
        <main className="p-6">
          <div className="flex justify-left mb-8">
            <div className="relative">
              <img
                src={user}
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg bg-white"
              />
              <label
                htmlFor="avatarUpload"
                className="absolute bottom-0 right-0 bg-red-400 text-white p-2 rounded-full cursor-pointer hover:bg-red-500"
              >
                <input
                  type="file"
                  id="avatarUpload"
                  className="hidden"
                  accept="image/*"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>
          </div>

          <form id="profileForm" className="space-y-6 text-black">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="form-group">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="bg-white mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                  
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-white mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                  
                />
              </div>
              <div className="form-group relative">
                <label
                  htmlFor="oldPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Old Password
                </label>
                <input
                  type="password"
                  id="oldPassword"
                  className="bg-white mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                  
                />
                <button
                  id="toggleOldPassword"
                  type="button"
                  className="absolute inset-y-0 top-6 right-3 flex items-center text-gray-500"
                >
                  <svg
                    id="eyeOpenOld"
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
                    id="eyeClosedOld"
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

              <div className="form-group relative">
                <label
                  htmlFor="newPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  New Password
                </label>
                <input
                  type="password"
                  id="newPassword"
                  className="bg-white mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                  
                />
                <button
                  id="toggleNewPassword"
                  type="button"
                  className="absolute inset-y-0 top-6 right-3 flex items-center text-gray-500"
                >
                  <svg
                    id="eyeOpenNew"
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
                    id="eyeClosedNew"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 hidden"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M17.94 17.94A10.97 10.97 0 0 1 12 20c-7 0-11-8-11-8a10.97 10.97 0 0 1 4.14-5.41m3.77-1.64A11 11 0 0 1 12 4c7 0 11 8 11 8a10.97 10.97 0 0 1-1.66 2.92m-4.14 2.64c-.96.28-2                                .05.44-3.2.44-3.87 0-7.5-2.24-9.88-6m16.72 2.72L3 3" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-group">
                <label
                  htmlFor="skills"
                  className="block text-sm font-medium text-gray-700"
                >
                  Skills
                </label>
                <input
                  type="text"
                  id="skills"
                  className="bg-white mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Separate skills with commas"
                  required
                  
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="roles"
                  className="block text-sm font-medium text-gray-700"
                >
                  Various Roles
                </label>
                <input
                  type="text"
                  id="roles"
                  className="bg-white mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                  disabled
                />
              </div>
            </div>
            <div className="form-group">
              <label
                htmlFor="workExperience"
                className="block text-sm font-medium text-gray-700"
              >
                Work Experience
              </label>
              <textarea
                id="experience"
                className="bg-white mb-4 resize-none w-full p-2 border border-gray-300 rounded"
                placeholder="Describe your work experience"
                required
                
              ></textarea>
            </div>
          </form>

          <div className="flex justify-between mt-6">
            <a
              href="/Projects"
              className="bg-blue-400 text-black px-4 py-2 rounded hover:bg-blue-300"
            >
              Back
            </a>
            <button
              id="changeButton"
              className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300"
            >
              Change
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default ProfilePage;
