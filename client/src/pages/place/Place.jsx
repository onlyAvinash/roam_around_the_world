import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Calendar from "../../components/calender/Calender";
import Map from "../../components/map/Map";
import { places } from "../../dummydata";

import "./Place.css";

const Place = () => {
  const { id } = useParams();
  const [placesArray, setPlacesArray] = useState([...places]);
  const currentPlace = placesArray.find((place) => {
    return place.id === Number(id);
  });

  console.log(currentPlace.host[0]);

  // console.log(place)
  return (
    <div className="placeComp">
      <div className="placeTitle">
        <p>{currentPlace.title}</p>  
        <p>&#x1F4CD;{ currentPlace.location}</p>
      </div>
      <div className="container">
        <div className="box">
          <img src={currentPlace.image[0]} />
        </div>
        <div className="box">
          <img src={currentPlace.image[1]} />
        </div>
        <div className="box">
          <img src={currentPlace.image[2]} />
        </div>
        <div className="box">
          <img src={currentPlace.image[3]} />
        </div>
        <div class="box">
          <img src={currentPlace.image[4]} />
        </div>
      </div>
      <div className="allAboutPlace">
        <div className="placePostedBy">
          {/* owner profile */}
          <div className="underline">
            <div className="postUserName">
              <p>{currentPlace.host["name"]}</p>
              <h6 >Owner of the Post</h6>
            </div>
            <div className="postUserProfile">
              <img src={currentPlace.host["avatarUrl"]} alt="" />
            </div>
          </div>
          {/* routes */}
          <div className="placeRoutes">
            <p>Route :</p>
            <div className="placeLine"></div>
            <div className="placeRoute">
              <img src="/parking.png" alt="" />
               <h6> Manali  </h6>
             </div>
            <div className="placeRoute">
              <img src="/trekking.png" alt="" />
               <h6> 15 Km Trek, </h6>
             </div>
            <div className="placeRoute">
              <img src="/location-pin.png" alt="" />
               <h6> finally you will reach </h6>
             </div>
           </div>
        <div className="culturOfPlace">
            <p>Cultural Diversity of the Place</p>
            <p>Short Description about {currentPlace.title} :</p>
            <div className="aboutCulture">
              <p>- There are many interesting villages in Himachal Pradesh, but one that stands out is Malana</p>
              <p>- Malana is a small village located in the Parvati Valley of Kullu district in Himachal Pradesh, India.</p>
               <p>- It is known for its unique culture, language, and way of life that is different from the rest of the region.</p>
                <p>- The village has its own set of rules and regulations, and outsiders are not allowed to touch or enter certain areas.</p>
             <span style={{fontWeight:"bold",cursor:"pointer" }}>Read more...</span>
            </div>
        </div>
        </div>
        <div className="placeMap">
          <div className="mapWrapper">
            <Map />
          </div>
          <div className="calenderWrapper">
            <Calendar/>
          </div>
        </div>
      </div>
      <div className="placeReview">
         <p>Review and Feedback</p> 
      </div>
    </div>
  );
};

export default Place;
