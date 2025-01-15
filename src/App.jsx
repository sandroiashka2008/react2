import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import foto1 from "./assets/images/foto1.png";
import oval1 from "./assets/images/oval1.png";

function App() {
  return (
    <div className="cont">
      <div className="image-container">
        <img id="foto1" src={foto1} alt="Image" />
        <div className="overlay"></div>
      </div>
      <h2 className="numb">Equilibrium #3429</h2>
      <p className="calm">
        Our Equilibrium collection promotes balance and calm.
      </p>

      <div className="bottomdiv">
        <svg
          className="svg1"
          width="11"
          height="18"
          viewBox="0 0 11 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.5 0L10.9961 9.16875L5.5 12.4312L0 9.16875L5.5 0ZM11 10.2165L5.5 18L0 10.2165L5.5 13.479L11 10.2165Z"
            fill="#00FFF8"
          />
        </svg>

        <p className="p2">0.041ETH</p>
        <svg
          className="svg2"
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.01"
            x="16.305"
            y="16.6739"
            width="16"
            height="16"
            transform="rotate(180 16.305 16.6739)"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.63834 8.67388C1.63834 4.99199 4.6231 2.00722 8.305 2.00722C10.0731 2.00722 11.7688 2.7096 13.019 3.95984C14.2693 5.21008 14.9717 6.90577 14.9717 8.67388C14.9717 12.3558 11.9869 15.3406 8.305 15.3406C4.6231 15.3406 1.63834 12.3558 1.63834 8.67388ZM8.305 9.34055H10.9717C11.3399 9.34055 11.6383 9.04207 11.6383 8.67388C11.6383 8.30569 11.3399 8.00722 10.9717 8.00722H8.97167V6.00722C8.97167 5.63903 8.67319 5.34055 8.305 5.34055C7.93681 5.34055 7.63834 5.63903 7.63834 6.00722V8.67388C7.63834 9.04207 7.93681 9.34055 8.305 9.34055Z"
            fill="#8BACD9"
          />
        </svg>
        <p className="p3">3 days left</p>
      </div>
      <div className="obj"></div>
      <img id="oval1" src={oval1} alt="" />
      <div className="last">
        <p className="p4">Creation of</p>
        <p className="name">jules wyvern</p>
      </div>
    </div>
  );
}

export default App;
