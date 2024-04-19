import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Hero from "./components/Hero";
import LogoCollection from "./components/LogoCollection";
import Pricing from "./components/Pricing";
import Features from "./components/Features";
import PreFooter from "./components/PreFooter";
import Footer from "./components/Footer";
import Secondary from "./components/Secondary";
import { useMediaQuery } from "@mui/material";
import AppAppBar from "./components/AppAppBar";

export default function LandingPage() {
  const isMediumScreen = useMediaQuery("(min-width: 960px)");

  return (
    <div>
      <AppAppBar />
      <Hero/>
      <Box sx={{ bgcolor: "background.default" }}>
        <Divider />
        <LogoCollection />
        <Divider />
        {isMediumScreen && <Secondary />}
        <Divider />
        <Features />
        <Divider />
        <Pricing />
        <Divider />
        <Divider />
        <PreFooter /> 
        <Divider />
        <Footer />
      </Box>
    </div>
  );
}
