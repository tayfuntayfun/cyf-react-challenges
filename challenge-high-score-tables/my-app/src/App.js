import React from 'react';
import Scoreboard from './Scoreboard';
import allCountryScores from './scores';
import './App.css';


function App() {

  function handleButtonClick (){
    document.body.style.backgroundColor="red"
  }

  return (
    <div className="App">
      <h1>High Scores per Country</h1>
        <button name="button" className="button" onClick={handleButtonClick}> BUTTON
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
