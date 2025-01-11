import Header from "./Header";
import "./App.css";
import { API } from "./api";
import { useQuery } from "react-query";
import { AuthContext } from "./contexts/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function ProjectPage() {
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

  if (all_project) {
    if (all_project.length === 0) {
      return (
        <div className="h-screen bg-red-200 flex items-center justify-center">
          <p>No projects available</p>
        </div>
      );
    }
    const projectElements = all_project.map((project) => (
      <div key={project.id} className="bg-white p-4 rounded shadow">
        <p>
          <strong>Name:</strong> {project.name}
        </p>
        <p>
          <strong>Description:</strong> {project.description}
        </p>
        <p>
          <strong>End Time:</strong> {project.endTime}
        </p>
        <button className="bg-yellow-300 text-black px-4 py-2 rounded mt-2">
          View
        </button>
        <button className="bg-blue-300 text-black px-4 py-2 rounded mt-2">
          Edit
        </button>
        <button className="bg-red-300 text-black px-4 py-2 rounded mt-2">
          Delete
        </button>
      </div>
    ));
    return (
      <div className="h-screen bg-red-200">
        <Header />
        <main className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          {projectElements}
        </main>
      </div>
    );
  }
}

export default ProjectPage;
