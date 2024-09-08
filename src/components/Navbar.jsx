import React, { useState } from "react";
import { NavbarData } from "../data/MockData";
import { FaApple, FaRegUser } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu

  return (
    <nav className="text-white py-5">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0 }}
        className="container flex justify-between items-center"
      >
        {/* logo section */}
        <div className="flex items-center gap-2 text-3xl font-semibold">
          <FaApple />
          Apple Zone
        </div>
        {/* Menu section */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-4">
            {NavbarData.map((item) => {
              return (
                <li key={item.id}>
                  <a
                    href={item.link} // make sure this link is valid
                    className="inline-block font-bold text-base py-2 px-3 uppercase cursor-pointer" // Added cursor-pointer
                  >
                    {item.title}
                  </a>
                </li>
              );
            })}
            <li>
              <a
                href="/profile"
                className="inline-block font-bold text-base py-2 px-3 uppercase cursor-pointer"
              >
                <FaRegUser />
              </a>
            </li>
          </ul>
        </div>

        {/* Hamburger menu section */}
        <div className="md:hidden">
          <MdMenu className="text-4xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} />
        </div>
      </motion.div>

      {/* Mobile menu dropdown (visible if menuOpen is true) */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 p-4">
          <ul className="flex flex-col gap-4">
            {NavbarData.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  className="inline-block font-bold text-base py-2 px-3 uppercase cursor-pointer" // Added cursor-pointer
                >
                  {item.title}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/profile"
                className="inline-block font-bold text-base py-2 px-3 uppercase cursor-pointer"
              >
                <FaRegUser />
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
