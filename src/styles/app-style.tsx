import { makeStyles, shorthands, tokens } from "@fluentui/react-components";

export const appStyles = makeStyles({
  main: {
    display: "flex",
    justifyContent: "flex-start",
    width: "100%",
    position: "relative",
    boxSizing: "content-box",
  },
  md100: {
    maxWidth: "100%",
    '@media (max-width: 767.98px)':{
      minWidth: "100%"
    }
  },
  w100: {
    width: "100%"
  },

  // field: {
  //   display: "grid",
  //   gridRowGap: tokens.spacingVerticalXXS,
  //   marginTop: tokens.spacingVerticalMNudge,
  //   // ...shorthands.padding(
  //   //   tokens.spacingVerticalMNudge,
  //   //   tokens.spacingHorizontalMNudge
  //   // ),
  // },
});
