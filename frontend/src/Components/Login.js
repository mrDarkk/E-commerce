import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
    return(
        <div className="login__">
            <Link>
                <img className="login__logo"
                src="https://pbs.twimg.com/profile_images/1191703380382670850/OU5fxQWX_400x400.jpg" 
                alt="" />
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-Mail ID</h5>
                    <input type="email" />
                    <h5>Password</h5>
                    <input type="password" />
                    <button type="Submit" className="login__signInButton">Sign In</button>
                    <p> By signing in you agree to the terms and policies.</p>
                    <p>New to ecomm ??</p>
                    <button className="login__newuser">Create a new account</button>
                </form>
            </div>
        </div>
    )
}

export default Login;