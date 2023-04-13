import React from "react";
import logo from "../../images/logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { Typography, Grid, Box } from "@mui/material";

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
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <img src={logo} width={"20%"} height={"auto"} alt="Rockway logo" />
          </Link>
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
            Transform your body and your life with our comprehensive <br />{" "}
            workout programs and personalized nutrition plans.
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
              <Link
                to="/workouts"
                className={classes.icon}
                onClick={() => window.scrollTo(0, 0)}
              >
                Workout
              </Link>
            </Grid>
            <Grid item xs={12} sm={4} md={2}>
              <Link
                to="/pricing"
                className={classes.icon}
                onClick={() => window.scrollTo(0, 0)}
              >
                Pricing
              </Link>
            </Grid>
            <Grid item xs={12} sm={4} md={2}>
              <Link
                to="/about"
                className={classes.icon}
                onClick={() => window.scrollTo(0, 0)}
              >
                About
              </Link>
            </Grid>
            <Grid item xs={12} sm={4} md={2}>
              <Link
                to="/blogs"
                className={classes.icon}
                onClick={() => window.scrollTo(0, 0)}
              >
                Blogs
              </Link>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            color: "#fff",
            px: { xs: 12, sm: 12, md: 70 },
            pt: 6,
            fontSize: "15px",
            fontWeight: 400,
            lineHeight: "18.15px",
          }}
        >
          <Grid container spacing={{ xs: 4, sm: 3, md: 0 }}>
            <Grid item xs={4}>
              <Link to="https://www.facebook.com/rockwayfitness/">
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
              <Link to="https://www.instagram.com/rockway_fitness/?hl=en">
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
