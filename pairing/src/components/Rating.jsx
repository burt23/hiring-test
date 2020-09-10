import React from "react";

function renderStars(stars) {
  const starList = [];
  const i = 0;

  for (i; i < parseInt(stars); i++) {
    starList.push(
      <li key={`rating-star-${i}`}>
        <img
          src="https://img.icons8.com/color/48/000000/filled-star.png"
          alt="filled-star"
        />
      </li>
    );
  }

  if (stars - parseInt(stars) > 0.5) {
    starList.push(
      <li key={`rating-star-${i}`}>
        <img
          src="https://img.icons8.com/color/48/000000/filled-star.png"
          alt="filled-star"
        />
      </li>
    );
  } else if (stars - parseInt(stars) > 0) {
    starList.push(
      <li key={`rating-star-${i}`}>
        <img
          src="https://img.icons8.com/color/48/000000/star-half.png"
          alt="half-star"
        />
      </li>
    );
  }

  return <ul>{starList}</ul>;
}

export default function Rating({ reviewRating }) {
  return (
    <div className="container__info-review">
      {renderStars(reviewRating)}
      <span>{reviewRating} out of 5 stars!</span>
    </div>
  );
}
