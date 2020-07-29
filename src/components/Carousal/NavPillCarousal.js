import React from 'react';
// core components
import NavPills from "components/NavPills/NavPills.js";
import Carousal from "./Carousal";
function NavPillCarousal(){
  return (
    <NavPills
      color="warning"
      alignCenter
      tabs={[
        {
          tabButton: "Kitchen",
          tabContent: (
            <Carousal></Carousal>
          )
        },
        {
          tabButton: "Home",
          tabContent: (
            <Carousal></Carousal>
          )
        },
        {
          tabButton: "Bathroom",
          tabContent: (
            <Carousal></Carousal>
            
          )
        }
      ]}
    />
  );
}

export default NavPillCarousal;