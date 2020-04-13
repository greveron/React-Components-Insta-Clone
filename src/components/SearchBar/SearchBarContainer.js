// You do not need to change any code in this file
import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar-wrapper">
      <div className="image-wrapper">
        <i className="fab fa-instagram" />
        <img src="https://i.ya-webdesign.com/images/red-instagram-png-12.png" className="insta1" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" className="insta" />
      </div>
      <form className="search-form">
        <input
          type="text"
          placeholder="Search"
        />
      </form>
      <div className="social-wrapper">
        <div className="social">
          <i className="far fa-compass" />
          <img src= "https://cdn0.iconfinder.com/data/icons/web-seo-and-advertising-media-1/512/197_Home_Instagram_Interface-512.png" className= "home"/>
        </div>
        <div className="foward">
          <i className="far foward1" />
          <img src= "https://static.thenounproject.com/png/171153-200.png" className= "foward2"/>
        </div>
        
        <div className="social">
          <i className="far fa-user-circle" />
          <img src= "https://www.baptists4israel.com/upload/images/icons/explore.png" className= "social2"/>
        </div>
        <div className="social">
          <i className="far fa-heart" />
          <img src= "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Ei-heart.svg/1024px-Ei-heart.svg.png" className= "heart2"/>
        </div>
        <div className="profile">
          <i className="far profile1" />
          <img src= "https://en.ccqqfar.usac.edu.gt/wp-content/uploads/2018/03/Contact-icon.png" className= "profile2"/>
        </div>
      </div>
    </div>
  );
};
//https://static.thenounproject.com/png/171153-200.png
//https://en.ccqqfar.usac.edu.gt/wp-content/uploads/2018/03/Contact-icon.png
//https://www.baptists4israel.com/upload/images/icons/explore.png
//https://listimg.pinclipart.com/picdir/s/33-337369_heart-shaped-clipart-instagram-heart-sign-icon-transparent.png
export default SearchBar;
