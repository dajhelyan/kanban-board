import { makeStyles, Select } from "@fluentui/react-components";
import React from "react";
const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  
});
export default function Filter() {
  const styles = useStyles();

  return(
    <div >
      <Select className="" appearance="underline" size="medium">
        <option>Red</option>
        <option>Green</option>
        <option>Blue</option>
      </Select>
  </div>
  )
}