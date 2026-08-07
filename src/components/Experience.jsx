import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section className="py-20">

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        {/* 🔥 Heading */}
        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
          Experience
        </h2>

        <div className="space-y-10">

          {/* ==================== CARD 1 ==================== */}
          {/* 💼 Internship */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl 
            hover:scale-[1.02] hover:shadow-blue-500/30 transition duration-300 text-left overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition duration-300"></div>

            <h3 className="text-2xl font-semibold relative z-10">
              Full Stack Developer Intern
            </h3>

            <p className="text-blue-400 mt-1 relative z-10">
              Vaidsys Technologies
            </p>

            <p className="text-gray-500 text-sm mt-1 relative z-10">
              May 2026 – June 2026
            </p>

            <ul className="text-gray-400 mt-5 space-y-3 leading-relaxed relative z-10 list-disc pl-5">
              <li>
                Built and deployed <strong>TaskCollab</strong>, a full-stack task
                management system using MERN stack and Socket.io.
              </li>
              <li>
                Implemented <strong>JWT authentication</strong> and secure REST APIs.
              </li>
              <li>
                Developed <strong>real-time notifications</strong> using WebSockets.
              </li>
              <li>
                Designed responsive UI with Tailwind CSS.
              </li>
              <li>
                Deployed on <strong>Render</strong> with proper CORS & env setup.
              </li>
            </ul>

            <div className="mt-6 relative z-10">
              <a
                href="https://task-manager-bkg3.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 text-sm bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg 
                hover:scale-105 hover:shadow-blue-500/30 transition duration-300"
              >
                View Live Project
              </a>
            </div>

            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-l-xl"></div>
          </motion.div>

          {/* ==================== CARD 2 ==================== */}
          {/* 🏢 Client Project */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl 
            hover:scale-[1.02] hover:shadow-cyan-500/30 transition duration-300 text-left overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-10 transition duration-300"></div>

            <h3 className="text-2xl font-semibold relative z-10">
              Freelance / Client Project
            </h3>

            <p className="text-cyan-400 mt-1 relative z-10">
              Shri Vishwakarma Enterprises
            </p>

            <p className="text-gray-500 text-sm mt-1 relative z-10">
              Business Website Development
            </p>

            <ul className="text-gray-400 mt-5 space-y-3 leading-relaxed relative z-10 list-disc pl-5">
              <li>
                Designed and developed a <strong>production-ready business website</strong>
                for a real-world aluminium store client.
              </li>
              <li>
                Built a <strong>lead capture system</strong> with backend storage and admin dashboard (mini CRM).
              </li>
              <li>
                Integrated <strong>WhatsApp, call, and email features</strong> for direct customer engagement.
              </li>
              <li>
                Developed admin panel with <strong>lead tracking (New / Contacted / Closed)</strong>.
              </li>
              <li>
                Implemented security using <strong>Helmet, rate limiting, and CORS</strong>.
              </li>
              <li>
                Deployed frontend on <strong>Vercel</strong> and backend on <strong>Render</strong>.
              </li>
            </ul>

            <div className="mt-6 relative z-10">
              <a
                href="https://aluminium-enterprises-olive.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 text-sm bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg 
                hover:scale-105 hover:shadow-cyan-500/30 transition duration-300"
              >
                View Live Website
              </a>
            </div>

            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-l-xl"></div>
          </motion.div>

        </div>

      </motion.div>

    </section>
  );
};

export default Experience;