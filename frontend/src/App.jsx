import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Home from './Home'
import Signup from './Signup';
import Login from './Login';
import ProjectPage from './ProjectPage';
import ProfilePage from './ProfilePage';
import AddProject from './AddProject';

function App() {

  return (
    <Router>
      <AuthProvider>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/ProjectPage" element={<ProjectPage />} />
            <Route path="/ProfilePage" element={<ProfilePage />} />
            <Route path="/AddProject" element={<AddProject/>} />
          </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App
