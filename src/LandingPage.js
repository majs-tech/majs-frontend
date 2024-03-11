import * as React from "react";
// import PropTypes from 'prop-types';


import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
// import ToggleButton from '@mui/material/ToggleButton';
// import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
// import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import Hero from "./components/Hero";
import LogoCollection from "./components/LogoCollection";
// import Highlights from './components/Highlights';
import Pricing from "./components/Pricing";
import Features from "./components/Features";
// import Testimonials from './components/Testimonials';
// import FAQ from './components/FAQ';
import Footer from "./components/Footer";
import Secondary from "./components/Secondary";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Box sx={{ bgcolor: "background.default" }}>
        <Divider />
        <LogoCollection />
        <Divider />
        <Secondary />
        <Divider />
        <Features />
        <Divider />
        {/* <Testimonials />  */}
        {/* <Divider /> */}
        {/* <Highlights />  */}
        {/* <Divider /> */}
        <Pricing />
        <Divider />
        {/* <FAQ />  */}
        <Divider />
        <Footer />
      </Box>
    </>
  );
}
