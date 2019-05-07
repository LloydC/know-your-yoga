import React from "react";
import Login from "./Login";
import Signup from "./Signup";
import logo from './logo.svg';

const Header = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Know Your Yoga</h1>
                <Login/>
                <img src={logo} className="App-logo" alt="logo" />
                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Learn React
                </a>
            </header>
        </div>
    );
}

export default Header;