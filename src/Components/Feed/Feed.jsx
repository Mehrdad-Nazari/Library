import React, { useContext } from "react";
import "./Feed.css";
import { Article } from "../Article.jsx";
import { Link } from "react-router-dom";
import { Appcontext } from "../../App.jsx";

export const Feed = () => {
  const { articles } = useContext(Appcontext);
  return (
    <div className="container">
      {articles.map((item) => (
        <Link key={item.id} to={`/article/${item.id}`}>
          <Article
            title={item.title}
            description={item.description}
            img={item.image}
          />
        </Link>
      ))}
    </div>
  );
};
