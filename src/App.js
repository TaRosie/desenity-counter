import React from 'react';
import './App.css';

let floorLounges = [
  {
    name: '8F',
    lounges:[
      {name: 'Sofa',
       density1: 2,
       density2: 5,
      },
      {name: 'Block',
      density1: 3,
      density2: 6,
      },
    ],

  },
  {
    name: '4F',
    lounges:[
      {name: 'Library',
      density1: 23,
      density2: 60,
      },
    ],


  },
  {
    name: '3F',
    lounges:[
      {name: 'Lounge',
      density1: 20,
      density2: 25,
      },
      {name: 'Block',
      density1: 2,
      density2: 10,
      },
    ],

  },
  {
    name: '2F',
    lounges:[
      {name: 'Language Lounge',
      density1: 15,
      density2: 30,
      },
      {name: 'Caféteria',
      density1: 30,
      density2: 40,
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


let loungeSty = "lounge";
let density1 = props.density1;
let density2 = props.density2;

if (density1/density2 <= 0.3){
     loungeSty = "lounge1";
  }
  else if (density1/density2 >0.3 && density1/density2<= 0.6){
    loungeSty = "lounge2";
  }
  else if (density1/density2 >0.6 && density1/density2<= 1){
    loungeSty = "lounge3";
  }

  return(

   
    <div className={loungeSty}>
    <p className="lounge-title">{props.name}</p>
    <p className="lounge-density">{props.density1}/{props.density2} </p>
    </div>
  )
}


export default App;
