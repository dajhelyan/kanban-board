// import React from "react";
import { Select } from "@fluentui/react-components";
import { appStyles } from "../../styles/app-style";

// const useStyles = makeStyles({
//   root: {
//     maxWidth: "100%",
//     '@media (max-width: 767.98px)':{
//       minWidth: "100%"

//     }
//   },

// });
export default function Filter() {
  const styles = appStyles();

  return (
    <div >
        <label htmlFor={`id-underline`}></label>
        <Select id={`id-underline`} appearance="underline">
          <option>Red</option>
          <option>Green</option>
          <option>Blue</option>
        </Select>
      </div>
  );
}
