import React from 'react';
import Scoreboard from './Scoreboard';
import allCountryScores from './scores';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>High Scores per Country</h1>
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
