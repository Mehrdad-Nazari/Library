import React from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Feed } from "../../Components/Feed/Feed";
import { Footer } from "../../Components/Footer/Footer";

export const Home = () => {
  

  return (
    <div>
      <Navbar />
      <Feed />
      <Footer />
    </div>
  );
};
