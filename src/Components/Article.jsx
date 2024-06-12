import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

export const Article = (props) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexWrap: "wrap",
        width: 400,
        borderRadius: "13px",
        margin: "13px",
        maxHeight: 300,
        backgroundColor: "#f8f9fa",
        boxShadow: "0px 5px 30px 10px #343a40",
        border: "0.5px solid black",
      }}
    >
      <CardActionArea>
        <CardMedia component="img" height="140" image={props.img} alt="image" />
        <CardContent>
          <Typography gutterBottom variant="h8" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
          <Button
            size="medium"
            color="primary"
            sx={{ width: "100%", justifyContent: "right" }}
          >
            Go!
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
