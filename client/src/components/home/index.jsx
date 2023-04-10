import {
  Box,
  Typography,
  Button,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useRef } from "react";
import Header from "../header";
import Slider from "react-slick";
import trainingone from "../../images/trainingone.png";
import trainingtwo from "../../images/trainingtwo.png";
import trainingthree from "../../images/trainingthree.png";
import trainingfour from "../../images/trainingfour.png";
import trainingfive from "../../images/trainingfive.png";
import trainingsix from "../../images/trainingsix.png";
import trainingseven from "../../images/trainingseven.png";
import trainingeight from "../../images/trainingeight.png";
import trainingnine from "../../images/trainingnine.png";
import testone from "../../images/testone.jpg";
import testtwo from "../../images/testtwo.jpg";
import testthree from "../../images/testthree.jpg";
import testfour from "../../images/testfour.jpg";
import logoo from "../../images/logoo.jpg";
import CheckTwoToneIcon from "@mui/icons-material/CheckTwoTone";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Faq from "./Faq";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Navbar from "../navbar";
import Footer from "../footer";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import Card from "../../Card";

const useStyles = makeStyles({
  imageContainer: {
    position: "relative",
    display: "inline-block",
    "& img": {
      width: "93%",
      height: "auto",
    },
  },
  textOverlay: {
    position: "absolute",
    top: "80%",
    left: "55%",
    transform: "translate(-60%, -30%)",
    padding: "3px",
    width: "230px",
    color: "#fff",
  },
});

function Home() {
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));
  const classes = useStyles();
  const sliderRef1 = useRef();
  const sliderRef = useRef();
  const settings = {
    centerMode: true,
    arrows: true,
    infinite: true,
    centerPadding: matchesMd ? "20px" : "120px",
    slidesToScroll: 1,
    slidesToShow: 3,
    speed: 200,
  };

  const settings1 = {
    centerMode: true,
    arrows: true,
    infinite: true,
    centerPadding: matchesMd ? "20px" : "120px",
    slidesToScroll: 1,
    slidesToShow: 2,
    speed: 200,
  };
  const next1 = () => {
    sliderRef1.current.slickNext();
  };

  const previous1 = () => {
    sliderRef1.current.slickPrev();
  };

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const checkoutHandler = async (amount) => {
    const {
      data: { key },
    } = await axios.get("http://www.localhost:4000/api/getkey");
    const {
      data: { order },
    } = await axios.post("http://localhost:4000/api/checkout", {
      amount,
    });

    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "Rockway Fitness Club",
      image: logoo,
      order_id: order.id,
      callback_url: "http://localhost:4000/api/paymentverification",
      notes: {
        address: "Bhopal",
      },
      theme: {
        color: "#FF0103",
      },
    };

    const razor = new window.Razorpay(options);
    razor.open();
  };

  return (
    <>
      <Navbar />
      <Header />
      {/* Our mission */}
      <Box
        textAlign="center"
        sx={{
          my: { xs: 8, sm: 8, md: 18 },
          mx: { xs: 6, sm: 6, md: 25 },
        }}
      >
        <Typography
          mb={8}
          style={{
            fontWeight: 800,
            fontSize: "50px",
            lineHeight: "50px",
            textAlign: "center",
          }}
        >
          Our mission
        </Typography>
        <Typography
          style={{
            fontWeight: 400,
            fontSize: "20px",
            lineHeight: "32px",
            textAlign: "left",
          }}
        >
          We strive to create a welcoming and inclusive environment that fosters
          personal growth, self-improvement, and community. <br />
          <br /> Our team of experienced trainers is dedicated to providing
          top-quality fitness programs, personalized attention, and expert
          guidance to ensure our members reach their full potential
        </Typography>
        <Link to="/pricing" style={{ textDecoration: "none" }}>
          {" "}
          <Button
            disableRipple
            sx={{
              width: 200,
              fontSize: "14px",
              mt: 5,
              fontWeight: 800,
              lineHeight: "18px",
              color: "#131316",
              transition: "all 0.1s ease-out",
              "&:hover": {
                color: "#FF0103",
                background: "transparent",
              },
              "&:focus": {
                outline: "none",
              },
            }}
          >
            JOIN NOW
            <KeyboardArrowRightIcon
              style={{
                color: "#fff",
                background: "#000",
                marginLeft: 10,
                borderRadius: 20,
              }}
            />
          </Button>
        </Link>
      </Box>

      {/* Training program */}
      <Box
        sx={{ my: { xs: 10, sm: 20, md: 16 }, mx: { xs: 5, sm: 5, md: 15 } }}
      >
        <Typography
          mb={8}
          style={{
            fontWeight: 800,
            fontSize: "50px",
            lineHeight: "50px",
            textAlign: "center",
          }}
        >
          Training programs.
        </Typography>
        <Slider ref={sliderRef} {...settings}>
          <Box
            className={classes.imageContainer}
            key={trainingone}
            sx={{
              "&:hover": {
                transform: "scale(1.01)",
              },
            }}
          >
            <img src={trainingone} alt="hello" width="93%" height="93%" />
          </Box>
          <Box
            className={classes.imageContainer}
            key={trainingtwo}
            sx={{
              "&:hover": {
                transform: "scale(1.01)",
              },
            }}
          >
            <img src={trainingtwo} alt="hello" width="93%" height="93%" />
          </Box>
          <Box
            className={classes.imageContainer}
            key={trainingthree}
            sx={{
              "&:hover": {
                transform: "scale(1.01)",
              },
            }}
          >
            <img src={trainingthree} alt="hello" width="93%" height="93%" />
          </Box>
          <Box
            className={classes.imageContainer}
            key={trainingfour}
            sx={{
              "&:hover": {
                transform: "scale(1.01)",
              },
            }}
          >
            <img src={trainingfour} alt="hello" width="93%" height="93%" />
          </Box>
          <Box
            className={classes.imageContainer}
            key={trainingfive}
            sx={{
              "&:hover": {
                transform: "scale(1.01)",
              },
            }}
          >
            <img src={trainingfive} alt="hello" width="93%" height="93%" />
          </Box>
          <Box
            className={classes.imageContainer}
            key={trainingsix}
            sx={{
              "&:hover": {
                transform: "scale(1.01)",
              },
            }}
          >
            <img src={trainingsix} alt="hello" width="93%" height="93%" />
          </Box>
          <Box
            className={classes.imageContainer}
            key={trainingseven}
            sx={{
              "&:hover": {
                transform: "scale(1.01)",
              },
            }}
          >
            <img src={trainingseven} alt="hello" width="93%" height="93%" />
          </Box>
          <Box
            className={classes.imageContainer}
            key={trainingeight}
            sx={{
              "&:hover": {
                transform: "scale(1.01)",
              },
            }}
          >
            <img src={trainingeight} alt="hello" width="93%" height="93%" />
          </Box>
          <Box
            className={classes.imageContainer}
            key={trainingnine}
            sx={{
              "&:hover": {
                transform: "scale(1.01)",
              },
            }}
          >
            <img src={trainingnine} alt="hello" width="93%" height="93%" />
          </Box>
        </Slider>
        <Box style={{ textAlign: "right", marginTop: 20 }}>
          <KeyboardArrowLeftIcon
            onClick={previous}
            fontSize="large"
            style={{
              color: "#fff",
              background: "#000",
              borderRadius: 20,
              width: "26.67px",
              height: "26.67px",
            }}
          />
          <KeyboardArrowRightIcon
            onClick={next}
            fontSize="large"
            style={{
              color: "#fff",
              background: "#000",
              marginLeft: 10,
              borderRadius: 20,
              width: "26.67px",
              height: "26.67px",
            }}
          />
        </Box>
      </Box>

      {/* Pricing  */}
      <Box sx={{ my: { md: 16 }, mx: { xs: 4.5, sm: 10, md: 20 } }}>
        <Typography
          mb={8}
          sx={{
            fontWeight: 800,
            fontSize: "50px",
            lineHeight: "50px",
            textAlign: "center",
          }}
        >
          Pricing Plan.
        </Typography>
        <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 1, md: 3 }}>
          <Card
            num={1}
            name="Basic"
            amount={20}
            checkoutHandler={checkoutHandler}
            content={
              <>
                <List
                  sx={{
                    width: "100%",
                    mt: 2,
                    maxWidth: 360,
                  }}
                >
                  <ListItem disableRipple>
                    <CheckTwoToneIcon />
                    <Typography
                      ml={2}
                      sx={{
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "26px",
                        textAlign: "center",
                      }}
                    >
                      Unlimited gym access
                    </Typography>
                  </ListItem>
                  <ListItem disableRipple>
                    <CheckTwoToneIcon />
                    <Typography
                      ml={2}
                      sx={{
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "26px",
                        textAlign: "center",
                      }}
                    >
                      Free fitness consultation
                    </Typography>
                  </ListItem>
                  <ListItem disableRipple>
                    <CheckTwoToneIcon />
                    <Typography
                      ml={2}
                      sx={{
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "26px",
                        textAlign: "center",
                      }}
                    >
                      1 training programs
                    </Typography>
                  </ListItem>
                </List>
              </>
            }
          />
          <Card
            num={5}
            name="Premium"
            amount={35}
            personal="Personal"
            checkoutHandler={checkoutHandler}
            content={
              <>
                <List
                  sx={{
                    width: "100%",
                    mt: 2,
                    maxWidth: 360,
                  }}
                >
                  <ListItem disableRipple>
                    <CheckTwoToneIcon />
                    <Typography
                      ml={2}
                      style={{
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "26px",
                        textAlign: "center",
                      }}
                    >
                      Unlimited gym access
                    </Typography>
                  </ListItem>
                  <ListItem disableRipple>
                    <CheckTwoToneIcon />
                    <Typography
                      ml={2}
                      style={{
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "26px",
                        textAlign: "center",
                      }}
                    >
                      5 training programs
                    </Typography>
                  </ListItem>
                  <ListItem disableRipple>
                    <CheckTwoToneIcon />
                    <Typography
                      ml={2}
                      style={{
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "26px",
                        textAlign: "center",
                      }}
                    >
                      Free fitness consultation
                    </Typography>
                  </ListItem>
                  <ListItem disableRipple>
                    <CheckTwoToneIcon />
                    <Typography
                      ml={2}
                      style={{
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "26px",
                        textAlign: "center",
                      }}
                    >
                      Personal trainer
                    </Typography>
                  </ListItem>
                </List>
              </>
            }
          />
          <Card
            num="unlimited"
            name="Elite"
            amount={49}
            personal="Personal trainer"
            drink="50% off drinks"
            checkoutHandler={checkoutHandler}
            content={
              <>
                <List
                  sx={{
                    width: "100%",
                    mt: 2,
                    maxWidth: 360,
                  }}
                >
                  <ListItem disableRipple>
                    <CheckTwoToneIcon />
                    <Typography
                      ml={2}
                      style={{
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "26px",
                        textAlign: "center",
                      }}
                    >
                      Unlimited gym access
                    </Typography>
                  </ListItem>
                  <ListItem disableRipple>
                    <CheckTwoToneIcon />
                    <Typography
                      ml={2}
                      style={{
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "26px",
                        textAlign: "center",
                      }}
                    >
                      All training programs
                    </Typography>
                  </ListItem>
                  <ListItem disableRipple>
                    <CheckTwoToneIcon />
                    <Typography
                      ml={2}
                      style={{
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "26px",
                        textAlign: "center",
                      }}
                    >
                      Free fitness consultation
                    </Typography>
                  </ListItem>
                  <ListItem disableRipple>
                    <CheckTwoToneIcon />
                    <Typography
                      ml={2}
                      style={{
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "26px",
                        textAlign: "center",
                      }}
                    >
                      Personal trainer
                    </Typography>
                  </ListItem>
                  <ListItem disableRipple>
                    <CheckTwoToneIcon />
                    <Typography
                      ml={2}
                      style={{
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "26px",
                        textAlign: "center",
                      }}
                    >
                      50% off drinks
                    </Typography>
                  </ListItem>
                </List>
              </>
            }
          />
        </Grid>
      </Box>

      {/* Testimonials */}
      <Box
        sx={{ my: { xs: 10, sm: 20, md: 16 }, mx: { xs: 5, sm: 5, md: 10 } }}
      >
        <Grid container spacing={5}>
          <Grid item xs={12} sm={12} md={4}>
            <Typography
              mb={{ xs: 2, sm: 2, md: 30 }}
              style={{
                fontWeight: 800,
                fontSize: "50px",
                lineHeight: "50px",
                textAlign: "left",
              }}
            >
              Testimonials
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={8}>
            <Slider ref={sliderRef1} {...settings1}>
              <Box
                key={testone}
                className={classes.imageContainer}
                sx={{
                  "&:hover": {
                    transform: "scale(1.01)",
                  },
                }}
              >
                <img src={testone} alt="hello" width="93%" height="93%" />
                <Typography
                  className={classes.textOverlay}
                  style={{
                    fontWeight: 400,
                    fontSize: "12px",
                    fontStyle: "italic",
                    lineHeight: "26px",
                    textAlign: "center",
                  }}
                >
                  "Going to the gym has transformed my body and my mindset."
                  <br /> <b style={{ fontWeight: "700" }}>Mukta Singh</b>
                </Typography>
              </Box>
              <Box
                key={testtwo}
                className={classes.imageContainer}
                sx={{
                  "&:hover": {
                    transform: "scale(1.01)",
                  },
                }}
              >
                <img src={testtwo} alt="hello" width="93%" height="93%" />
                <Typography
                  className={classes.textOverlay}
                  style={{
                    fontWeight: 400,
                    fontSize: "12px",
                    fontStyle: "italic",
                    lineHeight: "26px",
                    textAlign: "center",
                  }}
                >
                  “Healthier lifestyle that has positively impacted all aspects
                  of my life."
                  <br /> <b style={{ fontWeight: "700" }}>Rahul Kumar</b>
                </Typography>
              </Box>
              <Box
                key={testthree}
                className={classes.imageContainer}
                sx={{
                  "&:hover": {
                    transform: "scale(1.01)",
                  },
                }}
              >
                <img src={testthree} alt="hello" width="93%" height="93%" />
                <Typography
                  className={classes.textOverlay}
                  style={{
                    fontWeight: 400,
                    fontSize: "12px",
                    fontStyle: "italic",
                    lineHeight: "26px",
                    textAlign: "center",
                  }}
                >
                  “Feeling energized and ready to take on any challenge."
                  <br /> <b style={{ fontWeight: "700" }}>Bobby</b>
                </Typography>
              </Box>
              <Box
                key={testfour}
                className={classes.imageContainer}
                sx={{
                  "&:hover": {
                    transform: "scale(1.01)",
                  },
                }}
              >
                <img src={testfour} alt="hello" width="93%" height="93%" />
                <Typography
                  className={classes.textOverlay}
                  style={{
                    fontWeight: 400,
                    fontSize: "12px",
                    fontStyle: "italic",
                    lineHeight: "26px",
                    textAlign: "center",
                  }}
                >
                  “Feel so strong and empowered until I started going to the gym
                  regularly”
                  <br /> <b style={{ fontWeight: "700" }}>Pooja</b>
                </Typography>
              </Box>
            </Slider>
          </Grid>
          <Box
            style={{ textAlign: "left", marginLeft: "50px", marginTop: "30px" }}
          >
            <KeyboardArrowLeftIcon
              onClick={previous1}
              fontSize="large"
              style={{
                color: "#fff",
                background: "#000",
                borderRadius: 20,
                width: "26.67px",
                height: "26.67px",
              }}
            />
            <KeyboardArrowRightIcon
              onClick={next1}
              fontSize="large"
              style={{
                color: "#fff",
                background: "#000",
                borderRadius: 20,
                width: "26.67px",
                height: "26.67px",
                marginLeft: 10,
              }}
            />
          </Box>
        </Grid>
      </Box>

      {/* Faq  */}
      <Box sx={{ my: { md: 16 }, mx: { xs: 5, sm: 5, md: 25 } }}>
        <Typography
          mb={8}
          style={{
            fontWeight: 800,
            fontSize: "50px",
            lineHeight: "50px",
            textAlign: "center",
          }}
        >
          FAQ.
        </Typography>
        <Faq />
      </Box>
      <Footer />
    </>
  );
}

export default Home;