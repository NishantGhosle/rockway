import React from "react";
import { Box, Button, Typography } from "@mui/material";
import pricingheaderf from "../../images/pricingheaderf.jpg";
import pricingheaderfsm from "../../images/pricingheaderfsm.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const PricingHeader = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: {
            xs: `url(${pricingheaderfsm})`,
            sm: `url(${pricingheaderfsm})`,
            md: `url(${pricingheaderf})`,
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
            top: "29%",
            left: "10%",
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
              background: "#131316",
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

export default PricingHeader;
