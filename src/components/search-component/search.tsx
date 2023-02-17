import { Body1, Input, Label, shorthands, useId, makeStyles, Title2, tokens } from "@fluentui/react-components";
import React from "react";
import {
  AddRegular
} from "@fluentui/react-icons";
const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    ...shorthands.gap("20px"),
    // Prevent the example from taking the full width of the page (optional)
    maxWidth: "400px",
    // Stack the label above the field (with 2px gap per the design system)
    "> div": {
      display: "flex",
      flexDirection: "column",
      ...shorthands.gap("2px"),
    },
  },
  title: {
    ...shorthands.margin("6px", "10px", "6px", "10px")
  },
  field: {
    display: "grid",
    gridRowGap: tokens.spacingVerticalXXS,
    marginTop: tokens.spacingVerticalMNudge,
    ...shorthands.padding(tokens.spacingHorizontalMNudge),
  },
});

export default function Search() {
  const styles = useStyles();
  const beforeId = useId("content-before");

  return (
    <div className={styles.root}>
      <Title2 className={styles.title}>Mi tablero Kanban</Title2>
      <Input appearance="underline"  contentBefore={<AddRegular />} id={beforeId} placeholder="Nueva tarea" />
     
    </div>
  )
}