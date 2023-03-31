import { makeStyles, shorthands, tokens } from "@fluentui/react-components";

export const useStyles = makeStyles({
  boardCont: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    // ...shorthands.margin("0.50em"),
    ...shorthands.gap("1em"),
    "@media (min-width: 767.98px)": {
      flexDirection: "row",
    },
  },
  boardColumn: {
    display: "flex",
    flexDirection: "column",
    height:"80%",
    // minWidth: "90%",
    // width:"80%",
    backgroundColor: tokens.colorPaletteCornflowerBackground2,
    "@media (min-width: 767.98px)": {
      width: "30%",
    },
  },
  w100: {
    width: "100%",
    ...shorthands.padding("0.50em"),
    // boxSizing:"border-box"
    // textAlign: "center",
    // backgroundColor: "#40bd403b",
  },
  statusCol: {
      display: "flex",
      flexDirection: "row",
      ...shorthands.overflow("auto"),
      flexWrap: "nowrap",
      // boxSizing: "border-box",
      // ...shorthands.margin("0.50em", "1em"),

      '> div': {
        minWidth: "100%",
        width:"100%",

      },
      '@media (min-width: 575.98px)': {
        flexDirection: "column",
        ...shorthands.margin("0.50em", "1em"),


      },
      // maxWidth: "100%",
  },
});
