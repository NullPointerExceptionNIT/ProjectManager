import { useState, useContext } from 'react'
import { AuthContext } from './contexts/AuthContext'
import './App.css'
import background from './assets/Background_For_Signup_Login.png'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [failed, setfailed] = useState(false);

    const { login, user } = useContext(AuthContext);

    if (user != null)
        navigate("/");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setfailed(login(formData.username, formData.password));
    };
    return (
        <div style={{ backgroundImage: `url(${background})` }}>
            <Header />
            <div className="bg-cover bg-center h-screen flex justify-center items-center">
                <div className="relative mb-20 bg-white bg-opacity-70 rounded-lg p-10 shadow-lg w-96">
                    <h1 className="text-red-400 text-center text-2xl mb-8">Login</h1>
                    <form onSubmit={handleSubmit} className="text-black">
                        <div className="mb-4">
                            <label htmlFor="name">Username:</label>
                            <input className="bg-white form-control w-full p-2 border border-gray-300 rounded" type="text" placeholder="username" name="username" onChange={handleChange} required />
                        </div>
                        <div className="mb-4 relative">
                            <label htmlFor="name">Password:</label>
                            <input className="bg-white form-control w-full p-2 border border-gray-300 rounded" type="password" placeholder="password" name="password" id="password" onChange={handleChange} required />
                            <button id="togglePassword" type="button" className="absolute inset-y-0 right-3 top-6 flex items-center text-gray-500">
                                <svg id="eyeOpen" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                    <circle cx="12" cy="12" r="3" />
                                </svg>
                                <svg id="eyeClosed" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 hidden" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M17.94 17.94A10.97 10.97 0 0 1 12 20c-7 0-11-8-11-8a10.97 10.97 0 0 1 4.14-5.41m3.77-1.64A11 11 0 0 1 12 4c7 0 11 8 11 8a10.97 10.97 0 0 1-1.66 2.92m-4.14 2.64c-.96.28-2.05.44-3.2.44-3.87 0-7.5-2.24-9.88-6m16.72 2.72L3 3" />
                                </svg>
                            </button>
                        </div>
                        <a href="#" className="text-gray-600 mt-3">Forget password?</a>
                        <button type="submit" className="bg-red-500 text-white rounded px-4 py-2 mt-2 w-full"><a href="ProjectPage.html">Enter</a></button>
                    </form>
                    <h5 className="text-center mt-3 text-gray-700">Not a member? <a href="SignUp.html" className="text-red-400">Sign up</a></h5>
                    {failed && <div role="alert" className="alert alert-error">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 shrink-0 stroke-current"
                            fill="none"
                            viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Error! Task failed successfully.</span>
                    </div>}
                </div>
            </div>
        </div>

    )
}
export default Login