import React from "react";
import { Box, Button, Typography } from "@mui/material";
import aboutheaderf from "../../images/aboutheaderf.jpg";
import aboutheaderfsm from "../../images/aboutheaderfsm.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const AboutHeader = () => {
  return (
    <>
      {/* About header  */}
      <Box
        sx={{
          backgroundImage: {
            xs: `url(${aboutheaderfsm})`,
            sm: `url(${aboutheaderfsm})`,
            md: `url(${aboutheaderf})`,
          },
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "100vh",
          width: "100%",
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
            Simple solutions for <br /> complex routine <br />
            <Typography
              style={{
                color: "#FF0103",
                fontStyle: "normal",
                fontWeight: 800,
                fontSize: "46px",
                lineHeight: "52px",
              }}
            >
              – you belong here.
            </Typography>
          </Typography>
          <Typography variant="body1" align="left" py={3}>
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
            Tincidunt
          </Typography>
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
        </Box>
      </Box>
    </>
  );
};

export default AboutHeader;
