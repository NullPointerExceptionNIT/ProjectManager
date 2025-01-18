import "./App.css";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { AuthContext } from "./contexts/AuthContext";
import { useContext } from "react";

function TaskContent() {
    const { requestWithToken } = useContext(AuthContext);
    const queryClient = useQueryClient();

    // تعریف تسک‌ها به صورت دستی
    const tasks = {
        todo: [
            { id: 1, name: "Task 1", description: "This is the first task", endTime: "2023-10-01" },
            { id: 2, name: "Task 2", description: "This is the second task", endTime: "2023-10-02" },
        ],
        inProgress: [
            { id: 3, name: "Task 3", description: "This is the third task", endTime: "2023-10-03" },
        ],
        finished: [
            { id: 4, name: "Task 4", description: "This is the fourth task", endTime: "2023-10-04" },
        ],
    };

    const deleteTask = (id) => {
        useDeleteTask.mutate(id);
    };

    const useDeleteTask = useMutation({
        onSuccess: async () => {
            queryClient.invalidateQueries("tasks");
        },
        mutationFn: async (id) => {
            const response = await requestWithToken({
                url: "/tasks/delete-task/" + id,
                method: "delete",
            });
            return response;
        },
    });

    const renderTasks = (taskList) => {
        return taskList.map((task) => (
            <div key={task.id} className="flex h-auto mt-1 bg-white">
                <div className="task-box border p-4 flex-1 relative">
                    <p><strong>Name:</strong> {task.name}</p>
                    <p><strong>Description:</strong> {task.description}</p>
                    <p><strong>End Time:</strong> {task.endTime}</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-warning bg-yellow-300 text-yellow-700"><a href="EditTask">Edit</a></button>
                        <button className="btn btn-error bg-red-300 text-red-700" onClick={() => deleteTask(task.id)}>
                            Delete
                            {deleteTask.isLoading && <span className="loading loading-spinner loading-lg"></span>}
                        </button>
                    </div>
                </div>
            </div>
        ));
    };

    return (
        <div className="bg-red-200 h-screen">
            <div className="flex">
                <div className="flex-1">
                    <button className="bg-purple-300 text-purple-700 w-full px-4 py-2">
                        <span className="btm-nav-label">To do</span>
                    </button>
                    {renderTasks(tasks.todo)}
                </div>
                <div className="flex-1">
                    <button className="bg-blue-300 text-blue-700 w-full px-4 py-2">
                        <span className="btm-nav-label">In Progress</span>
                    </button>
                    {renderTasks(tasks.inProgress)}
                </div>
                <div className="flex-1">
                    <button className="bg-yellow-300 text-yellow-700 w-full px-4 py-2">
                        <span className="btm-nav-label">Finished</span>
                    </button>
                    {renderTasks(tasks.finished)}
                </div>
            </div>
        </div>
    );
}

function Task() {
    return (
        <div>
            <TaskContent />
        </div>
    );
}

export default Task;