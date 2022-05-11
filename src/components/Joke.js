import React from "react";

export default function App({ setup, punchline }) {
    return (
        <div className="jokeContainer">
            <h3>{setup}</h3>
            <h4>{punchline}</h4>
            <hr />
        </div>
    );
}
