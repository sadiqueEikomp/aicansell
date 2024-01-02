import logo from './logo.svg';
import './App.css';
import Login from './Component/Login/Login';
import { Box } from '@mui/material';
import { bgstyle } from './Style/Style';
import Signin from './Component/Login/Signin';
import ForgetPassword from './Component/Login/ForgetPassword';
import ResetPassword from './Component/Login/ResetPassword';
import Navbar from './Component/NavBar/NavBar';
import LandingPage from './Component/Dasboard/LandingPage';
import {  Routes, Route } from "react-router-dom";
import ScoreResult from './Component/ScoreResult/ScoreResult';
function App() {
  console.log("hrlllo")
  return (
   <>
   <Box sx={bgstyle}>
    <Navbar />

   <Routes>
        {/* Login Part*/}
     <Route path="/" element={<Signin />} />
     <Route path="Signup" element={<Login />} />
     <Route path="ForgetPassword" element={  <ForgetPassword />} />
     <Route path="ResetPassword" element={  <ResetPassword />} />
      {/* Landing Page*/}
     <Route path="LandingPage" element={  <LandingPage/>} />
     <Route path="ScoreResult" element={  <ScoreResult/>} />

     
  
 </Routes>


  
   </Box>
   </>
  );
}

export default App;
