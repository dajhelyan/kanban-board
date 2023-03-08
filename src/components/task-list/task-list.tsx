import { shorthands, makeStyles } from "@fluentui/react-components";
import React, { DragEvent, useEffect, useRef, useState } from "react";
import TaskCard from "../task-card/task-card";
import { Task } from "../../types";
import { AppState } from "../status-task-column/status-column";
import { Signature } from "typescript";

interface Props {
  status: string;
  tasks: Array<Task>;
  setTasks: (task: any) => any;
}

export default function TaskList({ status, tasks, setTasks }: Props) {
  function getTasksByStatus(status: string) {
    return tasks.filter((task) => task.status === status);
  }

  function startDrag(evt: DragEvent, task: Task, i: number) {
    // Get data of item dragged
    return evt.dataTransfer.setData("taskId", String(task.id));
  }

  const taskDragged = useRef<any>(null);
  const taskOver = useRef<any>(null);

  function dragSort() {
    let sortedList = [...tasks];

    const draggedItem = sortedList.splice(taskDragged.current, 1)[0];
    console.log(draggedItem, "dld");

    sortedList.splice(taskOver.current, 0, draggedItem);

    // taskDragged.current = null;
    // taskOver.current = null;

    setTasks(sortedList);
  }

  return (
    <>
      {getTasksByStatus(status).map((task, i) => {
        return (
          <div
            key={task.id}
            draggable
            onDragStart={(evt) => {
              startDrag(evt, task, i);
            }}
            onDragEnter={() => {
              taskOver.current = i;
            }}
            onDragEnd={() => {
              dragSort();
            }}
          >
            <TaskCard tasks={task}></TaskCard>
          </div>
        );
      })}
    </>
  );
}
