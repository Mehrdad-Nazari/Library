import React from "react";
import "./Footer.css";
import { Box } from "@mui/material";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";

export const Footer = () => {
  return (
    <div className={"box"}>
      <Box >
     <br/>
       Where Every Detail Matters! 
        <br/>
        Copyright © Mehrdad
        <br/>
        <Facebook  />
        <Instagram />
        <Twitter />
        <LinkedIn />
        
      </Box>
    </div>
  );
};
