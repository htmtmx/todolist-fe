import React from "react";

export function SubTaskItem({ subtask }) {
  
  return (
    <li>
      <input type="checkbox" checked={subtask.status === "completed"} onChange={toogleStatus} />
      <span>{subtask.text}</span>
      <button>Delete</button>
    </li>
  );
}