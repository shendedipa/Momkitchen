// import React from "react";
// import { motion } from "framer-motion";
// import Review from "./ReviewForm";
// import { NavLink } from "react-router-dom";
// import Slider from "./Slider";

// const Home = () => {
//   return (
//     <div
//       className="w-full h-screen bg-cover bg-center relative"
//       style={{
//         backgroundImage: "url('/foods.jpg')",
//       }}
//     >
//       {/* Content */}
//       <div className="relative w-full z-10 flex items-center justify-center h-full px-6 text-center gap-5">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="max-w-2xl text-black mt-13 translate-x-3 sm:translate-x-10"
//         >
//           <h1 className="text-4xl sm:text-5xl font-bold mb-6   drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] prata-regular">
//             Discover Recipes Based on<br></br>
//             What’s in Your Kitchen!
//           </h1>

//           <p className="text-lg sm:text-xl mb-8 italic">
//             Just enter the ingredients you have, and we’ll help you whip up
//             something amazing. Add your own recipes and join our food-loving
//             community!
//           </p>

// <MotionNavLink
//   whileHover={{ scale: 1.05 }}
//   whileTap={{ scale: 0.9 }}
//   className="relative px-8 py-3 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-pink-600 via-red-500 to-yellow-500 shadow-lg hover:shadow-xl transition-all duration-300"
//   to="/search"
// >

//             Explore Now
//             <span className="absolute inset-0 rounded-full animate-ping bg-white opacity-10 pointer-events-none"></span>
//           </MotionNavLinkNavLink>
//         </motion.div>
//       </div>
//       <div>
//         <Slider />
//       </div>
//       <div>
//         <Review />
//       </div>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import { motion } from "framer-motion";
import Review from "./ReviewForm";
import { NavLink } from "react-router-dom";
import Slider from "./Slider";

// ✅ Create a Motion-enhanced NavLink
const MotionNavLink = motion.create(NavLink);

const Home = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/food.jpg')", // Ensure this image is inside the public folder
      }}
    >
      {/* Content */}
      <div className="relative w-full z-10 flex items-center justify-center h-full px-6 text-center gap-5">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl text-black mt-13 translate-x-3 sm:translate-x-10"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] prata-regular">
            Discover Recipes Based on
            <br />
            What’s in Your Kitchen!
          </h1>

          <p className="text-lg sm:text-xl mb-8 italic">
            Just enter the ingredients you have, and we’ll help you whip up
            something amazing. Add your own recipes and join our food-loving
            community!
          </p>

          {/* ✅ Updated MotionNavLink */}
          <MotionNavLink
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            to="/search"
            className="relative px-8 py-3 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-pink-600 via-red-500 to-yellow-500 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Explore Now
            <span className="absolute inset-0 rounded-full animate-ping bg-white opacity-10 pointer-events-none"></span>
          </MotionNavLink>
        </motion.div>
      </div>

      <div>
        <Slider />
      </div>
      <div>
        <Review />
      </div>
    </div>
  );
};

export default Home;
