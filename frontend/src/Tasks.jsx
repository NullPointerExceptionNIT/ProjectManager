import "./App.css";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { AuthContext } from "./contexts/AuthContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { all } from "axios";

function TaskContent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { requestWithToken } = useContext(AuthContext);
  const queryClient = useQueryClient();
  const retrieveProjects = async () => {
    const { data } = await requestWithToken({
      url: `/projects/project/${id}/tasks`,
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
        url: "/projects/projects/delete-projrct/" + id,
        method: "delete",
      });
      return response;
    },
  });
  const {
    data: all_task,
    error,
    isLoading,
  } = useQuery("projects", retrieveProjects);
  const handleEdit = (id) => {
    navigate(`/EditProject/${id}`);
  };
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

  const renderTasks = (tasks) => {
    return tasks?.map((task) => (
      <div key={task.id} className="flex h-auto mt-1 bg-white">
        <div className="task-box border p-4 flex-1 relative">
          <p>
            <strong>Name:</strong> {task.name}
          </p>
          <p>
            <strong>Description:</strong> {task.description}
          </p>
          <p>
            <strong>End Time:</strong> {task.endTime}
          </p>
          <div className="card-actions justify-center">
            <button className="btn bg-green-400 text-green-700">
              <a href="/Comment">Comment</a>
            </button>
            <button className="btn bg-yellow-400 text-yellow-700">
              <a href="/EditTask">Edit</a>
            </button>
            <button
              className="btn bg-red-400 text-red-700"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    ));
  };
if (all_task){
    console.log(all_task)
  return (
    <div className="bg-red-200 min-h-screen max-w-screen">
      <div className="flex">
        <div className="flex-1">
          <button className="bg-green-300 text-green-700 w-full px-4 py-2">
            <span className="btm-nav-label">
              <a href="/AddTasks">Add Task</a>
            </span>
          </button>
          <button className="bg-orange-300 text-orange-700 w-full px-4 py-2 mt-2">
            <span className="btm-nav-label">
              <a href="/ChatBox">Chat</a>
            </span>
          </button>
        </div>
        <div className="flex-1">
          <button className="bg-purple-300 text-purple-700 w-full px-4 py-2">
            <span className="btm-nav-label">To do</span>
          </button>
          {renderTasks(all_task.ready)}
        </div>
        <div className="flex-1">
          <button className="bg-blue-300 text-blue-700 w-full px-4 py-2">
            <span className="btm-nav-label">In Progress</span>
          </button>
          {renderTasks(all_task.in_progress)}
        </div>
        <div className="flex-1">
          <button className="bg-yellow-300 text-yellow-700 w-full px-4 py-2">
            <span className="btm-nav-label">Finished</span>
          </button>
          {renderTasks(all_task.done)}
        </div>
      </div>
    </div>
  );}
}

function Task() {
  return (
    <div>
      <TaskContent />
    </div>
  );
}

export default Task;
