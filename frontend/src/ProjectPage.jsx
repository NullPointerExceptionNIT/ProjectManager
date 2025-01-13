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
      <div className="h-screen flex items-center justify-center">
        <p>Loading...</p>
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );

  if (error)
    return (
      <div className="h-screen flex items-center justify-center">
        <p>error!</p>
      </div>
    );

  if (all_project) {
    if (all_project.length === 0) {
      return (
        <div className="h-screen flex items-center justify-center">
          <p>No projects available</p>
        </div>
      );
    }
    const projectElements = all_project.map((project) => (
      <>
        <div
          key={project.id}
          className="card bg-white   text-neutral-content pl-6 pr-6"
        >
          <div className="card-body items-center text-center text-black">
            <p>
              <strong>Name:</strong> {project.name}
            </p>
            <p>
              <strong>Description:</strong> {project.description}
            </p>
            <p>
              <strong>End Time:</strong> {project.endTime}
            </p>
            <div className="card-actions justify-center">
              <button className="btn btn-success">View</button>
              <button className="btn btn-warning">Edit</button>
              <button className="btn btn-error">Delete</button>
            </div>
          </div>
        </div>
      </>
    ));
    return (
      <div className="h-full bg-red-200">
        <Header />
        <main className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center text-center">
          {projectElements}
        </main>
      </div>
    );
  }
}

export default ProjectPage;
