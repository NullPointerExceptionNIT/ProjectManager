import Header from './header2'
import './App.css'

function ProjectPage() {
    return (
        <div className="h-screen bg-red-200">
            <Header/>
            <main className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="text-xl font-bold">Project Name 1</h2>
                    <p>Project Manager: Ali</p>
                    <p>Members: Maryam, Sara</p>
                    <p>Start Date: 1 Farvardin 1402</p>
                    <p>End Date: 30 Tir 1402</p>
                    <button className="bg-yellow-300 text-black px-4 py-2 rounded mt-2">Add Tasks</button>
                </div>
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="text-xl font-bold">Project Name 2</h2>
                    <p>Project Manager: Reza</p>
                    <p>Members: Amir, Nazanin</p>
                    <p>Start Date: 15 Farvardin 1402</p>
                    <p>End Date: 15 Mordad 1402</p>
                    <button className="bg-yellow-300 text-black px-4 py-2 rounded mt-2">Add Tasks</button>
                </div>
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="text-xl font-bold">Project Name 3</h2>
                    <p>Project Manager: Sara</p>
                    <p>Members: Ali, Mehdi</p>
                    <p>Start Date: 1 Ordibehesht 1402</p>
                    <p>End Date: 30 Shahrivar 1402</p>
                    <button className="bg-yellow-300 text-black px-4 py-2 rounded mt-2">Add Tasks</button>
                </div>
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="text-xl font-bold">Project Name 4</h2>
                    <p>Project Manager: Mehdi</p>
                    <p>Members: Nazanin, Sara</p>
                    <p>Start Date: 10 Ordibehesht 1402</p>
                    <p>End Date: 10 Mehr 1402</p>
                    <button className="bg-yellow-300 text-black px-4 py-2 rounded mt-2">Add Tasks</button>
                </div>
            </main>
        </div>
    )
}

export default ProjectPage