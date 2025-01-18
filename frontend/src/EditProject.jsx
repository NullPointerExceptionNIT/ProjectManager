import { useMutation,useQuery, useQueryClient } from "react-query";
import { AuthContext } from "./contexts/AuthContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { format } from "date-fns";

function EditProject() {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (e) => {
    // Format the date to "yyyy-MM-dd"
    const formattedDate = format(new Date(e.target.value), "yyyy-MM-dd");
    setSelectedDate(formattedDate);
  };
    const {id} = useParams();
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { requestWithToken } = useContext(AuthContext);
  const retrieveProjects = async () => {
    const { data } = await requestWithToken({
      url: `/projects/project/${id}`,
      method: "get",
    });
    return data;
  };
  const {
    data: project,
    error,
    isLoading,
  } = useQuery(`project${id}`, retrieveProjects);
  
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    endTime: new Date(),
  });
  const a = useEffect(()=>{setFormData({...formData,endTime:selectedDate})},[selectedDate])
  const handleChange = (e) => {

    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData)
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const updateProject = (id) => {
    useupdatePost.mutate(id);
  };
  const useupdatePost = useMutation({
    onSuccess: async () => {
      queryClient.invalidateQueries(`project${id}`);
      navigate("/Projects");
    },
    mutationFn: async (id) => {
      const response = await requestWithToken({
        url: "/projects/update-project/" + id,
        method: "put",
        data: formData,
      });
      return response;
    },
  });
  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>error!</p>
      </div>
    );
    if (project) {
      
  return (
    <div className="bg-white h-screen flex flex-col">
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
                  Edit project name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  // value={project.name}
                  className="bg-white mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="end-date"
                  className="block text-sm font-medium text-gray-700"
                >
                  Edit end time
                </label>
                <input
                  type="date"
                  id="end-date"
                  name="endTime"
                  value={selectedDate}
                  className="bg-white mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                  onChange={(e)=>{handleDateChange(e);handleChange(e);}}
                />
              </div>
            </div>
            <div className="form-group">
              <label
                htmlFor="task-description"
                className="block text-sm font-medium text-gray-700"
              >
                Edit project description
              </label>
              <textarea
                id="task-description"
                name="description"
                // value={project.description}
                placeholder="Enter task description"
                className="resize-none bg-white mt-1 block w-full px-3 py-8 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                onChange={handleChange}
              ></textarea>
            </div>
          </form>
        </div>
      </div>
      <div className="flex justify-between items-end p-4">
        <a
          href="/Projects"
          className="bg-blue-400 text-black px-4 py-2 rounded hover:bg-blue-300"
        >
          Back
        </a>
        <button
          id="changeButton"
          className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300"
          onClick={()=>{updateProject(project.id)}}
        >
          Edit
        </button>
      </div>
    </div>
  );}
}

export default EditProject;
