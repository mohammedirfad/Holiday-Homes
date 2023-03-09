
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/user/Home/Home";
import './App.css';


function App() {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
