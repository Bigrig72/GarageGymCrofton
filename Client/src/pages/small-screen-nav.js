import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import FitnessCenterOutlinedIcon from "@mui/icons-material/FitnessCenterOutlined";
import useAppContext from "../app-context";
import Link from "@mui/material/Link";


const pages = [
  {
    name: "Services",
    route: "/services",
  },
  {
    name: "Schedule",
    route: "/schedule",
  },
  {
    name: "Portal",
    route: "/portal",
  },
  {
    name: "About Me",
    route: "/aboutme",
  },
];

const ResponsiveAppBar = () => {
  const { loggedIn } = useAppContext();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const loggedInBanner = loggedIn ? "Logout" : "Login";
  const settings = [   
    {
      name: loggedInBanner,
      route: (loggedInBanner ? "/logout" : "/login"),
    },
  ];

  return (
    <>
      {
        <AppBar position="static" style={{ backgroundColor: "black" }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Garage{" "}
                <span
                  style={{
                    backgroundColor: "yellow",
                    color: "black",
                    borderRadius: "5px",
                  }}
                >
                  GYM Test ag
                </span>
              </Typography>

              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "flex", md: "none" },
                  backgroundColor: "black",
                }}
              >
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <Avatar>
                  <FitnessCenterOutlinedIcon />
                  </Avatar>
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Button
                        key={page.name}
                        href={page.route}
                        onClick={handleCloseNavMenu}
                        sx={{ color: "black" }}
                      >
                        {page.name}
                      </Button>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                The Garage Gym
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    href={page.route}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page.name}
                  </Button>
                ))}
              </Box>
              {/* <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                     <Link
                variant="button"
                color="text.primary"
                href={setting.route}
                
              >
                {setting.name}
              </Link>
                    </MenuItem>
                  ))}
                </Menu>
              </Box> */}
            </Toolbar>
          </Container>
        </AppBar>
      }
    </>
  );
};
export default ResponsiveAppBar;
