import { useState } from "react";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);


  const scrollToSection = (id) => {

    setIsOpen(false);

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 400);

  };


  return (

    <nav className="
      fixed
      top-0
      left-0
      w-full
      z-50
      bg-black/50
      backdrop-blur-lg
      border-b
      border-white/10
    ">


      <div className="
        w-full
        flex
        justify-between
        items-center
        h-16
        md:h-20
        px-4
        md:px-6
        text-white
      ">


        {/* Logo */}
        <h1 className="
          font-bold
          text-lg
          md:text-xl
          cursor-pointer
          whitespace-nowrap
        ">
          Arpan.dev
        </h1>





        {/* Desktop Menu */}
        <ul className="
          hidden
          md:flex
          gap-8
          cursor-pointer
        ">


          <li
            onClick={() => scrollToSection("about")}
            className="hover:text-cyan-400 transition"
          >
            About
          </li>


          <li
            onClick={() => scrollToSection("projects")}
            className="hover:text-cyan-400 transition"
          >
            Projects
          </li>


          <li
            onClick={() => scrollToSection("coding")}
            className="hover:text-cyan-400 transition"
          >
            Coding
          </li>


          <li
            onClick={() => scrollToSection("contact")}
            className="hover:text-cyan-400 transition"
          >
            Contact
          </li>


        </ul>






        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="
            md:hidden
            text-2xl
            p-2
            cursor-pointer
          "
        >

          {isOpen ? "✕" : "☰"}

        </button>


      </div>






      {/* Mobile Dropdown */}
      <div
        className={`
          md:hidden
          w-full
          transition-all
          duration-500
          overflow-hidden
          ${
            isOpen
            ? "max-h-80 opacity-100"
            : "max-h-0 opacity-0"
          }
        `}
      >


        <ul className="
          flex
          flex-col
          items-center
          gap-5
          py-5
          bg-black/90
          text-white
        ">


          <li
            onClick={() => scrollToSection("about")}
            className="cursor-pointer hover:text-cyan-400"
          >
            About
          </li>


          <li
            onClick={() => scrollToSection("projects")}
            className="cursor-pointer hover:text-cyan-400"
          >
            Projects
          </li>


          <li
            onClick={() => scrollToSection("coding")}
            className="cursor-pointer hover:text-cyan-400"
          >
            Coding
          </li>


          <li
            onClick={() => scrollToSection("contact")}
            className="cursor-pointer hover:text-cyan-400"
          >
            Contact
          </li>


        </ul>


      </div>


    </nav>

  );
};


export default Navbar;