import { motion } from "framer-motion";
import profile from "../assets/profile1.png";

const Hero = () => {

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };


  return (

    <section className="
      min-h-screen 
      flex 
      items-center 
      pt-32 
      pb-20 
      relative 
      overflow-hidden
    ">


      {/* 🔵 Background Glow */}
      <div className="
        absolute 
        w-[500px] 
        h-[500px] 
        bg-blue-500 
        blur-[120px] 
        opacity-20 
        rounded-full 
        top-20 
        left-20
      "></div>


      <div className="
        absolute 
        w-[400px] 
        h-[400px] 
        bg-cyan-500 
        blur-[120px] 
        opacity-20 
        rounded-full 
        bottom-10 
        right-10
      "></div>




      <div className="z-10 w-full flex flex-col items-center">



        {/* 🔥 BIG PROFILE IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full flex justify-center mb-12 mt-6"
        >

          <img
            src={profile}
            alt="profile"
            className="
              w-[85%]
              max-w-[1000px]
              h-auto
              object-cover
              rounded-3xl
              border border-cyan-400/30
              shadow-[0_0_80px_rgba(34,211,238,0.5)]
              transition duration-500 hover:scale-[1.03]
            "
          />

        </motion.div>





        {/* 👑 Name */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
            text-4xl md:text-6xl 
            font-extrabold 
            bg-gradient-to-r 
            from-blue-400 
            to-cyan-400 
            text-transparent 
            bg-clip-text
          "
        >
          Arpan Tiwari
        </motion.h1>





        {/* 💬 Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="
            mt-4 
            text-gray-400 
            text-lg 
            max-w-xl 
            mx-auto 
            text-center
          "
        >
          Building scalable & modern web experiences 🚀
        </motion.p>





        {/* 🔘 Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="
            mt-10 
            flex 
            justify-center 
            gap-6 
            flex-wrap
          "
        >



          {/* Projects */}
          <button
            onClick={() => scrollToSection("projects")}
            className="
              bg-gradient-to-r 
              from-blue-500 
              to-cyan-500 
              px-6 py-3 
              rounded-xl 
              shadow-lg 
              hover:scale-105 
              hover:shadow-blue-500/30 
              transition duration-300
            "
          >
            View Projects
          </button>





          {/* Contact */}
          <button
            onClick={() => scrollToSection("contact")}
            className="
              border border-gray-600 
              px-6 py-3 
              rounded-xl 
              hover:bg-white 
              hover:text-black 
              transition duration-300
            "
          >
            Contact Me
          </button>





          {/* 📄 Resume */}
          <a
            href="/Arpan_Tiwari_Resume.pdf"
            download
            className="
              border border-cyan-400
              px-6 py-3
              rounded-xl
              text-cyan-400
              hover:bg-cyan-400
              hover:text-black
              transition duration-300
            "
          >
            Download Resume 📄
          </a>



        </motion.div>


      </div>


    </section>

  );
};


export default Hero;