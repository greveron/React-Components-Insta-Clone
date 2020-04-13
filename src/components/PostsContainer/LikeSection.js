// look at the likes on this component. Right now it is hard coded on line 20.
// console.log your props and see how to add likes to this component so that it will update when you click the icon.
// HINT: You will need to add an onClick event pass through your props and update the hard coded Likes
import React, { useState } from "react";
import "./Posts.css"

const LikeSection = props => {
  const likes = props.likes
  const setLikes = props.setLikes

  const colors = {
    red: "❤️",
    clear: "💙"

  }

  const [color, setColor] = useState(colors.clear)

  //create function change color and change like
  function cambiarlike() {
    if (color === colors.clear) {
      setColor(colors.red)
      setLikes(likes + 1)
    }
    else {
      setColor(colors.clear)
      setLikes(likes - 1)
    }

  }

  return (
    <div>
      <div
        className="like-section"
        key="likes-icons-container"
      >
        <div onClick={cambiarlike} className="like-section-wrapper">

          <span className="far fa-heart">  {color}  </span>
        </div>
        <div className="like-section-wrapper">
          <img src="https://cdn3.iconfinder.com/data/icons/basic-user-interface-application/32/INSTAGRAM_ICON_SETS-06-512.png" className="far fa-comment" />
        </div>
        <div className="plane"><img className="littleplane" src="https://static.thenounproject.com/png/171153-200.png" ></img></div>
      </div>
      <p className="like-number">

        <span role="img" >{likes} likes </span></p>
    </div>
  )
};

export default LikeSection;
