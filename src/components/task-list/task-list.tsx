import { shorthands, makeStyles } from "@fluentui/react-components";
import React, { DragEvent, useEffect, useState } from "react";
import TaskCard from "../task-card/task-card";
import { Task } from "../../types";
import { AppState } from "../status-task-column/status-column";

interface Props {
  status: string;
  tasks: Array<Task>;
}

export default function TaskList({ status, tasks }: Props) {
  function getTasksByStatus(status: string) {
    return tasks.filter((task) => task.status === status);
  }

  function startDrag(evt: DragEvent, task: Task) {
    // Get data of item dragged
    return evt ? evt.dataTransfer.setData("taskId", String(task.id)) : "false";
  }

  return (
    <>
      {getTasksByStatus(status).map((task) => {
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
