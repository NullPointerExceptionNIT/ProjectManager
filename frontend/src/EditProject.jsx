import Header from './Header';

function EditProject() {
    return (
        <div className="bg-white h-screen flex flex-col">
            <Header />
            <div className="flex-grow items-center text-black">
                <div className="m-3 justify-center mb-8">
                    <form id="projectForm" className="space-y-6 text-black">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-5">
                            <div className="form-group">
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Edit name
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
                                    htmlFor="start-date"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Edit start Date
                                </label>
                                <input
                                    type="date"
                                    id="start-date"
                                    className="bg-white mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label
                                    htmlFor="end-date"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Edit end Date
                                </label>
                                <input
                                    type="date"
                                    id="end-date"
                                    className="bg-white mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    required
                                />
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
                    href="Projects"
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

export default EditProject;