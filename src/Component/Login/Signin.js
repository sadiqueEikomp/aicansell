import { Box, Typography, TextField, Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { color, styled } from "@mui/system";
import { Link } from "react-router-dom";
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
import Cookies from "js-cookie";
import { AppContext, useProfileGlobal } from "../../ContextApi/Context";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import HttpsIcon from "@mui/icons-material/Https";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import { useNavigate } from "react-router-dom";
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

function Signin() {
  const { loginAccount, sendConfirmationEmail, currentUser } =
    useProfileGlobal();
    const navigate = useNavigate();
  let Data = useContext(AppContext);

  console.log(Data);
  useEffect(() => {
    loginStatus();
    sendMail();
  }, [Data.loginStatus, Data.userData.is_email_confirmed]);

  const loginStatus = () => {
    const token = Data.loginStatus.access;

    const Maill = {
      token: token,
      email: userData.email,
      refresh: Data.loginStatus.access,
    };
    if (Data.loginStatus) {
      currentUser(Maill);
    }
  };
  const sendMail = () => {
    console.log("hello");
    const token = Data.loginStatus.access;

    const Maill = {
      token: token,
      email: userData.email,
      refresh: Data.loginStatus.access,
    };
    if (Data.userData.is_email_confirmed == false) {
      console.log("hellofalse");
      alert("please login from mail");
      sendConfirmationEmail(Maill);
    } else if (Data.userData.is_email_confirmed == true){
      navigate('/LandingPage');
    }
  };
  const [userData, setUserData] = useState({
    email: "",

    password: "",
  });
  const handleInputChange = (field) => (event) => {
    setUserData({
      ...userData,
      [field]: event.target.value,
    });
  };
  const handleCreateAccount = () => {
    // Check if all fields are filled
    loginAccount(userData);
  };
  console.log(userData);
  return (
    <>
      <Box sx={loginContainer}>
        <Box sx={loginBox}>
          <Typography sx={createText}>SIGN IN</Typography>

          <Typography
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "left ",
              justifyContent: "space-around",
              width: "40%",
              marginTop: 2,
            }}
          >
            <Box
              style={{ display: "flex", alignItems: "center", width: "40%" }}
            >
              <Typography component="span" color="#FEA01A">
                <EmailIcon />
              </Typography>
              <Typography component="span" sx={typeText}>
                Email
              </Typography>
            </Box>
            <Box style={{ display: "flex", alignItems: "center" }}>
              <CustomTextField
                id="title"
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

          <Typography
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-end",
              justifyContent: "space-around",
              width: "40%",
              marginTop: 2,
            }}
          >
            <Box
              style={{ display: "flex", alignItems: "center", width: "40%" }}
            >
              <Typography component="span" color="#FEA01A">
                <HttpsIcon />
              </Typography>
              <Typography component="span" sx={typeText}>
                Password
              </Typography>
            </Box>
            <Box style={{ display: "flex", alignItems: "center" }}>
              <CustomTextField
                id="title"
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

          <Typography sx={PrivacyWhiteText}>
            {" "}
            Forgot Password?{" "}
            <Link
              to={"/ForgetPassword"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography component="span" sx={privacyText}>
                Reset here
              </Typography>{" "}
            </Link>
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
              LOGIN
            </Button>
          </Typography>

          <Typography sx={createText}>
            Don’t have an account?{" "}
            <Link
              to={"/Signup"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography component="span" sx={privacyText}>
                Please Signup here
              </Typography>{" "}
            </Link>
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Signin;
