import React, { useState, useEffect } from "react";
import database from "../Dataset/database.json";
import { TextField } from "@mui/material";
import MovieList from "../Components/MovieList";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Movies() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState([]);
  useEffect(() => {
    if (sortType === null) {
      setData(database.entries);
    } else if (sortType === "asc") {
      database.entries.sort((a, b) => {
        return b.releaseYear - a.releaseYear;
      });
    } else if (sortType === "desc") {
      database.entries.sort((a, b) => {
        return a.releaseYear - b.releaseYear;
      });
    } else setData(database.entries);
  }, [sortType]);

  const handleChange = (e) => {
    setSortType(e.target.value);
  };

  return (
    <Box>
      <TextField
        sx={{
          width: "25rem",
          height: "3.5rem",
          justifyContent: "flex-start",
          marginTop: "2.5rem",
          marginLeft: "9.5rem",
        }}
        id="outlined-basic"
        onChange={inputHandler}
        variant="outlined"
        fullWidth
        label="Film / Dizi / Oyuncu ara"
      />

      <FormControl
        sx={{
          width: "15rem",
          height: "3.5rem",
          justifyContent: "flex-start",
          marginTop: "2.5rem",
          marginLeft: "29.5rem",
        }}
      >
        <InputLabel id="demo-simple-select-label">Sırala</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortType}
          label="age"
          onChange={handleChange}
        >
          <MenuItem value="asc">Eskiye Göre Sırala</MenuItem>
          <MenuItem value="desc">Yeniye Göre Sırala</MenuItem>
        </Select>
      </FormControl>

      <MovieList input={inputText} />
    </Box>
  );
}

export default Movies;
