import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef } from "react";


const Contact = () => {

  const form = useRef();


  const sendEmail = (e) => {

    e.preventDefault();


    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {

      alert("Message Sent Successfully 🚀");

      e.target.reset();

    })
    .catch(() => {

      alert("Failed to send message ❌");

    });

  };


  return (
    <section id="contact" className="py-20">


      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >


        {/* 🔥 Heading */}
        <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
          Contact Me
        </h2>



        {/* 📩 Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-xl"
        >



          {/* 👤 Name */}
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 mb-4 bg-transparent border border-white/20 rounded-lg 
            focus:outline-none focus:border-blue-500 focus:shadow-blue-500/20 
            transition duration-300"
          />



          {/* 📧 Email */}
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 mb-4 bg-transparent border border-white/20 rounded-lg 
            focus:outline-none focus:border-blue-500 focus:shadow-blue-500/20 
            transition duration-300"
          />



          {/* 💬 Message */}
          <textarea
            rows="5"
            name="message"
            placeholder="Your Message"
            required
            className="w-full p-3 mb-6 bg-transparent border border-white/20 rounded-lg 
            focus:outline-none focus:border-blue-500 focus:shadow-blue-500/20 
            transition duration-300"
          ></textarea>




          {/* 🚀 Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 py-3 rounded-xl font-semibold 
            shadow-lg hover:shadow-blue-500/30 transition duration-300"
          >
            Send Message
          </motion.button>


        </form>


      </motion.div>


    </section>
  );
};


export default Contact;