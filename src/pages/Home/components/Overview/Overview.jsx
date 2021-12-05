import React from "react";
import styles from "tailwindcss/dist/tailwind.min.css";
import "./stlyess.css";
// import DccParts from "../Carousel/DccParts";
import Motivee from "./Motivee";
import Joinus from "./Joinus";

export const Overview = (props) => {
  let dark = props.theme;

  return (
    <div>
      <div
        className="
  leading-normal
  tracking-normal
  text-indigo-400
  bg-cover bg-fixed
  w-full
"
        style={{ backgroundImage: 'url("header.png")' }}
      >
        <div className="h-full">
          <div
            className="
      container
      md:pt-36
      mx-auto
      flex flex-wrap flex-col
      md:flex-row
    //   items-center
    "
          >
            {/*Left Col*/}
            <div
              className="
        flex flex-col
        w-full
        xl:w-2/5
        lg:-mt-52 
        justify-center
        lg:items-start
        overflow-y-hidden
      "
            >
              <h1
                className="
          my-4
          text-3xl
          md:text-5xl
          text-white
          opacity-75
          font-bold
          leading-tight
          text-center
          md:text-left
        "
              >
                DCC&nbsp;- &nbsp;
                <span
                  className="
            bg-clip-text
            text-transparent
            bg-gradient-to-r
            from-green-400
            via-pink-500
            to-purple-500
          "
                >
                  One stop Coding destination &nbsp;
                </span>
              </h1>
              <p
                className="
          leading-normal
          text-base
          md:text-2xl
          mb-8
          text-center
          md:text-left
        "
              >
                An initiative of NIT Agartala to bring like-minded Coders and Developers together
              </p>
              <form
                className="
          bg-gray-900
          opacity-75
          w-full
          shadow-lg
          rounded-lg
          px-8
          pt-6
          pb-8
          mb-4
        "
              >
                <div className="mb-4">
                  <label
                    className="block text-blue-300 py-2 font-bold mb-2"
                    htmlFor="emailaddress"
                  >
                    Signup for our newsletter
                  </label>
                  <input
                    className="
              shadow
              appearance-none
              border
              rounded
              w-full
              p-3
              text-gray-700
              leading-tight
              focus:ring
              transform
              transition
              hover:scale-105
              duration-300
              ease-in-out
            "
                    id="emailaddress"
                    type="text"
                    placeholder="you@somewhere.com"
                  />
                </div>
                <div className="flex items-center justify-between pt-4">
                  <button
                    className="
              bg-gradient-to-r
              from-purple-800
              to-green-500
              hover:from-pink-500 hover:to-green-500
              text-white
              font-bold
              py-2
              px-4
              rounded
              focus:ring
              transform
              transition
              hover:scale-105
              duration-300
              ease-in-out
            "
                    type="button"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
            {/*Right Col*/}
            <div className="w-full xl:w-3/5 pt-12 rounded-lg lg:-mt-20">
              <img
                className="
          mx-auto
          w-4/5

          md:w-4/5
          transform
          overflow-hidden
          -rotate-6
          transition
          hover:scale-105
          duration-700
          ease-in-out
          hover:rotate-6
          rounded-lg
          zzz
        "
                src="macbook.svg"
              />
            </div>

            {/*Footer*/}
          </div>
        </div>
        <Motivee />
        <Joinus />
      </div>
    </div>
  );
};
