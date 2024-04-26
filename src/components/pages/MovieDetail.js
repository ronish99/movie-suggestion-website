// MovieDetail.js
import React from "react";
import { useParams } from "react-router-dom";
import { movies } from "../dummy";
import CommentSection from "../Comment/CommentSection";
import "../../assets/css/Detail.css";

const MovieDetail = () => {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === parseInt(id));

  return (
    <div className="detail-container">
      {movie && (
        <>
          <div>
            <img
              src={movie.imageUrl}
              alt={movie.title}
              className="detail-image"
            />
          </div>
          <h2 className="detail-title">{movie.title}</h2>
          <p className="detail-description">{movie.description}</p>
          <p className="detail-rating">Rating: {movie.rating}</p>
          <CommentSection showId={id} showType="movie" />
        </>
      )}
    </div>
  );
};

export default MovieDetail;
