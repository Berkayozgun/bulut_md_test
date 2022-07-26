import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

function Homepage() {

  
  return (
    <Box sx={{display: 'flex',flexDirection:"row",justifyContent: 'center',alignItems: 'center',marginTop:"4%",width:"100%",height:"100%"}}>
    <Link href="/Movies" underline='none'  sx={{width:"20%",textDecoration:"none",alignSelf:"center" }}>
    <Paper elevation={5} className="movies-card">
      <CardMedia
        resize="cover"
        component="img"
        height="340"
        image="https://streamcoimg-a.akamaihd.net/000/119/3838/1193838-PosterArt-7328f58d3e64953a540a3543a5cd5c39.jpg"
        alt="green iguana"

      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{textAlign: "center",justifyContent: "center"}}>
         Film
        </Typography>
        
      </CardContent>
      
    </Paper>
    </Link>

<Link href="/Series" underline='none'  sx={{width:"20%",textDecoration:"none",marginLeft:"20%"}}>
<Paper elevation={5} className="series-card">
  <CardMedia
    resize="cover"
    component="img"
    height="340"
    image="https://streamcoimg-a.akamaihd.net/000/120/40/12040-PosterArt-2a08532d986336771ea5a70658b6a957.jpg"
    alt="green iguana"

  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div" sx={{textAlign: "center",justifyContent: "center"}}>
     Dizi
    </Typography>
    
  </CardContent>
  
</Paper>
</Link>
</Box>
  )
}

export default Homepage