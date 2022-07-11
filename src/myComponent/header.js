import React, { Component, Fragment } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles } from "@material-ui/core/styles";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import color from "@material-ui/core/colors/amber";
import { lightBlue } from "@material-ui/core/colors";
//import HomePage from "./homePage";
const styles = theme => ({
  headerwidth: {
    width: "100",
    padding: 0,
    margin: 0,
    float: "left"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    opacity : 1
  },
  drawerWidth: {
    width: "auto"
  },
  drawerColor: {
    textAlign: "center"
  }
  
});

class Header extends Component {
  state = {
    open: false
  };
  handleMenubutton = () => {
    this.setState({
      open: !this.state.open
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <AppBar
          className="header-color"
          position="static"
          classes={{ positionStatic: classes.headerwidth }}
        >
          <Toolbar>
            <Typography
              variant="subtitle"
              color="inherit"
              style={{ flexGrow: 1 }}
            >
              <Button
                color="inherit"
                style={{ fontSize: "1rem" }}
                href="https://www.google.com/maps/place/Devise+Engineering+Tools/@19.8642856,75.2208754,17z/data=!3m1!4b1!4m5!3m4!1s0x3bdb9be10febf12b:0x262e3051980eac32!8m2!3d19.8642856!4d75.2208754"
              >
                <i class="fas fa-location-arrow"> LOCATION</i>
              </Button>
            </Typography>
            <Hidden mdUp>
              <IconButton color="inherit" onClick={this.handleMenubutton}>
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Hidden smDown>
              <Button
                href="#about"
                color="inherit"
                style={{ fontSize: "1rem" }}
              >
                About
              </Button>
              <Button
                href="#experience"
                color="inherit"
                style={{ fontSize: "1rem" }}
              >
                Experience
              </Button>
              <Button
                href="#education"
                color="inherit"
                style={{ fontSize: "1rem" }}
              >
               
                Skills
              </Button>

              <Button
                href="#achievements"
                color="inherit"
                style={{ fontSize: "1rem", fontcolor : lightBlue }}
              >
                Machine
              </Button>
            </Hidden>
          </Toolbar>
        </AppBar>

        <Hidden mdUp>
          <div>
            <Drawer
              anchor="top"
              open={this.state.open}
              classes={{ paperAnchorTop: classes.drawerColor }}
              style={{ color: "green" }}
            >
              <div className={classes.drawerWidth}>
                <IconButton onClick={this.handleMenubutton}>
                  <KeyboardArrowUpIcon />
                </IconButton>

                <List>
                  {[
                    "about",
                    "experience",
                    "education",
                    "skills",
                    "achievements"
                  ].map((text, index) => (
                    <ListItem button key={index} className="menu_btn">
                      <Button href={`#${text}`} onClick={this.handleMenubutton}>
                        <ListItemText primary={text} />
                      </Button>
                    </ListItem>
                  ))}
                </List>
              </div>
            </Drawer>
          </div>
        </Hidden>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Header);
