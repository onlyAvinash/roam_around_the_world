import React, { useState } from "react";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ place }) => {
  const [currentImg, setCurrentImg] = useState(0);
  const { name, location, description, imageUrl } = place;

  const prevImage = () => {
    const index = currentImg === 0 ? imageUrl.length - 1 : currentImg - 1;
    setCurrentImg(index);
  };

  const nextImage = () => {
    const index = currentImg === imageUrl.length - 1 ? 0 : currentImg + 1;
    setCurrentImg(index);
  };

  return (
    <div className="card">
      <div className="card-image-container">
        <div className="card-image-carousel">
          {imageUrl.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${name} - Image ${index + 1}`}
              className={`card-image ${
                index === currentImg ? "active" : ""
              }`}
            />
          ))}
          <button className="prev-btn" onClick={prevImage}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button className="next-btn" onClick={nextImage}>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>
      <div className="card-details">
        <h3>{name}</h3>
        <p className="location">{location}</p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
