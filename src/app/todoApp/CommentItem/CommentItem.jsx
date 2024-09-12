import React from "react";

export function CommentItem({ comment }) {
  return (
    <li>
      <span>{comment.text}</span>
      <button>Edit</button>
      <button>Delete</button>
    </li>
  );
}