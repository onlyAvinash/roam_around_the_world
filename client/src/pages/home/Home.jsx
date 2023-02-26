import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { places } from "../../dummydata";
import {
  FaAlgolia,
  FaCity,
  FaFilter,
  FaHeart,
  FaListAlt,
  FaMountain,
  FaRegListAlt,
  FaThumbtack,
  FaTree,
  FaUmbrellaBeach,
} from "react-icons/fa";
import FilterModal from "../../components/filtermodal/Filtermodal";

export const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [placesData, setPlacesData] = useState(places);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [isPinned, setIsPinned] = useState();

  const handleFilterClick = () => {
    setShowFilterModal(true);
  };

  const handleFilterClose = () => {
    setShowFilterModal(false);
  };
  // useEffect(() => {
  //   localStorage.setItem("selectedCategory", selectedCategory);
  // }, [selectedCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  const filteredData =
    selectedCategory === "all"
      ? placesData
      : placesData.filter((place) => place.category === selectedCategory);

  const renderStars = (rating) => {
    const stars = [];

    for (let i = 1; i < rating; i++) {
      stars.push(
        <span key={i} className="star">
          &#9733;
        </span>
      );
    }

    return stars;
  };

  return (
    
    <div className="HomePage">
      <div className="category-section">
        <ul className="category-list">
          <li>
            <Link to="/" onClick={() => handleCategoryClick("all")}>
                <FaRegListAlt /> <span>All</span>{" "}
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => handleCategoryClick("Beach")}>
              <FaUmbrellaBeach /> <span>Beach</span>{" "}
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => handleCategoryClick("mountain")}>
              <FaMountain /> <span>Mountain</span>{" "}
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => handleCategoryClick("City")}>
              <FaCity /> <span>City</span>{" "}
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => handleCategoryClick("Historical")}>
              <FaTree /> <span>Forest</span>{" "}
            </Link>
          </li>
        </ul>
        <div className="filter-icon" onClick={handleFilterClick}>
          <FaFilter />
          <p>Filter</p>
        </div>
      </div>
      <div className="places-section">
        {filteredData.map((place) => (
          <div className="card" key={place.id}>
            <div className={`card-pin ${isPinned ===place.id ? "red" : ""}`} onClick={()=> setIsPinned(place.id)}>
              <FaHeart  />
            </div>
            <img
              src={place.imageUrl}
              className="card-img-top"
              alt={place.title}
            />
            <Link to={`/place/${place.id}`} >
              <div className="card-body">
                <div className="card-body-desc">
                  <h5 className="card-title">{place.title}</h5>

                  <small className="text-muted">
                    &#x1F4CD;{place.location}
                  </small>
                </div>
                <div className="card-review">
                  <div className="post-rating">{renderStars(place.rating)}</div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      {showFilterModal && (
        <FilterModal show={showFilterModal} onClose={handleFilterClose} />
      )}
    </div>
  );
};
