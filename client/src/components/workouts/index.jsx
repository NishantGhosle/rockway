import { Box, Typography } from "@mui/material";
import React from "react";
import WorkoutHeader from "../workoutHeader";
import WorkoutTabs from "./WorkoutTabs";
import Navbar from "../navbar";
import Footer from "../footer";

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
      <Footer />
    </>
  );
}

export default Workouts;
