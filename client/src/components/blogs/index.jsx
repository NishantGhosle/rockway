import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useRef } from "react";
import Slider from "react-slick";
import collectionone from "../../images/collectionone.jpg";
import collectiontwo from "../../images/collectiontwo.jpg";
import collectionthree from "../../images/collectionthree.jpg";
import collectionfour from "../../images/collectionfour.jpg";
import BlogHeader from "../blogHeader";
import Footer from "../footer";
import Navbar from "../navbar";
import { Link } from "react-router-dom";

function Blogs() {
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));
  const sliderRef = useRef();

  const settings = {
    centerMode: true,
    arrows: true,
    infinite: true,
    centerPadding: matchesMd ? "20px" : "120px",
    slidesToScroll: 1,
    slidesToShow: 2,
    speed: 200,
  };

  return (
    <>
      <Navbar />
      <BlogHeader />
      {/* top picks */}
      <Box sx={{ mt: 10, mx: { xs: 5, sm: 5, md: 10 } }}>
        <Typography
          marginY={{ xs: "55px", sm: "55px", md: "25px" }}
          style={{
            fontWeight: 800,
            color: "#000",
            fontSize: "50px",
            lineHeight: "50px",
            textAlign: "center",
          }}
        >
          Our blogs.
        </Typography>
        <Typography
          marginY="25px"
          style={{
            fontWeight: 500,
            color: "#000",
            fontSize: "29px",
            lineHeight: "27px",
            textAlign: "left",
          }}
        >
          Top picks
        </Typography>
        <Box textAlign="center">
          <Slider ref={sliderRef} {...settings}>
            <Link to="/firstBlog">
              <Box
                key={collectionone}
                sx={{
                  "&:hover": {
                    transform: "scale(1.01)",
                  },
                }}
              >
                <img src={collectionone} alt="hello" width="95%" height="95%" />
              </Box>
            </Link>
            <Link to="/secondBlog">
              <Box
                key={collectiontwo}
                sx={{
                  "&:hover": {
                    transform: "scale(1.01)",
                  },
                }}
              >
                <img src={collectiontwo} alt="hello" width="95%" height="95%" />
              </Box>
            </Link>{" "}
            <Link to="/thirdBlog">
              <Box
                key={collectionthree}
                sx={{
                  "&:hover": {
                    transform: "scale(1.01)",
                  },
                }}
              >
                <img
                  src={collectionthree}
                  alt="hello"
                  width="95%"
                  height="95%"
                />
              </Box>
            </Link>{" "}
            <Link to="/fourthBlog">
              <Box
                key={collectionfour}
                sx={{
                  "&:hover": {
                    transform: "scale(1.01)",
                  },
                }}
              >
                <img
                  src={collectionfour}
                  alt="hello"
                  width="95%"
                  height="95%"
                />
              </Box>
            </Link>
          </Slider>
        </Box>
      </Box>
      {/* health tips */}
      <Box sx={{ mt: 10, mx: { xs: 5, sm: 5, md: 10 } }}>
        <Typography
          marginY="25px"
          style={{
            fontWeight: 500,
            color: "#000",
            fontSize: "29px",
            lineHeight: "27px",
            textAlign: "left",
          }}
        >
          Health tips
        </Typography>
        <Box textAlign="center">
          <Slider ref={sliderRef} {...settings}>
            <Link to="/firstBlog">
              <Box
                key={collectionone}
                sx={{
                  "&:hover": {
                    transform: "scale(1.01)",
                  },
                }}
              >
                <img src={collectionone} alt="hello" width="95%" height="95%" />
              </Box>
            </Link>
            <Link to="/secondBlog">
              <Box
                key={collectiontwo}
                sx={{
                  "&:hover": {
                    transform: "scale(1.01)",
                  },
                }}
              >
                <img src={collectiontwo} alt="hello" width="95%" height="95%" />
              </Box>
            </Link>{" "}
            <Link to="/thirdBlog">
              <Box
                key={collectionthree}
                sx={{
                  "&:hover": {
                    transform: "scale(1.01)",
                  },
                }}
              >
                <img
                  src={collectionthree}
                  alt="hello"
                  width="95%"
                  height="95%"
                />
              </Box>
            </Link>{" "}
            <Link to="/fourthBlog">
              <Box
                key={collectionfour}
                sx={{
                  "&:hover": {
                    transform: "scale(1.01)",
                  },
                }}
              >
                <img
                  src={collectionfour}
                  alt="hello"
                  width="95%"
                  height="95%"
                />
              </Box>
            </Link>
          </Slider>
        </Box>
      </Box>
      {/* food ad beverages */}
      <Box sx={{ mt: 10, mx: { xs: 5, sm: 5, md: 10 } }}>
        <Typography
          marginY="25px"
          style={{
            fontWeight: 500,
            color: "#000",
            fontSize: "29px",
            lineHeight: "27px",
            textAlign: "left",
          }}
        >
          Food and beverages
        </Typography>
        <Box textAlign="center">
          <Slider ref={sliderRef} {...settings}>
            <Link to="/firstBlog">
              <Box
                key={collectionone}
                sx={{
                  "&:hover": {
                    transform: "scale(1.01)",
                  },
                }}
              >
                <img src={collectionone} alt="hello" width="95%" height="95%" />
              </Box>
            </Link>
            <Link to="/secondBlog">
              <Box
                key={collectiontwo}
                sx={{
                  "&:hover": {
                    transform: "scale(1.01)",
                  },
                }}
              >
                <img src={collectiontwo} alt="hello" width="95%" height="95%" />
              </Box>
            </Link>{" "}
            <Link to="/thirdBlog">
              <Box
                key={collectionthree}
                sx={{
                  "&:hover": {
                    transform: "scale(1.01)",
                  },
                }}
              >
                <img
                  src={collectionthree}
                  alt="hello"
                  width="95%"
                  height="95%"
                />
              </Box>
            </Link>{" "}
            <Link to="/fourthBlog">
              <Box
                key={collectionfour}
                sx={{
                  "&:hover": {
                    transform: "scale(1.01)",
                  },
                }}
              >
                <img
                  src={collectionfour}
                  alt="hello"
                  width="95%"
                  height="95%"
                />
              </Box>
            </Link>
          </Slider>
        </Box>
      </Box>
      {/* warm up combo */}
      <Box sx={{ mt: 10, mx: { xs: 5, sm: 5, md: 10 } }}>
        <Typography
          marginY="25px"
          style={{
            fontWeight: 500,
            color: "#000",
            fontSize: "29px",
            lineHeight: "27px",
            textAlign: "left",
          }}
        >
          Warm up combo
        </Typography>
        <Box textAlign="center">
          <Slider ref={sliderRef} {...settings}>
            <Link to="/firstBlog">
              <Box
                key={collectionone}
                sx={{
                  "&:hover": {
                    transform: "scale(1.01)",
                  },
                }}
              >
                <img src={collectionone} alt="hello" width="95%" height="95%" />
              </Box>
            </Link>
            <Link to="/secondBlog">
              <Box
                key={collectiontwo}
                sx={{
                  "&:hover": {
                    transform: "scale(1.01)",
                  },
                }}
              >
                <img src={collectiontwo} alt="hello" width="95%" height="95%" />
              </Box>
            </Link>{" "}
            <Link to="/thirdBlog">
              <Box
                key={collectionthree}
                sx={{
                  "&:hover": {
                    transform: "scale(1.01)",
                  },
                }}
              >
                <img
                  src={collectionthree}
                  alt="hello"
                  width="95%"
                  height="95%"
                />
              </Box>
            </Link>{" "}
            <Link to="/fourthBlog">
              <Box
                key={collectionfour}
                sx={{
                  "&:hover": {
                    transform: "scale(1.01)",
                  },
                }}
              >
                <img
                  src={collectionfour}
                  alt="hello"
                  width="95%"
                  height="95%"
                />
              </Box>
            </Link>
          </Slider>
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export default Blogs;
