import logo from './logo.svg';
import './App.css';
import Login from './Component/Login/Login';
import { Box } from '@mui/material';
import { bgstyle } from './Style/Style';
import Signin from './Component/Login/Signin';
import ForgetPassword from './Component/Login/ForgetPassword';
import ResetPassword from './Component/Login/ResetPassword';
import Navbar from './Component/NavBar/NavBar';
import {  Routes, Route } from "react-router-dom";
function App() {
  return (
   <>
   <Box sx={bgstyle}>
    <Navbar />

   <Routes>
        
   <Route path="/" element={<Signin />} />
     <Route path="Signup" element={<Login />} />
     <Route path="ForgetPassword" element={  <ForgetPassword />} />
     <Route path="ResetPassword" element={  <ResetPassword />} />

     
  
 </Routes>


  
   </Box>
   </>
  );
}

export default App;
