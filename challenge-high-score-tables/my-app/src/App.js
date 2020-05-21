import React, { useState } from 'react';
import Scoreboard from './Scoreboard';
import allCountryScores from './scores';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  function handleButtonClick (){
    setCount (count + 1)
  }

  return (
    <div className="App">
      <h1>High Scores per Country</h1>
        <button name="button" className="button" onClick={handleButtonClick}> {count}
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
