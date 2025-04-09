"use client"
import * as React from "react";
import { motion } from "framer-motion";
import { FaBeer } from "react-icons/fa"; 

export default function Footer() {
  const iconStyle = {
    display: "inline-block",
    fontSize: "40px", 
    color: "red",
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: 50,
      width: '100%',
      display: 'flex',
  
      padding: '20px',
      zIndex: 1000,
      left:20
    
    }}>
      <motion.div
        animate={{
          y: ["0px", "-20px", "0px"],
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,  
          ease: "easeInOut"
        }}
        style={iconStyle}
      >
        <FaBeer />
      </motion.div>
    </div>
  );
};
