import mainlogo from "./assets/Main.png";
import "./App.css";
function Home() {
  return (
    <div>
      <div className="hero bg-white min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={mainlogo}
            className="max-w-sm rounded-lg" />
          <div>
            <h1 className="text-5xl font-bold">Keep your teams running smoothly with Task Manager agent workspace software!</h1>
            <p className="py-6">
            Boost employee satisfaction and efficiency with time-saving 
            automations and Task Manager features that handle repetitive tasks to free up agent workflows.
            </p>
            <button className="btn btn-primary bg-yellow-400"><a href="Signup">Get Started</a></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
