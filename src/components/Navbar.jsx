const Navbar = () => {

  const scrollToSection = (id) => {
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
        max-w-6xl 
        mx-auto 
        flex 
        justify-between 
        items-center 
        h-20
        px-6 
        text-white
      ">


        {/* 🔥 Logo */}
        <h1 className="font-bold text-xl cursor-pointer">
          Arpan.dev
        </h1>



        {/* 🔗 Links */}
        <ul className="flex gap-8 cursor-pointer">


          {/* About */}
          <li
            onClick={() => scrollToSection("about")}
            className="hover:text-cyan-400 transition duration-300"
          >
            About
          </li>



          {/* Projects */}
          <li
            onClick={() => scrollToSection("projects")}
            className="hover:text-cyan-400 transition duration-300"
          >
            Projects
          </li>



          {/* Coding Profiles */}
          <li
            onClick={() => scrollToSection("coding")}
            className="hover:text-cyan-400 transition duration-300"
          >
            Coding
          </li>



          {/* Contact */}
          <li
            onClick={() => scrollToSection("contact")}
            className="hover:text-cyan-400 transition duration-300"
          >
            Contact
          </li>


        </ul>


      </div>


    </nav>

  );
};


export default Navbar;