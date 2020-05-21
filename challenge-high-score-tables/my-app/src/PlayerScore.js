import React from 'react';

const PlayerScore = (props) => {
    return (
        <div className="scorer-info">
            <span className="scorer-name"> 
            {props.element.n.toUpperCase()}
            </span>
            <span className="scorer-score"> 
            {props.element.s}
            </span>
        </div>
    )
}

export default PlayerScore;