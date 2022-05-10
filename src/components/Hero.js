import React from "react";
import imgGrid from "../images/imgGrid.png";
export default function Navbar() {
    return (
        <div className="HeroSection">
            <img src={imgGrid} alt="img Grid" />
            <h1>Online Experiences</h1>
            <p>
                Join unique interactive activities led by one-of-a-kind
                hosts—all without leaving home.
            </p>
        </div>
    );
}
