import { Box, Typography, Grid } from "@mui/material";
import React from "react";
import CheckTwoToneIcon from "@mui/icons-material/CheckTwoTone";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Card from "../../Card";
import axios from "axios";
import logoo from "../../images/logoo.jpg";

function PlansTab() {
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
      <Box sx={{ my: { md: 16 }, mx: { xs: 2, sm: 4.5, md: 5 } }}>
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
    </>
  );
}

export default PlansTab;
