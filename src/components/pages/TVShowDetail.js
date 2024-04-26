// TVShowDetail.js

import React from "react";
import { useParams } from "react-router-dom";
import { TvShows } from "../dummy";
import CommentSection from "../Comment/CommentSection";
import "../../assets/css/Detail.css";

const TVShowDetail = () => {
  const { id } = useParams();
  const show = TvShows.find((show) => show.id === parseInt(id));

  return (
    <div className="detail-container">
      {/* Apply generic container class */}
      {show && (
        <>
          <div>
            <img
              src={show.imageUrl}
              alt={show.title}
              className="detail-image"
            />
          </div>
          <h2 className="detail-title">{show.title}</h2>{" "}
          {/* Apply generic title class */}
          <p className="detail-description">{show.description}</p>{" "}
          {/* Apply generic description class */}
          <p className="detail-rating">Rating: {show.rating}</p>{" "}
          {/* Apply generic rating class */}
          <CommentSection showId={id} />{" "}
          {/* Use the CommentSection component */}
        </>
      )}
    </div>
  );
};

export default TVShowDetail;
