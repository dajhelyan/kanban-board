import React, { DragEvent, useEffect, useRef, useState } from "react";
import { Status, Task, TaskStatus } from "../../types";
import TaskList from "../task-list/task-list";
import Badged from "../badge/badge";
import { StatusEnum } from "../../colum-status";
import { useStyles } from "./status-column-style";
import { tasks } from "../../mock-data/tasks-mock-data";

export interface ColumnState {
  tasks: Array<Task>;
  taskStatus: Array<Status>;
}

const STATUS_STATE = [
  {
    title: "Pendiente",
    slug: StatusEnum.TO_DO,
    color: "informative",
  },
  {
    title: "En Ejecución",
    slug: StatusEnum.IN_PROGRESS,
    color: "warning",
  },
  {
    title: "Completado",
    slug: StatusEnum.COMPLETED,
    color: "success",
  },
];

// const colorsType = {
//   TO_DO: "informative",
//   IN_PROGRESS: "warnig",
//   COMPLETED: "success",
// };

export default function StatusColumn() {
  const styles = useStyles();
  
  const [taskStatus, setTaskStatus] = useState<ColumnState["taskStatus"]>([]);
  const [taskList, setTaskList] = useState<ColumnState["tasks"]>([]);

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
    setTaskList(tasks);
  }, []);

  return (
    <div className={styles.boardCont}>
      {taskStatus.map((taskCol) => {
        return (
          <div
            key={taskCol.slug}
            className={styles.boardColumn}
            onDragOver={(evt) => {
              dropOver(evt);
            }}
            onDrop={(evt) => {
              onDrop(evt, taskCol.slug);
            }}
          >
            <div className={styles.w100}>
              <Badged title={taskCol.title} bg={taskCol.color}></Badged>
            </div>
            <div className={styles.statusCol}>
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
