import React from "react";
import Navbar from "./Navbar";
import "./index.css";
import Header from "./Header";
import Todolist from "./Todolist";
import Form from "./Form";
import Todos from "./Todos";
import HowItWorks from "./HowItWorks";
import Aboutus from "./Aboutus";
import OurServices from "./OurServices";
import Contact from "./Contact";
import Footer from "./Footer";
const Home = () => {
  return (
    <>
      {/* <Todos/> */}
      <Navbar />
      <Header />
      {/* <HowItWorks/> */}
      <Aboutus />
      <OurServices />
      <Contact />
      <Footer />
      {/* <Todolist/>

      <Form/> */}
    </>
  );
};

export default Home;
