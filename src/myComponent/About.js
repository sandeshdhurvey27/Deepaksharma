import React from "react";

import { Paper, Tooltip, Zoom } from "@material-ui/core";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutimg from "../images/ab-img.png";

AOS.init();

const About = () => {
  return (
    <section id="about">
      <div className="about_row">
        <div data-aos="fade-up">
          <img className="profile-pic" src={aboutimg} alt="" />
        </div>
        <div className="new_about">
          <h1 className="about_h1">About Company</h1>
          <p data-aos="fade-up">
            We provide the service of Jigs Fixture, Gauge, Press Tools Dies, 
            Dies Maintenance, Special Purpose Machine, Vertical Machine Centre (VMC),
            Fabrication, ALL Types Grinding, DRO, Leath Machine,
            Auto Inspection Machine Welding Fixture And Relation Gauge.

          </p>

         <div className="row">
            <div>
              </div>
            <div>
              <h1>Contact Details</h1>
              <p data-aos="fade-up" className="contact-about">
                <span>
                  <i className="fas fa-envelope" />
                  devise.eng.tools@gmail.com
                </span>

                <span>
                  <i className="fas fa-mobile-alt" />
                  7972255304
                </span>

                <span>
                  <i className="fas fa-map-marker-alt" /> GutNo.53,PlotNo.29,Shajapur
                  ABad
                  
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
