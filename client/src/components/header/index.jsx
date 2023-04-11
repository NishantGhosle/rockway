import React from "react";
import { Box, Button, Grid, ListItem, Typography } from "@mui/material";
import headerf from "../../images/headerf.jpg";
import headerfsm from "../../images/headerfsm.png";
import homecard1 from "../../images/homecard1.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import List from "@mui/material/List";
import CheckTwoToneIcon from "@mui/icons-material/CheckTwoTone";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  imageContainer: {
    position: "relative",
    display: "inline-block",
    "& img": {
      width: "100%",
      height: "auto",
    },
  },
  textOverlay: {
    position: "absolute",
    left: "50%",
    padding: "3px",
    color: "#fff",
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <Box
        sx={{
          backgroundImage: {
            xs: `url(${headerfsm})`,
            sm: `url(${headerfsm})`,
            md: `url(${headerf})`,
          },
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "100vh",
          width: "100%",
        }}
      >
        <Grid container spacing={2}>
          <Grid item sm={12} md={6}>
            <Box
              sx={{
                position: "absolute",
                top: { xs: "14%", sm: "20%", md: "29%" },
                left: { xs: "11%", sm: "10%", md: "10%" },
                color: "#fff",
              }}
            >
              <Typography
                style={{
                  fontStyle: "normal",
                  fontWeight: 800,
                  fontSize: "46px",
                  lineHeight: "52px",
                }}
              >
                Get the best part <br /> of your day <br />
                <Typography
                  style={{
                    color: "#FF0103",
                    fontStyle: "normal",
                    fontWeight: 800,
                    fontSize: "46px",
                    lineHeight: "52px",
                  }}
                >
                  – you fit here.
                </Typography>
              </Typography>
              <Typography variant="body1" align="left" py={3}>
                We provide serious fitness but within <br /> a fun and friendly,
                safe space.
              </Typography>
              <Link to="/pricing" style={{ textDecoration: "none" }}>
                <Button
                  disableRipple
                  sx={{
                    width: "159px",
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: 18,
                    height: "46px",
                    border: 1,
                    background: "#FFFFFF",
                    color: "#131316",
                    borderRadius: "4px",
                    transition: "all 0.3s ease-out",
                    "&:hover": {
                      border: 1,
                      background: "transparent",
                      color: "#ffffff",
                    },
                    "&:focus": {
                      outline: "none",
                    },
                  }}
                >
                  JOIN NOW
                </Button>
              </Link>
              <Link to="/pricing" style={{ textDecoration: "none" }}>
                <Button
                  disableRipple
                  sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                    background: "transparent",
                    color: "#fff",
                    "&:hover": {
                      background: "transparent",
                      color: "#FF0103",
                    },
                    "&:focus": {
                      outline: "none",
                    },
                  }}
                >
                  FREE ROUTINE PLAN
                  <ArrowRightAltIcon />
                </Button>
              </Link>
            </Box>
          </Grid>
          <Grid item sm={12} md={6}>
            <Box
              sx={{
                position: "absolute",
                bottom: { xs: 40, sm: 30, md: 30 },
                right: 0,
                display: "flex",
                flexDirection: { xs: "column", sm: "column" },
                justifyContent: "center",
                alignItems: "center",
              }}
              className={classes.imageContainer}
            >
              <img src={homecard1} alt="hello" />
              <List
                className={classes.textOverlay}
                sx={{
                  mt: -28,
                  ml: -50,
                  width: 300,
                }}
                component="nav"
              >
                <ListItem disableRipple>
                  <CheckTwoToneIcon />
                  <Typography
                    ml={2}
                    sx={{
                      fontWeight: 400,
                      fontSize: { xs: "14px", sm: "16px" },
                      lineHeight: { xs: "22px", sm: "26px" },
                      textAlign: "left",
                      color: "#fff",
                    }}
                  >
                    Accurate dumble weight
                  </Typography>
                </ListItem>
                <ListItem disableRipple>
                  <CheckTwoToneIcon />
                  <Typography
                    ml={2}
                    sx={{
                      fontWeight: 400,
                      fontSize: { xs: "14px", sm: "16px" },
                      lineHeight: { xs: "22px", sm: "26px" },
                      textAlign: "left",
                      color: "#fff",
                    }}
                  >
                    Awesome Gym Facilities
                  </Typography>
                </ListItem>
                <ListItem disableRipple>
                  <CheckTwoToneIcon />
                  <Typography
                    ml={2}
                    sx={{
                      fontWeight: 400,
                      fontSize: { xs: "14px", sm: "16px" },
                      lineHeight: { xs: "22px", sm: "26px" },
                      textAlign: "left",
                      color: "#fff",
                    }}
                  >
                    World Class Trainers
                  </Typography>
                </ListItem>
                <ListItem disableRipple>
                  <CheckTwoToneIcon />
                  <Typography
                    ml={2}
                    sx={{
                      fontWeight: 400,
                      fontSize: { xs: "14px", sm: "16px" },
                      lineHeight: { xs: "22px", sm: "26px" },
                      textAlign: "left",
                      color: "#fff",
                    }}
                  >
                    Wide Workout Place
                  </Typography>
                </ListItem>
              </List>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Header;
