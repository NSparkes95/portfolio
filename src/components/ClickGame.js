import React, {useState} from "react";
import "../styles/ClickerGame.css";

function ClickerGame() {
    const [score, setScore] = useState(0);
    const [animationKey, setAnimationKey] = useState(0); // Used to reset animation

    const handleClick = () => {
        setScore(score + 1);
        setAnimationKey(animationKey + 1); // Update the key to re-trigger animation
    };

    const resetGame = () => {
        setScore(0);
        setAnimationKey(animationKey + 1); // Reset animation as well
    };

    return (
        <div className="clicker-game">
            <h2>Clicker Game</h2>
            <p>Your Score: <span className="score">{score}</span></p>
            <button onClick={handleClick} className="click-button">Click Me!</button>
            <button onClick={resetGame} className="reset-button">Reset</button>
        </div>
    );
}

export default ClickerGame;