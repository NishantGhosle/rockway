import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useRef } from "react";
import Slider from "react-slick";
import collectionone from "../../images/collectionone.jpg";
import collectiontwo from "../../images/collectiontwo.jpg";
import collectionthree from "../../images/collectionthree.jpg";
import collectionfour from "../../images/collectionfour.jpg";
import { Link } from "react-router-dom";

function CollectionsTab() {
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));
  const sliderRef = useRef();
  const settings = {
    centerMode: true,
    arrows: true,
    infinite: true,
    centerPadding: matchesMd ? "20px" : "120px",
    slidesToScroll: 1,
    slidesToShow: 1.9,
    speed: 200,
  };

  return (
    <>
      {/* Top picks */}
      <Box sx={{ mt: 5 }}>
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
      {/* Life Hacks */}
      <Box sx={{ mt: 5 }}>
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
          Life Hacks
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
      {/* Upgrade Your Plan */}
      <Box sx={{ mt: 5 }}>
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
          Upgrade Your Plan
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
      {/* Targate your Muscles */}
      <Box sx={{ mt: 5 }}>
        {" "}
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
          Targate your Muscles
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
    </>
  );
}

export default CollectionsTab;
