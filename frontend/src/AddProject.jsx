import Header from './Header'

function AddProject() {
    return (
        <div className="bg-white min-h-screen">
            <Header />
            <div className="items-center text-black">
                <div className="m-3 justify-center mb-8">
                    <form id="projectForm" className="space-y-6 text-black">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-5">
                            <div className="form-group">
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Name
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
                                    Start Date
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
                                    End Date
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
                                htmlFor="end-date"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Task Description
                            </label>
                            <textarea id="task-description" placeholder="Enter task description" className="resize-none bg-white mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
                        </div>
                        <div className="flex justify-between mt-6">
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
                                Change
                            </button>
                        </div>
                    </form>
                </div >
            </div>
        </div >
    )
}

export default AddProject;