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
          
          <a href="https://www.instagram.com/deepak_57972/?hl=en/" target="_blank">
            <i class="fab fa-instagram" />
          </a>
          <a href="mailto: devise.eng.tools@gmail.com">
            <i class="fas fa-envelope" />
          </a>
        </div>
      </div>
    );
  }
}
