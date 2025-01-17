import Header from "./Header";
import { API } from "./api";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { AuthContext } from "./contexts/AuthContext";
import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from './Header';

function AddProject() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    endTime: new Date(),
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const navigate = useNavigate();
  const { requestWithToken } = useContext(AuthContext);
  const queryClient = useQueryClient();
  const createProject = () => {
    useCreatePost.mutate();
  };
  const useCreatePost = useMutation({
    onSuccess: async () => {
      queryClient.invalidateQueries("projects");
      // navigate("/Projects");
    },
    mutationFn: async () => {
      const response = await requestWithToken({
        url: "/projects/create-project",
        method: "post",
        data: formData,
      });
      return response;
    },
  });

  return (
    <div className="bg-white min-h-screen">
      <div className="items-center text-black">
        <div className="m-3 justify-center mb-8">
          <form
            id="projectForm"
            className="space-y-6 text-black"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-5">
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
                  name="name"
                  onChange={handleChange}
                  className="bg-white mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              <div className="form-group">
                <label
                  htmlFor="end-date"
                  className="block text-sm font-medium text-gray-700"
                >
                  End Date
                </label>
                <input
                  type="date"
                  id="end-date"
                  name="endTime"
                  onChange={handleChange}
                  className="bg-white mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label
                htmlFor="end-date"
                className="block text-sm font-medium text-gray-700"
              >
                Task Description
              </label>
              <textarea
                id="task-description"
                name="description"
                onChange={handleChange}
                placeholder="Enter task description"
                className="resize-none bg-white mt-1 block w-full px-3 py-8 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              ></textarea>
            </div>
            <div className="flex justify-between mt-6">
              <a
                href="Projects"
                className="bg-blue-400 text-black px-4 py-2 rounded hover:bg-blue-300"
              >
                Back
              </a>
              <button
                id="changeButton"
                className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300"
                onClick={createProject}
              >
                Change
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
    return (
        <div className="bg-white min-h-screen flex flex-col">
            <Header />
            <div className="flex-grow items-center text-black">
                <div className="m-3 justify-center mb-8">
                    <form id="projectForm" className="space-y-6 text-black">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-5">
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
                                    htmlFor="start-date"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Start Date
                                </label>
                                <input
                                    type="date"
                                    id="start-date"
                                    className="bg-white mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label
                                    htmlFor="end-date"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    End Date
                                </label>
                                <input
                                    type="date"
                                    id="end-date"
                                    className="bg-white mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label
                                htmlFor="task-description"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Task Description
                            </label>
                            <textarea
                                id="task-description"
                                placeholder="Enter task description"
                                className="resize-none bg-white mt-1 block w-full px-3 py-8 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            ></textarea>
                        </div>
                    </form>
                </div>
            </div>
            <div className="flex justify-between items-end p-4">
                <a
                    href="Projects"
                    className="bg-blue-400 text-black px-4 py-2 rounded hover:bg-blue-300"
                >
                    Back
                </a>
                <button
                    id="changeButton"
                    className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300"
                >
                    Add
                </button>
            </div>
        </div>
    );
}

export default AddProject;
