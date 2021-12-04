import React from "react";
import styles from "tailwindcss/dist/tailwind.min.css";
import "./stlyess.css";
import DccParts from "../Carousel/DccParts";
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
          {/*Nav*/}
          <div className="w-full container mx-auto">
            <div className="w-full flex items-center justify-between">
              <a
                className="
          flex
          items-center
          text-indigo-400
          no-underline
          hover:no-underline
          font-bold
          text-2xl
          lg:text-4xl
        "
                href="#"
              >
                DCC NITA
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
                  blur
                </span>
              </a>
              <div className="flex w-1/2 justify-end content-center">
                <a
                  className="
            inline-block
            text-blue-300
            no-underline
            hover:text-pink-500 hover:text-underline
            text-center
            h-10
            p-2
            md:h-auto md:p-4
            transform
            hover:scale-125
            duration-300
            ease-in-out
          "
                  href="https://discord.gg/nNyvhAcEbW"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width={50}
                    height={50}
                    viewBox="0 0 48 48"
                    style={{ fill: "#000000" }}
                  >
                    <path
                      fill="#8c9eff"
                      d="M40,12c0,0-4.585-3.588-10-4l-0.488,0.976C34.408,10.174,36.654,11.891,39,14c-4.045-2.065-8.039-4-15-4s-10.955,1.935-15,4c2.346-2.109,5.018-4.015,9.488-5.024L18,8c-5.681,0.537-10,4-10,4s-5.121,7.425-6,22c5.162,5.953,13,6,13,6l1.639-2.185C13.857,36.848,10.715,35.121,8,32c3.238,2.45,8.125,5,16,5s12.762-2.55,16-5c-2.715,3.121-5.857,4.848-8.639,5.815L33,40c0,0,7.838-0.047,13-6C45.121,19.425,40,12,40,12z M17.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C21,28.209,19.433,30,17.5,30z M30.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C34,28.209,32.433,30,30.5,30z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          {/*Main*/}
          <div
            className="
      container
      pt-24
      md:pt-36
      mx-auto
      flex flex-wrap flex-col
      md:flex-row
      items-center
    "
          >
            {/*Left Col*/}
            <div
              className="
        flex flex-col
        w-full
        xl:w-2/5
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
            <div className="w-full xl:w-3/5 pt-12 overflow-hidden rounded-lg">
              <img
                className="
          mx-auto
          w-70
          md:w-4/5
          transform
          -rotate-6
          transition
          hover:scale-105
          duration-700
          ease-in-out
          hover:rotate-6
          rounded-lg
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
