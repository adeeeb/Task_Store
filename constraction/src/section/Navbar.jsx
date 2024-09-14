import { motion } from "framer-motion";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import NavLink from "../components/NavLink";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <motion.nav
      className="bg-yellow-500 p-4 shadow-lg fixed top-0 left-0 w-full z-50"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <img
          src="../src/assets/image/logo.png"
          alt="Logo"
          className="w-20 h-20"
        />
        <div className="lg:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <FaBars className="w-6 h-6" />
          </button>
        </div>
        <ul className="hidden lg:flex lg:space-x-12">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/aboutus">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/contactus">Contact Us</NavLink>
          </li>
        </ul>
        {/* Mobile menu */}
        <motion.div
          className={`fixed top-0 left-0 h-full bg-yellow-400 text-white transition-transform transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } w-64 z-40`}
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: isOpen ? 0 : "-100%", opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="p-4">
            <button className="text-white text-2xl" onClick={toggleMenu}>
              <FaTimes className="w-6 h-6" />
            </button>
          </div>
          <ul className="mt-8 space-y-4 px-4">
            <li>
              <NavLink to="/" onClick={() => setIsOpen(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/aboutus" onClick={() => setIsOpen(false)}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/contactus" onClick={() => setIsOpen(false)}>
                Contact Us
              </NavLink>
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
