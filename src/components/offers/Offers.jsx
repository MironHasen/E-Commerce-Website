import React from "react";
import "./Offers.css";
import exclusive_image from "../../assets/exclusive_image.png";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers_left">
        <h1>Exclusive</h1>
        <h1>Offers for you</h1>
        <p>Only On Best Sell Products</p>
        <button>Check Now</button>
      </div>

      <div className="offers_right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};

export default Offers;
