import { Body1, Input, Label, shorthands, useId, makeStyles, Title2, tokens } from "@fluentui/react-components";
import React from "react";
import {
  AddRegular
} from "@fluentui/react-icons";
const useStyles = makeStyles({
  w100: {
    maxWidth: "100%",
    width: "100%",
    '@media (max-width: 767.98px)':{
      minWidth: "100%"

    }

  },

});

export default function Search() {
  const styles = useStyles();
  const beforeId = useId("content-before");
  return (
    <div className={styles.w100} >
      <Input  className={styles.w100} appearance="underline"  contentBefore={<AddRegular />} id={beforeId} placeholder="Nueva tarea" />
    </div>
  )
}