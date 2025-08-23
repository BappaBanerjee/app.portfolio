import React from "react";
import developer from "../../assets/developer4.jpg";
import { Link } from "react-router-dom";
import { profiles } from "../../data/profiles.js";
import ProfileCard from "./profileCard.jsx";

import { skillsList } from "../../utils/importSkills.js";
import ExperienceSection from "./experince.jsx";
import EducationSection from "./education.jsx";
const About = () => {
  return (
    <div className="container mx-auto py-20">
      {/* Page Header */}
      <div className="flex flex-col justify-center items-center h-full py-12 space-y-4">
        <h2 className="section-heading">
          About <span className="section-highlight">Me</span>
        </h2>
        <p className="section-subheading">
          Get to <span className="section-highlight">know me...</span>
        </p>
      </div>

      {/* Description */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 pt-10">
        {/* Left content - wider */}
        <div className="basis-7/12 flex flex-col justify-center text-center md:text-left px-4 md:px-6 lg:px-8">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-red-700 font-bold">
              Backend Blockchain Developer
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-justify text-gray-700 dark:text-gray-300">
              I’m a backend developer with{" "}
              <span className="font-semibold">3+ years of experience</span>{" "}
              building scalable, high-performance applications using{" "}
              <span className="font-semibold">Node.js and Express.js</span>. My
              expertise includes designing RESTful APIs, managing databases,
              optimizing server performance, and deploying production-ready
              systems.
            </p>

            <p className="text-base sm:text-lg lg:text-xl text-justify text-gray-700 dark:text-gray-300">
              Alongside backend development, I bring hands-on experience in{" "}
              <span className="font-semibold text-red-500">
                blockchain engineering
              </span>
              , with strong knowledge of{" "}
              <span className="font-semibold">Solidity</span> and smart contract
              development on{" "}
              <span className="font-semibold">Ethereum-based networks</span>.
              I’m passionate about building secure, decentralized, and impactful
              digital solutions.
            </p>
          </div>

          <div className="mt-8">
            <Link to="/contact">
              <button
                type="button"
                className="px-6 py-3 text-sm md:text-base font-medium text-white bg-red-700 rounded-lg shadow-md transition-all duration-300 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                Contact Me
              </button>
            </Link>
          </div>
        </div>

        {/* Right image - narrower, always centered */}
        <div className="basis-5/12 flex justify-center items-center px-4">
          <img
            src={developer}
            alt="developer"
            className="rounded-full object-cover scale-x-[-1] shadow-lg
               h-52 w-52 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80 xl:h-96 xl:w-96"
          />
        </div>
      </div>

      <hr className="h-px my-20 bg-gray-200 border-0 dark:bg-gray-700"></hr>

      {/* <ScrollAnimation animateIn="fadeIn">Some Text</ScrollAnimation> */}

      {/* My skills */}
      <div>
        <div className="section-title">
          My <span className="section-title-highlight">Skills</span>
        </div>
        <div className="Skills grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-10">
          {skillsList.map((skill) => (
            <div
              key={skill.name}
              className="group text-center border border-gray-200 rounded-xl p-5 bg-white dark:bg-neutral-800 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer"
            >
              <img
                src={skill.img}
                className="h-24 w-24 mx-auto transition-transform duration-300 group-hover:scale-125"
                alt={skill.name}
              />
              <div className="mt-3 font-semibold transition-colors duration-300 group-hover:text-red-500">
                {skill.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="h-px my-20 bg-gray-200 border-0 dark:bg-gray-700"></hr>

      {/* Experience */}
      <ExperienceSection />

      <hr className="h-px my-20 bg-gray-200 border-0 dark:bg-gray-700"></hr>

      {/* Education */}
      <EducationSection />
      {/* <hr className="h-px my-20 bg-gray-200 border-0 dark:bg-gray-700"></hr> */}

      {/* Testimonials */}

      {/* <section className="text-center">
        <h2 className="mb-12 section-title-highlight">Testimonials</h2>
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
      </section> */}
    </div>
  );
};

export default About;
