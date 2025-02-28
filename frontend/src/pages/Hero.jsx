import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1>
            Welcome to <span>Dev Connect!</span>
          </h1>
          <p>Connect, create, and collaborate. Please log in to get started.</p>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link to="/auth" className="btn-primary">
              Start Coding Together
            </Link>
          </motion.div>
        </motion.div>
        <motion.img
          src="/heroImage.svg"
          alt="CODECAST"
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        />
      </section>
      <style>{`
        .hero {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: calc(100vh - 60px);
          background: linear-gradient(135deg, #1e1e2f, #252540);
          color: white;
          text-align: center;
          padding: 20px;
        }
        .hero-content {
          max-width: 600px;
          margin-bottom: 20px;
        }
        .hero h1 {
          font-size: 3rem;
          font-weight: bold;
        }
        .hero h1 span {
          color: #ff4d4d;
        }
        .hero p {
          font-size: 1.2rem;
          margin-top: 10px;
        }
        .btn-primary {
          display: inline-block;
          margin-top: 20px;
          padding: 12px 24px;
          background-color: #ff4d4d;
          color: white;
          text-decoration: none;
          font-size: 1rem;
          border-radius: 5px;
          transition: background 0.3s ease;
        }
        .btn-primary:hover {
          background-color: #e63e3e;
        }
        .hero-image {
          width: 80%;
          max-width: 500px;
        }
        @media (min-width: 768px) {
          .hero {
            flex-direction: row;
            text-align: left;
          }
          .hero-content {
            margin-right: 40px;
            margin-bottom: 0;
          }
        }
      `}</style>
    </>
  );
};

export default Hero;
