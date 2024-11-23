import React from "react";
import "./App.css"; // Create a CSS file for styling to ensure pixel-perfect and responsive design
import Contact from "./components/Contact";
import Locations from "./components/Locations";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Steps from "./components/Steps";
import Services from "./components/Services";
import Blog from "./components/Blog";
import Reviews from "./components/Reviews";
import Navbar from "./components/Navbar";
import FAQ from "./components/FAQ";

const App = () => {
  return (
   
       <>
       <Navbar/>
       <Hero/>
       <Services/>
       <Steps/>
      <Reviews />
      <Locations />
      <Blog />
      <Contact />
      <FAQ/>
      <Footer />

      </> 
  );
};

export default App;

/* CSS File: App.css */
/* Ensure to handle responsiveness using media queries for different screen sizes */
