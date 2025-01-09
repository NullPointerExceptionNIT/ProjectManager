import mainlogo from './assets/Main.png'
import './App.css'
import Header from './Header'
function Home() {
    return (
        <div>
            <Header />
            <div className="bg-white h-screen overflow-hidden">
                <main className="flex flex-col md:flex-row">
                    <div className="md:w-1/2">
                        <h2 className="text-2xl font-semibold m-10">Keep your teams running smoothly with Task Manager agent workspace software</h2>
                        <p className="text-gray-700 m-10">
                            Boost employee satisfaction and efficiency with time-saving automations and Task Manager features that handle repetitive tasks to free up agent workflows.
                        </p>
                    </div>
                    <div className="md:w-1/2 flex justify-center items-center">
                        <img src={mainlogo} alt="Task Manager" className="w-full h-auto max-w-md" />
                    </div>
                    <div className="absolute mb-10 bottom-20 left-10 w-full">
                        <a href="SignUp.html" className="bg-red-300 text-black text-center px-4 py-2 rounded hover:bg-red-400 transition duration-200 w-64 inline-block">
                            Let's Start
                        </a>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Home