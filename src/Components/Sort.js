import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";

function Sort() {
  return (
    <Box sx={{ justifyContent: "flex-end", width: "15rem", marginLeft: "25%" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sırala</InputLabel>
        <Select
          sx={{ width: "15rem" }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
        >
          <MenuItem value={10}>Yeniye Göre Sırala</MenuItem>
          <MenuItem value={20}>Eskiye Göre Sırala</MenuItem>
          <MenuItem value={30}>Puana Göre Sırala</MenuItem>
          <MenuItem value={40}>Rastgele Sırala</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default Sort;
