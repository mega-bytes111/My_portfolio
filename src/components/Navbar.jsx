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
        items-center
        h-20
        px-4
        sm:px-6
        text-white
      ">


        {/* 🔥 Logo */}
        <h1 className="
          font-bold 
          text-lg
          sm:text-xl
          cursor-pointer
          whitespace-nowrap
          flex-shrink-0
          mr-6
        ">
          Arpan.dev
        </h1>




        {/* 🔗 Scrollable Links Container */}
        <div className="
          flex-1
          overflow-hidden
        ">

          <ul className="
            flex 
            gap-5
            sm:gap-8
            overflow-x-auto
            cursor-pointer
            no-scrollbar
            pb-1
          ">


            {/* About */}
            <li
              onClick={() => scrollToSection("about")}
              className="
                text-sm
                sm:text-base
                whitespace-nowrap
                hover:text-cyan-400 
                transition 
                duration-300
              "
            >
              About
            </li>




            {/* Projects */}
            <li
              onClick={() => scrollToSection("projects")}
              className="
                text-sm
                sm:text-base
                whitespace-nowrap
                hover:text-cyan-400 
                transition 
                duration-300
              "
            >
              Projects
            </li>





            {/* Coding */}
            <li
              onClick={() => scrollToSection("coding")}
              className="
                text-sm
                sm:text-base
                whitespace-nowrap
                hover:text-cyan-400 
                transition 
                duration-300
              "
            >
              Coding
            </li>





            {/* Contact */}
            <li
              onClick={() => scrollToSection("contact")}
              className="
                text-sm
                sm:text-base
                whitespace-nowrap
                hover:text-cyan-400 
                transition 
                duration-300
              "
            >
              Contact
            </li>


          </ul>


        </div>


      </div>


    </nav>

  );
};


export default Navbar;