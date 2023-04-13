import React from "react";
import Navbar from "../../navbar";
import Footer from "../../footer";
import { Box, Typography } from "@mui/material";
import BlogHeadertwo from "./blogHeadertwo";
import ythird from "../../../images/ythird.jpg";
import MapContainer from "../../../MapContainer";

function ThirdBlog() {
  return (
    <>
      <Navbar />
      <BlogHeadertwo />
      <Box
        textAlign="center"
        sx={{
          my: { xs: 8, sm: 8, md: 15 },
          mx: { xs: 6, sm: 6, md: 30 },
        }}
      >
        <Box>
          <img src={ythird} alt="ythird" width="70%" height="100%" />
        </Box>
        <Typography
          style={{
            fontWeight: 400,
            fontSize: "20px",
            lineHeight: "32px",
            textAlign: "left",
            marginTop: 40,
          }}
        >
          Exercise is an essential part of maintaining a healthy lifestyle, and
          there are many different ways to incorporate physical activity into
          your routine. In this blog post, we will explore the benefits of
          outdoor exercise and why it is a great option for those looking to
          switch up their routine.
          <br />
          <br />
          Firstly, exercising outdoors can provide a change of scenery and a
          breath of fresh air. Being outside can help reduce feelings of stress
          and increase feelings of well-being. Additionally, exercising in
          natural light can help regulate your body's circadian rhythm, which
          can improve sleep patterns and overall health.
          <br />
          <br />
          Secondly, outdoor exercise can provide a more challenging workout.
          Running or biking on uneven terrain can engage more muscles and
          require more effort than a flat indoor surface. This can lead to
          better overall fitness and strength gains.
          <br />
          <br />
          Thirdly, outdoor exercise can be a great way to connect with nature
          and explore your surroundings. Hiking, kayaking, or even just taking a
          walk in a local park can be a fun way to get some exercise while also
          enjoying the outdoors.
          <br />
          <br />
          Fourthly, outdoor exercise can be a cost-effective alternative to a
          gym membership. Many outdoor activities, such as running or hiking,
          require minimal equipment and can be done for free or at a low cost.
          <br />
          <br />
          Lastly, outdoor exercise can be a social experience. Joining a running
          group or hiking club can provide a sense of community and support
          while also promoting physical activity.
          <br />
          <br />
          In conclusion, outdoor exercise is a fantastic way to improve your
          physical and mental health while also enjoying the beauty of nature.
          Whether it's a morning jog, a weekend hike, or a day at the beach,
          there are countless ways to get active outside. So why not take your
          workout routine outdoors and see the benefits for yourself!
        </Typography>{" "}
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

export default ThirdBlog;
