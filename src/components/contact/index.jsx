// const data = require("../../data/blog.json");
import React from "react";
import emailjs from "emailjs-com";
import { useState } from "react";

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

const Contact = () => {
  const [buttonText, setButtonText] = useState("Send");
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
      (result) => {
        setButtonText("Sent ✅");
        setTimeout(() => setButtonText("Send"), 3000); // reset after 3s
        alert("Message Sent Successfully");
      },
      (error) => {
        console.log(error.text);
        setButtonText("Retry");
        alert("Something went wrong!");
      }
    );
    e.target.reset();
  };
  return (
    <div className="container mx-auto md:px-6 pb-10">
      <section className="">
        <div className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url('https://mdbcdn.b-cdn.net/img/new/textures/full/171.jpg')]"></div>
        <div className="container px-6 md:px-12">
          <div className="block rounded-lg bg-[hsla(0,0%,100%,0.7)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
            <div className="mb-12 grid gap-x-6 md:grid-cols-3 lg:grid-cols-3">
              <div className="mx-auto mb-12 text-center lg:mb-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                  />
                </svg>
                <h6 className="font-medium">India</h6>
              </div>
              <div className="mx-auto mb-12 text-center lg:mb-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <h6 className="font-medium">West Bengal</h6>
              </div>
              <div className="mx-auto mb-6 text-center md:mb-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                <h6 className="font-medium">+91-8945894399</h6>
              </div>
            </div>
            <div className="mx-auto max-w-[700px]">
              <form onSubmit={handleOnSubmit}>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="text"
                    className="peer block w-full rounded border-0 border-b-2 border-gray-300 bg-transparent px-3 pt-5 pb-2 text-base text-white placeholder-transparent focus:border-red-600 focus:outline-none focus:ring-0 sm:text-lg"
                    id="name"
                    name="name"
                    placeholder="Name"
                    required
                  />
                  <label
                    className="absolute left-3 top-0 text-gray-500 text-base transition-all duration-200 ease-out
               peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
               peer-focus:top-0 peer-focus:text-red-600 peer-focus:text-sm"
                    for="name"
                  >
                    Name
                  </label>
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="email"
                    className="peer block w-full rounded border-0 border-b-2 border-gray-300 bg-transparent px-3 pt-5 pb-2 text-base text-white placeholder-transparent focus:border-red-600 focus:outline-none focus:ring-0 sm:text-lg"
                    id="email"
                    name="email"
                    placeholder="Email address"
                    required
                  />
                  <label
                    className="absolute left-3 top-0 text-gray-500 text-base transition-all duration-200 ease-out
               peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
               peer-focus:top-0 peer-focus:text-red-600 peer-focus:text-sm"
                    for="email"
                  >
                    Email address
                  </label>
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <textarea
                    className="peer block w-full rounded border-0 border-b-2 border-gray-300 bg-transparent px-3 pt-5 pb-2 text-base text-white placeholder-transparent focus:border-red-600 focus:outline-none focus:ring-0 sm:text-lg"
                    id="message"
                    rows="3"
                    name="message"
                    placeholder="Your message"
                    required
                  ></textarea>
                  <label
                    for="message"
                    className="absolute left-3 top-0 text-gray-500 text-base transition-all duration-200 ease-out
               peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
               peer-focus:top-0 peer-focus:text-red-600 peer-focus:text-sm"
                  >
                    Message
                  </label>
                </div>

                <button
                  type="submit"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="inline-block w-full rounded bg-primary bg-red-700 hover:bg-red-800  px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] lg:mb-0"
                >
                  {buttonText}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
