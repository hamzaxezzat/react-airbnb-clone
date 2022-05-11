import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Offers from "./components/Offers";

export default function App() {
    return (
        <div className="airbnb">
            <Navbar />
            <Hero />
            <Offers />
        </div>
    );
}
