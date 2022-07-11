import React, { Component, Fragment } from "react";

import { withStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { Hidden, Typography } from "@material-ui/core";
import AOS from "aos";
import "aos/dist/aos.css";

const particleoptions = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

AOS.init();
const styles = theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});
class Experience extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <div className="exp_row" id="experience">
          <h1 className="name-css">
            Work <span className="surname">Experience</span>
          </h1>
        </div>
        <div className="workchips">
          <Card className="workcard" data-aos="zoom-in-right">
            <CardContent className="work1">
              <h1 style={{ color: "#000000" }}>JUNIOR DESINGNER </h1>
            </CardContent>{" "}
            <Divider light />
            <CardContent>
              <i className="fas fa-map-marker-alt" />
              <h2 style={{ color: "#184D47" }}>AMEYA TOOLS</h2>
              <Typography variant="body2" color="#0A0A0A" component="p">
                Worked at  AMEYA TOOLS .
                Gut no 43 Plot no 43, Simens Back side E Sector M.I.D.C Waluj Aurangabad
                Designation- JUNIOR DESINGNER

              </Typography>
            </CardContent>
            <CardActions>

            </CardActions>
          </Card>
          <Card className="workcard" data-aos="zoom-in">
            <CardContent className="work1">
              <h1 style={{ color: "#000000" }}>DESIGNER IN RND DEPARTMENT</h1>
            </CardContent>{" "}
            <Divider light />
            <CardContent>
              {" "}
              <i className="fas fa-map-marker-alt" />
              <h2 style={{ color: "#184D47" }}>CAFÉ GOOD MORNING</h2>
              <Typography variant="body2" color="0A0A0A">
                Working   in CAFÉ GOOD MORNING
                Plot No  14 Gut no 40 Shriram Industrial area Mumbai highway waluj
                Aurangabad Maharashtra
                Designation – DESIGNER IN RND DEPARTMENT
              </Typography>
            </CardContent>
            <CardActions>

            </CardActions>
          </Card>
          <Card className="workcard" data-aos="zoom-in-left">
            <CardContent className="work1">
              <h1 style={{ color: "#000000" }}>TECHNICAL SKILLS</h1>
            </CardContent>{" "}
            <Divider light />
            <CardContent>
              <i className="fas fa-map-marker-alt" />
              <h2 style={{ color: "#184D47" }}>
                Design Skills	:
              </h2>
              <Typography variant="body2" color="#0A0A0A" component="p">
                AUTO CADD,
                CREO3.0,
                3D MAX,
                SOLID WORKS,
                CORAL DRAW.
              </Typography>
            </CardContent>
            <CardActions>
            </CardActions>
          </Card>
        </div>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Experience);
