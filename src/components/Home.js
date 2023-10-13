import React, { useEffect, useState} from "react";

import {Box, Card, CardMedia, Grid} from "@mui/material";
import { Link } from "react-router-dom";
import "./styles/Home.css"

function Home () {

    const [movies, setMovies]=useState([]);
     
   const getMovie = ()=>{
    try{
       fetch("https://api.themoviedb.org/3/discover/movie?api_key=d4a81dedf38b852b851e87ee7288cf30")
       .then(res => res.json())
       .then(json=> setMovies(json.results))
   }catch(err){
    console.log(err)
   }
 }
    useEffect (()=>{
          getMovie();
      
    },[])
    console.log(movies)
    
    return ( 
        <div style={{backgroundColor:"#181818"}}>
            <Grid container spacing={2} style={{paddingTop:"20px",paddingRight:"20px",paddingLeft:"20px"}}>
            {movies.map((movie)=>{
                
                return <Grid item xs={3}>
                <Box>
                    <Link to="/movieDetail" state={{movie:movie}}>
                <Card className="anime">
                
                       <CardMedia component="img" height="140" image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}>
 
                       </CardMedia>
                    
                </Card>
                    </Link>
                </Box>
            </Grid>
            })}
           </Grid>
        </div>
     );
}

export default Home ;