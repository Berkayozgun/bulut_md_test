import React from 'react'
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import database from '../Dataset/database.json';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

function Series() {

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    borderWidth: 1,
    borderRadius: "1rem",
    borderStyle: 'solid',
    height: "3rem",
    borderColor: theme.palette.common.black,
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '20ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  return (
    
    <Box sx={{display: 'flex',flexDirection:"row",justifyContent: 'center',alignItems: 'center',marginTop:"2%",width:"99%",height:"100%",flexWrap:"wrap",}}>

    <Box sx={{display: 'flex',flexDirection:"row",justifyContent:"center",alignSelf:'left',width:"100%"}}>
      <Search sx={{justifyContent:'flex-start'}}>
            <SearchIconWrapper >
              <SearchIcon />
            </SearchIconWrapper >
            <StyledInputBase  sx={{width:"25rem",height:"3.5rem",justifyContent:'flex-start'}}
              placeholder=" Film / Dizi / Oyuncu ara"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          <Box sx={{ justifyContent: 'flex-end',width:"15rem",marginLeft:"25%" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sırala</InputLabel>
        <Select sx={{width:"15rem"}}
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

          </Box>
   {database.entries.map(database=> 
      database.programType === "series" && (
    
        <Link href="/Movies" underline='none'  sx={{width:"15rem",textDecoration:"none",alignSelf:"center",m:5,justifyContent:"center",height:"25rem"}}>
    <Paper elevation={5} className="movies-card">
      <CardMedia
        resize="cover"
        component="img"
        height="350rem"
        image={database.images["Poster Art"].url}
        alt="green iguana"

      />
      <CardContent sx={{height:"2rem",alignSelf:"center",justifyContent:"center",textAlign:"center"}}>
        <Typography gutterBottom variant="h5" component="div" sx={{textAlign: "center",justifyContent: "center",alignSelf:"center", fontSize:"1rem",}}>
         {database.title}
        </Typography>
        
      </CardContent>
      
    </Paper>
    </Link>
    ))
   }
    
    </Box>
  )
}

export default Series