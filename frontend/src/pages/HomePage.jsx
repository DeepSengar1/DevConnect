import React from "react";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import Home from "./Home.js";
import Hero from "./Hero.jsx";

const HomePage = () => {
  return (
    <>
        
      <SignedIn>
        <Home />
      </SignedIn>
      <SignedOut>
        <Hero />
      </SignedOut>
    </>
  );
};

export default HomePage;
