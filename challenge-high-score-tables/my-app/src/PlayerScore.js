import React from 'react';

const PlayerScore = (props) => {
    return (
        <div className="scorer-info">
            <div className="scorer-">
                <span className="scorer-name-span"> 
                {props.element.n.toUpperCase()}
                </span>
            </div>
            <div>
                <span className="scorer-score-span"> 
                {props.element.s}
                </span>
            </div>
        </div>
    )
}

export default PlayerScore;