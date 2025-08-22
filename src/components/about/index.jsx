import React from "react";
import developer from "../../assets/developer4.jpg";
import { Link } from "react-router-dom";
import { profiles } from "../../data/profiles.js";
import ProfileCard from "./profileCard.jsx";

import { skillsList } from "../../utils/importSkills.js";
const About = () => {
  return (
    <div className="container mx-auto py-20">
      {/* Page Header */}
      <div className="flex flex-col justify-center items-center h-full text-center pt-10">
        <div className="text-6xl flex">
          About &nbsp;<span className="text-red-700"> Me</span>{" "}
        </div>
        <div className="text-3xl">
          Get to <span className="text-red-700">know me...</span>{" "}
        </div>
      </div>

      {/* Description */}
      <div className="flex flex-col-reverse md:flex-row pt-10">
        <div className="basis-1/2 flex flex-col justify-center">
          <div className="flex flex-col space-y-4">
            <div className="text-xl md:text-2xl lg:text-4xl text-red-700 font-semibold">
              Backend & Blockchain Developer
            </div>
            <div className="text-justify lg:text-xl">
              I’m a backend developer with{" "}
              <span className="font-medium">3+ years of experience </span>
              building scalable, high-performance applications using
              <span className="font-medium"> Node.js and Express.js</span>. My
              expertise includes designing RESTful APIs, managing databases,
              optimizing server performance, and deploying production-ready
              systems.
            </div>
            <div className="text-justify lg:text-xl">
              Alongside backend development, I bring hands-on experience in
              <span className="font-medium text-red-500">
                {" "}
                blockchain engineering
              </span>
              , with strong knowledge of
              <span className="font-medium"> Solidity</span> and smart contract
              development on
              <span className="font-medium"> Ethereum-based networks</span>. I’m
              passionate about building secure, decentralized, and impactful
              digital solutions.
            </div>
          </div>
          <div className="mt-10">
            <Link to="/contact">
              <button
                type="button"
                className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                Contact Me
              </button>
            </Link>
          </div>
        </div>
        <div className="basis-1/2 flex justify-center items-center">
          <img
            src={developer}
            alt="developer"
            className="h-72 w-72 object-cover rounded-full scale-x-[-1] md:h-96 md:w-96"
          />
        </div>
      </div>

      <hr className="h-px my-20 bg-gray-200 border-0 dark:bg-gray-700"></hr>

      {/* <ScrollAnimation animateIn="fadeIn">Some Text</ScrollAnimation> */}

      {/* My skills */}
      <div>
        <div className="text-5xl text-center mb-20">
          My <span className="text-red-700">Skills</span>
        </div>
        <div className="Skills grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-10">
          {skillsList.map((skill) => (
            <div
              key={skill.name}
              className="text-center border border-gray-200 rounded-lg p-5 hover:bg-red-200 hover:text-red-500 "
            >
              <img
                src={skill.img}
                className="h-32 w-32 mx-auto"
                alt={skill.name}
              />
              <div className="mt-2 font-semibold">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>

      <hr className="h-px my-20 bg-gray-200 border-0 dark:bg-gray-700"></hr>

      {/* Testimonials */}

      <section className="text-center">
        <h2 className="mb-12 text-5xl font-bold text-red-700">Testimonials</h2>
        <div className="grid gap-x-6 md:grid-cols-3 xl:gap-x-12 md:p-20 p-5">
          {profiles.map((profile) => (
            <ProfileCard
              key={profile.name}
              linkedInUrl={profile.linkedInUrl}
              name={profile.name}
              role={profile.role}
              image={profile.image}
              rating={profile.rating}
              description={profile.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
