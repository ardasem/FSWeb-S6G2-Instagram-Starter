
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";

const BegenBolumu = (props) => {
   const { gonderiyiBegen, begeniSayisi } = props;

  return (
    <div>
      <div className="like-section" key="likes-icons-container">
        <div className="like-section-wrapper">
          <FontAwesomeIcon icon={faHeart} onClick={gonderiyiBegen}/>
        </div>
        <div className="like-section-wrapper">
          <FontAwesomeIcon icon={faComment} />
        </div>
      </div>
      <p className="like-number">{begeniSayisi} likes</p>
    </div>
  );
};

export default BegenBolumu;
