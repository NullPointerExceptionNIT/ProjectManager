import logo from './assets/project-manager-logo.png'
import './App.css'
function ProjectPage() {
    return (
        <div>
            <div class="bg-red-200 h-screen overflow-hidden">
                <header class="flex justify-between items-center bg-red-50 shadow pr-6">
                    <img src={logo} alt="Logo" class="h-20 mr-2" />
                    <h1 class="font-bold text-xxl font-playwrite">Task Manager</h1>
                    <div class="relative">
                        <button id="menu-toggle" class="focus:outline-none text-2xl">☰</button>
                        <div id="dropdown" class="hidden absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
                            <img src="user.png" alt="user img" class="w-16 h-16 rounded-full mx-auto mt-2" />
                            <div class="py-2 px-4 hover:bg-gray-200 cursor-pointer"><a href="ProfilePage.html">Profile</a></div>
                            <div class="py-2 px-4 hover:bg-gray-200 cursor-pointer">Add Project</div>
                            <div class="py-2 px-4 hover:bg-gray-200 cursor-pointer">Progress</div>
                        </div>
                    </div>
                </header>
                <main class="p-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div class="bg-white p-4 rounded shadow">
                        <h2 class="text-xl font-bold">Project Name 1</h2>
                        <p>Project Manager: Ali</p>
                        <p>Members: Maryam, Sara</p>
                        <p>Start Date: 1 Farvardin 1402</p>
                        <p>End Date: 30 Tir 1402</p>
                        <button class="bg-yellow-300 text-black px-4 py-2 rounded mt-2">Add Tasks</button>
                    </div>
                    <div class="bg-white p-4 rounded shadow">
                        <h2 class="text-xl font-bold">Project Name 2</h2>
                        <p>Project Manager: Reza</p>
                        <p>Members: Amir, Nazanin</p>
                        <p>Start Date: 15 Farvardin 1402</p>
                        <p>End Date: 15 Mordad 1402</p>
                        <button class="bg-yellow-300 text-black px-4 py-2 rounded mt-2">Add Tasks</button>
                    </div>
                    <div class="bg-white p-4 rounded shadow">
                        <h2 class="text-xl font-bold">Project Name 3</h2>
                        <p>Project Manager: Sara</p>
                        <p>Members: Ali, Mehdi</p>
                        <p>Start Date: 1 Ordibehesht 1402</p>
                        <p>End Date: 30 Shahrivar 1402</p>
                        <button class="bg-yellow-300 text-black px-4 py-2 rounded mt-2">Add Tasks</button>
                    </div>
                    <div class="bg-white p-4 rounded shadow">
                        <h2 class="text-xl font-bold">Project Name 4</h2>
                        <p>Project Manager: Mehdi</p>
                        <p>Members: Nazanin, Sara</p>
                        <p>Start Date: 10 Ordibehesht 1402</p>
                        <p>End Date: 10 Mehr 1402</p>
                        <button class="bg-yellow-300 text-black px-4 py-2 rounded mt-2">Add Tasks</button>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default ProjectPage