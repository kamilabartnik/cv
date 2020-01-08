import React from 'react';
import './App.css';

// CSS
import './css/resume.css';

// Components
// import Nav from './components/Nav';
// import Penguin from './components/Penguin';
// import Survey from './components/components/Survey';
import Navbar from './components/Navbar';
import PenguinWave from './components/PenguinWave';

// import './js/resume';

function App() {
  return (
    <div className="App">
      {/* <Nav />
      <Penguin />
      
      <Survey /> */}
      <Navbar />
      <PenguinWave /> 
    </div>
  );
}

export default App;
