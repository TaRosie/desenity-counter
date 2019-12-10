import React from 'react';
import './App.css';

let floorLounges = [
  {
    name: '8F',
    lounges:[
      {name: 'Sofa',
       density: '2/5',
      },
      {name: 'Block',
        density: '3/6',
      },
    ],

  },
  {
    name: '4F',
    lounges:[
      {name: 'Library',
       density: '29/60',
      },
    ],


  },
  {
    name: '3F',
    lounges:[
      {name: 'Lounge',
       density: '20/25',
      },
      {name: 'Block',
        density: '2/10',
      },
    ],

  },
  {
    name: '2F',
    lounges:[
      {name: 'Language Lounge',
       density: '15/30',
      },
      {name: 'Caféteria',
        density: '30/40',
      },
    ],

  },
]

function App() {
  return (
    <div className="App">
     <img className = "logo" src="https://upload.wikimedia.org/wikipedia/en/1/13/NYU_Shanghai_Logo.jpg"></img>
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

  // if (density <= 0.3){
  //    set
 
  // }else{
    
  // }

  return(
    <div className="lounge">
    <p className="lounge-title">{props.name}</p>
    <p className="lounge-density">{props.density}</p>
    </div>
  )
}


export default App;
