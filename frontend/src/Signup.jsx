import './App.css'
import background from './assets/Background_For_Signup_Login.png'
import Header from './Header'
function Signup() {
    return (
        <div style={{ backgroundImage: `url(${background})` }}>
            <Header />
            <div className="bg-cover bg-center h-screen flex justify-center items-center">
                <div className="relative mb-20 bg-white bg-opacity-70 rounded-lg p-10 shadow-lg w-96">
                    <h2 className="text-red-400 text-center text-2xl mb-8">Sign Up</h2>
                    <div role="tablist" className="tabs tabs-lifted">
                        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 1" defaultChecked />
                        <div role="tabpanel" className="bg-white tab-content bg-base-100 border-base-300 rounded-box p-6">
                            <form className="text-black">
                                <label htmlFor="name" >Name:</label>
                                <input id="name" className="bg-white mb-4 form-control w-full p-2 border border-gray-300 rounded" type="text" placeholder="username" name="username" required />

                                <label htmlFor="email" className='color-black'>Email:</label>
                                <input id="email" className="bg-white mb-4 form-control w-full p-2 border border-gray-300 rounded" type="text" placeholder="username" name="username" required />

                                <div className="mb-4 relative">
                                    <label htmlFor="name" className='color-black'>Password:</label>
                                    <input id="password" className="bg-white mb-4 form-control w-full p-2 border border-gray-300 rounded" type="password" placeholder="password" name="password" required />
                                    <button id="togglePassword" type="button" className="absolute inset-y-0 right-3 mt-6 flex items-center text-gray-500">
                                        <svg id="eyeOpen" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                            <circle cx="12" cy="12" r="3" />
                                        </svg>
                                        <svg id="eyeClosed" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 hidden" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M17.94 17.94A10.97 10.97 0 0 1 12 20c-7 0-11-8-11-8a10.97 10.97 0 0 1 4.14-5.41m3.77-1.64A11 11 0 0 1 12 4c7 0 11 8 11 8a10.97 10.97 0 0 1-1.66 2.92m-4.14 2.64c-.96.28-2.05.44-3.2.44-3.87 0-7.5-2.24-9.88-6m16.72 2.72L3 3" />
                                        </svg>
                                    </button>

                                </div>
                            </form>
                        </div>
                        <input
                            type="radio"
                            name="my_tabs_2"
                            role="tab"
                            className="tab"
                            aria-label="Tab 2"
                        />
                        <div role="tabpanel" className="bg-white tab-content bg-base-100 border-base-300 rounded-box p-6" id="page2">
                            <form className="text-black">

                                <label htmlFor="skills" className='color-black'>Skills:</label>
                                <input id="skills" className="bg-white mb-4 form-control w-full p-2 border border-gray-300 rounded" type="text" placeholder="username" name="username" required />

                                <label htmlFor="experience className='color-black'">Experience:</label>
                                <textarea id="experience" className="bg-white mb-4 resize-none form-control w-full p-2 border border-gray-300 rounded" name="experience" placeholder="Describe your work experience"></textarea>

                                <button id="enterButton" className="bg-red-500 text-white rounded px-4 py-1 mt-3 w-full block text-center"><a href="ProjectPage.html">Enter</a></button>
                                <h5 className="text-center mt-2 text-gray-700">Already a member? <a href="LoginPage.html" className="text-red-400">Login</a></h5>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup