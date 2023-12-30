import { Box, Typography, TextField, Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { color, styled } from "@mui/system";
import { AppContext, useProfileGlobal } from "../../ContextApi/Context";
import {
  loginContainer,
  loginBox,
  createText,
  typeText,
  PrivacyWhiteText,
  privacyText,
  ButtonCss,
  signupWithText,
} from "../../Style/LogIn/LoginStyle";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import HttpsIcon from "@mui/icons-material/Https";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import { Link, useNavigate } from "react-router-dom";

const CustomTextField = styled(TextField)(({ error }) => ({
  "& .MuiOutlinedInput-root": {
    borderColor: error ? "red" : "green",
    backgroundColor: "white",
    height: "2rem",
    borderRadius: "18px",
    outline: "none",
    "&.Mui-focused": {
      outline: "none",
      height: "2rem",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "transparent", // Set borderColor to transparent on hover
      outline: "none",
      height: "2rem",
    },
  },
}));

function Login() {
    const { createAccount,statusupdate } = useProfileGlobal();
  const navigate = useNavigate();
  let Data = useContext(AppContext);

  useEffect(() => {
    if (Data.craeteAccountStatus  === 200) {
      
        statusupdate()
        
      navigate('/');
    }
  }, [Data.craeteAccountStatus]);


  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (field) => (event) => {
    setUserData({
      ...userData,
      [field]: event.target.value,
    });
  };

  const handleCreateAccount = () => {
    // Check if all fields are filled
    if (
      userData.firstName &&
      userData.lastName &&
      userData.email &&
      userData.username &&
      userData.password &&
      userData.confirmPassword
    ) {
      // Check if passwords match
      if (userData.password === userData.confirmPassword) {
        // Call createAccount function
        createAccount(userData);
      } else {
        alert(
          "Passwords do not match. Please enter the same password in both fields."
        );
      }
    } else {
      // Display an alert if any field is incomplete
      alert("All fields are required. Please fill in all the fields.");
    }
  };

  console.log(Data);    
   
  return (
    <>
      <Box sx={loginContainer}>
        <Box sx={loginBox}>
          <Typography sx={createText}>SIGNUP / CREATE ACCOUNT</Typography>
        
          <Typography
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "left",
              justifyContent: "space-around",
              width: "60%",
              marginTop: 2,
            }}
          >
            <Box style={{ display: "flex", alignItems: "center", width: "40%" }}>
              <Typography component="span" color="#FEA01A">
                <PersonIcon />
              </Typography>
              <Typography component="span" sx={typeText}>
                First Name
              </Typography>
            </Box>
            <Box style={{ display: "flex", alignItems: "center" }}>
              <CustomTextField
                id="firstName"
                fullWidth
                value={userData.firstName}
                onChange={handleInputChange("firstName")}
                InputLabelProps={{
                  sx: {
                    fontWeight: 100,
                    fontFamily: "PF DinDisplay Pro",
                    fontSize: "17px",
                    color: "#424242",
                    "&.Mui-focused": {
                      color: "grey",
                    },
                  },
                }}
              />
            </Box>
          </Typography>

          {/* Last Name */}
          <Typography
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "left",
              justifyContent: "space-around",
              width: "60%",
              marginTop: 2,
            }}
          >
            <Box style={{ display: "flex", alignItems: "center", width: "40%" }}>
              <Typography component="span" color="#FEA01A">
                <PersonIcon />
              </Typography>
              <Typography component="span" sx={typeText}>
                Last Name
              </Typography>
            </Box>
            <Box style={{ display: "flex", alignItems: "center" }}>
              <CustomTextField
                id="lastName"
                fullWidth
                value={userData.lastName}
                onChange={handleInputChange("lastName")}
                InputLabelProps={{
                  sx: {
                    fontWeight: 100,
                    fontFamily: "PF DinDisplay Pro",
                    fontSize: "17px",
                    color: "#424242",
                    "&.Mui-focused": {
                      color: "grey",
                    },
                  },
                }}
              />
            </Box>
          </Typography>

          {/* Email */}
          <Typography
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "left ",
              justifyContent: "space-around",
              width: "60%",
              marginTop: 2,
            }}
          >
            <Box style={{ display: "flex", alignItems: "center", width: "40%" }}>
              <Typography component="span" color="#FEA01A">
                <EmailIcon />
              </Typography>
              <Typography component="span" sx={typeText}>
                Email
              </Typography>
            </Box>
            <Box style={{ display: "flex", alignItems: "center" }}>
              <CustomTextField
                id="email"
                fullWidth
                value={userData.email}
                onChange={handleInputChange("email")}
                InputLabelProps={{
                  sx: {
                    fontWeight: 100,
                    fontFamily: "PF DinDisplay Pro",
                    fontSize: "17px",
                    color: "#424242",
                    "&.Mui-focused": {
                      color: "grey",
                    },
                  },
                }}
              />
            </Box>
          </Typography>

          {/* Username */}
          <Typography
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-end",
              justifyContent: "space-around",
              width: "60%",
              marginTop: 2,
            }}
          >
            <Box style={{ display: "flex", alignItems: "center", width: "40%" }}>
              <Typography component="span" color="#FEA01A">
                <PersonIcon />
              </Typography>
              <Typography component="span" sx={typeText}>
                Username
              </Typography>
            </Box>
            <Box style={{ display: "flex", alignItems: "center" }}>
              <CustomTextField
                id="username"
                fullWidth
                value={userData.username}
                onChange={handleInputChange("username")}
                InputLabelProps={{
                  sx: {
                    fontWeight: 100,
                    fontFamily: "PF DinDisplay Pro",
                    fontSize: "17px",
                    color: "#424242",
                    "&.Mui-focused": {
                      color: "grey",
                    },
                  },
                }}
              />
            </Box>
          </Typography>

          {/* Password */}
          <Typography
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-end",
              justifyContent: "space-around",
              width: "60%",
              marginTop: 2,
            }}
          >
            <Box style={{ display: "flex", alignItems: "center", width: "40%" }}>
              <Typography component="span" color="#FEA01A">
                <HttpsIcon />
              </Typography>
              <Typography component="span" sx={typeText}>
                Password
              </Typography>
            </Box>
            <Box style={{ display: "flex", alignItems: "center" }}>
              <CustomTextField
                id="password"
                fullWidth
                value={userData.password}
                onChange={handleInputChange("password")}
                InputLabelProps={{
                  sx: {
                    fontWeight: 100,
                    fontFamily: "PF DinDisplay Pro",
                    fontSize: "17px",
                    color: "#424242",
                    "&.Mui-focused": {
                      color: "grey",
                    },
                  },
                }}
              />
            </Box>
          </Typography>

          {/* Confirm Password */}
          <Typography
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-end",
              justifyContent: "space-around",
              width: "60%",
              marginTop: 2,
            }}
          >
            <Box style={{ display: "flex", alignItems: "center", width: "40%" }}>
              <Typography component="span" color="#FEA01A">
                <HttpsIcon />
              </Typography>
              <Typography component="span" sx={typeText}>
                Confirm Password
              </Typography>
            </Box>
            <Box style={{ display: "flex", alignItems: "center" }}>
              <CustomTextField
                id="confirmPassword"
                fullWidth
                value={userData.confirmPassword}
                onChange={handleInputChange("confirmPassword")}
                InputLabelProps={{
                  sx: {
                    fontWeight: 100,
                    fontFamily: "PF DinDisplay Pro",
                    fontSize: "17px",
                    color: "#424242",
                    "&.Mui-focused": {
                      color: "grey",
                    },
                  },
                }}
              />
            </Box>
          </Typography>
          <Typography sx={PrivacyWhiteText}>
            {" "}
            <Typography
              component="span"
              sx={{ paddingRight: 3 }}
              color="#FEA01A"
            >
              <CropSquareIcon />
            </Typography>
            I agree to the{" "}
            <Typography component="span" sx={privacyText}>
              Terms & Conditions
            </Typography>{" "}
            and{" "}
            <Typography component="span" sx={privacyText}>
              Privacy Policy
            </Typography>
          </Typography>
          <Typography sx={createText}>
            <Button
              align="left"
              variant="contained"
              sx={{
                ...ButtonCss,
              }}
              onClick={handleCreateAccount}
            >
              CREATE ACCOUNT
            </Button>
          </Typography>
          <Typography sx={signupWithText}>Signup With</Typography>
          <Typography marginTop={2}>
            {" "}
            <FacebookIcon
              sx={{
                background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
                marginRight: 2,
              }}
            />{" "}
            <GoogleIcon
              sx={{
                background: "linear-gradient(45deg, #FF8E53 30%, #FF2E93 90%)",
                marginRight: 2,
              }}
            />{" "}
            <LinkedInIcon
              sx={{
                background: "linear-gradient(45deg, #4CAF50 30%, #FFC107 90%)",
              }}
            />
          </Typography>

          <Typography sx={createText}>
            Already have an account?{" "}
            <Link to={"/"} style={{ textDecoration: 'none', color: 'inherit' }}>
          
            <Typography component="span" sx={privacyText}>
              Login
            </Typography>{" "}
            </ Link>
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Login;
