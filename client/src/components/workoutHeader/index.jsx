import React from "react";
import { Box, Button, Typography } from "@mui/material";
import workoutheaderf from "../../images/workoutheaderf.jpg";
import workoutheaderfsm from "../../images/workoutheaderfsm.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link } from "react-router-dom";

const WorkoutHeader = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: {
            xs: `url(${workoutheaderfsm})`,
            sm: `url(${workoutheaderfsm})`,
            md: `url(${workoutheaderf})`,
          },
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: { xs: "84vh", sm: "100vh", md: "100vh", lg: "100vh" },
          width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: { xs: "14%", sm: "40%", md: "29%" },
            left: { xs: "11%", sm: "18%", md: "10%" },
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
            Get Trainings From
            <br /> Our Experts <br />
            <Typography
              style={{
                color: "#FF0103",
                fontStyle: "normal",
                fontWeight: 800,
                fontSize: "46px",
                lineHeight: "52px",
              }}
            >
              – we train you.
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
      </Box>
    </>
  );
};

export default WorkoutHeader;
