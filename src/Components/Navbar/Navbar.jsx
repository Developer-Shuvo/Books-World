import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaBars } from "react-icons/fa";
import logo from "./books.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Auto-close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Auto-close menu when scrolling
  useEffect(() => {
    const handleScroll = () => setIsOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation Variants for menu
  const menuVariants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    exit: {
      y: "-100%",
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <header className="sticky top-0 z-50 max-w-full mx-auto md:px-10 lg:px-20 bg-sky-200 bg-transparent   shadow-md">
      <div className="flex items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center text-2xl md:text-3xl lg:text-4xl font-black"
        >
          <img src={logo} alt="Logo" className="h-8 mr-2" />
          <span className="hover:text-black transition duration-300">
            Books World
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-6 font-medium">
          <Link to="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link to="/Books" className="hover:text-blue-600 transition">
            Listed Books
          </Link>
          <Link to="/Dashboard" className="hover:text-blue-600 transition">
            Page To Read
          </Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex space-x-4">
          <Link to="/SignIn">
            <button className="rounded bg-lime-600 px-6 py-2 font-medium text-white transition-all hover:bg-lime-700">
              Sign In
            </button>
          </Link>
          <Link to="/SignUp">
            <button className="rounded bg-blue-700 px-6 py-2 font-medium text-white transition-all hover:bg-blue-600">
              Sign Up
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-700 text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu with Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="lg:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-6 text-white text-xl z-40"
          >
            <Link to="/" className="hover:text-lime-400 transition">
              Home
            </Link>
            <Link to="/Books" className="hover:text-lime-400 transition">
              Listed Books
            </Link>
            <Link to="/Dashboard" className="hover:text-lime-400 transition">
              Page To Read
            </Link>

            <div className="flex space-x-4 pt-4">
              <Link to="/SignIn">
                <button className="rounded bg-lime-600 px-6 py-2 font-medium text-white hover:bg-lime-700">
                  Sign In
                </button>
              </Link>
              <Link to="/SignUp">
                <button className="rounded bg-blue-700 px-6 py-2 font-medium text-white hover:bg-blue-600">
                  Sign Up
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
