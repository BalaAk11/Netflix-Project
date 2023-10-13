import React,{ useEffect, useState} from "react";
import logo from "../images/logo.svg";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
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
    console.log(movies[0])
    
    return ( 
        <div style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${movies[5]?.poster_path})`
        ,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"600px",width:"100%"}}>
            <div style={{display:"flex", justifyContent:"space-between",padding:"20px"}}>
            <img src={logo} style={{margin:"10px"}}/>
            <Link to="/">
            <Button color="error" variant="contained" sx={{height:"40px"}} >Logout</Button>
            </Link>
            </div>
            <div style={{padding:"20px"}}>
                <h1 style={{color:"white",fontSize:"70px",fontFamily:"initial"}}>{movies[5]?.original_title}</h1>
                <h3 style={{color:"white"}}>{movies[5]?.overview}</h3>
                <a href="https://youtu.be/32RAq6JzY-w?feature=shared"><Button sx={{color:"black",bgcolor:"white",paddingLeft:"15px",fontWeight:"bold"}} variant="contained" >Play Trailer</Button></a>

            </div>
        </div>
     );
}

export default Navbar;