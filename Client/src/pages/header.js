import React, { useMemo, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import useAppContext from "../app-context";


const styles = {
  header: {
    color: "red",
    backGroundColor: "black",
  },
  logo: {
    border: "2px solid sandybrown",
    height: "28vh",
    position: "absolute",
    top: "0",
    left: "0",
    width: "15%",
  },
};

function Header() {
  const { loggedIn } = useAppContext();
  const loggedInBanner = loggedIn ? "Logout" : "Login";
  const [hideAppBar, setHideAppBar] = useState(false);


  function onClickHandle() {
    alert(hideAppBar);
    setHideAppBar(true);
    alert(hideAppBar);
  }

  return (
    <React.Fragment>
      {
        <AppBar
          position="static"
          elevation={0}
          style={styles.header}
          sx={{
            borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
            backgroundColor: "black",
          }}
        >
          <Toolbar sx={{ flexWrap: "wrap" }}>
            <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
              <Link
                color="text.primary"
                href="/"
                sx={{ textDecoration: "none", color: "purple" }}
              >             
              </Link>
              The Garage GYM
            </Typography>
            <nav>
              <Link
                variant="button"
                color="text.primary"
                href="/schedule"
                sx={{ my: 1, mx: 1.5, color: "whitesmoke" }}
              >
                Schedule
              </Link>
              <Link
                variant="button"
                color="text.primary"
                href="/services"
                sx={{ my: 1, mx: 1.5, color: "whitesmoke" }}
              >
                Services
              </Link>
              <Link
                variant="button"
                color="text.primary"
                href="/portal"
                sx={{ my: 1, mx: 1.5, color: "whitesmoke" }}
              >
                My Portal
              </Link>
            </nav>          
          </Toolbar>
        </AppBar>
      }
     
    </React.Fragment>
  );
}

export default Header;
