import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Home from "./Home";
import Signup from "./Signup";
import Login from "./Login";
import ProjectPage from "./ProjectPage";
import ProfilePage from "./ProfilePage";
import AddProject from "./AddProject";
import ChatBox from "./ChatBox";
import Tasks from "./Tasks";
import AddTasks from "./AddTasks";
import EditProject from "./EditProject";
import EditTasks from "./EditTask";
import Comment from "./Comment";
import Header from "./Header";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Header/> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Projects" element={<ProjectPage />} />
          <Route path="/Profile" element={<ProfilePage />} />
          <Route path="/AddProject" element={<AddProject />} />
          <Route path="/ChatBox" element={<ChatBox />}/>
          <Route path="/Tasks/:id" element={<Tasks/>}/>
          <Route path="/AddTasks/:id" element={<AddTasks/>}/>
          <Route path="/EditProject/:id" element={<EditProject/>} />
          <Route path="/EditTask" element={<EditTasks/>} />
          <Route path="/Comment" element={<Comment/>} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
