import { Box, Typography, Grid } from "@mui/material";
import React from "react";
import logo from "../../images/logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  icon: {
    color: "#fff",
    "&:hover": {
      color: "#FF0103",
      textDecoration: "none",
      transition: "all 0.2s ease-out",
    },
  },
});

function Footer() {
  const classes = useStyles();
  return (
    <>
      <Box
        sx={{
          mt: 30,
          textAlign: "center",
          background: "#131316",
          height: "auto",
          py: 5,
          px: { xs: 3, sm: 6 },
        }}
      >
        <Box sx={{ color: "#fff" }}>
          <img src={logo} width={"10%"} height={"80%"} alt="Rockway logo" />
        </Box>
        <Box sx={{ color: "#fff", pt: 5 }}>
          <Typography
            style={{
              fontWeight: 400,
              fontSize: "17px",
              lineHeight: "22.13px",
              textAlign: "center",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed
            do eiusmod tempor incididunt.
          </Typography>
        </Box>
        <Box
          sx={{
            color: "#fff",
            pt: 6,
            px: { xs: 15, sm: 15, md: 35, lg: 35 },
            fontSize: "15px",
            fontWeight: 400,
            lineHeight: "18.15px",
          }}
        >
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={4} md={2}>
              <Typography>
                {" "}
                <Link to="/workouts" className={classes.icon}>
                  Workout
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={2}>
              <Typography>
                {" "}
                <Link to="/pricing" className={classes.icon}>
                  Pricing
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={2}>
              <Typography>
                <Link to="/about" className={classes.icon}>
                  About
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={2}>
              <Typography>
                <Link to="/blogs" className={classes.icon}>
                  Blogs
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            color: "#fff",
            px: { xs: 15, sm: 15, md: 70 },
            pt: 6,
            fontSize: "15px",
            fontWeight: 400,
            lineHeight: "18.15px",
          }}
        >
          <Grid container spacing={{ xs: 0, sm: 3, md: 0 }}>
            <Grid item xs={4}>
              <Link to="/">
                <FacebookIcon className={classes.icon} />
              </Link>
            </Grid>
            <Grid item xs={4}>
              <Link to="/">
                {" "}
                <TwitterIcon className={classes.icon} />
              </Link>
            </Grid>
            <Grid item xs={4}>
              <Link to="/">
                {" "}
                <InstagramIcon className={classes.icon} />
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default Footer;
