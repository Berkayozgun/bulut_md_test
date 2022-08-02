import * as React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

function Homepage() {                                                                              /* Site ilk açıldığında gözüken anasayfa */
  return (
    <Box
      sx={{
       display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: "2%",
          width: "99%",
          height: "100%",
          flexWrap: "wrap",
          marginBottom: "4rem",
      }}
    >
      <Link                                                                              /* Film kategorisine yönlendiren kart */
        href="/Movies"
        underline="none"
        sx={{
          width: "15rem",
          textDecoration: "none",
          alignSelf: "center",
          m: 5,
          justifyContent: "center",
          height: "25rem",
        }}
      >
        <Paper elevation={5} className="movies-card">
          <CardMedia
            resize="cover"
            component="img"
            height="340"
            image="https://streamcoimg-a.akamaihd.net/000/119/3838/1193838-PosterArt-7328f58d3e64953a540a3543a5cd5c39.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography                                                                              /* Kategori adı*/
              gutterBottom
              variant="h5"
              component="div"
              sx={{ textAlign: "center", justifyContent: "center" }}
            >
              Film 
            </Typography>
          </CardContent>
        </Paper>
      </Link>

      <Link                                                                             /* Dizi kategorisine yönlendiren kart */
        href="/Series"
        underline="none"
        sx={{
          width: "15rem",
          textDecoration: "none",
          alignSelf: "center",
          m: 5,
          justifyContent: "center",
          height: "25rem",
        }}
      >
        <Paper elevation={5} className="series-card">
          <CardMedia
            resize="cover"
            component="img"
            height="340"
            image="https://streamcoimg-a.akamaihd.net/000/120/40/12040-PosterArt-2a08532d986336771ea5a70658b6a957.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ textAlign: "center", justifyContent: "center" }}
            >
              Dizi
            </Typography>
          </CardContent>
        </Paper>
      </Link>
    </Box>
  );
}

export default Homepage;
