import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Section from './components/Section';
import userData from "./userData"

console.log(userData);

function App() {
  return (
    <div className="App pb-10 w-full">
      <Navbar />
      <div className='flex flex-col items-center justify-center'>
        <AboutMe />
      </div>
      <div className='flex flex-col items-center justify-center'>
        {
          userData.map((singleDataObj) => {
            return <Section
              title={singleDataObj.title}
              description={singleDataObj.description}
            />
          })
        }
      </div>

    </div>
  );
}

export default App;
