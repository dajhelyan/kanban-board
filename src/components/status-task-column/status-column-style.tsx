import { makeStyles, shorthands } from "@fluentui/react-components";

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
    backgroundColor: "#f9f9f9",
    "@media (min-width: 767.98px)": {
      width: "34%",
    },
  },
  w100: {
    width: "100%",
    ...shorthands.padding("0.50em", "0em", "0em", "0em"),
    // textAlign: "center",
    // backgroundColor: "#40bd403b",
  },
  statusCol: {
    // backgroundColor: "#9fa0cb38"
  },
});
