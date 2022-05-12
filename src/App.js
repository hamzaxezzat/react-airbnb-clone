import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import dataFile from "./data";

export default function App() {
    const importedData = dataFile.map((item) => {
        return <Card key={item.id} item={item} />;
    });
    return (
        <div className="airbnb">
            <div className="cardContainer">
                <Navbar />
                <Hero />
                <div className="cardsContainer">{importedData}</div>
            </div>
        </div>
    );
}
