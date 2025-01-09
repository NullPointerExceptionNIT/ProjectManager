import logo from './assets/project-manager-logo.png'
import user from './assets/user.png'
import './App.css'
function ProjectPage() {
    return (
        <div className="bg-cover bg-center bg-red-50 h-screen overflow-hidden">
            <div className="flex justify-between items-top">
                <img src={logo} alt="Logo" className="h-20 mr-2" />
                <div className="container mx-auto pt-3 p-8 bg-opacity-50 bg-white rounded-lg shadow-lg">
                    <h1 className="text-center font-bold text-xxl font-playwrite text-gray-700 mb-8">User  Profile</h1>
                    <div className="flex justify-center mb-8">
                        <div className="relative">
                            <img src={user} alt="User  Avatar" className="w-32 h-32 rounded-full border-4 border-white shadow-lg" />
                            <label for="avatarUpload" className="absolute bottom-0 right-0 bg-indigo-600 text-white p-2 rounded-full cursor-pointer hover:bg-indigo-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                                </svg>
                                <input type="file" id="avatarUpload" className="hidden" accept="image/*" />
                            </label>
                        </div>
                    </div>

                    <form id="profileForm" className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div className="form-group">
                                <label for="name" className="block text-sm font-medium text-gray-700">Name</label>
                                <input type="text" id="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required disabled />
                            </div>
                            <div className="form-group">
                                <label for="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required disabled />
                            </div>
                            <div className="form-group relative">
                                <label for="oldPassword" className="block text-sm font-medium text-gray-700">Old Password</label>
                                <input type="password" id="oldPassword" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required disabled />
                                <button id="toggleOldPassword" type="button" className="absolute inset-y-0 top-6 right-3 flex items-center text-gray-500">
                                    <svg id="eyeOpenOld" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                        <circle cx="12" cy="12" r="3" />
                                    </svg>
                                    <svg id="eyeClosedOld" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 hidden" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M17.94 17.94A10.97 10.97 0 0 1 12 20c-7 0-11-8-11-8a10.97 10.97 0 0 1 4.14-5.41m3.77-1.64A11 11 0 0 1 12 4c7 0 11 8 11 8a10.97 10.97 0 0 1-1.66 2.92m-4.14 2.64c-.96.28-2.05.44-3.2.44-3.87 0-7.5-2.24-9.88-6m16.72 2.72L3 3" />
                                    </svg>
                                </button>
                            </div>

                            <div className="form-group relative">
                                <label for="newPassword" className="block text-sm font-medium text-gray-700">New Password</label>
                                <input type="password" id="newPassword" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required disabled />
                                <button id="toggleNewPassword" type="button" className="absolute inset-y-0 top-6 right-3 flex items-center text-gray-500">
                                    <svg id="eyeOpenNew" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                        <circle cx="12" cy="12" r="3" />
                                    </svg>
                                    <svg id="eyeClosedNew" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 hidden" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M17.94 17.94A10.97 10.97 0 0 1 12 20c-7 0-11-8-11-8a10.97 10.97 0 0 1 4.14-5.41m3.77-1.64A11 11 0 0 1 12 4c7 0 11 8 11 8a10.97 10.97 0 0 1-1.66 2.92m-4.14 2.64c-.96.28-2.05.44-3.2.44-3.87 0-7.5-2.24-9.88-6m16.72 2.72L3 3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="form-group">
                                <label for="skills" className="block text-sm font-medium text-gray-700">Skills</label>
                                <input type="text" id="skills" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Separate skills with commas" required disabled />
                            </div>
                            <div className="form-group">
                                <label for="roles" className="block text-sm font-medium text-gray-700">Various Roles</label>
                                <input type="text" id="roles" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required disabled />
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="workExperience" className="block text-sm font-medium text-gray-700">Work Experience</label>
                            <textarea id="experience" className="mb-4 resize-none w-full p-2 border border-gray-300 rounded" name="experience" placeholder="Describe your work experience"></textarea>
                        </div>
                        <div className="form-group">

                        </div>
                    </form>
                </div>
                <div className="flex flex-col items-start">
                    <button id="changeButton" className="bg-red-200 text-black h-16 w-20 m-2 px-4 py-2 rounded hover:bg-red-300">Change</button>
                    <button id="backButton" className="bg-red-200 text-black h-16 w-20 m-2 px-4 py-2 rounded hover:bg-red-300">
                        <a href="ProjectPage.html" className="block">Back</a>
                    </button>
                </div>
            </div>
        </div>
    )
}