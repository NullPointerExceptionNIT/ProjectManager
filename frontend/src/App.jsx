import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Home from "./Home";
import Signup from "./Signup";
import Login from "./Login";
import ProjectPage from "./ProjectPage";
import ProfilePage from "./ProfilePage";
import AddProject from "./AddProject";
import ChatBox from "./ChatBox";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Projects" element={<ProjectPage />} />
          <Route path="/Profile" element={<ProfilePage />} />
          <Route path="/AddProject" element={<AddProject />} />
          <Route path="/ChatBox" element={<ChatBox />}/>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
