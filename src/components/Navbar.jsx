import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import LargeContainer from "./LargeContainer";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Products", path: "/products" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-blue-500 shadow-lg">
      <LargeContainer>
        <div className="flex justify-between items-center py-3 md:py-4">
          <h1 className="text-white text-2xl font-bold tracking-wide transition duration-500 transform hover:scale-105">
            FinLock
          </h1>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-10">
            {navLinks.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                className="text-white text-lg hover:text-yellow-300 font-medium transition duration-300 transform hover:scale-105"
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <IconButton
              edge="end"
              className="text-white"
              onClick={handleDrawerToggle}
              sx={{ color: "white" }} // Override color here
            >
              <MenuIcon fontSize="large" /> {/* Set the size to large */}
            </IconButton>
          </div>
        </div>
      </LargeContainer>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-blue-500">
          {navLinks.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className="block text-white text-lg py-2 px-8 hover:bg-blue-600"
              onClick={handleDrawerToggle}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
