import { makeStyles, Select, shorthands } from "@fluentui/react-components";
import React from "react";
const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    '@media (max-width: 767.98px)':{
      minWidth: "100%"

    }
  },
  
});
export default function Filter() {
  const styles = useStyles();

  return(
    <div className={styles.root}>
      <Select className={styles.root} appearance="underline" size="medium">
        <option>Red</option>
        <option>Green</option>
        <option>Blue</option>
      </Select>
  </div>
  )
}