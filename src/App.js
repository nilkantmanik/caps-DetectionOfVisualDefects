import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className='content-wrap'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      </div>
      <Footer />

    </div>
  );
}

export default App;
