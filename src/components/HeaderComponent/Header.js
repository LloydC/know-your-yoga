import React from "react";
import logo from '../../assets/icons/yoga-icons/color/png/152/yin_yang.png'

export default function Header() {
    return ( <
        div className = "App__Aside" >
        <
        header className = "App-header" >
        <
        h1 > Know Your Yoga < /h1> <
        img src = {
            logo
        }
        className = "App-logo"
        alt = "logo" / >
        <
        span > Curious about Yoga ? Join us and find out where to start < /span> < /
        header > <
        /div>
    );
}