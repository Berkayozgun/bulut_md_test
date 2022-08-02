import React, { useState, useEffect } from "react";
import database from "../Dataset/database.json";
import { TextField } from "@mui/material";
import MovieList from "../Components/MovieList";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Movies() {                                                                     /* Film kategorisinin sayfası */
  

  const [inputText, setInputText] = useState("");                              /* Arama kutusuna girilen text'in tutulduğu state */
  
  let inputHandler = (e) => {
                                                                                 /* Girilen text'in küçük harfe dönüştürülmesi*/
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  // eslint-disable-next-line

  const [data, setData] = useState([]);                                         /* Filmlerin sıralamasının uygulandığı state */
  
  const [sortType, setSortType] = useState([]);                                /*  Filmlerin sıralama tipinin tutulduğu state */
  useEffect(() => {
    if (sortType === null) {                                                  /*  sıralama filtresi null olduğundaki state ataması*/
      setData(database.entries);
    } else if (sortType === "asc") {                                           /*  Eskiye göre sıralama filtresi seçilirse uygulanan fonksiyon*/
      database.entries.sort((a, b) => {
        return b.releaseYear - a.releaseYear;
      });
    } else if (sortType === "desc") {                                            /* Yeniye göre sıralama filtresi seçilirse uygulanan fonksiyon*/
      database.entries.sort((a, b) => {
        return a.releaseYear - b.releaseYear;
      });
    }
  }, [sortType]);

  const handleChange = (e) => {                                                 /* Select kısmından seçilen değere göre state'in sortType olarak atanması*/
    setSortType(e.target.value);
  };

  return (
    <Box>
      <Box sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexWrap: "wrap",
          marginBottom: "4rem",
        }}>
      <TextField
        sx={{                                                               /*  Arama kutucuğunun tasarımı*/
          width: "20rem",
          height: "3.5rem",
          justifyContent: "flex-start",
          marginTop: "2.5rem",
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
         
        }}
      >
        <InputLabel id="demo-simple-select-label">Sırala</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortType}
          label="age"
          onChange={handleChange}                                                               /* MenuItem = dropdown menu seçenekleri */
        >
          <MenuItem value="asc">Eskiye Göre Sırala</MenuItem>               
          <MenuItem value="desc">Yeniye Göre Sırala</MenuItem>
        </Select>
      </FormControl>
      </Box>

      <MovieList input={inputText} />
    </Box>
  );
}

export default Movies;
