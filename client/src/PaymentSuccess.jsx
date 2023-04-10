import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const PaymentSuccess = () => {
  const searchQuery = useSearchParams()[0];
  const referenceNum = searchQuery.get("reference");

  return (
    <>
      <Navbar />
      <Box
        sx={{
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
            top: "35%",
            left: "25%",
            color: "#000",
          }}
        >
          <Grid container spacing={2}>
            <Grid item sm={12} md={12}>
              <Typography
                align="center"
                style={{
                  fontStyle: "normal",
                  fontWeight: 800,
                  fontSize: "46px",
                  color: "green",
                  lineHeight: "52px",
                }}
              >
                Order successfully placed <br />
              </Typography>
              <Typography variant="h5" align="center" py={3}>
                We will back after 24 hours
              </Typography>
              <Typography variant="body1" align="center" py={3}>
                Reference No. {referenceNum}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default PaymentSuccess;
