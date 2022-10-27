import * as React from "react";
import ImageStretch from "../LogoRemovedBackground.png";
import Typography from "@mui/material/Typography";
import Smoke from "../smokeGrey.webp";
import Box from "@mui/material/Box";
import Images from "./images";
import Services from "./services";
import Contact from "./contact";
import Fears from "../fears.mp4";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Header from "./small-screen-nav";

const styles = {
  backGround: {
    backgroundColor: "black",
  },
  fitnessLogo: {
    color: "white",
  },
  headerLogoWrapper: {
    display: "flex",
  },
  image: {
    position: "absolute",
    zIndex: "-8",
    height: "479px",
    width: "100%",
  },
  video: {   
    marginTop: "5%",
    width: "100%",   
    border: "4px solid sandybrown",
    borderRadius: "158px",
    boxSizing: "border-box",
    boxShadow: "1px 1px 71px whitesmoke",
    marginBottom: "4%",
  },
};
function WelcomePage() {
  const theme = useTheme();
  const wideWindow = useMediaQuery(theme.breakpoints.up("md"));


  const windowChange = React.useMemo(() => {
    console.log(wideWindow);
    if (wideWindow) {
      return (
        <>
          <img alt="smoke" style={styles.image} src={Smoke}></img>
          <div style={{ margin: "0px auto" }}>
            F
            <img
              alt="stretch"
              width="200"
              height="200"
              src={ImageStretch}
            ></img>{" "}
            T N E S S{" "}
            <span style={{ marginRight: "4%", marginLeft: "4%" }}>I S</span>{" "}
            <span>L I F E</span>
          </div>
        </>
      );
    } else {
      return (
        <div style={{backgroundColor: "black", width: "100%"}}>
          <div style={{ margin: "0px auto", width: "50%"}}><img alt="stretch" width="200" height="200" src={ImageStretch}></img>{" "}</div>
        </div>
      );
    }
  }, [wideWindow]);

  return (
    <>
    <Header></Header>
      <div>
        <Box style={styles.headerLogoWrapper}>
          <Typography variant="h1" color="white" noWrap sx={{ flexGrow: 1 }}>
            <div style={styles.headerLogoWrapper}>
             {windowChange}
            </div>
          </Typography>
        </Box>
       
        <div style={{ backgroundColor: "black" }}>          
          <Typography
            sx={{ color: "whitesmoke", marginBottom: "1%", paddingTop: "5%", fontStyle:"italics", fontFamily: "ui-monospace" }}
            align="center"
            variant="h4"
          >
            Welcome To The Garage Gym!
          </Typography>
          <Box>
            <div style={{width: "100%", margin: "0px auto"}}>
            <video style={styles.video} autoPlay muted loop src={Fears}></video>
            </div>
          </Box>
          <Images></Images>
          <Services></Services>
          <Contact></Contact>
        </div>
      </div>
    </>
  );
}

export default WelcomePage;
