import React from 'react';
import './App.css';

let floorLounges = [
  {
    name: '8F',
    description: 'This is the 8F lounge. Food and noise are allowed.',
    density: '7/10',
  },
  {
    name: '4F',
    description: 'This is the 4F library. Food and noise are not allowed.',
    density: '39/60',
  },
  {
    name: '3F',
    description: 'This is the 3F lounge. Food and noise are allowed.',
   density: '10/15', 
  },
  {
    name: '2F',
    description: 'This is the 2F lounge. Food and noise are allowed.',
    density: '30/70',
  },
]

function App() {
  return (
    <div className="App">
      <h1>NYU Shanghai Floor Map</h1>
      <h2>Check for available lounges!</h2>
     <FloorMap />
    </div>
  );
}

function makeFloor(singleFloor){
return(
  <Lounge name={singleFloor.name} description={singleFloor.description} density={singleFloor.density}/>
)
}

function FloorMap() {
  const floors = floorLounges.map(makeFloor);
  return(
    <div className="floors">
    {floors}
    </div>
  );
}

function Lounge(props) {
  return(
    <div className="lounge">
      <p className="lounge-title">{props.name}</p>
      <p className="lounge-description">{props.description}</p>
      <p className="lounge-density">{props.density}</p>
    </div>
  )
}



export default App;
