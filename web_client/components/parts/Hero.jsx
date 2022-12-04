import React from "react";
import Router from "next/router";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <div className="hero d-flex align-items-center justify-content-center flex-column text-white">
      <div className="dark-transparent text-center p-4 border-0">
        <p className="display-5 text-center fw-light">
          CLOUD E-BUS SEAT PLATFORM
        </p>
        <p className="h2 fw-lighter ">
          <Typewriter
            words={[
              "Manage And Sell Bus Seat Tickets Smartly",
              "Next Generation Of Buying Seat Tickets",
              "Be Sell Digitally Smart!",
            ]}
            loop={false}
            cursor
            cursorStyle="."
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </p>
        <button
          onClick={() => Router.push("/operator/auth/register")}
          className="btn btn-primary my-4 fw-bolder btn-lg rounded-0 px-4 "
        >
          JOIN OUR PLATFORM
        </button>
      </div>
    </div>
  );
}

export default Hero;
