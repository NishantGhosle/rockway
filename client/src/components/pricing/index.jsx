import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import CheckTwoToneIcon from "@mui/icons-material/CheckTwoTone";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import PricingHeader from "../pricingHeader";
import Footer from "../footer";
import Navbar from "../navbar";
import Card from "../../Card";
import axios from "axios";
import logoo from "../../images/logoo.jpg";
import MapContainer from "../../MapContainer";

function Pricing() {
  const checkoutHandler = async (amount) => {
    const {
      data: { key },
    } = await axios.get("http://www.localhost:4000/api/getkey");
    const {
      data: { order },
    } = await axios.post("http://localhost:4000/api/checkout", {
      amount,
    });

    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "Rockway Fitness Club",
      image: logoo,
      order_id: order.id,
      callback_url: "http://localhost:4000/api/paymentverification",
      // prefill: {
      //   name: "Gaurav Kumar",
      //   email: "gaurav.kumar@example.com",
      //   contact: "9999999999",
      // },
      notes: {
        address: "Bhopal",
      },
      theme: {
        color: "#FF0103",
      },
    };

    const razor = new window.Razorpay(options);
    razor.open();
  };
  return (
    <>
      <Navbar />
      <PricingHeader />
      <Box
        sx={{
          my: { xs: 10, sm: 10, md: 16 },
          mx: { xs: 4.5, sm: 4.5, md: 20 },
        }}
      >
        <Typography
          mb={8}
          sx={{
            fontWeight: 800,
            fontSize: "50px",
            lineHeight: "50px",
            textAlign: "center",
          }}
        >
          Pricing Plan.
        </Typography>
        <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Card
            num={1}
            name="Lite"
            amount={1500}
            checkoutHandler={checkoutHandler}
            content={
              <>
                <List
                  sx={{
                    width: "100%",
                    mt: 2,
                    maxWidth: 360,
                  }}
                >
                  <ListItem disableRipple>
                    <CheckTwoToneIcon />
                    <Typography
                      ml={2}
                      sx={{
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "26px",
                        textAlign: "center",
                      }}
                    >
                      Unlimited gym access
                    </Typography>
                  </ListItem>
                  <ListItem disableRipple>
                    <CheckTwoToneIcon />
                    <Typography
                      ml={2}
                      sx={{
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "26px",
                        textAlign: "center",
                      }}
                    >
                      Free fitness consultation
                    </Typography>
                  </ListItem>
                  <ListItem disableRipple>
                    <CheckTwoToneIcon />
                    <Typography
                      ml={2}
                      sx={{
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "26px",
                        textAlign: "center",
                      }}
                    >
                      1 training programs
                    </Typography>
                  </ListItem>
                </List>
              </>
            }
          />
          <Card
            num={5}
            name="Standard"
            amount={2000}
            personal="Personal"
            checkoutHandler={checkoutHandler}
            content={
              <>
                <List
                  sx={{
                    width: "100%",
                    mt: 2,
                    maxWidth: 360,
                  }}
                >
                  <ListItem disableRipple>
                    <CheckTwoToneIcon />
                    <Typography
                      ml={2}
                      style={{
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "26px",
                        textAlign: "center",
                      }}
                    >
                      Unlimited gym access
                    </Typography>
                  </ListItem>
                  <ListItem disableRipple>
                    <CheckTwoToneIcon />
                    <Typography
                      ml={2}
                      style={{
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "26px",
                        textAlign: "center",
                      }}
                    >
                      5 training programs
                    </Typography>
                  </ListItem>
                  <ListItem disableRipple>
                    <CheckTwoToneIcon />
                    <Typography
                      ml={2}
                      style={{
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "26px",
                        textAlign: "center",
                      }}
                    >
                      Free fitness consultation
                    </Typography>
                  </ListItem>
                  <ListItem disableRipple>
                    <CheckTwoToneIcon />
                    <Typography
                      ml={2}
                      style={{
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "26px",
                        textAlign: "center",
                      }}
                    >
                      Personal trainer
                    </Typography>
                  </ListItem>
                </List>
              </>
            }
          />
          <Card
            num="unlimited"
            name="Premium"
            amount={2500}
            personal="Personal trainer"
            drink="50% off drinks"
            checkoutHandler={checkoutHandler}
            content={
              <>
                <List
                  sx={{
                    width: "100%",
                    mt: 2,
                    maxWidth: 360,
                  }}
                >
                  <ListItem disableRipple>
                    <CheckTwoToneIcon />
                    <Typography
                      ml={2}
                      style={{
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "26px",
                        textAlign: "center",
                      }}
                    >
                      Unlimited gym access
                    </Typography>
                  </ListItem>
                  <ListItem disableRipple>
                    <CheckTwoToneIcon />
                    <Typography
                      ml={2}
                      style={{
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "26px",
                        textAlign: "center",
                      }}
                    >
                      All training programs
                    </Typography>
                  </ListItem>
                  <ListItem disableRipple>
                    <CheckTwoToneIcon />
                    <Typography
                      ml={2}
                      style={{
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "26px",
                        textAlign: "center",
                      }}
                    >
                      Free fitness consultation
                    </Typography>
                  </ListItem>
                  <ListItem disableRipple>
                    <CheckTwoToneIcon />
                    <Typography
                      ml={2}
                      style={{
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "26px",
                        textAlign: "center",
                      }}
                    >
                      Personal trainer
                    </Typography>
                  </ListItem>
                  <ListItem disableRipple>
                    <CheckTwoToneIcon />
                    <Typography
                      ml={2}
                      style={{
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "26px",
                        textAlign: "center",
                      }}
                    >
                      50% off drinks
                    </Typography>
                  </ListItem>
                </List>
              </>
            }
          />
        </Grid>
      </Box>
      {/* Map */}
      <Box
        sx={{ my: { xs: 10, sm: 16, md: 16 }, mx: { xs: 10, sm: 5, md: 25 } }}
      >
        <MapContainer />
      </Box>
      <Footer />
    </>
  );
}

export default Pricing;
