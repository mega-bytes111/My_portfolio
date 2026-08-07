const Footer = () => {
  return (
    <footer className="mt-20 border-t border-white/10 bg-black/40 backdrop-blur-lg">

      <div className="max-w-6xl mx-auto px-6 py-10 text-center">

        {/* Name */}
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
          Arpan Tiwari
        </h2>


        {/* Role */}
        <p className="text-gray-400 mt-3">
          Full Stack Developer | MERN Stack Developer 🚀
        </p>


        {/* Contact Details */}
        <div className="flex flex-wrap justify-center gap-6 mt-6">


          {/* Phone */}
          <a
            href="tel:+91XXXXXXXXXX"
            className="text-gray-300 hover:text-cyan-400 transition duration-300"
          >
            📞 +917880919685
          </a>


          {/* Gmail */}
          <a
            href="mailto:arpantiwari381@gmail.com"
            className="text-gray-300 hover:text-cyan-400 transition duration-300"
          >
            📧 arpantiwari381@gmail.com
          </a>


          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/arpan-tiwari-1622032a9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-cyan-400 transition duration-300"
          >
            🔗 LinkedIn
          </a>


          {/* GitHub */}
          <a
            href="https://github.com/mega-bytes111"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-cyan-400 transition duration-300"
          >
            💻 GitHub
          </a>


        </div>


      </div>

    </footer>
  );
};

export default Footer;