// AddCommentForm.js
import React, { useState } from "react";
import "../../assets/css/Comment.css";

const AddCommentForm = ({ addComment }) => {
  const [commentText, setCommentText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    addComment(commentText);
    setCommentText("");
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <textarea
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        placeholder="Add your comment"
        required
        className="comment-input"
      ></textarea>
      <button type="submit" className="comment-button">
        Add Comment
      </button>
    </form>
  );
};

export default AddCommentForm;
