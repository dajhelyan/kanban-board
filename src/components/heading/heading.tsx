import React from "react";
import { makeStyles, shorthands, Text, Title1, tokens }  from "@fluentui/react-components"

const useStyles = makeStyles({
  text: {
    fontFamily: tokens.fontFamilyMonospace,
    fontSize: tokens.fontSizeBase600,
    fontWeight: tokens.fontWeightSemibold,
    lineHeight: tokens.lineHeightBase400,
    color: tokens.colorNeutralForeground2,
    '@media (max-width: 767.98px)':{
      fontSize: "1em",

    }
  },
  
});

export default function Heading() {
  const styles = useStyles();

  return (
    <div>
      <Text className={styles.text} align="start">To-Do board</Text>
    </div>
  )
}