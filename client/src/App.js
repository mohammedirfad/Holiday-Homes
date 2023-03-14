
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/user/Home/Home";
// import LandingPage from "./pages/user/LandingPage/LandingPage"
import './App.css';
import LandingPage from '../src/pages/user/LandingPage/LandingPage'


function App() {
  return (

    //User-Routes :
    <Routes>
     <Route path="/" element={<LandingPage />} />
     <Route path="/Home" element={<Home />} />
    </Routes>
  );
}

export default App;
