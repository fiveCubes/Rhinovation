import React from "react";
// react components used to create a google map
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// @material-ui/icons
import PinDrop from "@material-ui/icons/PinDrop";
import Phone from "@material-ui/icons/Phone";
import Check from "@material-ui/icons/Check";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import contactsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/contactsStyle.js";

import city from "assets/img/examples/city.jpg";

const useStyles = makeStyles(contactsStyle);

const RegularMap = withScriptjs(
  withGoogleMap(() => (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 44.43353, lng: 26.093928 - 0.025 }}
      defaultOptions={{
        scrollwheel: false,
        zoomControl: true,
        styles: [
          {
            featureType: "water",
            stylers: [
              { saturation: 43 },
              { lightness: -11 },
              { hue: "#0088ff" }
            ]
          },
          {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [
              { hue: "#ff0000" },
              { saturation: -100 },
              { lightness: 99 }
            ]
          },
          {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{ color: "#808080" }, { lightness: 54 }]
          },
          {
            featureType: "landscape.man_made",
            elementType: "geometry.fill",
            stylers: [{ color: "#ece2d9" }]
          },
          {
            featureType: "poi.park",
            elementType: "geometry.fill",
            stylers: [{ color: "#ccdca1" }]
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#767676" }]
          },
          {
            featureType: "road",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#ffffff" }]
          },
          { featureType: "poi", stylers: [{ visibility: "off" }] },
          {
            featureType: "landscape.natural",
            elementType: "geometry.fill",
            stylers: [{ visibility: "on" }, { color: "#b8cb93" }]
          },
          { featureType: "poi.park", stylers: [{ visibility: "on" }] },
          {
            featureType: "poi.sports_complex",
            stylers: [{ visibility: "on" }]
          },
          { featureType: "poi.medical", stylers: [{ visibility: "on" }] },
          {
            featureType: "poi.business",
            stylers: [{ visibility: "simplified" }]
          }
        ]
      }}
    >
      <Marker position={{ lat: 44.43353, lng: 26.093928 }} />
    </GoogleMap>
  ))
);

export default function SectionContacts({ ...rest }) {
  const [checked, setChecked] = React.useState([]);
  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>
      {/* Contact us 2 START */}
      <div className={classes.contacts2}>
        <div className={classes.map}>
          <RegularMap
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAuz4hanqNN3oS7WDPEjqhuiUN6uq1s16E"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={
              <div
                style={{
                  height: `100%`,
                  borderRadius: "6px",
                  overflow: "hidden"
                }}
              />
            }
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
        <GridItem xs={12} sm={6} md={6}>
          <Card className={classes.card2}>
            <form>
              <CardHeader contact color="rose" className={classes.textCenter}>
                <h4 className={classes.cardTitle}>Contact Us</h4>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={6} md={6}>
                    <InfoArea
                      className={classes.infoArea2}
                      title="Give us a ring"
                      description={
                        <span>
                          Michael Jordan
                          <br /> +40 762 321 762
                          <br /> Mon - Fri, 8:00-22:00
                        </span>
                      }
                      icon={Phone}
                      iconColor="rose"
                    />
                  </GridItem>
                  <GridItem xs={12} sm={6} md={6}>
                    <InfoArea
                      className={classes.infoArea2}
                      title="Find us at the office"
                      description={
                        <span>
                          Bld Mihail Kogalniceanu, nr. 8,
                          <br /> 7652 Bucharest,
                          <br /> Romania
                        </span>
                      }
                      icon={PinDrop}
                      iconColor="rose"
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={6} md={6}>
                    <CustomInput
                      labelText="Full Name"
                      id="first2"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={6} md={6}>
                    <CustomInput
                      labelText="Email Address"
                      id="email-address2"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <CustomInput
                  labelText="Your Message"
                  id="message2"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 5
                  }}
                />
              </CardBody>
              <CardFooter className={classes.justifyContentBetween}>
                <FormControlLabel
                  control={
                    <Checkbox
                      tabIndex={-1}
                      onClick={() => handleToggle(2)}
                      checkedIcon={<Check className={classes.checkedIcon} />}
                      icon={<Check className={classes.uncheckedIcon} />}
                      classes={{
                        checked: classes.checked,
                        root: classes.checkRoot
                      }}
                    />
                  }
                  classes={{ label: classes.label }}
                  label="I'm not a robot"
                />
                <Button color="rose" className={classes.pullRight}>
                  Send Message
                </Button>
              </CardFooter>
            </form>
          </Card>
        </GridItem>
      </div>
      {/* Contact us 2 END */}
    </div>
  );
}
