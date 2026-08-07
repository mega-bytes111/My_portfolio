import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="scroll-mt-20 pt-24">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >

        {/* 🔥 Heading */}
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
          About Me
        </h2>

        {/* 💬 Description */}
        <p className="text-gray-300 text-lg leading-relaxed mb-10">
          I'm a passionate Full Stack Developer who loves building modern,
          scalable, and user-friendly web applications using MERN stack.

          Alongside development, I actively strengthen my problem-solving skills
          by solving 450+ DSA questions on platforms like LeetCode, which helps
          me write efficient and optimized code.

          I enjoy turning ideas into impactful digital products and continuously
          learning new technologies to grow as a developer 🚀
        </p>


        {/* 📊 Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* 📈 Card 1 */}
          <div
            className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl 
            hover:scale-105 hover:shadow-blue-500/30 transition duration-300"
          >
            <h3 className="text-2xl font-bold text-blue-400">
              450+
            </h3>
            <p className="text-gray-300 mt-2">
              DSA Problems
            </p>
          </div>


          {/* 📦 Card 2 */}
          <div
            className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl 
            hover:scale-105 hover:shadow-blue-500/30 transition duration-300"
          >
            <h3 className="text-2xl font-bold text-blue-400">
              5+
            </h3>
            <p className="text-gray-300 mt-2">
              Projects
            </p>
          </div>


          {/* 💼 Card 3 */}
          <div
            className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl 
            hover:scale-105 hover:shadow-blue-500/30 transition duration-300"
          >
            <h3 className="text-2xl font-bold text-blue-400">
              2+
            </h3>
            <p className="text-gray-300 mt-2">
              Internship
            </p>
          </div>


        </div>

      </motion.div>
    </section>
  );
};

export default About;