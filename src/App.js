import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import dataFile from "./data";
/*
id: 1,
title: "Life Lessons with Katie Zaferes",
description:
    'I will share with you what I call "Positively Impactful Moments of Disappointment." Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.',
price: 136,
coverImg: "katie-zaferes.png",
stats: {
    rating: 5.0,
    reviewCount: 6,
},
location: "Online",
openSpots: 0,
*/
export default function App() {
    const importedData = dataFile.map((card) => {
        return (
            <Card
                img={`./images/${card.coverImg}`}
                alt={card.coverImg}
                rating={card.stats.rating}
                reviewCount={card.stats.reviewCount}
                country={card.location}
                title={card.title}
                price={card.price}
            />
        );
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

/*
const cardData = dataFile.map((card) => {
        return (
            <Card
                img={card.coverImg}
                alt={card.coverImg}
                rating={card.stats.rating}
                reviewCount={card.stats.reviewCount}
                location={card.location}
                title="Life Lessons with Katie Zaferes"
                price={136}
            />
        );
    });
    */
