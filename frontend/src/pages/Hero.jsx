import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-section d-flex flex-column justify-content-center align-items-center min-vh-100 bg-dark text-light">
      <h1 className="display-4">Welcome to Dev Connect!</h1>
      <p className="lead">Connect, create, and collaborate. Please log in to get started.</p>
      <Link to="/auth" className="btn btn-primary btn-lg">
        Login
      </Link>
    </div>
  );
};

export default Hero;
