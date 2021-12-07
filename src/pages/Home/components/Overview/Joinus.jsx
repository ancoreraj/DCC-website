import React from "react";
import "./stlyess.css";

function Joinus() {
  return (
    <div>
      <section className="text-blueGray-700  mt-20 ">
        <div className="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row lg:px-28">
          <div className="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0">
            <h2 className="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font"></h2>
            <h1 className="mb-8 text-xl font-black tracking-tighter text-white md:text-5xl title-font">
              {" "}
              DCC &nbsp; Discord &nbsp; Server
            </h1>
            <p className="mb-8  leading-relaxed text-left text-gray-300 text-xl ">
              Join us on our Discord server to get help, ask questions, and get
              regular updates on Contests, Hackathons and more!
            </p>
            <div className="flex flex-col items-center justify-center lg:flex-row">
              <a href="https://discord.gg/nNyvhAcEbW">
                <button className="flex items-center text-2xl px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-lg hover:bg-blue-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
                  Join Server
                </button>
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/3 items-center lg:max-w-lg  md:w-1/3">
            <img
              className="object-cover object-center -ml-12 sm:w-3/4  rounded-xl discord-logo"
              alt="hero"
              src="https://i.imgur.com/3RLbyw5.png"
              //src = "https://cliply.co/wp-content/uploads/2021/08/372108630_DISCORD_LOGO_400.gif"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Joinus;
