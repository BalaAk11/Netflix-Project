import React from 'react';
import logo from '../images/logo.svg'
import '../components/styles/Login.css'
function Login () {


    return (
        <div className='bg'>
             <img className='logo' src={logo}></img>
             <div className="login">
                <div>
            <form action='/main'>
                <h2>LogIn</h2>
                <div className="input-box">
                    <input type="text" placeholder="Email" required/>
                    
                    
                </div>
                <div className="input-box">
                    <input type="password"  placeholder="Password" required/>
                    
                    
                </div>
                <button className='LogIn'>Log in</button>

                <div className="form-help">
                    <div className="rem">
                      <input type="checkbox" id="remember-me"/>
                      <label for="remember-me">Remember me</label>
                    </div>
                    <a href="#">Need help?</a>
                  </div>

                <div className="register">
                    <p>Don't have an account? <a href="#">Register</a></p>
                </div>
            </form>
            </div>
        </div>

      
        </div>
    )    
}

export default Login ;