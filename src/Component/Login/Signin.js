import { Box, Typography, TextField, Button } from "@mui/material";
import React from "react";
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
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import HttpsIcon from "@mui/icons-material/Https";
import CropSquareIcon from "@mui/icons-material/CropSquare";

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
              width: "60%",
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
              width: "60%",
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
            <Link to={"/ForgetPassword"} style={{ textDecoration: 'none', color: 'inherit' }}>
          
            <Typography component="span" sx={privacyText}>
              Reset here
            </Typography>{" "}
            </ Link >
          </Typography>
          <Typography sx={createText}>
            <Button
              align="left"
              variant="contained"
              sx={{
                ...ButtonCss,
              }}
            >
              LOGIN
            </Button>
          </Typography>

          <Typography sx={createText}>
            Don’t have an account?{" "}
            <Link to={"/Signup"} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography component="span" sx={privacyText}>
              Please Signup here
            </Typography>{" "}
            </ Link>
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Signin;
