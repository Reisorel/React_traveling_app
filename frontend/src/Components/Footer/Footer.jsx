import React from "react";
import "./Footer.css";
import { FiSend } from "react-icons/fi";

const Footer = () => {
  const video2 =
    "https://res.cloudinary.com/dqrq4ullu/video/upload/v1727706009/travel_agency_react/videos/rocky_water_lm4w4w.mp4";

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small>Restons en contact !</small>
            <h2>Voyagez avec nous!</h2>
          </div>
          <div className="inputDiv flex">
            <input type="text" placeholder="Enter Email Adress" />
            <button className="btn flex" type="submit">
              ENVOYER <FiSend className="icon" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
