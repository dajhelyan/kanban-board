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
    ...shorthands.margin("1em", "auto", "1em", "auto"),
    width: "250px",
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
        <Card>
          <Body2 as="h2" block className="task-title">
            {tasks.titleTask}
          </Body2>
          <Text>{tasks.description}</Text>
          <Text>{tasks.responsable}</Text>
          <div className={styles.dateContainer}>
            <div>
              <Text align="start">{tasks.date}</Text>
            </div>
            <div>
              <Text align="end">{tasks.priority}</Text>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
