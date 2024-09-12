import React from "react";
import { CommentItem } from "../CommentItem/CommentItem";

export function CommentList({ comments }) {
  return (
    <ul>
      {comments.map(comment => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </ul>
  );
}