import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Home from './Home'
import Signup from './Signup';
import Login from './login';
function App() {

  return (
    <Router>
      <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App
