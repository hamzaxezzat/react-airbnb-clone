import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

export default function App() {
    return (
        <div className="airbnb">
            <div className="cardContainer">
                <Navbar />
                <Hero />
                <div className="cardsContainer">
                    <Card
                        img="Card1.jpg"
                        alt="profile"
                        rating={5.0}
                        reviewCount={6}
                        country="USA"
                        title="Life Lessons with Katie Zaferes"
                        price={136}
                    />
                    <Card
                        img="profile.jpg"
                        alt="profile"
                        rating={5.0}
                        reviewCount={6}
                        country="USA"
                        title="Life Lessons with Katie Zaferes"
                        price={136}
                    />
                </div>
            </div>
        </div>
    );
}
