import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Stack, Grid } from "@mui/material";
import logo from "../../images/logo.png";
import { Link, useLocation } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const drawerWidth = 300;

const useStyles = makeStyles({
  activeLink0: {
    background: "#fff",
    textDecoration: "none",
    width: "68px",
    fontWeight: 500,
    height: "21px",
    paddingLeft: "12px",
    paddingTop: "2px",
    lineHeight: "18px",
    padding: "2px",
    color: "#000",
    "&:hover": {
      textDecoration: "none",
      color: "#000",
    },
  },
  link0: {
    textDecoration: "none",
    width: "68px",
    fontWeight: 500,
    height: "21px",
    paddingLeft: "12px",
    paddingTop: "2px",
    lineHeight: "18px",
    padding: "2px",
    color: "#fff",
    "&:hover": {
      textDecoration: "none",
      color: "#fff",
    },
  },
  activeLink1: {
    background: "#fff",
    textDecoration: "none",
    width: "68px",
    fontWeight: 500,
    height: "21px",
    paddingLeft: "12px",
    paddingTop: "2px",
    lineHeight: "18px",
    padding: "2px",
    color: "#000",
    "&:hover": {
      textDecoration: "none",
      color: "#000",
    },
  },
  link1: {
    textDecoration: "none",
    width: "68px",
    fontWeight: 500,
    height: "21px",
    paddingLeft: "12px",
    paddingTop: "2px",
    lineHeight: "18px",
    padding: "2px",
    color: "#fff",
    "&:hover": {
      textDecoration: "none",
      color: "#fff",
    },
  },
  activeLink2: {
    background: "#fff",
    textDecoration: "none",
    width: "85px",
    height: "21px",
    fontWeight: 500,
    paddingLeft: "10px",
    paddingTop: "2px",
    lineHeight: "18px",
    padding: "2px",
    color: "#000",
    "&:hover": {
      textDecoration: "none",
      color: "#000",
    },
  },
  link2: {
    textDecoration: "none",
    width: "85px",
    height: "21px",
    fontWeight: 500,
    paddingLeft: "10px",
    paddingTop: "2px",
    lineHeight: "18px",
    padding: "2px",
    color: "#fff",
    "&:hover": {
      textDecoration: "none",
      color: "#fff",
    },
  },
  activeLink3: {
    background: "#fff",
    textDecoration: "none",
    width: "68px",
    height: "21px",
    fontWeight: 500,
    paddingLeft: "10px",
    paddingTop: "2px",
    lineHeight: "18px",
    padding: "2px",
    color: "#000",
    "&:hover": {
      textDecoration: "none",
      color: "#000",
    },
  },
  link3: {
    textDecoration: "none",
    width: "68px",
    height: "21px",
    fontWeight: 500,
    paddingLeft: "10px",
    paddingTop: "2px",
    lineHeight: "18px",
    padding: "2px",
    color: "#fff",
    "&:hover": {
      textDecoration: "none",
      color: "#fff",
    },
  },
  activeLink4: {
    background: "#fff",
    textDecoration: "none",
    width: "66px",
    fontWeight: 500,
    height: "21px",
    paddingLeft: "12px",
    paddingTop: "2px",
    lineHeight: "18px",
    padding: "2px",
    color: "#000",
    "&:hover": {
      textDecoration: "none",
      color: "#000",
    },
  },
  link4: {
    textDecoration: "none",
    width: "66px",
    fontWeight: 500,
    height: "21px",
    paddingLeft: "12px",
    paddingTop: "2px",
    lineHeight: "18px",
    padding: "2px",
    color: "#fff",
    "&:hover": {
      textDecoration: "none",
      color: "#fff",
    },
  },
});

function Navbar(props) {
  const classes = useStyles();
  const location = useLocation();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", p: 3 }}>
      <Link to="/">
        <img src={logo} width={"80%"} height={"20%"} alt="Rockway logo" />
      </Link>
      <Divider />
      <List role="menubar">
        <Link
          to="/home"
          style={{
            textDecoration: "none",
            color: "#000",
          }}
        >
          Home
        </Link>
        <Divider style={{ marginTop: 20 }} />
        <Link to="/about" style={{ textDecoration: "none", color: "#000" }}>
          About
        </Link>
        <Divider style={{ marginTop: 20 }} />
        <Link to="/workouts " style={{ textDecoration: "none", color: "#000" }}>
          Workouts
        </Link>
        <Divider style={{ marginTop: 20 }} />
        <Link to="/pricing" style={{ textDecoration: "none", color: "#000" }}>
          Pricing
        </Link>
        <Divider style={{ marginTop: 20 }} />
        <Link to="/blogs" style={{ textDecoration: "none", color: "#000" }}>
          Blogs
        </Link>
        <Divider style={{ marginTop: 20 }} />
        <Link to="#" style={{ textDecoration: "none", color: "#000" }}>
          <Button
            disableRipple
            sx={{
              my: 2,
              background: "transparent",
              color: "#000",
              border: "2px solid #FF0103",
              px: 5,
            }}
          >
            Login
          </Button>
        </Link>
        <br />
        <Link
          to="#"
          style={{ marginTop: 2, textDecoration: "none", color: "#000" }}
        >
          <Button
            disableRipple
            sx={{
              transition: "all 0.3s ease-out",
              background: "#FF0103",
              color: "#fff",
              px: 5,
              borderColor: "#0040ff",
              borderRadius: "1px",
              border: "2px solid #FF0103",
            }}
          >
            SignUp
          </Button>
        </Link>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        elevation={0}
        sx={{
          background: "#131316",
          width: "100%",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none", xs: "block" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <List
              role="menubar"
              style={{
                display: "flex",
                flexDirection: "row",
                padding: 0,
              }}
            >
              <>
                <Grid container spacing={10}>
                  <Grid item xs={3}>
                    <Link to="/">
                      <img
                        src={logo}
                        width={"45%"}
                        height={"auto"}
                        style={{ marginTop: 13, marginLeft: 20 }}
                        alt="Rockway logo"
                      />
                    </Link>
                  </Grid>
                  <Grid item xs={6}>
                    <List
                      role="menubar"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        fontSize: "16px",
                        fontStyle: "normal",
                      }}
                      sx={{
                        p: 2,
                      }}
                    >
                      <ListItem role="none">
                        <Link
                          to="/home"
                          className={`${
                            location.pathname === "/home"
                              ? classes.activeLink0
                              : classes.link0
                          }`}
                        >
                          Home
                        </Link>
                      </ListItem>
                      <ListItem role="none">
                        <Link
                          to="/about"
                          className={` ${
                            location.pathname === "/about"
                              ? classes.activeLink1
                              : classes.link1
                          }`}
                        >
                          About
                        </Link>
                      </ListItem>
                      <ListItem role="none">
                        <Link
                          to="/workouts"
                          className={`${
                            location.pathname === "/workouts"
                              ? classes.activeLink2
                              : classes.link2
                          }`}
                        >
                          Workouts
                        </Link>
                      </ListItem>
                      <ListItem role="none">
                        <Link
                          to="/pricing"
                          className={`${
                            location.pathname === "/pricing"
                              ? classes.activeLink3
                              : classes.link3
                          }`}
                        >
                          Pricing
                        </Link>
                      </ListItem>
                      <ListItem role="none">
                        <Link
                          to="/blogs"
                          className={`${
                            location.pathname === "/blogs"
                              ? classes.activeLink4
                              : classes.link4
                          }`}
                        >
                          Blogs
                        </Link>
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid item xs={3}>
                    <Stack
                      direction="row"
                      spacing={2}
                      sx={{
                        p: 2,
                      }}
                    >
                      <Button
                        disableRipple
                        sx={{
                          background: "transparent",
                          fontWeight: 700,
                          color: "#fff",
                          "&:hover": {
                            transition: "all 0.3s ease-out",
                            color: "#FF0103",
                          },
                          "&:focus": {
                            outline: "none",
                          },
                        }}
                      >
                        Login
                      </Button>
                      <Button
                        disableRipple
                        sx={{
                          fontWeight: 700,
                          transition: "all 0.3s ease-out",
                          background: "#FF0103",
                          color: "#fff",
                          padding: "12px 30px",
                          borderColor: "#0040ff",
                          borderRadius: "1px",
                          border: "2px solid #FF0103",
                          width: "115px",
                          height: "42px",
                          whiteSpace: "nowrap",
                          "&:focus": {
                            outline: "none",
                          },
                        }}
                      >
                        Sign Up
                      </Button>
                    </Stack>
                  </Grid>
                </Grid>
              </>
            </List>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
