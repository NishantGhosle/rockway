import { Box, Typography, Grid } from "@mui/material";
import React from "react";
import AboutHeader from "../aboutHeader";
import arenaone from "../../images/arenaone.JPG";
import arenatwo from "../../images/arenatwo.JPG";
import arenathree from "../../images/arenathree.JPG";
import arenafour from "../../images/arenafour.JPG";
import arenafive from "../../images/arenafive.JPG";
import firstpillar from "../../images/firstpillar.png";
import secondpillar from "../../images/secondpillar.png";
import Navbar from "../navbar";
import Footer from "../footer";

function About() {
  return (
    <>
      <Navbar />
      <AboutHeader />
      {/* Our story */}
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
          Our story
        </Typography>
        <Typography
          style={{
            fontWeight: 400,
            fontSize: "20px",
            lineHeight: "32px",
            textAlign: "left",
          }}
        >
          Welcome to Rockway Fitness, the ultimate destination for fitness
          enthusiasts and beginners alike. Our gym is more than just a place to
          workout; it's a community of like-minded individuals who are dedicated
          to achieving their fitness goals and transforming their bodies and
          minds. We offer a wide range of workout programs, including personal
          training, group fitness classes, and nutrition coaching, all designed
          to help you reach your full potential.
          <br /> <br />
          With state-of-the-art facilities and a team of experienced trainers,
          we're committed to providing you with the best possible fitness
          experience. Join us today and let's embark on a journey of
          self-discovery and transformation together.
        </Typography>
      </Box>
      {/* Our arena  */}
      <Box
        textAlign="center"
        sx={{
          my: { xs: 8, sm: 8, md: 18 },
          mx: { xs: 6, sm: 6, md: 25 },
        }}
      >
        <Typography
          mb={12}
          style={{
            fontWeight: 800,
            fontSize: "50px",
            lineHeight: "50px",
            textAlign: "center",
          }}
        >
          Our Arena.
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <Box
              sx={{
                "&:hover": {
                  transform: "scale(1.01)",
                },
              }}
            >
              <img src={arenaone} alt="hello" width="100%" height="100%" />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box
                  sx={{
                    "&:hover": {
                      transform: "scale(1.01)",
                    },
                  }}
                >
                  <img src={arenatwo} alt="hello" width="100%" height="100%" />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    "&:hover": {
                      transform: "scale(1.01)",
                    },
                  }}
                >
                  <img
                    src={arenathree}
                    alt="hello"
                    width="100%"
                    height="100%"
                  />
                </Box>{" "}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box
                  sx={{
                    "&:hover": {
                      transform: "scale(1.01)",
                    },
                  }}
                >
                  {" "}
                  <img src={arenafour} alt="hello" width="100%" height="100%" />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    "&:hover": {
                      transform: "scale(1.01)",
                    },
                  }}
                >
                  {" "}
                  <img src={arenafive} alt="hello" width="100%" height="100%" />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      {/* Our Pillars */}
      <Box
        textAlign="center"
        sx={{
          my: { xs: 8, sm: 8, md: 18 },
          mx: { xs: 6, sm: 6, md: 15 },
        }}
      >
        <Typography
          mb={12}
          style={{
            fontWeight: 800,
            fontSize: "50px",
            lineHeight: "50px",
            textAlign: "center",
          }}
        >
          Our Pillars.
        </Typography>
        <Grid container spacing={16}>
          <Grid item xs={12} sm={12} md={6}>
            <Box
              sx={{
                "&:hover": {
                  transform: "scale(1.01)",
                },
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={4}>
                  <img
                    src={firstpillar}
                    alt="firstpillar"
                    width="130"
                    height="130"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={8}>
                  <Typography
                    padding="10px"
                    style={{
                      fontWeight: 700,
                      fontSize: "38px",
                      lineHeight: "50px",
                      textAlign: "left",
                    }}
                  >
                    Hello, My Name is Ashutosh Rai
                  </Typography>
                </Grid>
              </Grid>
              <Typography
                marginTop="40px"
                style={{
                  fontWeight: 400,
                  fontSize: "20px",
                  fontStyle: "italic",
                  lineHeight: "36px",
                  textAlign: "left",
                }}
              >
                At our gym, we are dedicated to helping our members achieve
                their fitness goals in a supportive and motivating environment.
                We offer state-of-the-art equipment and facilities, as well as a
                wide variety of classes and programs to suit every fitness level
                and interest. Whether you're looking to lose weight, build
                muscle, or simply improve your overall health and wellness, we
                have the resources and expertise to help you succeed. But we're
                more than just a gym - we're a community. Our friendly and
                knowledgeable staff are always on hand to offer guidance and
                support, while our members are a diverse and welcoming group of
                individuals who share a passion for fitness and wellbeing.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Box
              sx={{
                "&:hover": {
                  transform: "scale(1.01)",
                },
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={4}>
                  <img
                    src={secondpillar}
                    alt="secondpillar"
                    width="130"
                    height="130"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={8}>
                  <Typography
                    padding="10px"
                    style={{
                      fontWeight: 700,
                      fontSize: "38px",
                      lineHeight: "50px",
                      textAlign: "left",
                    }}
                  >
                    Hello, My Name is Ashutosh Rai
                  </Typography>
                </Grid>
              </Grid>
              <Typography
                marginTop="40px"
                style={{
                  fontWeight: 400,
                  fontSize: "20px",
                  fontStyle: "italic",
                  lineHeight: "36px",
                  textAlign: "left",
                }}
              >
                Our gym is more than just a place to work out - it's a
                comprehensive wellness center that caters to all aspects of your
                health and wellbeing. In addition to our top-of-the-line fitness
                equipment and classes, we offer nutritional counseling, massage
                therapy, and other wellness services to help you achieve optimal
                health from the inside out. Our holistic approach to fitness and
                wellness is what sets us apart from other gyms, and we're
                committed to providing our members with the tools and resources
                they need to live their healthiest, happiest lives. Join our
                community today and experience the transformative power of
                fitness and wellness.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
}

export default About;
