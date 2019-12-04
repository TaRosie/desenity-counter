import React from 'react';
import './App.css';

let floorLounges = [
  {
    name: '8F',
    lounges:[
      {name: 'sofa',
       density: 0,
      },
      {name: 'block',
        density: 2,
      },
    ],

  },
  {
    name: '4F',
    lounges:[
      {name: 'sofa',
       density: 0,
      },
      {name: 'block',
        density: 2,
      },
    ],


  },
  {
    name: '3F',
    lounges:[
      {name: 'sofa',
       density: 0,
      },
      {name: 'block',
        density: 2,
      },
    ],

  },
  {
    name: '2F',
    lounges:[
      {name: 'sofa',
       density: 0,
      },
      {name: 'block',
        density: 2,
      },
    ],

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


function FloorMap() {
  const floors = floorLounges.map(Floor);
  return(
    <div className="floors">
    {floors}
    </div>
  );
}

function Floor(props) {
  return(
    <div className="floor">
      
      <p className="floor-title">{props.name}</p>
      <div className="lounges">
<p className="floor-lounges">{props.lounges.map(Lounge)}</p>
      </div>
    </div>
  )
}

function Lounge(props){
  return(
    <div className="lounge">
    <p className="lounge-title">{props.name}</p>
    <p className="lounge-density">{props.density}</p>
    </div>
  )
}


export default App;
