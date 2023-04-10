import React from "react";
import { Box, Typography } from "@mui/material";

function BlogHeadertwo() {
  return (
    <>
      <Box
        sx={{
          background: "#131316",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "40vh",
          width: "100%",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: { xs: "14%", sm: "20%", md: "20%" },
            left: { xs: "11%", sm: "10%", md: "35%" },
            color: "#fff",
          }}
        >
          <Typography
            style={{
              fontWeight: 600,
              fontSize: "40px",
              lineHeight: "32px",
              textAlign: "center",
            }}
          >
            Essential Yoga Flows.
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default BlogHeadertwo;
