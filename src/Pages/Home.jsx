import melkImage from "../Images/melk.jpg";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import About from "./About"; // Import About component
import Projects from "./Projects"; // Import Projects component
import Skills from "./Skills"; // Import Skills component
import Contact from "./Contact"; // Import Contact component

export default function Home() {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between h-screen p-8">
        {/* Text Section */}
        <div className="ml-4 lg:ml-0 text-center lg:text-left">
          <h1 className="text-4xl font-bold">I'm a Full-Stack Developer</h1>
          <p className="mt-4 text-xl text-gray-700">
            Passionate about building scalable web applications.
          </p>
          <Link
            to="#contact"
            className="mt-8 inline-block px-6 py-3 bg-blue-500 text-white rounded"
          >
            Hire Me
          </Link>
          <div className="mt-6 flex justify-center lg:justify-start space-x-6">
            <a
              href="https://www.linkedin.com/in/melkzedek-wafula-4a8b46203"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/Melkzedekz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl"
            >
              <FaTwitter />
            </a>
            <a
              href="https://github.com/Melkzedk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Image Section */}
        <img
          src={melkImage}
          alt="Melkzedek Wafula"
          className="rounded-full w-72 h-72 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-72 lg:h-72"
        />
      </div>

      {/* Scrollable Sections */}
      <div id="about" className="py-16">
        <About />
      </div>
      <div id="projects" className="py-16">
        <Projects />
      </div>
      <div id="skills" className="py-16">
        <Skills />
      </div>
      <div id="contact" className="py-16">
        <Contact />
      </div>
    </div>
  );
}
