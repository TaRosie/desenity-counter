import React, {useState} from 'react';
import './App.css';
// import ReactGA from 'react-ga';

// function initializeReactGA(){
// ReactGA.initialize('new');
// ReactGA.pageview("/");
// }

// initializeReactGA();


let lounge = [
  {name:'8F sofa',
  },
  {
    name: '8F block',
  }
]

function App() {

  // const[mode, setMode] =  useState('crowded');

  // function handleClick(){
  //   console.log('clicked');
  //   }
  //   ReactGA.event({
  //     category:'Interaction',
  //     action:'Change the mode'
  //   });
  // }


  // let imgPath = (mode === 'Personal' ? article[0].image : article[1].image);

  return (
    <div className="App">
      <h1>NYU Shanghai floor map</h1>
      <h2>Check for available lounges</h2>  
{/*  
      <button onClick={handleClick}> Click to see functions </button> */}
  </div>
  );
}


export default App;

