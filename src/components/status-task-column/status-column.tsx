import React, { DragEvent, useEffect, useRef, useState } from "react";
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
import { TaskProps } from "../task-card/task-card";

const useStyles = makeStyles({
  boardCont: {
    display: "flex",
    justifyContent: "space-around",
    // ...shorthands.border("1px", "solid"),
    ...shorthands.gap("40px"),
    backgroundColor: "#c8d1fa26",
  },
  boardColumn: {
    width: "300px",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#F6F8FC",
    ...shorthands.gap("16px"),
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

const MOCK = [
  {
    id: 1,
    titleTask: "Clean the room",
    description: "Mop the floor",
    responsable: "Me",
    date: "22/02/23",
    priority: "High",
    status: "pending",
  },
  {
    id: 2,
    titleTask: "Clean the house",
    description: "Mop the kitchen",
    responsable: "Me",
    date: "22/02/23",
    priority: "low",
    status: "pending",
  },
];

export default function StatusColumn() {
  const styles = useStyles();
  const [taskStatus, setTaskStatus] = useState<AppState["taskStatus"]>([]);
  const [taskList, setTaskList] = useState<AppState["tasks"]>([]);

  function dropOver(evt: DragEvent) {
    return evt.preventDefault();
  }

  function onDrop(evt: DragEvent, status: string) {
    // get task id of element dragged
    const taskId = evt.dataTransfer.getData("taskId");
    // get data of element
    const task = taskList.find((task) => String(task.id) === taskId);
    // Change the status when the element is dropped
    const newStatus = taskList.map((task) => {
      if (String(task.id) === taskId) {
        task.status = status;
      }
      return task;
    });

    console.log(task, "dropped");

    // update state
    setTaskList(newStatus);
  }

  useEffect(() => {
    setTaskStatus(STATUS_STATE);
    setTaskList(MOCK);
  }, []);

  return (
    <div className={styles.boardCont}>
      {taskStatus.map((taskCol) => {
        return (
          <div className={styles.boardCont}>
            <div
              className={styles.boardColumn}
              onDragOver={(evt) => {
                dropOver(evt);
              }}
              onDrop={(evt) => {
                onDrop(evt, taskCol.slug);
              }}
            >
              <div className={styles.w100}>
                <Text align="center">{taskCol.title}</Text>
              </div>
              <div>
                <TaskList
                  status={taskCol.slug}
                  tasks={taskList}
                  setTasks={setTaskList}
                ></TaskList>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
