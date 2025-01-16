import Header from "./Header";
import "./App.css";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { AuthContext } from "./contexts/AuthContext";
import { useContext } from "react";

function ProjectContent() {
  const { requestWithToken } = useContext(AuthContext);
  const queryClient = useQueryClient();
  const retrieveProjects = async () => {
    const { data } = await requestWithToken({
      url: "/projects/",
      method: "get",
    });
    return data;
  };
  const deleteProject = (id) => {
    useDeleteProject.mutate(id);
  };
  const useDeleteProject = useMutation({
    onSuccess: async () => {
      queryClient.invalidateQueries("projects");
    },
    mutationFn: async (id) => {
      const response = await requestWithToken({
        url: "/projects/delete-projrct/" + id,
        method: "delete",
      });
      return response;
    },
  });
  const {
    data: all_project,
    error,
    isLoading,
  } = useQuery("projects", retrieveProjects);

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

  if (all_project) {
    if (all_project.length === 0) {
      return (
        <div className="min-h-screen flex items-center justify-center">
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
              <button
                className="btn btn-error"
                onClick={() => deleteProject(project.id)}
              >
                Delete
                {deleteProject.isLoading && (
                  <span className="loading loading-spinner loading-lg"></span>
                )}
              </button>
            </div>
          </div>
        </div>
      </>
    ));
    return (
      <div className="max min-h-screen bg-red-200">
        <main className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center text-center">
          {projectElements}
        </main>
      </div>
    );
  }
}

const ProjectPage = () => {
  return (
    <div className="min-h-screen h-fit w-screen">
      <ProjectContent />
    </div>
  );
};

export default ProjectPage;
