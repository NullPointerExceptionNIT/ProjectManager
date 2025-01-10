import Header from './header2'

function AddProject() {
    return (
        <div className="bg-red-100 h-screen overflow-hidden">
            <Header />
            <main className="p-6 text-black">
                <div className="grid grid-cols-3 gap-4 mb-4">
                    <div>
                        <label for="project-name" className="block mb-1">Project Name</label>
                        <input type="text" id="project-name" placeholder="Enter project name" className="bg-white border border-gray-300 p-2 rounded w-full" />
                    </div>
                    <div>
                        <label for="start-date" className="block mb-1">Start Date</label>
                        <input type="date" id="start-date" className="bg-white border border-gray-300 p-2 rounded w-full" />
                    </div>
                    <div>
                        <label for="end-date" className="block mb-1">End Date</label>
                        <input type="date" id="end-date" className="bg-white border border-gray-300 p-2 rounded w-full" />
                    </div>
                </div>

                <div className="mb-4">
                    <label for="task-description" className="block mb-1">Task Description</label>
                    <textarea id="task-description" placeholder="Enter task description" className="bg-white mb-4 resize-none form-control h-60 w-full p-2 border border-gray-300 rounded"></textarea>
                </div>

                <div className="flex justify-between">
                    <a href="#" className="bg-blue-300 text-black px-4 py-2 rounded hover:bg-blue-400">Back</a>
                    <a href="#" className="bg-yellow-300 text-black px-4 py-2 rounded hover:bg-yellow-400">Add Project</a>
                </div>
            </main>
        </div>
    )
}

export default AddProject