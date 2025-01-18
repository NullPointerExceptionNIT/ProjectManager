import "./App.css";
import { useMutation, useQueryClient } from "react-query";
import { AuthContext } from "./contexts/AuthContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

function AddTasks() {
  const navigate = useNavigate();
  const { requestWithToken } = useContext(AuthContext);
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({
    username: "",
    title:"",
    description:"",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const createtask = () => {
    useCreatePost.mutate();
  };
  const useCreatePost = useMutation({
    onSuccess: async () => {
      queryClient.invalidateQueries("Tasks");
      navigate("/Tasks");
    },
    mutationFn: async () => {
      const response = await requestWithToken({
        url: "/projects/create-task????????",
        method: "post",
        data: formData,
      });
      return response;
    },
  });
//   const retrieveProjects = async () => {
//     const { data } = await requestWithToken({
//       url: "/users/alluser",
//       method: "get",
//     });
//     return data;
//   };
//   const {
//     data: all_user,
//     error,
//     isLoading,
//   } = useQuery("AddTasks", retrieveProjects);
//   if (isLoading)
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <p>Loading...</p>
//         <span className="loading loading-spinner loading-lg"></span>
//       </div>
//     );

//   if (error)
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <p>error!</p>
//       </div>
//     );
//     if (all_user) {
//         if (all_user.length === 0) {
//             return (
//               <div className="min-h-screen flex items-center justify-center">
//                 <p>No user available</p>
//               </div>
//             );}
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <div className="flex-grow items-center text-black">
        <div className="m-3 justify-center mb-8">
          <form
            id="projectForm"
            className="space-y-6 text-black"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5">
              <div className="form-group">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Task Title
                </label>
                <input
                  type="text"
                  id="name"
                  name="title"
                  className="bg-white mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="person-name"
                  className="block text-sm font-medium text-gray-700"
                  onChange={handleChange}
                >
                  Person Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="username"
                  className="bg-white mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                  onChange={handleChange}
                />
                {/* <select
                  className="select select-bordered w-full max-w-l "
                  onChange={handleChange}
                >
                  <option disabled selected>
                    user
                  </option>
                  {/* <option>Han Solo</option>  اسم ها  */}
                  {/* <option>Greedo</option> */}
                {/* </select> */}
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
                name="description"
                onChange={handleChange}
              ></textarea>
            </div>
          </form>
        </div>
      </div>
      <div className="flex justify-between items-end p-4">
        <a
          href="Tasks"
          className="bg-blue-400 text-black px-4 py-2 rounded hover:bg-blue-300"
        >
          Back
        </a>
        <button
          id="changeButton"
          className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300"
          onClick={createtask}
        >
          Add
        </button>
      </div>
    </div>
  );
// }
}

export default AddTasks;
