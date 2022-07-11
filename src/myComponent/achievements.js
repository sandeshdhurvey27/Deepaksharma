import React, { Component } from "react";
import { Grid, Paper } from "@material-ui/core";
import AOS from "aos";
import "aos/dist/aos.css";
import achievementing from "../images/surface.jpeg";
import vmv from "../images/vmcmachine.jpeg";
import drmaa from "../images/drmachine.jpeg";
import lathemmm from "../images/lathem.jpeg";
AOS.init();
const Achievements = () => {
  return (
    <div id="achievements">
      <Grid container className="about-css">
        <Grid item xs={12}>
          <h1 className="name-css">
            <span className="surname">Machine</span>
          </h1>
          
      
        <div data-aos="fade-up">
          <img className="machineimg" src={achievementing} alt="" />
        </div>

        <div data-aos="fade-up">
          <img className="machineimg" src={vmv} alt="" />
        </div>

        <div data-aos="fade-up">
          <img className="machineimg" src={drmaa} alt="" />
        </div>
        
        <div data-aos="fade-up">
          <img className="machineimg" src={lathemmm} alt="" />
        </div>
        

          <div
            data-aos="zoom-in-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2500"
          >
            <Paper
              elevation={24}
              style={{ backgroundColor: "#2c3e50", color: "white" }}
            >
              
            </Paper>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Achievements;
