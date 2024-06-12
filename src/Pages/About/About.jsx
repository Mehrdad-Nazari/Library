import React from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Footer } from "../../Components/Footer/Footer";
import "./About.css";
import { Avatar, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <div>
      <Navbar />
      <div className="wall">
        <div className="info">
          <Avatar
            alt="Mehrdad img"
            src="https://media.licdn.com/dms/image/D4E03AQFtydYIzgRTGg/profile-displayphoto-shrink_800_800/0/1716826496501?e=1723075200&v=beta&t=AslT-uu5DKbpqXMaf_FpHYjj9J4nFTPHONVKaz7DJmI"
            sx={{
              margin: "auto",
              width: "200px",
              height: "200px",
              boxShadow: "0px 10px 20px 0px #343a40",
              border: "0.5px solid black",
            }}
          />
          <br />
          <br />
          <div className="element">
            <Button
              component={Link}
              to="https://www.linkedin.com/in/mehrdad-nazari"
              variant="contained"
              color="info"
              sx={{ fontFamily:"arial" , fontSize: "16px", padding: "10px 20px" }}
            >
              To find out more about me click here!
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
