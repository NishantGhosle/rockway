import { Button, Box, List, Grid, Typography } from "@mui/material";
import React from "react";

const Card = ({ content, name, amount, checkoutHandler }) => {
  return (
    <Grid item xs={12} sm={12} md={4}>
      <Box
        textAlign="center"
        sx={{
          background: "#F0F0F3",
          px: 3,
          py: 6,
          "&:hover": {
            background: "#131316",
            color: "#fff",
          },
        }}
      >
        <Typography
          sx={{
            width: "40%",
            fontSize: "14px",
            height: "26px",
            borderRadius: 1,
            margin: "auto",
            padding: "4px 14px",
            background: "#131316",
            color: "#fff",
            fontWeight: 600,
            lineHeight: "18px",
            textAlign: "center",
            "&:hover": {
              background: "#fff",
              color: "#131316",
            },
          }}
        >
          {name}
        </Typography>
        <Typography
          mt={3}
          sx={{
            fontWeight: 800,
            fontSize: { xs: "40px", md: "50px" },
            lineHeight: "50px",
            textAlign: "center",
          }}
        >
          {amount}
          <span style={{ fontSize: "0.7em" }}>$</span>
        </Typography>
        <Typography>/month</Typography>
        <List
          sx={{
            width: "100%",
            mt: 2,
            px: { xs: 6, sm: 17, md: 0 },
          }}
        >
          {content}
        </List>
        <Button
          onClick={() => checkoutHandler(amount)}
          disableRipple
          sx={{
            mt: 3,
            width: "159px",
            fontSize: "14px",
            fontWeight: 700,
            lineHeight: 18,
            height: "46px",
            border: 1,
            background: "#F0F0F3",
            color: "#131316",
            borderRadius: "4px",
            transition: "all 0.3s ease-out",
            "&:hover": {
              border: 1,
              background: "#131316",
              color: "#ffffff",
            },
          }}
        >
          JOIN NOW
        </Button>
      </Box>
    </Grid>
  );
};

export default Card;
