// Comment.js
import React from "react";
import "../../assets/css/Comment.css";

const Comment = ({ text }) => {
  return <li className="comment">{text}</li>;
};

export default Comment;
