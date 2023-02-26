import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Calendar from "../../components/calender/Calender";
import Map from "../../components/map/Map";
import { places } from "../../dummydata";
import axios from 'axios';

import "./Place.css";

let stories = [
  { title: "delhi", text: "the place is good", pub_data: "3-Jan-2023" },
  { title: "", text: "", pub_data: "" },
  { title: "", text: "", pub_data: "" },
  { title: "", text: "", pub_data: "" }
]

const Place = () => {
  const { id } = useParams();
  const [placesArray, setPlacesArray] = useState([...places]);
  const currentPlace = placesArray.find((place) => {
    return place.id === Number(id);
  });

  console.log(currentPlace.host[0]);

  const user = localStorage.getItem("user")
  const [review, setReview] = useState('');

  const handleReview = async () => {
    try {
      const story
        = await axios.post(
          'http://localhost:5000/api/story/create/',
          {
            title: user ? user : "random user",
            destination: currentPlace.location,
            storyDesc: review
          }
        )
      window.alert('review posted!')
    } catch (err) {
      console.error(err)
      window.alert('an error occurred')
    }
  }


  // console.log(place)
  return (
    <div className="placeComp">
      <div className="placeTitle">
        <p>{currentPlace.title}</p>  
        <p>&#9733;{currentPlace.rating} . &#x1F4CD;{currentPlace.location}.</p>
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
        <div className="box">
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
              <span style={{ fontWeight: "bold", cursor: "pointer" }}>Read more...</span>
            </div>
          </div>
        </div>
        <div className="placeMap">
          <div className="mapWrapper">
            <Map />
          </div>
          <div className="calenderWrapper">
            <Calendar />
          </div>
        </div>
      </div>
      <div className="placeReview">
        <p>Review and Feedback</p>

        <div className="add-review">
          <div className="form bg-white shadow-lg rounded-lg my-20 px-0 py-8">
            <div className="px-8 w-full ">
              <textarea onChange={(e) => setReview(e.target.value)} className="rounded-md p-2 text-sm w-full bg-blue-50" rows="5" cols="1" placeholder="Write your review.." type="text" name="text"></textarea>
              <button onClick={() => handleReview()} className="p-2 mx-auto mt-4 w-full rounded-md bg-blue-500 text-white text-center">Submit</button>
            </div>
          </div>
          <h1 style={{ textAlign: "center" }}>All Dbs</h1>
          {stories.map(function (story, i) {
            return <div key={i + 1} className=" mx-auto py-4 px-8 bg-white shadow-lg rounded-lg my-20">
              <div className="flex justify-center md:justify-end -mt-16">
                <img className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src="https://source.unsplash.com/random/?man,face" />
              </div>
              <div>
                <h2 className="text-gray-800 text-3xl font-semibold">{story.title}</h2>
                <p className="mt-2 text-gray-600">{story.text}</p>
              </div>
            </div>
          })}
        </div>

      </div>
    </div>
  );
};

export default Place;

// const myStorage = window.localStorage;
// myStorage.setItem("user", res.data.username);
// import { Members } from '../../dummyuser'
// import { useNavigate } from 'react-router-dom';
// const navigate = useNavigate();
// const navigateTo = (ind) => navigate('/users/' + ind);