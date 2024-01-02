import { Box, Typography, Switch, Button, TextField,Radio } from "@mui/material";
import React, { useState } from "react";
import {
  landingPage,
  simulationText,
  buttonstyle,
  buttonBox,
  discriptionBox,
  imageBox,
  contentBox,
  buttonstyles,
  contentToptext,
  contentMainText,
  masterText,
  jaduText,
  radialSelectContainer,
  QuizHeader,
  radioSelect,
} from "../../Style/Dasbord/LandingPageStyle";
import Image from "../../Asset/Background/image21.png";
import { styled } from "@mui/system";

function LandingPage() {
  const [checked, setChecked] = useState(false);
  const [selectedValue, setSelectedValue] = useState('option1'); // set your initial value

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const handleChangeToggle = () => {
    setChecked((prevChecked) => !prevChecked);
  };
  const MasterText="Master the art of influencing people around you";
  const JaduText="JADU Quiz for Today";
  const QuizHeaderText="Personal Sales Excellence is"
  return (
    <>
      <Box sx={landingPage}>
        <Box textAlign={"right"} width={"90%"}>
          <Typography component={"span"} sx={simulationText}>
            Simulation
          </Typography>
          <Typography component={"span"}>
            {" "}
            <Switch
              checked={checked}
              onChange={handleChangeToggle}
              style={{ color: "#FEA01A" }} // You can change the color to 'secondary' or 'default'
            />
          </Typography>{" "}
          <Typography component={"span"} sx={simulationText}>
            Email
          </Typography>
        </Box>
        <Box sx={buttonBox}>
          <Button variant="contained" sx={{ ...buttonstyle }}>
            ABC
          </Button>
          <Button variant="contained" sx={{ ...buttonstyle }}>
            ABC
          </Button>
          <Button variant="contained" sx={{ ...buttonstyle }}>
            ABC
          </Button>
        </Box>
        <Box sx={discriptionBox}>
          <Box sx={imageBox}>
            <img
              src={Image}
              alt="image "
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
          <Box width={"75%"} sx={contentBox}>
            <Box display={"flex"} flexDirection={"column"} minHeight={"40%"}>
              <Typography sx={contentToptext}>
                How would you respond to this situation. (Max 30 words)
              </Typography>
              <Typography sx={contentMainText}>
                I need this by yesterday! I don’t care if you have to work till
                late night.
              </Typography>
            </Box>
            <Box display={"flex"} flexDirection={"column"} height={"auto"}>
              <TextField
                fullWidth
                multiline
                label="Type Your Response Here"
                rows={6}
                InputProps={{
                  notched: false,
                  sx: {
                    width: "90%",
                    bgcolor: "white",
                    color: "#C631F3",
                    borderBottom: "1px solid #424242",
                    fontSize: "15px", // Add a bottom border for styling
                  },
                }}
                InputLabelProps={{
                  sx: {
                    fontWeight: 100,
                    fontFamily: "PF DinDisplay Pro",
                    fontSize: "17px",
                    color: "#C631F3",
                    "&.Mui-focused": {
                      display: "none",
                    },
                  },
                }}
              />
              <Typography width={"100%"}>
                <Button variant="contained" sx={{ ...buttonstyles }}>
                  Submit
                </Button>
              </Typography>
            </Box>
          </Box>
        </Box>
        <Typography component={"span"} sx={masterText}>
            {MasterText}
          </Typography>
          <Typography component={"span"} sx={jaduText}>
            {JaduText}
          </Typography>
          <Box sx={radialSelectContainer} >
          
          <Typography sx={QuizHeader}>{QuizHeaderText}</Typography>
          <Box sx={radioSelect}>
          <Box component={"span"} paddingLeft={2}>Option 2</Box>
          <Radio
            checked={selectedValue === 'option1'}
            onChange={handleChange}
            value="option1"
            color="default"  
            sx={{ color: '#C631F3' }} 
          />
        </Box>
        <Box sx={radioSelect} >
        <Box component={"span"} paddingLeft={2}>Option 1</Box>
        <Radio
          checked={selectedValue === 'option2'}
          onChange={handleChange}
          value="option2"
          color="default"  
          sx={{ color: '#C631F3' }} 
        />
      </Box>
      <Box sx={radioSelect} >
      <Box component={"span"} paddingLeft={2}>Option 3</Box>
      <Radio
        checked={selectedValue === 'option3'}
        onChange={handleChange}
        color="default"  
          sx={{ color: '#C631F3' }} 
        value="option3"
      />
    </Box>
          </Box>
          
      </Box>
    </>
  );
}

export default LandingPage;
