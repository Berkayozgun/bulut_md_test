
import React from 'react'
import database from "../Dataset/database.json";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";



function MovieList(props) {

  /* Arama fonksiyonu*/

    const filteredData = database.entries.filter((el) => {
        if (props.input === '') {
            return el;
        } else {
            return el.title.toLowerCase().includes(props.input)
        }
    })


    /* Sıralama fonksiyonu*/

 

    return (
        <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2%",
          width: "99%",
          height: "100%",
          flexWrap: "wrap",
          marginBottom: "4rem",
        }}
      >
        
       
            {filteredData.map((database) =>
          database.programType === "movie" && (
                <Link
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
                    height="350rem"
                    image={database.images["Poster Art"].url}
                    alt="green iguana"
                  />
                  <CardContent
                    sx={{
                      height: "2rem",
                      alignSelf: "center",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{
                        textAlign: "center",
                        justifyContent: "center",
                        alignSelf: "center",
                        fontSize: "1rem",
                      }}
                    >
                      {database.title}
                      
                    </Typography>
                  </CardContent>
                </Paper>
              </Link>
            ))}
        </Box>
    )
}
export default MovieList;