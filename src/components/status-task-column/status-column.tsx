import React, { useEffect, useState } from "react";
import {
  shorthands,
  makeStyles,
  mergeClasses,
  Title2,
  Title3,
  Body2,
  Text,
  tokens,
} from "@fluentui/react-components";
import { Status, Task, TaskStatus } from "../../types";
import TaskList from "../task-list/task-list";

const useStyles = makeStyles({
  boardCont: {
    display: "flex",
    justifyContent: "space-around",
    ...shorthands.border("1px", "solid"),
    ...shorthands.gap("40px"),
    backgroundColor: "#c8d1fa",
  },
  boardColumn: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#F6F8FC",
    ...shorthands.gap("16px"),
    ...shorthands.border("1px", "solid"),
  },
  w100: {
    width: "100%",
  },
  p20: {
    ...shorthands.padding("0px"),
  },
  p: {
    fontSize: "13px",
  },
});

export interface AppState {
  tasks: Array<Task>;
  taskStatus: Array<Status>;
}

const STATUS_STATE = [
  {
    title: "Pendiente",
    slug: "pending",
  },
  {
    title: "En Ejecución",
    slug: "inProgress",
  },
  {
    title: "Completado",
    slug: "done",
  },
];

export default function StatusColumn() {
  const styles = useStyles();
  const [taskStatus, setTaskStatus] = useState<AppState["taskStatus"]>([]);

  useEffect(() => {
    setTaskStatus(STATUS_STATE);
  }, []);

  return (
    <div className={styles.boardCont}>
      {taskStatus.map((taskCol) => {
        return (
          <div className={styles.boardCont}>
            <div className={styles.boardColumn}>
              <div className={styles.w100}>
                <Text align="center">{taskCol.title}</Text>
              </div>
              <div>
                <TaskList status={taskCol.slug} ></TaskList>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
