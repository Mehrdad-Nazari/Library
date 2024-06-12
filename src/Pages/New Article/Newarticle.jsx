import React, { useContext, useState } from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Footer } from "../../Components/Footer/Footer";
import { Button, TextField, Box, Typography, Alert, Snackbar, SnackbarContent } from "@mui/material";
import { Appcontext } from "../../App";

export const Newarticle = () => {
  const { articles, setArticle } = useContext(Appcontext);
  const [newarticle, setNewarticle] = useState({
    image: "",
    title: "",
    description: "",
    date: "",
    author: "",
    content: "",
  });
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const handlesubmit = () => {
    const { image, title, description, date, author, content } = newarticle;
    if (!image || !title || !description || !date || !author || !content) {
      setError(true);
      return;
    }
    setArticle([
      ...articles,
      {
        id: `${articles.length + 1}`,
        image,
        title,
        description,
        date,
        author,
        content,
      },
    ]);
    setNewarticle({
      image: "",
      title: "",
      description: "",
      date: "",
      author: "",
      content: "",
    });
    setError(false);
    setSuccess(true);
    setSnackbarOpen(true);
  };

  const handler = (e) => {
    setNewarticle({ ...newarticle, [e.target.name]: e.target.value });
    setError(false);
    setSuccess(false);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <Box
          className="form-box"
          sx={{
            width: "95%",
            maxWidth: "900px",
            
            
            marginBottom: "20px",
            padding: "10px",
            textAlign: "center",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            backgroundColor: "#ffffffc7",
          }}
        >
          <Typography variant="h5" component="h1" gutterBottom>
            Create a New Article
          </Typography>
          {error && <Alert severity="error">Please fill in all fields.</Alert>}
          {success && <Alert severity="success">Article submitted successfully!</Alert>}
          <TextField
            onChange={handler}
            fullWidth
            label="Title"
            name="title"
            value={newarticle.title}
            autoComplete="off"
            sx={{ backgroundColor: "white", marginBlock: "8px", borderRadius: "10px" }}
            InputLabelProps={{ sx: { color: "black" } }}
          />
          <TextField
            onChange={handler}
            fullWidth
            label="Author"
            name="author"
            value={newarticle.author}
            autoComplete="off"
            sx={{ backgroundColor: "white", marginBlock: "8px", borderRadius: "10px" }}
            InputLabelProps={{ sx: { color: "black" } }}
          />
          <TextField
            onChange={handler}
            fullWidth
            type="date"
            name="date"
            value={newarticle.date}
            autoComplete="off"
            sx={{ backgroundColor: "white", marginBlock: "8px", borderRadius: "10px" }}
            InputLabelProps={{ sx: { color: "black" } }}
          />
          <TextField
            onChange={handler}
            fullWidth
            label="Description"
            name="description"
            value={newarticle.description}
            autoComplete="off"
            sx={{ backgroundColor: "white", marginBlock: "8px", borderRadius: "10px" }}
            InputLabelProps={{ sx: { color: "black" } }}
          />
          <TextField
            onChange={handler}
            name="image"
            fullWidth
            label="Image URL"
            type="url"
            value={newarticle.image}
            autoComplete="off"
            sx={{ backgroundColor: "white", marginBlock: "8px", borderRadius: "10px" }}
            InputLabelProps={{ sx: { color: "black" } }}
          />
          <TextField
            onChange={handler}
            name="content"
            fullWidth
            multiline
            rows={6}
            label="Content"
            value={newarticle.content}
            autoComplete="off"
            sx={{ backgroundColor: "white", marginBlock: "8px", borderRadius: "10px" }}
            InputLabelProps={{ sx: { color: "black" } }}
          />
          <Button
            onClick={handlesubmit}
            variant="contained"
            color="primary"
            sx={{ marginTop: "15px", padding: "10px 20px" }}
          >
            Submit
          </Button>
        </Box>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
        >
          <SnackbarContent message="New Article Submitted!" />
        </Snackbar>
      </div>
      <Footer />
    </>
  );
};
