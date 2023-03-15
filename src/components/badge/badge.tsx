import React, { useState } from "react";
import {
  makeStyles,
  Badge,
  shorthands,
  Text,
  Title1,
  tokens,
} from "@fluentui/react-components";

interface Props {
  bg: any;
  title: string;
}

const useStyles = makeStyles({
  text: {
    fontFamily: tokens.fontFamilyMonospace,
    fontSize: tokens.fontSizeBase400,
    fontWeight: tokens.fontWeightMedium,
    lineHeight: tokens.lineHeightBase400,
    color: tokens.colorNeutralForeground3,
  },
});

export default function Badged({ bg, title }: Props) {
  const styles = useStyles();

  return (
    <div>
      <Badge color={bg} shape="rounded" appearance="tint">
        <Text className={styles.text}>{title}</Text>
      </Badge>
    </div>
  );
}
