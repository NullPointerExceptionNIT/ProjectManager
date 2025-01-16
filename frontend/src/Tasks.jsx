import Header from "./Header";
import "./App.css";

function Tasks() {
    return (
        <div className="bg-red-200 h-screen">
            <Header />
            <div className="flex h-16">
                <button className="bg-purple-300 text-purple-700 flex-1 px-4 py-2">
                    <span className="btm-nav-label">To do</span>
                </button>
                <button className="bg-blue-300 text-blue-700 flex-1 px-4 py-2">
                    <span className="btm-nav-label">In Progress</span>
                </button>
                <button className="bg-yellow-300 text-yellow-700 flex-1 px-4 py-2">
                    <span className="btm-nav-label">Finished</span>
                </button>
            </div>
            <div className="flex h-auto mt-1 bg-white">
                <div className="task-box border p-4 flex-1 relative">
                    <h3 className="task-title font-bold">Task 1</h3>
                    <p className="task-description">This is the first task</p>
                    <p className="task-person">Assigned to: Vania</p>
                    <button className="absolute bottom-1 right-4 bg-purple-300 text-purple-700 px-4 py-2 rounded">
                        Start
                    </button>
                </div>
                <div className="task-box border p-4 flex-1 relative">
                    <h3 className="task-title font-bold">Task 2</h3>
                    <p className="task-description">This is the second task</p>
                    <p className="task-person">Assigned to: Amir</p>
                    <button className="absolute bottom-1 right-4 bg-blue-300 text-blue-700 px-4 py-2 rounded">
                        Finish
                    </button>
                </div>
                <div className="task-box border p-4 flex-1">
                    <h3 className="task-title font-bold">Task 3</h3>
                    <p className="task-description">This is the third task</p>
                    <p className="task-person">Assigned to: Javid</p>
                </div>
            </div>
            <div className="flex h-auto mt-1 bg-white">
                <div className="task-box border p-4 flex-1 relative">
                    <h3 className="task-title font-bold">Task 4</h3>
                    <p className="task-description">This is the 4th task</p>
                    <p className="task-person">Assigned to: Vania</p>
                    <button className="absolute bottom-1 right-4 bg-purple-300 text-purple-700 px-4 py-2 rounded">
                        Start
                    </button>
                </div>
                <div className="task-box border p-4 flex-1 relative">
                    <h3 className="task-title font-bold">Task 5</h3>
                    <p className="task-description">This is the 5th task</p>
                    <p className="task-person">Assigned to: Amir</p>
                    <button className="absolute bottom-1 right-4 bg-blue-300 text-blue-700 px-4 py-2 rounded">
                        Finish
                    </button>
                </div>
                <div className="task-box border p-4 flex-1">
                    <h3 className="task-title font-bold">Task 6</h3>
                    <p className="task-description">This is the 6th task</p>
                    <p className="task-person">Assigned to: Javid</p>
                </div>
            </div>
        </div>
    )
}

export default Tasks;