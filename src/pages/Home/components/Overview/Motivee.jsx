import React from "react";
import "./stlyess.css";

function Motivee() {
  return (
    <div className="m-4 mt-64">
      <div className="flex  justify-center font-bold gap-1 lg:text-3xl mb-16 mt-64 ">
        <h1 className="mb-8 text-xl font-black tracking-tighter text-white md:text-5xl title-font">
          {" "}
          Our &nbsp; Motive
        </h1>
      </div>
      <div className="flex items-center flex-wrap justify-around ">
        <div className="mockup-window  bg-base-300 w-80 my-4 hoverr shadow-xl ">
          <div className="flex justify-center text-5xl px-4 pt-3 bg-base-200 bg-dark">
            📢
          </div>
          <div className="flex justify-center text-yellow-200 text-2xl px-4 pt-2 pb-8 bg-base-200 bg-dark">
            Inrease Awareness
          </div>
          <div
            style={{ textAlign: "center" }}
            className="flex justify-center  px-4 text-purple-400 text-lg pb-8 bg-base-200 bg-dark"
          >
            Towards plethora of opportunities such as internships, competitions,
            openings for collaboration in projects, and much more!
          </div>
        </div>

        <div className="mockup-window  bg-base-300 w-80 my-4 hoverr shadow-xl ">
          <div className="flex justify-center text-5xl px-4 pt-3 bg-base-200 bg-dark">
            🧠
          </div>
          <div className="flex justify-center text-yellow-200 text-2xl px-4 pt-2 pb-8 bg-base-200 bg-dark">
            Lots of Learning
          </div>
          <div
            style={{ textAlign: "center" }}
            className="flex justify-center  px-4 text-purple-400 text-lg pb-8 bg-base-200 bg-dark"
          >
            Helping you accelerate your learning &amp; bring you closer to like
            – minded individuals. So, there will always be a helping hand at
            your side.
          </div>
        </div>

        <div className="mockup-window  bg-base-300 w-80 my-4 hoverr shadow-xl ">
          <div className="flex justify-center text-5xl px-4 pt-3 bg-base-200 bg-dark">
            🤝
          </div>
          <div className="flex justify-center text-yellow-200 text-2xl px-4 pt-2 pb-8 bg-base-200 bg-dark">
            Tech Community
          </div>
          <div
            style={{ textAlign: "center" }}
            className="flex justify-center  px-4 text-purple-400 text-lg pb-8 bg-base-200 bg-dark"
          >
            Forming a global tech community where developers can converse
            together, share information and learn from each other.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Motivee;
