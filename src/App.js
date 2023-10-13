// import logo from './logo.svg';
import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import MovieDetail from './components/movieDetail';
import Main from './components/Main';
import Login from './components/Login';
// import Login from './components/Login';
// import './App.css';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    
       
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/main' element={<Main/>}/>
        <Route path='/movieDetail' element={<MovieDetail/>}/>
     </Routes>

    </div>
    </BrowserRouter> 
    // <Login/>
  );
}

export default App;
