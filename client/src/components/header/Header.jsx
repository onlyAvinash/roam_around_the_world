import React, { useEffect, useState } from 'react';
import "./Header.css"
import { FaSearch, FaUserCircle, FaThumbtack, FaBell } from 'react-icons/fa';
import Wishlist from '../wishlist/Wishlist';
import { Link } from 'react-router-dom';

const Header = ({notifcationText}) => {
    const [notification, setNotification] = useState('Welcome To the FindHeaven.earth');
    const [activeNotification, setActiveNotification] = useState(true);
    const [ showDropNotification, setShowDropNotification] = useState(false);
    const [showPinnedItems, setShowPinnedItems] = useState(false);
    
  
    const handleNotificationClick = () => {
        setShowDropNotification(true);
    setActiveNotification(false);
    };
    
     const handlePinnedItemsClick = () => {
    setShowPinnedItems(true);
  };

  // const handleNotifcationFromCalender = (newnotification) => {
  //   setNotification(newnotification);
  //   setActiveNotification(true);
  // }
   console.log({notifcationText});
  useEffect(() => {
    setNotification(notifcationText);
    setActiveNotification(true);
      
  
    
  }, [notifcationText])
  
  return (
    <header>
      
      <div className="logo">
        <Link to="/">
          <img src="/logo.svg" alt="logo" />
          </Link>
      </div>
      <div className="search-bar">
        <div className="search-bar-container">
          <input type="text" placeholder="Search..." />
          <a className='search-bar-button'>
            <FaSearch />
          </a>
        </div>
      </div>
      <div className="profile-icons">
        <div className="pinned-item" onClick={handlePinnedItemsClick}>
          <FaThumbtack />
        </div>
         <div className={`notifications ${activeNotification ? 'active' : ''}`} onClick={handleNotificationClick}>
          <FaBell />
          {activeNotification && <div className="notification-dot" />}
        </div>
        <div className="profile">
          <FaUserCircle />
          <div className='profile-dropdown'>
            <p>Hey username!</p>
            <div className="profile-buttons">
             <Link to="/share" style={{width:"80%"}}>  <button className='profile-share-btn' type='button'>Share your Visit </button></Link>
            <Link to="/login" style={{width:"80%"}}>  <button className='profile-logout-btn' type='button'>LogIn</button></Link>
              </div>
          </div>
        </div>
          </div>
                {showPinnedItems && <Wishlist onClose={() => setShowPinnedItems(false)} />}
           {showDropNotification && (
        <div className="notification-bar">
          <p>{notification}</p>
          <button onClick={() => setShowDropNotification(false)}>Close</button>
        </div>
      )}
    </header>
  );
};

export default Header;
