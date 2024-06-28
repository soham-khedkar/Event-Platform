import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

function Card({ food }) {
  const { title, Image, price, id, hosted_by, date } = food;
  return (
    <Link to={`/details/${id}`}>
      <div className="card">
        <div className="image__container">
          <img src={Image} alt={title} />
        </div>
        <div className="details">
          <h4 className="card__title">{title}</h4>
          <p>Hosted By : {hosted_by}</p>
          <div className="date_price">
            <p>Date: {date}</p>
            <p className="price">${price}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
