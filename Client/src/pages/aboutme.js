import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Running from "../running.jpeg";

function AboutMe() {
  return (
    <>
      <Box>
        <Paper
          elevation={3}
          sx={{
            marginTop: "30%",
            position: "absolute",
            backgroundColor: "black",
            borderRadius: "15px",
          }}
        >
          <img
            style={{ borderRadius: "25px", marginLeft: "20%", marginTop: "5%" }}
            width="200"
            alt="running"
            src={Running}
          ></img>
          <Box
            sx={{
              color: "sandybrown",
              textAlign: "center",
              backgroundColor: "black",
            }}
          >
            About me:
          </Box>
          <Box sx={{ color: "sandybrown", backgroundColor: "black" }}>
            <ul>
              <li>Previos D1 Athlete</li>
              <li>Previous Tier3+ Health Coach With Equinox</li>
              <li>Precision nutrition certified</li>
              <li>Kettlebells & TRX certified</li>
              <li>ISSA certified</li>
              <li>Extreme passion to help change peoples lives</li>
            </ul>
          </Box>
        </Paper>
      </Box>
    </>
  );
}

export default AboutMe;
