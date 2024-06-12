import React from "react";
import "./Navbar.css";
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" position="sticky">
        <Toolbar>
          <IconButton color="inherit" sx={{ mr: 2, display: { sm: "none" } }}>
            <Menu />
          </IconButton>
          <Typography
            variant="h5"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              fontFamily: "Bellota",
            }}
          >
            Mehrdad's Library
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button sx={{ fontFamily: "Bellota" }}>
              <Link to="/">Article List</Link>
            </Button>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button sx={{ fontFamily: "Bellota" }}>
              <Link to="/Newarticle">New Article</Link>
            </Button>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button sx={{ fontFamily: "Bellota" }}>
              <Link to="/about">About</Link>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
