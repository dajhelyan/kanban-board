import React from "react"
import { makeStyles, shorthands } from "@fluentui/react-components"


export const navStyles = makeStyles({
  navbar: {
    left: "-100%",
    backgroundColor: "black",
    msTransition: "850ms",
    maxWidth: "50px",
    height: "100vh",
  },
  activeNav: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    maxWidth: "200px",
    backgroundColor: "aliceblue",
    height: "100vh",
    left: "0",
    msTransition: "350ms"
  },
  menuIcon: {
    // fontSize: "2rem",
    // marginLeft: "2rem"
    // ...shorthands.margin("0", "0")
  },
  iconContainer: {
    display: "flex",
    justifyContent: "space-between",
    ...shorthands.padding("10px", "15px")
  }, 
})