import React from 'react';
import { Button, Grid } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
function MovieDetail() {

    const location = useLocation();
    console.log(location)
    return ( 
        
        <div style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(https://image.tmdb.org/t/p/original${location.state.movie?.poster_path})`,height:"1000px",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
            <div style={{padding:"20px",position:"fixed"}}>
                <Link to="/main"><Button sx={{color:"black",bgcolor:"white",paddingLeft:"15px",fontWeight:"bold"}} variant="contained">Back</Button></Link>
            </div>
            <div style={{paddingTop:"350px",paddingLeft:"30px"}}>
              <Grid container>
                <h1 style={{color:"white", fontSize:"70px", fontFamily:"initial"}}>{location.state.movie?.original_title}</h1>  
              </Grid>
              <Grid container>
                <h3 style={{color:"white"}}>{location.state.movie?.overview}</h3>
              </Grid>
              <Grid container>
                <h3 style={{color:"white"}}>Release Date: {location.state.movie?.release_date}</h3>
              </Grid>
              <Grid container>
              <h3 style={{color:"white"}}>Rating: {location.state.movie?.vote_average}</h3>

              </Grid>
             </div>  
        </div>

    
     );
}

export default MovieDetail;