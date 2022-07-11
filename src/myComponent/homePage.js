import React, { Component, Fragment } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import profile from "../images/profile.png";
import Fab from "@material-ui/core/Fab";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <div style={{ width: "100%", margin: "auto" }} className="home-page">
          <Grid container>
            <Grid item xs={12}>
              <div>
                <img src={profile} className="profile-img" />
              </div>
              <h1 className="name-css">
                Devise Engineering <span className="surname">Tools</span>
              </h1>
              <p className="sub-detail">Work with <span className="surname1">Perfection</span></p>
              <br />
              <br />

              <div className="sub-detail">
              
              </div>
              
            </Grid>
          </Grid>
        </div>
      </Fragment>
    );
  }
}

export default HomePage;
