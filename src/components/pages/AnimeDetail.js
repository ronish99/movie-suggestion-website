// AnimeDetail.js
import React from "react";
import { useParams } from "react-router-dom";
import { animes } from "../dummy";
import CommentSection from "../Comment/CommentSection";
import "../../assets/css/Detail.css";

const AnimeDetail = () => {
  const { id } = useParams();
  const anime = animes.find((anime) => anime.id === parseInt(id));

  return (
    <div className="detail-container">
      {anime && (
        <>
          <div>
            <img
              src={anime.imageUrl}
              alt={anime.title}
              className="detail-image"
            />
          </div>
          <h2 className="detail-title">{anime.title}</h2>
          <p className="detail-description">{anime.description}</p>
          <p className="detail-rating">Rating: {anime.rating}</p>
          <CommentSection showId={id} showType="anime" />
        </>
      )}
    </div>
  );
};

export default AnimeDetail;
