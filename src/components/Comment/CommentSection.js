// CommentSection.js
import React, { useState, useEffect } from "react";
import AddCommentForm from "./AddCommentForm";
import "../../assets/css/Comment.css";

const CommentSection = ({ showId, showType }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Load comments for the specific show from local storage
    const storedComments =
      JSON.parse(localStorage.getItem(`comments_${showType}_${showId}`)) || [];
    setComments(storedComments);
  }, [showId, showType]);

  const addComment = (text) => {
    // Create a new comment object
    const newComment = {
      id: comments.length + 1,
      text: text,
    };
    // Update the comments array without mutating the state directly
    setComments((prevComments) => [...prevComments, newComment]);
    // Save comments for the specific show to local storage
    localStorage.setItem(
      `comments_${showType}_${showId}`,
      JSON.stringify([...comments, newComment])
    );
  };

  return (
    <div className="comment-section">
      <h3>Comments</h3>
      <AddCommentForm addComment={addComment} />
      <ul className="comment-list">
        {comments.map((comment) => (
          <li key={comment.id} className="comment">
            <p>{comment.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentSection;
