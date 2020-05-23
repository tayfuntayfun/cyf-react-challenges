import React from 'react';
import './App.css';
import data from './babyNamesData.json';

function App() {
  
    return (
      <div className="App">
        <div className='allBabyNames'>
          {data
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((data)=> (
            <p className={data.sex}>{data.name}</p>
            )
          )}
        </div>
        <div class="line"></div>
      </div>
    );
}
export default App;
