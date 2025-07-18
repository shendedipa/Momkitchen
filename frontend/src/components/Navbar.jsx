import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { Menu, UserRound, X } from "lucide-react";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Update the condition to include the search route
  const isTransparentNavbar =
    location.pathname === "/Hero" ||
    location.pathname === "/home" ||
    location.pathname === "/search";

  const search = location.pathname === "/search";

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div
      className={`fixed right-0 top-0 left-0 z-50 flex justify-between sm:justify-center items-center py-3 px-6 shadow-md transition-all duration-300 ${
        isTransparentNavbar && !scrolled
          ? "bg-transparent text-white"
          : "bg-white text-gray-700"
      }`}
    >
      {/* Logo */}
      <div>
        <Link to="/">
          <img
            src={search & !scrolled ? assets.img3 : assets.logo2}
            alt="Logo"
            className="w-22 hover:scale-105 transition-transform duration-300 mr-5"
          />
        </Link>
      </div>

      {/* Desktop Nav */}
      <div className="flex items-center gap-8">
        <ul
          className={`hidden sm:flex gap-6 text-lg font-medium ${
            isTransparentNavbar && !scrolled ? "text-white" : "text-gray-700"
          }`}
        >
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `px-3 py-1 rounded-md transition duration-300 ${
                isActive
                  ? "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white"
                  : "hover:bg-green-200 hover:text-green-600 hover:font-serif"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/challenge"
            className={({ isActive }) =>
              `px-3 py-1 rounded-md transition duration-300 ${
                isActive
                  ? "bg-green-500 text-white font-serif"
                  : "hover:bg-green-200 hover:text-green-600"
              }`
            }
          >
            Get-Challenge
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-3 py-1 rounded-md transition duration-300 ${
                isActive
                  ? "bg-green-500 text-white font-serif"
                  : "hover:bg-green-200 hover:text-green-600"
              }`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `px-3 py-1 rounded-md transition duration-300 ${
                isActive
                  ? "bg-green-500 text-white font-serif"
                  : "hover:bg-green-200 hover:text-green-600"
              }`
            }
          >
            Contact
          </NavLink>
        </ul>

        {/* Profile Icon */}
        <div
          className="relative"
          onMouseEnter={() => setShowLogout(true)}
          onMouseLeave={() => setShowLogout(false)}
        >
          <div className="gap-4 flex items-center hover:bg-green-100 p-2 rounded-full cursor-pointer transition duration-300">
            <UserRound
              size={30}
              className={`transition duration-300 ${
                isTransparentNavbar && !scrolled
                  ? "text-white"
                  : "text-gray-700"
              } hover:text-green-600`}
            />
          </div>
          {showLogout && (
            <div className="absolute top-12 right-0 bg-white border rounded-md shadow-md py-2 px-4 z-50">
              <button
                onClick={handleLogout}
                className="text-red-600 font-medium hover:underline"
              >
                Logout
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <Menu
          className={`sm:hidden cursor-pointer ${
            isTransparentNavbar && !scrolled ? "text-white" : "text-gray-700"
          }`}
          onClick={() => setVisible(true)}
        />
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`fixed top-0 right-0 h-full z-50 bg-white shadow-lg transition-all duration-300 ease-in-out ${
          visible ? "w-full" : "w-0"
        } overflow-hidden`}
      >
        <div className="flex flex-col text-gray-700 pt-4">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 px-4 py-2 cursor-pointer"
          >
            <X size={28} />
          </div>
          <NavLink
            className="py-2 px-6 hover:bg-green-100"
            to="/home"
            onClick={() => setVisible(false)}
          >
            Home
          </NavLink>
          <NavLink
            className="py-2 px-6 hover:bg-green-100"
            to="/challenge"
            onClick={() => setVisible(false)}
          >
            Get-Challenge
          </NavLink>
          <NavLink
            className="py-2 px-6 hover:bg-green-100"
            to="/about"
            onClick={() => setVisible(false)}
          >
            About Us
          </NavLink>
          <NavLink
            className="py-2 px-6 hover:bg-green-100"
            to="/contact"
            onClick={() => setVisible(false)}
          >
            Contact
          </NavLink>
          <button
            onClick={() => {
              setVisible(false);
              handleLogout();
            }}
            className="py-2 px-6 text-left text-red-600 hover:bg-red-100"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
