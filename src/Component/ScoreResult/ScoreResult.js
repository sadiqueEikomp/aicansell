import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import {
  landingPage,
  thanksText,
  responseText,
  analysisText,
  SenticloudText,
  seanAnalysisContainer,
  seanAnalysisText,
  displayBox,
  comingText,
  resultWord,
  seanRecommendsText,
} from "../../Style/SocreResult/ScoreResultSTyle";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Add } from "@mui/icons-material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

function ScoreResult() {
  const [sean, setSean] = useState(true);
  const [seanAdd, setAdd] = useState(true);
  const [recomand, setrecomand] = useState(true);
  const [recomandAdd, setRecomandAdd] = useState(true);
  const handleClickSean = () => {
    setAdd((prevValue) => !prevValue);
    setSean((prevValue) => !prevValue);
  };
  const handleClickRecomand = () => {
    setrecomand((prevValue) => !prevValue);
    setRecomandAdd((prevValue) => !prevValue);
  };
  const Thanks = "Thank You!";
  const ResponseText = "WE HAVE RECIEVED YOUR RESPONSE";
  const senticloudText = "SENTICLOUD ANALYSIS FOR YOUR RESPONSE ";
  return (
    <>
      <Box sx={landingPage}>
        <Typography sx={thanksText}>{Thanks}</Typography>
        <Typography sx={responseText}>{ResponseText}</Typography>

        <Typography sx={SenticloudText}>{senticloudText}</Typography>
        <Box sx={seanAnalysisContainer}>
          <Box sx={{ display: "flex", flexDirection: "center" }}>
            {" "}
            <Typography sx={seanAnalysisText}>SEAN Analysis</Typography>
            <Typography
              width={"10%"}
              color="#fff"
              align={"right"}
              onClick={handleClickSean}
            >
              {seanAdd ? <Add /> : <RemoveIcon />}
            </Typography>
          </Box>
          <Box sx={displayBox}>
            <Typography sx={comingText}>YOU ARE COMING ACROSS AS</Typography>
            <Typography sx={resultWord}>
              Enthusiastic, Memorable{" "}
              <Typography component={"span"} justifyContent={"end"}>
                <ThumbUpIcon />
              </Typography>
            </Typography>
          </Box>
          {sean ? (
            ""
          ) : (
            <>
              {" "}
              <Box sx={displayBox}>
                <Typography sx={comingText}>
                  YOU ARE COMING ACROSS AS
                </Typography>
                <Typography sx={resultWord}>
                  Enthusiastic, Memorable{" "}
                  <Typography component={"span"} justifyContent={"end"}>
                    <ThumbUpIcon />
                  </Typography>
                </Typography>
              </Box>
              <Box sx={displayBox}>
                <Typography sx={comingText}>
                  YOU ARE COMING ACROSS AS
                </Typography>
                <Typography sx={resultWord}>
                  Enthusiastic, Memorable{" "}
                  <Typography component={"span"} justifyContent={"end"}>
                    <ThumbUpIcon />
                  </Typography>
                </Typography>
              </Box>{" "}
            </>
          )}
        </Box>
        <Box sx={seanAnalysisContainer}>
          <Box sx={{ display: "flex", flexDirection: "center" }}>
            {" "}
            <Typography sx={seanRecommendsText}>SEAN Recommends</Typography>
            <Typography
              width={"10%"}
              color="#fff"
              align={"right"}
              onClick={handleClickRecomand}
            >
              {recomandAdd ? <Add /> : <RemoveIcon />}
            </Typography>
          </Box>
          <Box sx={{ ...displayBox, bgcolor: "#F7B85E" }}>
            <Typography sx={comingText}>YOU ARE COMING ACROSS AS</Typography>
            <Typography sx={resultWord}>
              Enthusiastic, Memorable{" "}
              <Typography component={"span"} justifyContent={"end"}>
                <ThumbUpIcon />
              </Typography>
            </Typography>
          </Box>
          {recomand ? (
            ""
          ) : (
            <>
              {" "}
              <Box sx={{ ...displayBox, bgcolor: "#F7B85E" }}>
                <Typography sx={comingText}>
                  YOU ARE COMING ACROSS AS
                </Typography>
                <Typography sx={resultWord}>
                  Enthusiastic, Memorable{" "}
                  <Typography component={"span"} justifyContent={"end"}>
                    <ThumbUpIcon />
                  </Typography>
                </Typography>
              </Box>
              <Box sx={{ ...displayBox, bgcolor: "#F7B85E" }}>
                <Typography sx={comingText}>
                  YOU ARE COMING ACROSS AS
                </Typography>
                <Typography sx={resultWord}>
                  Enthusiastic, Memorable{" "}
                  <Typography component={"span"} justifyContent={"end"}>
                    <ThumbUpIcon />
                  </Typography>
                </Typography>
              </Box>{" "}
            </>
          )}
        </Box>
      </Box>
    </>
  );
}

export default ScoreResult;
