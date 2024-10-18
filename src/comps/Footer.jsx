import React from "react";
import { ShootingStars } from "../components/ui/Shooting-Stars";
import { StarsBackground } from "../components/ui/Stars-Background";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white py-4 px-8 flex flex-col sm:flex-row sm:justify-between sm:items-center items-end">
      <ShootingStars />
      <StarsBackground />

      <div className="text-center w-full sm:text-left mb-4 sm:mb-0">
        <p>Email: rajyavardhansing2003@gmail.com</p>
        <p>Phone: +91-9352137006</p>
      </div>

      <div className="text-center w-full sm:w-auto">
        <p>Rajyavardhan Singh Shekhawat</p>
        <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
