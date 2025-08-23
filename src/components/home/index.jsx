import React, { useEffect } from "react";
import { canvasDots } from "../../utils/connectDots";
import "./home.css";
import SocialIcons from "../socialIcons";
const Home = () => {
  useEffect(() => {
    //disable canvasDots for mobile
    if (window.innerWidth > 768) {
      // run only on tablet/desktop
      canvasDots();
    }
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen text-center">
      <div className="text-3xl sm:text-4xl md:text-5xl mb-3">
        Hi there 👋 I'm{" "}
        <span className="text-red-700 whitespace-nowrap"> Bappa Banerjee</span>
      </div>
      <div className="text-xl sm:text-2xl md:text-3xl mb-5 text-gray-00">
        Backend Blockchain Developer 👨‍💻
      </div>
      <SocialIcons />
      <canvas className="connecting-dots"></canvas>
    </div>
  );
};

export default Home;
