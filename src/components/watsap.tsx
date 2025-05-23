"use client"
import * as React from "react";
import { motion } from "framer-motion";


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
     right:0,
     justifyContent:'end',
    
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
      <svg xmlns="http://www.w3.org/2000/svg" width="99.553" height="100" id="whatsapp" >
  <defs>
    <linearGradient id="a" x1=".5" x2=".5" y1="1" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#20b038"></stop>
      <stop offset="1" stop-color="#60d66a"></stop>
    </linearGradient>
  </defs>
  <path fill="#e0e0e0" d="M85.048 14.532A49.573 49.573 0 0 0 7.032 74.323L0 100l26.277-6.89a49.535 49.535 0 0 0 23.687 6.032h.021a49.572 49.572 0 0 0 35.063-84.61ZM49.985 90.773h-.016A41.149 41.149 0 0 1 29 85.031l-1.505-.892L11.9 88.227l4.163-15.2-.981-1.558a41.2 41.2 0 1 1 34.9 19.3Z"></path>
  <path fill="url(#a)" d="M27.875 116.508 34.586 92a47.305 47.305 0 1 1 40.99 23.684h-.021a47.289 47.289 0 0 1-22.6-5.755l-25.076 6.575Z" transform="translate(-25.6 -19.357)"></path>
  <path fill="none" d="M22.121 23.785h55.673v52.162H22.121z" opacity=".08"></path>
  <path fill="#fff" fill-rule="evenodd" d="M37.736 28.513c-.917-2.039-1.883-2.08-2.755-2.115-.714-.031-1.531-.029-2.346-.029a4.5 4.5 0 0 0-3.265 1.532 13.724 13.724 0 0 0-4.286 10.21c0 6.024 4.388 11.845 5 12.662s8.47 13.573 20.914 18.48c10.342 4.078 12.447 3.267 14.692 3.063s7.243-2.961 8.264-5.82 1.02-5.309.714-5.821-1.122-.816-2.347-1.429-7.243-3.575-8.366-3.983-1.939-.612-2.755.614-3.161 3.981-3.876 4.8-1.429.92-2.653.308a33.49 33.49 0 0 1-9.845-6.076 36.876 36.876 0 0 1-6.811-8.478c-.714-1.224-.077-1.888.538-2.5.55-.548 1.224-1.429 1.837-2.144a8.4 8.4 0 0 0 1.223-2.041 2.254 2.254 0 0 0-.1-2.145c-.309-.613-2.689-6.667-3.777-9.088Z"></path>
  <path fill="#fff" d="M84.643 14.374a49 49 0 0 0-77.121 59.1L.571 98.861l25.975-6.811a48.966 48.966 0 0 0 23.415 5.963h.021a49 49 0 0 0 34.661-83.639ZM49.982 89.74h-.011a40.676 40.676 0 0 1-20.729-5.676l-1.488-.882-15.418 4.041 4.115-15.028-.969-1.54a40.728 40.728 0 1 1 34.5 19.08Z"></path>
</svg>
      </motion.div>
    </div>
  );
};
