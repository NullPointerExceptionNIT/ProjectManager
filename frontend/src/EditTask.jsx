import "./App.css";

function EditTasks() {
    return (
        <div className="bg-white min-h-screen flex flex-col">
            <div className="flex-grow items-center text-black">
                <div className="m-3 justify-center mb-8">
                    <form id="projectForm" className="space-y-6 text-black">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5">
                            <div className="form-group">
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Edit task Title
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="bg-white mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label
                                    htmlFor="person-name"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Edit person Name
                                </label>
                                <select className="select select-bordered w-full max-w-l ">
                                    <option disabled selected>Who shot first?</option>
                                    <option>Han Solo</option>
                                    <option>Greedo</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-5 border rounded-l">
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">To do</span>
                                    <input type="radio" name="radio-10" className="radio checked:bg-red-500" defaultChecked />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">In progress</span>
                                    <input type="radio" name="radio-10" className="radio checked:bg-blue-500" defaultChecked />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">Finished</span>
                                    <input type="radio" name="radio-10" className="radio checked:bg-yellow-500" defaultChecked />
                                </label>
                            </div>
                        </div>
                        <div className="form-group">
                            <label
                                htmlFor="task-description"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Edit task Description
                            </label>
                            <textarea
                                id="task-description"
                                placeholder="Enter task description"
                                className="resize-none bg-white mt-1 block w-full px-3 py-8 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            ></textarea>
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
                >
                    Edit
                </button>
            </div>
        </div>
    );
}

export default EditTasks;