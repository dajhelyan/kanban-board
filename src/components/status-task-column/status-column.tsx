import React, { DragEvent, useEffect, useRef, useState } from "react";
import {
  shorthands,
  makeStyles,
  Text,
} from "@fluentui/react-components";
import { Status, Task, TaskStatus } from "../../types";
import TaskList from "../task-list/task-list";

const useStyles = makeStyles({
  boardCont: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    ...shorthands.margin("0.50em"),
    backgroundColor: "#c8d1fa26",
    '@media (min-width: 767.98px)':{
      flexDirection: "row",
    },

  },
  boardColumn: {
    display: "flex",
    width:"30%",
    flexDirection: "column",
    backgroundColor: "#F6F8FC",
    ...shorthands.gap("16px"),
  },
  w100: {
    width: "100%",
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
        );
      })}
    </div>
  );
}
