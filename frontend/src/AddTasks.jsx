import "./App.css";
import { useMutation, useQueryClient } from "react-query";
import { AuthContext } from "./contexts/AuthContext";
import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function AddTasks() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { requestWithToken } = useContext(AuthContext);
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({
    name: "",
    endTime: new Date(),
    status :"done",
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
        url: `/projects/project/${id}/create-task`,
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
              {/* <div className="form-group">
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
                />
              </div> */}
              <div className="form-group">
                <label
                  htmlFor="person-name"
                  className="block text-sm font-medium text-gray-700"
                >
                   Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-5 border rounded-l">
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">To do</span>
                  <input type="radio" name="status" onChange={handleChange} value={"ready"} className="radio checked:bg-red-500" defaultChecked />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">In progress</span>
                  <input type="radio" name="status" onChange={handleChange} value={"in_progress"} className="radio checked:bg-blue-500" />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Finished</span>
                  <input type="radio" name="status" onChange={handleChange} value={"done"} className="radio checked:bg-yellow-500" />
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="flex justify-between items-end p-4">
        <a
          href="/Tasks"
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
