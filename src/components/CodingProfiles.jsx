const CodingProfiles = () => {
  return (
    <section id="coding" className="scroll-mt-20 py-20">

      <div className="max-w-5xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
          Coding Profiles
        </h2>


        <div className="grid md:grid-cols-3 gap-6">


          {/* LeetCode */}
          <a
            href="https://leetcode.com/u/starter826688/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-white/10 
              backdrop-blur-lg 
              border border-white/20 
              p-6 
              rounded-2xl 
              hover:scale-105 
              hover:shadow-blue-500/30
              transition duration-300
            "
          >

            <h3 className="text-2xl font-bold text-orange-400">
              LeetCode
            </h3>

            <p className="text-gray-300 mt-3">
              450+ Problems Solved
            </p>

            <p className="text-gray-400 mt-2">
              Rating: 1599
            </p>

            <p className="text-cyan-400 mt-4">
              Visit Profile →
            </p>

          </a>




          {/* CodeChef */}
          <a
            href="https://www.codechef.com/users/shashank_8266"
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-white/10 
              backdrop-blur-lg 
              border border-white/20 
              p-6 
              rounded-2xl 
              hover:scale-105 
              hover:shadow-blue-500/30
              transition duration-300
            "
          >

            <h3 className="text-2xl font-bold text-yellow-400">
              CodeChef
            </h3>

            <p className="text-gray-300 mt-3">
              2 ⭐ Rating
            </p>

            <p className="text-gray-400 mt-2">
              Competitive Programming
            </p>

            <p className="text-cyan-400 mt-4">
              Visit Profile →
            </p>

          </a>





          {/* HackerRank */}
          <a
            href="https://www.hackerrank.com/profile/starter826688"
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-white/10 
              backdrop-blur-lg 
              border border-white/20 
              p-6 
              rounded-2xl 
              hover:scale-105 
              hover:shadow-blue-500/30
              transition duration-300
            "
          >

            <h3 className="text-2xl font-bold text-green-400">
              HackerRank
            </h3>

            <p className="text-gray-300 mt-3">
              3 ⭐ Rating
            </p>

            <p className="text-gray-400 mt-2">
              Problem Solving
            </p>

            <p className="text-cyan-400 mt-4">
              Visit Profile →
            </p>

          </a>


        </div>

      </div>

    </section>
  );
};

export default CodingProfiles;