import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/user/Home/Home";
import LandingPage from '../src/pages/user/LandingPage/LandingPage';
import Admin from "./routes/Admin";
import User from "./routes/User";
import './App.css';



function App() {
  return (

    //User-Routes :
    <Routes>
     <Route path="/admin/*" element={<Admin />} />



     
      <Route path="/" element={<LandingPage />} />
      <Route path="/*" element={<User />} />
     
  


     {/* Admin-Routes : */}



    </Routes>
  );
}

export default App;
