import React, {useState, useEffect} from 'react'
import PlayerGameField from "./PlayerGameField";
import BotGameField from "./BotGameField";
import GameHistory from "./GameHistory";
import createGameField from "./scripts/createGameField";

const Game: React.FC = () => {
    const [playerField, setPlayerField] = useState( createGameField() );
    const [botField, setBotField] = useState( createGameField() );



    return (
        <div>
            <div>
                <PlayerGameField />
                <BotGameField />
                <GameHistory />
            </div>
        </div>
    )
};

export default Game;