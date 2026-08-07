import { motion } from "framer-motion";

const projects = [
  {
    name: "ShopVerse",
    desc: "MERN E-commerce platform with Razorpay",
    live: "https://shopverse-tan.vercel.app",
    code: "https://github.com/mega-bytes111/shopverse",
  },
  {
    name: "TaskCollab",
    desc: "Real-time collaboration app with WebSockets",
    live: "https://task-manager-bkg3.onrender.com",
    code: "https://github.com/mega-bytes111/task-manager",
  },
  {
    name: "Aluminium Enterprises",
    desc: "Business website with lead management system (Mini CRM)",
    live: "https://aluminium-enterprises-olive.vercel.app",
    code: "https://github.com/mega-bytes111/aluminium-enterprises",
  },
  {
    name: "Weather App",
    desc: "Simple weather app that fetches real-time weather data by city name (Beginner Project)",
    live: "https://mega-bytes111.github.io/Weather_app/",
    code: "https://github.com/mega-bytes111/Weather_app",
  },
];

const Projects = () => {
  return (
    // ✅ IMPORTANT: ID added for scroll
    <section id="projects" className="py-20 px-4">
      
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >
        {/* 🔥 Heading */}
        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
          Projects
        </h2>

        {/* 🚀 Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="relative bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl 
              hover:scale-105 hover:shadow-blue-500/30 transition duration-300 cursor-pointer overflow-hidden group"
            >
              {/* 🔵 Glow Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition duration-300"></div>

              {/* 📦 Content */}
              <h3 className="text-xl font-semibold mb-2 relative z-10">{p.name}</h3>
              <p className="text-gray-400 text-sm relative z-10">{p.desc}</p>

              {/* 🔗 Buttons */}
              <div className="mt-6 flex gap-3 justify-center relative z-10">
                
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 text-xs bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg 
                  hover:scale-105 hover:shadow-blue-500/30 transition duration-300"
                >
                  Live
                </a>

                <a
                  href={p.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 text-xs border border-gray-500 rounded-lg 
                  hover:bg-white hover:text-black transition duration-300"
                >
                  Code
                </a>

              </div>

            </motion.div>
          ))}

        </div>

      </motion.div>
    </section>
  );
};

export default Projects;