import React, { useState } from 'react';
import Scoreboard from './Scoreboard';
import allCountryScores from './scores';
import './App.css';

function App() {
  const [scoreOrder, setScoreOrder] = useState("High");
  function handleButtonClick (){
    if ( scoreOrder == "High"){
      setScoreOrder ("Low")
    }else{
      setScoreOrder ("High")
    }
  }

  return (
    <div className="App">
      <h1>High Scores per Country</h1>
        <button name="button" className="button" onClick={handleButtonClick}> {scoreOrder}
      </button>
        {allCountryScores
          .sort((a, b) => a.name.localeCompare(b.name))
          .map(element => <Scoreboard
            name= {element.name}
            scores={element.scores}
        />
       )}      
    </div>
  );
}

export default App;
