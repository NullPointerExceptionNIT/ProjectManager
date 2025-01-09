import logo from './assets/project-manager-logo.png'


const Header =()=>{
    return(
            <header className="flex justify-between items-center bg-red-50 shadow">
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-20 mr-2"/>
                    <h1 className="font-bold text-xxl font-playwrite">Task Manager</h1>
                </div>
                <div className="flex space-x-2 mr-5">
                    <a href="LoginPage.html" className="text-red-500 hover:underline">Login</a>
                    <a className="text-red-500">/</a>
                    <a href="SignUp.html" className="text-red-500 hover:underline">Sign Up</a>
                </div>
            </header>
    )
}

export default Header