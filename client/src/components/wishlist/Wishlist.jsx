import React from 'react';
import { FaHeart, FaTimes } from 'react-icons/fa';
import "./Wishlist.css"
import { places } from '../../dummydata';
import { Link } from 'react-router-dom';

const Wishlist = ({ onClose }) => {
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
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">Pinned Items</h2>
          <button className="close-modal" onClick={onClose}>
            <FaTimes />
          </button>
        </div>
        <div className="modal-body">
          <p>Here are your pinned items:</p>
          <ul>
           <div className="places-section">
       
          <div className="card">
            
            <img
              src={places[0].imageUrl}
              className="card-img-top"
              alt={places[0].title}
            />
            <Link to={`/place/${places[0].id}`} >
              <div className="card-body">
                <div className="card-body-desc">
                  <h5 className="card-title">{places[0].title}</h5>

                  <small className="text-muted">
                    &#x1F4CD;{places[0].location}
                  </small>
                </div>
                <div className="card-review">
                  <div className="post-rating">{renderStars(places[0].rating)}</div>
                </div>
              </div>
            </Link>
          </div>
       
      </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
