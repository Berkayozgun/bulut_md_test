import React, { useState } from "react";
import database from "../Dataset/database.json";
import { TextField } from "@mui/material";
import MovieList from "../Components/MovieList";
import Box from "@mui/material/Box";

function Movies(props) {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <Box>
      
        <TextField
          sx={{
            width: "25rem",
            height: "3.5rem",
            justifyContent: "flex-start",
            marginTop:"2.5rem",
            marginLeft:"9.5rem"
          }}
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Film / Dizi / Oyuncu ara"
        />
      
      <MovieList input={inputText} />
    </Box>
  );
}

export default Movies;
