import React from "react";
import Login from "./Login";
import logo from './yoga.png'

const Header = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Know Your Yoga</h1>
                <img src={logo} className="App-logo" alt="logo" />
                <Login/>
            </header>
        </div>
    );
}

export default Header;