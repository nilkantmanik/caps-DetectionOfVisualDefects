import './App.css';
import Addpatient from './pages/Addpatient';
// import Footer from './components/Footer';
// import Navbar from './components/Navbar';
import Home from "./pages/Home";
import Login from './pages/Login';
import Logout from './pages/Logout';
import Signup from './pages/Signup.js';
import Patientlist from './pages/Patientlist.js';
import Tipspage from './pages/Tipspage.js'


// import NewHome from "./pages/NewHome.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className='content-wrap'>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/addpatient" element={<Addpatient />} />
          <Route path="/patientlist" element={<Patientlist />} />
          <Route path="/tips" element={<Tipspage />} />

         
        </Routes>
      </Router>
      </div>
     

    </div>
  );
}

export default App;
