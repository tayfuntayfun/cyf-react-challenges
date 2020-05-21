import React from 'react';
import PlayerScore from './PlayerScore';

const Scoreboard = (props) => {
    return(
        <div className="score-board">
          <h1 className="high-scores-header">HIGH SCORES: {props.name}</h1>
            <div className="score-list">
                {props.scores.map((element) => ( 
                    <PlayerScore element={element}/>
                ))
                }
            </div> 
        </div>
    )
}

export default Scoreboard;