import React from "react";
import {Link} from '@reach/router'
const Pet = props => {
  const { name, animal, breed, media, location, id } = props;
  //default photo of a dog
  let hero = "http://placecorgi.com/300/300";
  if (media.length) {
    hero = media[0].small;
  }
  return (
    //onclick to this link it will go to this page
    <Link to={`/detail/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed} — ${location}`}</h2>
      </div>
    </Link>
  );
};
export default Pet;