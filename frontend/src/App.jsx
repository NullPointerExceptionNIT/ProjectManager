import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Home from './Home'
import Signup from './Signup';
import Login from './Login';
import ProjectPage from './ProjectPage';
import ProfilePage from './ProfilePage';

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
          </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App
