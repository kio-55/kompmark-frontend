import React from "react";

import star from "./images/star.svg";

import './styles/styles.css';

const getStars = (starsCount) => {
  return (
    <div className="rewiew__stars">
      {[...Array(starsCount)].map((item, index) => (
        <img src={star} alt="*" className="rewiew__star" />
      ))}
    </div>
  );
};

const Rewiew = (props) => {
  return (
    <div className="rewiew">
      <h1 className="rewiew__title">{props.children.title}</h1>
      <p className="rewiew__text">{props.children.text}</p>
      {getStars(props.children.stars)}
      <h3 className="rewiew__author">{props.children.author}</h3>
    </div>
  );
};

export default Rewiew;
