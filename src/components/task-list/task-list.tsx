import {
  shorthands,
  makeStyles,
} from "@fluentui/react-components";
import React, { DragEvent, useEffect, useState } from "react";
import TaskCard from "../task-card/task-card";
import { Task } from "../../types";
import { AppState } from "../status-task-column/status-column";

interface StatusProps {
  status: string
}

const MOCK = [
  {
    id: 1,
    titleTask: "Clean the house",
    description: "Mop the kitchen",
    responsable: "Me",
    date: "22/02/23",
    priority: "High",
    status: "inProgress",
  },
  {
    id: 2,
    titleTask: "Clean the house",
    description: "Mop the kitchen",
    responsable: "Me",
    date: "22/02/23",
    priority: "High",
    status: "pending",
  },
];

export default function TaskList({ status }: StatusProps) {

  const [taskList, setTaskList] = useState<AppState["tasks"]>([]);

  function getCardByStatus(status: string) {
    return taskList.filter((task) => task.status === status);
  }

  function startDrag(evt: DragEvent, task: Task) {
    return evt ? evt.dataTransfer.setData("taskId", String(task.id)) : "false";
  }

  useEffect(() => {
    setTaskList(MOCK);
  }, []);

  return (
    <>
      {getCardByStatus(status).map((task) => {
        return (
          <div
            key={task.id}
            draggable
            onDragStart={(evt) => {
              startDrag(evt, task);
            }}
          >
            <TaskCard tasks={task}></TaskCard>
          </div>
        );
      })}
    </>
  );
}
