/*eslint-disable*/ import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import navbarsStyle from "assets/jss/material-kit-pro-react/views/componentsSections/navbarsStyle.js";
import SectionProjects from '../SectionsPage/Sections/SectionProjects';
import SectionBlogs from '../SectionsPage/Sections/SectionBlogs';
import SectionTestimonials from '../SectionsPage/Sections/SectionTestimonials';
import SectionContacts from '../SectionsPage/Sections/SectionContacts';
import landingPageStyle from "assets/jss/material-kit-pro-react/views/landingPageStyle.js";
import NavPillCarousal from "../../components/Carousal/NavPillCarousal"

//Sections for this page
import SectionProduct from "./Sections/SectionProduct.js";
import SectionTeam from "./Sections/SectionTeam.js";
import SectionWork from "./Sections/SectionWork.js";

const useStyles = makeStyles(landingPageStyle);
const navStyles = makeStyles(navbarsStyle);

export default function LandingPage({ ...rest }) {
  const contactStyle={
    marginTop:'20px'
  }
  const navClasses = navStyles()
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      
       <Header
        color="transparent"
        brand="Rhinovator"
        links={
          <List className={navClasses.list + " " + navClasses.mlAuto}>
            <ListItem className={navClasses.listItem}>
              <Button
                color="transparent"
                className={
                  navClasses.navLink + " " + navClasses.socialIconsButton
                }
              >
                <i
                  className={
                    navClasses.socialIcons +
                    " " +
                    navClasses.marginRight5 +
                    " fab fa-twitter"
                  }
                />{" "}
                Twitter
              </Button>
            </ListItem>
            <ListItem className={navClasses.listItem}>
              <Button
                color="transparent"
                className={
                  navClasses.navLink + " " + navClasses.socialIconsButton
                }
              >
                <i
                  className={
                    navClasses.socialIcons +
                    " " +
                    navClasses.marginRight5 +
                    " fab fa-facebook"
                  }
                />{" "}
                Facebook
              </Button>
            </ListItem>
            <ListItem className={navClasses.listItem}>
              <Button
                color="transparent"
                className={
                  navClasses.navLink + " " + navClasses.socialIconsButton
                }
              >
                <i
                  className={
                    navClasses.socialIcons +
                    " " +
                    navClasses.marginRight5 +
                    " fab fa-instagram"
                  }
                />{" "}
                Instagram
              </Button>
            </ListItem>
          </List>
        }
        fixed
        changeColorOnScroll={{
          height: 300,
          color: "info"
        }}
        // {...rest}
      /> 
      {/* <Parallax image={require("assets/img/bg8.jpg")} filter="dark"> */}
      <Parallax image={'https://images.unsplash.com/photo-1583716210215-d087531d154d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80'} filter="dark">
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <h1 className={classes.title}>Upgrade your home with us</h1>
              <h4>
              We provide services for all areas of landscaping, all types of kitchen and carpentry works, Repairing and installing wardrobes, Painting, outside decking or inside door. Give us a call to know more
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
              >
                <i className="fas fa-play" />
                Watch video
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
        <SectionProjects></SectionProjects>
        {/* <SectionTestimonials></SectionTestimonials> */}
        <NavPillCarousal></NavPillCarousal>
        </div>
      </div>
      <div style={contactStyle}>
  
      <SectionContacts></SectionContacts>
      </div>
  
   
      

    </div>
  );
}
