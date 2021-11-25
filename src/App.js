import React from 'react';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';

function App() {
  return (
    <div className="App">
      <IdCard
        firstName="Javi"
        lastName="Script"
        gender="Queer"
        height={175}
        birth={new Date(1987, 4, 29)}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        firstName="Eli"
        lastName="CSS"
        gender="Female"
        height={165}
        birth={new Date(1994, 0, 18)}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">Ludwig</Greetings>

      <Random min={1} max={6} />
      <Random min={1} max={100} />
    </div>
  );
}

export default App;
