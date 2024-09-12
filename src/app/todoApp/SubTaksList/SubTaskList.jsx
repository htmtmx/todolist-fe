import React from "react";
import { SubTaskItem } from "../SubTaskItem/SubTaskItem";

export function SubTaskList({ subtasks }) {
  return (
    <ul>
      {subtasks.map(subtask => (
        <SubTaskItem key={subtask.id} subtask={subtask} />
      ))}
    </ul>
  );
}