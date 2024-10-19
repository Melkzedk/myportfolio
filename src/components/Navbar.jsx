import { Link } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaLightbulb,
  FaFileAlt,
  FaEnvelope,
  FaBars,
} from "react-icons/fa"; // Import icons
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to toggle menu

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-extrabold">My Portfolio</div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden block text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars size={24} />
        </button>

        {/* Navigation Links */}
        <ul
          className={`md:flex md:items-center md:space-x-5 text-lg absolute md:static top-16 right-0 w-full md:w-auto bg-gray-800 md:bg-transparent transition-transform duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li className="flex items-center space-x-2 p-2 md:p-0">
            <FaHome />
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li className="flex items-center space-x-2 p-2 md:p-0">
            <FaUser />
            <Link to="/about" className="hover:text-gray-300">
              About
            </Link>
          </li>
          <li className="flex items-center space-x-2 p-2 md:p-0">
            <FaProjectDiagram />
            <Link to="/projects" className="hover:text-gray-300">
              Projects
            </Link>
          </li>
          <li className="flex items-center space-x-2 p-2 md:p-0">
            <FaLightbulb />
            <Link to="/skills" className="hover:text-gray-300">
              Skills
            </Link>
          </li>
          <li className="flex items-center space-x-2 p-2 md:p-0">
            <FaFileAlt />
            <Link to="/resume" className="hover:text-gray-300">
              Resume
            </Link>
          </li>
          <li className="flex items-center space-x-2 p-2 md:p-0">
            <FaEnvelope />
            <Link to="/contact" className="hover:text-gray-300">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
