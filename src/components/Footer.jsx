import { Button, Typography } from '@mui/material';
import React from 'react'

const Footer = () => {
  return (
    <div className="relative bg-blue-600 py-16 text-center text-white w-full rounded-t-md overflow-hidden mt-10">
      <div className="absolute inset-0 bg-blue-700 opacity-75"></div>

      <div className="absolute top-0 left-0 w-40 h-40 bg-blue-800 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-800 rounded-full opacity-20 animate-pulse"></div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 space-y-6">
        <Typography variant="h3" className="font-extrabold mb-4">
          Ready to Secure Your World?
        </Typography>
        <Typography
          variant="body1"
          className="text-gray-200 max-w-xl mx-auto leading-relaxed"
        >
          Protect yourself and your business from the ever-evolving world of
          online fraud. Join thousands of users who trust our AI-powered
          solutions.
        </Typography>
        <Button
          variant="outlined"
          color="inherit"
          className="border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
        >
          Get Started for Free
        </Button>
      </div>

      <svg
        className="absolute bottom-0 left-0 w-full h-24 text-blue-600 fill-current transform translate-y-1/2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fillOpacity="1"
          d="M0,64L60,101.3C120,139,240,213,360,213.3C480,213,600,139,720,106.7C840,75,960,85,1080,96C1200,107,1320,117,1380,122.7L1440,128V320H1380C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320H0Z"
        />
      </svg>
    </div>
  );
}

export default Footer