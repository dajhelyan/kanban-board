import {
  mergeClasses,
  shorthands,
  makeStyles,
} from "@fluentui/react-components";
import React from "react";
import Filter from "../components/filter/filter";
import Heading from "../components/heading/heading";
import Search from "../components/search-component/search";
import StatusBoard from "../components/status-board/status-board";

const useStyles = makeStyles({
  boardLayout: {
    width: "100%",
    ...shorthands.padding("20px"),
  },
  title: {
    ...shorthands.margin("20px", "20px"),
  },
  flex: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  w100: {
    width: "100%",
  },

  m10: {
    ...shorthands.margin("0px", "0px", "1rem", "0px"),
  }
});

export default function BoardView() {
  const styles = useStyles();
  return (
    <div className={styles.boardLayout}>
      <div className={styles.m10}>
        <Heading ></Heading>
      </div>
      
      <div className={mergeClasses(styles.flex, styles.m10)}>
        <Search></Search>
        <Filter></Filter>
      </div>
      <div>
        <StatusBoard></StatusBoard>
      </div>
    </div>
  );
}
