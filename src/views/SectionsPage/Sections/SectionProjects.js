/* eslint-disable */
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Build from "@material-ui/icons/Build";
import Subject from "@material-ui/icons/Subject";
import FormatPaint from "@material-ui/icons/FormatPaint";
import Code from "@material-ui/icons/Code";
import Dashboard from "@material-ui/icons/Dashboard";
import Timeline from "@material-ui/icons/Timeline";
import Group from "@material-ui/icons/Group";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Button from "components/CustomButtons/Button.js";
import Muted from "components/Typography/Muted.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Badge from "components/Badge/Badge.js";

import projectsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/projectsStyle.js";

import office2 from "assets/img/examples/office2.jpg";
import cardBlog3 from "assets/img/examples/card-blog3.jpg";
import cardProject1 from "assets/img/examples/card-project1.jpg";
import cardProject2 from "assets/img/examples/card-project2.jpg";
import cardProject3 from "assets/img/examples/card-project3.jpg";
import cardProject4 from "assets/img/examples/card-project4.jpg";
import cardProject5 from "assets/img/examples/card-project5.jpg";
import cardProject6 from "assets/img/examples/card-project6.jpg";

const useStyles = makeStyles(projectsStyle);

export default function SectionProjects({ ...rest }) {
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>
      {/* Project 1 START */}
      <div className={classes.projects}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={
                classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
              }
            >
              <h2 className={classes.title}>
                Some of Our Services
              </h2>
              <div className={classes.tabSpace} />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <Card
                raised
                background
                style={{ backgroundImage: `url("https://images.unsplash.com/photo-1539922980492-38f6673af8dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80")` }}
              >
                <CardBody background>
                  <h6 className={classes.cardCategory}>Kitchen</h6>
                  <a href="#pablito" onClick={e => e.preventDefault()}>
                    <h3 className={classes.cardTitleWhite}>
                      Customise your kitchen   
                    </h3>
                  </a>
                  <p className={classes.cardDescription}>
                  We offer affordable renovation design and working drawing services. 
                  Our interior designers are here to help conceptualise your dream kitchen
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Card
                raised
                background
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1539569304312-b6fffd864948?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80')` }}
              >
                <CardBody background>
                  <h6 className={classes.cardCategory}>Bathroom</h6>
                  <a href="#pablito" onClick={e => e.preventDefault()}>
                    <h3 className={classes.cardTitleWhite}>
                      Remodel your bathroom
                    </h3>
                  </a>
                  <p className={classes.cardDescription}>
                  Upgrade to new showers, baths, toilets, faucets and sinks, and bring a whole new look to your home.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
              <Card
                raised
                background
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80)` }}
              >
                <CardBody background>
                  <h6 className={classes.cardCategory}>Full home renovation</h6>
                  <a href="#pablito" onClick={e => e.preventDefault()}>
                    <h3 className={classes.cardTitleWhite}>
                      Make your dream Home
                    </h3>
                  </a>
                  <p className={classes.cardDescription}>
                  Rhinovators have completed a vast array of renovations together on time and budget.
                   We value our clients more than anything 
                   
                  </p>
              
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Project 1 END */}
      {/* Project 2 START */}
      {/* <div className={classes.projects}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={
                classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
              }
            >
              <Muted>
                <h6>OUR WORK</h6>
              </Muted>
              <h2 className={classes.title}>
                Some of Our Awesome Products - 2
              </h2>
              <h5 className={classes.description}>
                This is the paragraph where you can write more details about
                your projects. Keep you user engaged by providing meaningful
                information.
              </h5>
              <div className={classes.sectionSpace} />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain className={classes.card2}>
                <a
                  href="https://www.creative-tim.com/product/material-kit-react?ref=mkpr-projects-section-sections"
                  target="_blank"
                >
                  <CardHeader image plain>
                    <img
                      src={
                        "https://s3.amazonaws.com/creativetim_bucket/products/83/original/opt_mk_react_thumbnail.jpg?1525851474"
                      }
                      alt="..."
                    />
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage:
                          "url('https://s3.amazonaws.com/creativetim_bucket/products/83/original/opt_mk_react_thumbnail.jpg?1525851474')",
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                </a>
                <CardBody plain>
                  <a
                    href="https://www.creative-tim.com/product/material-kit-react?ref=mkpr-projects-section-sections"
                    target="_blank"
                  >
                    <h4 className={classes.cardTitle}>
                      Material Kit Free React
                    </h4>
                  </a>
                  <h6 className={classes.description}>FREE UI KIT</h6>
                  <p
                    className={classes.description + " " + classes.marginTop20}
                  >
                    Material Kit is a Free Material-UI Kit with a fresh, new
                    design inspired by Google's material design. It{"'"}s a
                    great pleasure to introduce to you the material concepts in
                    an easy to use and beautiful set of components.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain className={classes.card2}>
                <a
                  href="https://www.creative-tim.com/product/light-bootstrap-dashboard-pro-react?ref=mkpr-projects-section-sections"
                  target="_blank"
                >
                  <CardHeader image plain>
                    <img
                      src="https://s3.amazonaws.com/creativetim_bucket/products/66/thumb/opt_lbdp_react_thumbnail.jpg?1509466309"
                      alt="..."
                    />
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage:
                          "url('https://s3.amazonaws.com/creativetim_bucket/products/66/thumb/opt_lbdp_react_thumbnail.jpg?1509466309')",
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                </a>
                <CardBody plain>
                  <a
                    href="https://www.creative-tim.com/product/light-bootstrap-dashboard-pro-react?ref=mkpr-projects-section-sections"
                    target="_blank"
                  >
                    <h4 className={classes.cardTitle}>
                      Light Bootstrap Dashboard PRO React
                    </h4>
                  </a>
                  <h6 className={classes.description}>Premium Template</h6>
                  <p
                    className={classes.description + " " + classes.marginTop20}
                  >
                    Light Bootstrap Dashboard PRO is a Bootstrap 3 Admin Theme
                    designed to look simple and beautiful. Forget about boring
                    dashboards and grab yourself a copy to kickstart new
                    project!
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain className={classes.card2}>
                <a
                  href="https://www.creative-tim.com/product/now-ui-dashboard-pro-react?ref=mkpr-projects-section-sections"
                  target="_blank"
                >
                  <CardHeader image plain>
                    <img
                      src="https://s3.amazonaws.com/creativetim_bucket/products/73/original/opt_nudp_react_thumbnail.jpg?1518533306"
                      alt="..."
                    />
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage:
                          "url('https://s3.amazonaws.com/creativetim_bucket/products/73/original/opt_nudp_react_thumbnail.jpg?1518533306')",
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                </a>
                <CardBody plain>
                  <a
                    href="https://www.creative-tim.com/product/now-ui-dashboard-pro-react?ref=mkpr-projects-section-sections"
                    target="_blank"
                  >
                    <h4 className={classes.cardTitle}>
                      Now UI Dashboard PRO React
                    </h4>
                  </a>
                  <h6 className={classes.description}>Premium Template</h6>
                  <p
                    className={classes.description + " " + classes.marginTop20}
                  >
                    Now UI Dashboard React is an admin dashboard template
                    designed by Invision and coded by Creative Tim. It is built
                    on top of Reactstrap, using Now UI Dashboard and it is fully
                    responsive.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Project 2 END */}
      {/* Project 3 START */}
      {/*
      <div
        className={
          classes.projects + " " + classes.sectionDark + " " + classes.projects3
        }
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={
                classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
              }
            >
              <Muted>
                <h6>OUR WORK</h6>
              </Muted>
              <h2 className={classes.title}>
                Some of Our Awesome Products - 3
              </h2>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
              <Card plain className={classes.card2}>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <CardHeader plain image>
                    <img src={cardProject1} alt="..." />
                  </CardHeader>
                </a>
                <CardBody>
                  <h6 className={classes.cardCategory}>WEB DESIGN</h6>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <h4 className={classes.cardTitle}>
                      Famous Website Redesign
                    </h4>
                  </a>
                  <p className={classes.cardDescription}>
                    Don{"'"}t be scared of the truth because we need to restart
                    the human foundation in truth.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={5} md={5} className={classes.mrAuto}>
              <Card plain className={classes.card2}>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <CardHeader plain image>
                    <img src={cardProject2} alt="..." />
                  </CardHeader>
                </a>
                <CardBody>
                  <h6 className={classes.cardCategory}>PRODUCTIVITY TOOLS</h6>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <h4 className={classes.cardTitle}>
                      Beautiful Desktop for Designers
                    </h4>
                  </a>
                  <p className={classes.cardDescription}>
                    Don{"'"}t be scared of the truth because we need to restart
                    the human foundation in truth.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
              <Card plain className={classes.card2}>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <CardHeader plain image>
                    <img src={cardProject3} alt="..." />
                  </CardHeader>
                </a>
                <CardBody>
                  <h6 className={classes.cardCategory}>ANDROID APP</h6>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <h4 className={classes.cardTitle}>Analytics for Android</h4>
                  </a>
                  <p className={classes.cardDescription}>
                    Don{"'"}t be scared of the truth because we need to restart
                    the human foundation in truth.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={5} md={5} className={classes.mrAuto}>
              <Card plain className={classes.card2}>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <CardHeader plain image>
                    <img src={cardProject4} alt="..." />
                  </CardHeader>
                </a>
                <CardBody>
                  <h6 className={classes.cardCategory}>WEBSITE</h6>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <h4 className={classes.cardTitle}>Behance Redesign</h4>
                  </a>
                  <p className={classes.cardDescription}>
                    Don{"'"}t be scared of the truth because we need to restart
                    the human foundation in truth.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Project 3 END */}
      {/* Project 4 START */}
      {/*
      <div className={classes.projects + " " + classes.projects4}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={
                classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
              }
            >
              <h2 className={classes.title}>
                Some of Our Awesome Products - 4
              </h2>
              <h5 className={classes.description}>
                This is the paragraph where you can write more details about
                your projects. Keep you user engaged by providing meaningful
                information.
              </h5>
              <div className={classes.sectionSpace} />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
              <Card
                background
                className={classes.card4}
                style={{ backgroundImage: `url(${cardProject2})` }}
              >
                <CardBody background className={classes.cardBody4}>
                  <Badge color="rose">Client: Apple</Badge>
                  <a href="#pablo" onClick={e => e.preventDefault}>
                    <h3 className={classes.cardTitle}>Beautiful Project</h3>
                    <p className={classes.cardDescription}>
                      Don{"'"}t be scared of the truth because we need to
                      restart the human foundation in truth.
                    </p>
                  </a>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={5} md={5} className={classes.mrAuto}>
              <InfoArea
                className={classes.info4}
                title="Graphic Design"
                description="We've created the design of the website using modern Technologies like Sketch. It was a very interesting collaboration."
                icon={FormatPaint}
                iconColor="info"
              />
              <InfoArea
                className={classes.info4}
                title="Fully Coded in HTML5"
                description="We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub."
                icon={Code}
                iconColor="primary"
              />
              <InfoArea
                className={classes.info4}
                title="CMS Admin Dashboard"
                description="There is also a Fully Customizable CMS Admin Dashboard for this product."
                icon={Dashboard}
                iconColor="danger"
              />
            </GridItem>
          </GridContainer>
          <hr />
          <GridContainer>
            <GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
              <InfoArea
                className={classes.info4}
                title="Marketing"
                description="We've created the marketing campaign of the website. It was a very interesting collaboration."
                icon={Timeline}
                iconColor="rose"
              />
              <InfoArea
                className={classes.info4}
                title="Fully Coded in HTML5"
                description="We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub."
                icon={Code}
                iconColor="success"
              />
              <InfoArea
                className={classes.info4}
                title="Built Audience"
                description="There is also a Fully Customizable CMS Admin Dashboard for this product."
                icon={Group}
                iconColor="info"
              />
            </GridItem>
            <GridItem xs={12} sm={5} md={5} className={classes.mrAuto}>
              <Card
                background
                className={classes.card4}
                style={{ backgroundImage: `url(${cardProject5})` }}
              >
                <CardBody background className={classes.cardBody4}>
                  <Badge color="rose">CLIENT: DJ KHALED</Badge>
                  <a href="#pablo" onClick={e => e.preventDefault}>
                    <h3 className={classes.cardTitle}>Another One</h3>
                    <p className={classes.cardDescription}>
                      Don{"'"}t be scared of the truth because we need to
                      restart the human foundation in truth.
                    </p>
                  </a>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div> */}
      {/* Project 4 END */}
    </div>
  );
}
