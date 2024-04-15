import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Home from  "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Userdashboard from "./pages/user-routes/Userdashboard";
import Privateroute from "./components/Privateroute";
import ProfileInfo from "./pages/user-routes/ProfileInfo";
import NewPost from "./pages/NewPost";



function App() {
  return (
    <BrowserRouter>
    <ToastContainer position="bottom-center"/>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Dashboard/newPost" element={<NewPost/>}/>
        <Route path="/user" element={< Privateroute />} >
        <Route path="dasshboard" element={< Userdashboard />} />
        <Route path="profile-info" element={< ProfileInfo />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
