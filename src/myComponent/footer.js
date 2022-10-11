import React, { Component, Fragment } from "react";
import { Paper, Typography } from "@material-ui/core";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div>
          <Typography
            variant="body1"
            gutterBottom
            align="center"
            display="inline"
          >
            <i class="far fa-copyright">
              Copyright Deepak Sharma. All Rights Reserved
            </i>
          </Typography>
        </div>
        <div className="footer-a">
          
          <a href="https://www.google.com/maps/place/Devise+Engineering+Tools/@19.8642856,75.2208754,17z/data=!3m1!4b1!4m5!3m4!1s0x3bdb9be10febf12b:0x262e3051980eac32!8m2!3d19.8642856!4d75.2208754" target="_blank">
            <i class="fas fa-location-arrow" />
          </a>
          <a href="mailto: devise.eng.tools@gmail.com">
            <i class="fas fa-envelope" />
          </a>
        </div>
      </div>
    );
  }
}
