import { Body1, Input, Label, shorthands, useId, makeStyles, Title2, tokens } from "@fluentui/react-components";
import React from "react";
import breakpoints from "../breakpoints";
import {
  AddRegular
} from "@fluentui/react-icons";
const useStyles = makeStyles({
  root: {
    width: "100%",
  },

});

export default function Search() {
  const styles = useStyles();
  const beforeId = useId("content-before");
  return (
    <div>
      <Input  className={styles.root} size="medium" appearance="underline"  contentBefore={<AddRegular />} id={beforeId} placeholder="Nueva tarea" />
    </div>
  )
}