import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Workouts from "./components/workouts";
import Pricing from "./components/pricing";
import Blogs from "./components/blogs";
import PaymentSuccess from "./PaymentSuccess";
import PageNotFound from "./PageNotFound";
import FirstBlog from "./components/blog-content/top-picks/FirstBlog";
import SecondBlog from "./components/blog-content/top-picks/SecondBlog";
import ThirdBlog from "./components/blog-content/top-picks/ThirdBlog";
import FourthBlog from "./components/blog-content/top-picks/FourthBlog";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/workouts" element={<Workouts />} />
          <Route exact path="/pricing" element={<Pricing />} />
          <Route exact path="/blogs" element={<Blogs />} />
          <Route path="/paymentsuccess" element={<PaymentSuccess />} />
          <Route path="/firstBlog" element={<FirstBlog />} />
          <Route path="/secondBlog" element={<SecondBlog />} />
          <Route path="/thirdBlog" element={<ThirdBlog />} />
          <Route path="/fourthBlog" element={<FourthBlog />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
