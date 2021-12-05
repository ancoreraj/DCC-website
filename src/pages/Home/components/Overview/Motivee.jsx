import React from "react";
import "./stlyess.css";

function Motivee() {
  return (
    <div className="m-4 mt-64">
      <div className="flex  justify-center font-bold gap-1 lg:text-3xl mb-16 mt-64 hoverr">
        <kbd className="kbd  bg-dark">O</kbd>
        <kbd className="kbd bg-dark">U</kbd>
        <kbd className="kbd bg-dark">R</kbd>
        <h1>&nbsp; &nbsp; </h1>
        <h1>&nbsp; &nbsp; </h1>
        <h1>&nbsp; </h1>
        <kbd className="kbd bg-dark">M</kbd>
        <kbd className="kbd bg-dark">O</kbd>
        <kbd className="kbd bg-dark">T</kbd>
        <kbd className="kbd bg-dark">I</kbd>
        <kbd className="kbd bg-dark">V</kbd>
        <kbd className="kbd bg-dark">E</kbd>
      </div>
      <div className="flex items-center flex-wrap justify-around ">
        <div className="mockup-window  bg-base-300 h-72  w-80 my-4 hoverr shadow-xl ">
          <div className="flex justify-center text-yellow-200 text-2xl px-4 py-4 bg-base-200 bg-dark ">
            Increase Awareness
          </div>
          <div className="flex justify-center px-4 pb-5 text-purple-400 text-lg  bg-base-200 bg-dark">
            Towards plethora of opportunities such as internships, competitions,
            openings for collaboration in projects, and many more...
          </div>
        </div>

        <div className="mockup-code hoverrr shadow-2xl   h-96 my-8 w-auto text-white ">
          <pre
            data-prefix=""
            className="bg-warning text-neutral flex  text-xl mb-8  items-centre my-8"
          >
            <code>Lots of Learning </code>
          </pre>
          <pre data-prefix="1">
            <code className="text-wrap ">Helping you accelerate</code>
          </pre>
          <pre data-prefix="2">
            <code className="text-wrap">your learning and</code>
          </pre>
          <pre data-prefix="3">
            <code className="text-wrap">bring you closer to</code>
          </pre>
          <pre data-prefix="4">
            <code className="text-wrap">like – minded individuals.</code>
          </pre>
          <pre data-prefix="5">
            <code>Ultimately, there will always</code>
          </pre>
          <pre data-prefix="6">
            <code>be a helping hand at your side.</code>
          </pre>
        </div>

        <div className="mockup-window  bg-base-300 w-80 my-4 hoverr shadow-xl ">
          <div className="flex justify-center text-yellow-200 text-2xl px-4 py-8 bg-base-200 bg-dark">
            Tech Community
          </div>
          <div className="flex justify-center  px-4 text-purple-400 text-lg pb-8 bg-base-200 bg-dark">
            Forming a global tech community where developers can converse
            together, share information and learn from each other.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Motivee;
