import { motion } from "framer-motion";

const skills = [
  // 💻 Languages
  "C", "C++", "Java", "Python", "JavaScript", "TypeScript",

  // 🌐 Frontend
  "React.js", "Next.js", "Redux Toolkit", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap",

  // ⚙️ Backend
  "Node.js", "Express.js", "REST APIs", "JWT", "Socket.io", "GraphQL",

  // 🗄️ Databases
  "MongoDB", "PostgreSQL", "MySQL", "Firebase", "Supabase",

  // 🛠️ Tools
  "Git", "GitHub", "Postman", "Vercel", "Render"
];

const Skills = () => {
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
        <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
          Skills
        </h2>

        {/* 💡 Skills Grid */}
        <div className="flex flex-wrap justify-center gap-4">

          {skills.map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="px-5 py-2 text-sm bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl 
              hover:scale-110 hover:shadow-blue-500/30 hover:border-blue-400/40
              transition duration-300 cursor-pointer"
            >
              {skill}
            </motion.div>
          ))}

        </div>

      </motion.div>

    </section>
  );
};

export default Skills;