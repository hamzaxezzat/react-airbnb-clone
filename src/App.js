import React from "react";
import Joke from "./components/Joke";
import JokeData from "./JokesData";
// console.log(JokesData);
// Jokes props
export default function App() {
    // const jokeElement = JokeData.map((joke) => <Joke joke />);
    const jokeElement = JokeData.map((joke) => {
        return <Joke setup={joke.setup} punchline={joke.punchline} />;
    });
    return <div>{jokeElement}</div>;
}

/* 
// colors Map
export default function App() {
    const colors = [
        "Red",
        "Orange",
        "Yellow",
        "Green",
        "Blue",
        "Indigo",
        "Violet",
    ];
    return (
        <div>
            {colors.map((color) => (
                <h3>{color}</h3>
            ))}
        </div>
    );
} */
