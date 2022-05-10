import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Offers from "./components/Offers";

export default function App() {
    return (
        <div className="airbnbMainContainer">
            <Navbar />
            <Hero />
            <Offers />
        </div>
    );
}
