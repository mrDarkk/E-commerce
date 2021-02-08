import React from 'react';

function Login() {
    return(
        <div classname="login">
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-Mail ID</h5>
                    <input type="email" />
                    <h5>Password</h5>
                    <input type="password" />
                    <button type="Submit" className="login__signInButton">Sign In</button>
                    <p> By signing in you agree to the terms and policies.</p>
                </form>
            </div>
        </div>
    )
}

export default Login;