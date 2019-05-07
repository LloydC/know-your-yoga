import React from "react";

const Login = () => {
    return (
        <div className="login">
            <input type="text" name="email" placeholder="Email"/>
            <br></br>
            <input type="text" name="password" placeholder="password"/>
            <br></br>
            <button>Login</button>
            <br></br>
            <a href="/"> Sign up here</a>
        </div>
    );
};

export default Login;