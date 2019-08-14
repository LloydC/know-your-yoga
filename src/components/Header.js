import React from "react";
import logo from '../assets/yoga.png'

const Header = () => {
    return (
        <div className="App__Aside">
                <header className="App-header">
                        <h1>Know Your Yoga</h1>
                        <img src={logo} className="App-logo" alt="logo" />
                        <span>Curious about Yoga types? Join us and find your answers </span>
                </header>
              </div>
    );
}

export default Header;