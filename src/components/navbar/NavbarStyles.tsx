import React from "react";
import { makeStyles, shorthands } from "@fluentui/react-components";

export const navStyles = makeStyles({
  sidebarCommon: {
    position: "sticky",
    height: "100vh",
    ...shorthands.padding("0.50em"),
    boxSizing: "border-box",
    top: "0",
  },
  navbar: {
    top: "0",
    height: "100vh",
    left: "-100%",
    position: "sticky",
    backgroundColor: "black",
    msTransition: "850ms",
  },
  activeNav: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    maxWidth: "250px",
    backgroundColor: "aliceblue",
    left: "0",
    msTransition: "350ms",
  },
  menuIcon: {
    // fontSize: "2rem",
    // marginLeft: "2rem"
    // ...shorthands.margin("0", "0")
  },
  iconContainer: {
    display: "flex",
    justifyContent: "space-between",
    // ...shorthands.padding("10px", "15px")
  },
});
