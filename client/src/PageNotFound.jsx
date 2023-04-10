import React from "react";
import { Box, Grid, Typography } from "@mui/material";

function PageNotFound() {
  return (
    <>
      {" "}
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
            top: "5%",
            left: "5%",
            color: "#000",
          }}
        >
          <Grid container spacing={2}>
            <Grid item sm={12} md={12}>
              <Typography
                style={{
                  fontStyle: "normal",
                  fontWeight: 800,
                  fontSize: "36px",
                  color: "red",
                  lineHeight: "52px",
                }}
              >
                Page Not Found <br />
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default PageNotFound;
