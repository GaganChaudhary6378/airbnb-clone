import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.img} />
      <div className="cards-stats">
        <img className="card-star" src="Star 1.png" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) •</span>
        <span className="gray">{props.country}</span>
      </div>  
      <p>{props.title}</p>
      <p><span className="bold">From ${props.price}</span>/ person </p>
    </div>
  );
}
