import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../../Components/Navbar/Navbar";
import "./Articlepage.css";
import { Footer } from "../../Components/Footer/Footer";
import { Appcontext } from "../../App";

export const Articlepage = () => {
  const params = useParams();
  const { articles } = useContext(Appcontext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <div className="card">
          <div className="card-content">
            <p className="card-title">{articles[params.id - 1].title}</p>
            <p className="card-para">
              {articles[params.id - 1].description} <br />
              {articles[params.id - 1].date} <br />
              {articles[params.id - 1].author}
            </p>
            <h1 className="content">{articles[params.id - 1].content}</h1>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
