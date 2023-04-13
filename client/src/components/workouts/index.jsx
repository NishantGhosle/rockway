import { Box, Typography } from "@mui/material";
import React from "react";
import WorkoutHeader from "../workoutHeader";
import WorkoutTabs from "./WorkoutTabs";
import Navbar from "../navbar";
import Footer from "../footer";
import MapContainer from "../../MapContainer";

function Workouts() {
  return (
    <>
      <Navbar />
      <WorkoutHeader />
      {/* Our workouts */}
      <Box
        textAlign="center"
        sx={{
          my: { xs: 8, sm: 8, md: 18 },
          mx: { xs: 3, sm: 6, md: 20 },
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
          Our Workouts.
        </Typography>
        {/* tabs */}
        <WorkoutTabs />
      </Box>
      {/* Map */}
      <Box
        sx={{ my: { xs: 10, sm: 16, md: 16 }, mx: { xs: 7, sm: 5, md: 25 } }}
      >
        <MapContainer />
      </Box>
      <Footer />
    </>
  );
}

export default Workouts;
