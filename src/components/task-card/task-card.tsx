import React from "react";
import { Card } from "@fluentui/react-components/unstable";
import {
  Body2,
  makeStyles,
  shorthands,
  Subtitle1,
  Text,
} from "@fluentui/react-components";
import { Task } from "../../types";

export interface TaskProps {
  tasks: Task;
}

const useStyles = makeStyles({
  mgAuto: {
    ...shorthands.margin("0.50em", "auto", "0.50em", "auto"),
    '@media (max-width: 767.98px)':{
      maxWidth: "90%",
      fontSize: "0.50em",
      ...shorthands.padding("0.25em", "auto", "0.25em", "auto")
    }
  },
  card: {
    ...shorthands.gap("0.25em"),
  },
  w80: {
    width: "90%",
  },
  text: {
    '@media (max-width: 767.98px)':{
      // fontSize: "1em",
      // ...shorthands.margin("0"),

    }
  },
  dateContainer: {
    display: "flex",
    justifyContent: "space-between",
  }
});

export default function TaskCard({ tasks }: TaskProps) {
  const styles = useStyles();

  return (
    <div className={styles.mgAuto}>
      <section>
        <Card className={styles.card} >
          <Text className={styles.text} block>
            {tasks.titleTask}
          </Text>
          <Text className={styles.text}>{tasks.description}</Text>
          <Text className={styles.text}>{tasks.responsable}</Text>
          <div className={styles.dateContainer}>
            <div>
              <Text className={styles.text} align="start">{tasks.date}</Text>
            </div>
            <div>
              <Text className={styles.text} align="end">{tasks.priority}</Text>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
