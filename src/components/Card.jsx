import React from "react";
import { generate as id } from "short-id";

const Card = ({ title, img, author, date, tags, views, children }) => {
  return (
    <div className="card">
      <h2 className="card__title">{title}</h2>
      <img src={img} className="card__img" alt={title}></img>
      <p className="card__description">{children}</p>
      <p className="card__author">{author}</p>
      <ul className="card__tags">
        {tags.map(tag => {
          return (
            <li key={id()} className="card__tag">
              {tag}
            </li>
          );
        })}
      </ul>
      <p className="card__views">{views}</p>
      <p className="card__date">{date}</p>
    </div>
  );
};

export default Card;
