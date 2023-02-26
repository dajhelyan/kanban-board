import React from "react";
import { makeStyles, shorthands, Text, Title1 }  from "@fluentui/react-components"

const useStyles = makeStyles({
  title: {
    ...shorthands.margin("20px", "20px")
  },
});

export default function Heading() {
  const styles = useStyles();

  return (
    <div className={styles.title}>
      <Title1 align="start">To-Do board</Title1>
    </div>
  )
}