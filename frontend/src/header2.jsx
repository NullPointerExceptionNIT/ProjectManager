import logo from './assets/project-manager-logo.png'
import user from './assets/user.png'

const header2 =()=>{
    return(
        <header className="flex justify-between items-center bg-red-50 shadow pr-6">
        <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-20 mr-2"/>
            <h1 className="font-bold text-xxl font-playwrite text-gray-700">Task Manager</h1>
        </div>
        <div className="relative">
            <button id="menu-toggle" className="focus:outline-none text-2xl">☰</button>
            <div id="dropdown" className="hidden absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
                <img src={user} alt="user img" className="w-16 h-16 rounded-full mx-auto mt-2"/>
                <div className="py-2 px-4 hover:bg-gray-200 cursor-pointer"><a href="ProfilePage.html">Profile</a></div>
                <div className="py-2 px-4 hover:bg-gray-200 cursor-pointer">Add Project</div>
                <div className="py-2 px-4 hover:bg-gray-200 cursor-pointer">Progress</div>
            </div>
        </div>
    </header>
    )
}

export default header2