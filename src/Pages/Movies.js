import React from 'react'
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import database from '../Dataset/database.json';

function Movies() {
    
  return (
    <Box sx={{display: 'flex',flexDirection:"row",justifyContent: 'center',alignItems: 'center',marginTop:"4%",width:"100%",height:"100%",flexWrap:"wrap",marginBottom:"5%"}}>
   {database.entries.map(database=> { 
    return(
        <Link href="/Movies" underline='none'  sx={{width:"15rem",textDecoration:"none",alignSelf:"center",m:5,justifyContent:"center",height:"25rem" }}>
    <Paper elevation={5} className="movies-card">
      <CardMedia
        resize="stretch"
        component="img"
        height="350rem"
        image={database.images["Poster Art"].url}
        alt="green iguana"

      />
      <CardContent sx={{height:"2rem",alignSelf:"center",justifyContent:"center",textAlign:"center"}}>
        <Typography  component="div" sx={{textAlign: "center",justifyContent: "center",alignSelf:"center",  fontSize:15}}>
         {database.title}
        </Typography>
        
      </CardContent>
      
    </Paper>
    </Link>
    )
   }
    )}
    </Box>
  )
}

export default Movies