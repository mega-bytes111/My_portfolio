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
      overflow-x-hidden
      bg-black/50
      backdrop-blur-lg
      border-b
      border-white/10
    ">


      <div className="
        max-w-6xl
        mx-auto
        flex
        justify-between
        items-center
        h-20
        px-5
        sm:px-6
        text-white
      ">


        {/* 🔥 Logo */}
        <h1 className="
          font-bold
          text-xl
          cursor-pointer
          whitespace-nowrap
        ">
          Arpan.dev
        </h1>





        {/* 💻 Desktop Menu */}
        <ul className="
          hidden
          md:flex
          gap-8
          cursor-pointer
        ">


          <li
            onClick={() => scrollToSection("about")}
            className="hover:text-cyan-400 transition duration-300"
          >
            About
          </li>


          <li
            onClick={() => scrollToSection("projects")}
            className="hover:text-cyan-400 transition duration-300"
          >
            Projects
          </li>


          <li
            onClick={() => scrollToSection("coding")}
            className="hover:text-cyan-400 transition duration-300"
          >
            Coding
          </li>


          <li
            onClick={() => scrollToSection("contact")}
            className="hover:text-cyan-400 transition duration-300"
          >
            Contact
          </li>


        </ul>






        {/* 📱 Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="
            md:hidden
            text-3xl
            cursor-pointer
          "
        >

          {isOpen ? "✕" : "☰"}

        </button>


      </div>





      {/* 📱 Mobile Menu */}
      <div
        className={`
          md:hidden
          w-full
          overflow-hidden
          transition-all
          duration-500
          ${
            isOpen
            ? "max-h-80 opacity-100"
            : "max-h-0 opacity-0"
          }
        `}
      >

        <ul className="
          w-full
          flex
          flex-col
          items-center
          gap-6
          py-6
          bg-black/90
          backdrop-blur-lg
          text-white
        ">


          <li
            onClick={() => scrollToSection("about")}
            className="hover:text-cyan-400 cursor-pointer transition"
          >
            About
          </li>


          <li
            onClick={() => scrollToSection("projects")}
            className="hover:text-cyan-400 cursor-pointer transition"
          >
            Projects
          </li>


          <li
            onClick={() => scrollToSection("coding")}
            className="hover:text-cyan-400 cursor-pointer transition"
          >
            Coding
          </li>


          <li
            onClick={() => scrollToSection("contact")}
            className="hover:text-cyan-400 cursor-pointer transition"
          >
            Contact
          </li>


        </ul>


      </div>


    </nav>

  );
};


export default Navbar;