import React, { useEffect } from "react";
import { canvasDots } from "../../utils/connectDots";
import "./home.css";
import SocialIcons from "../socialIcons";
const Home = () => {
  useEffect(() => {
    console.log("called");
    // canvasDots();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen text-center">
      <div className="text-4xl md:text-5xl mb-3">
        Hi👋 My name is
        <span className="text-red-700"> Bappa Banerjee.</span>{" "}
      </div>
      <div className="text-3xl mb-5">
        I am a fullstack Blockchain Developer 👩‍💻
      </div>
      <SocialIcons />
      <canvas className="connecting-dots"></canvas>
    </div>
  );
};

export default Home;
