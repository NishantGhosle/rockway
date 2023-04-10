import React from "react";
import Navbar from "../../navbar";
import Footer from "../../footer";
import { Box, Typography } from "@mui/material";
import BlogHeadertwo from "./blogHeadertwo";
import yfourth from "../../../images/yfourth.jpg";

function FourthBlog() {
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
          <img src={yfourth} alt="yfourth" width="70%" height="100%" />
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti fuga
          a, pariatur omnis nisi ea ab quis odit harum, praesentium voluptate,
          consequatur atque quod. Tenetur quae, itaque architecto illo culpa
          tempore vitae eaque recusandae inventore? Quae atque labore corrupti?{" "}
          <br /> <br />
          Necessitatibus debitis sequi, perferendis suscipit commodi nostrum
          laudantium distinctio quas expedita ullam totam ipsa numquam?
          Accusamus culpa commodi perferendis, magnam corporis in tenetur
          consequuntur deleniti. Ipsam suscipit similique ut nihil obcaecati!
          <br /> <br />
          Delectus at placeat, accusantium obcaecati nesciunt tempore quaerat
          minus ut, distinctio eveniet tenetur autem saepe id odio recusandae
          minima exercitationem inventore vero hic libero fugiat! Inventore,
          dolores. Quae, enim cupiditate.
        </Typography>{" "}
      </Box>

      <Footer />
    </>
  );
}

export default FourthBlog;
