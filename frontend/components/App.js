import React, { useEffect } from 'react'
import axios from 'axios'
import Character from './Character'
import { useState } from 'react' 

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
  
  // ❗ Create effects to fetch the data and put it in state
  const [urlPeople, setUrlPeople] = useState([]);
  const [urlPlanets, setUrlPlanets] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9009/api/people')
    .then(response => response.json())
    .then(apiData => setUrlPeople(apiData))
    .catch(error => console.error('Error fetching data', error));
  })
  
  useEffect(() => {
    fetch('http://localhost:9009/api/planets')
      .then(response => response.json())
      .then(apiData => setUrlPlanets(apiData))
      .catch(error => console.error('Error fetching data', error));
  }, []);


  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      <ul> 
        {urlPeople.map(character => (
          <li key={character.id} className="character-card">{character.name}</li>
        ))}
        </ul>
    </div>
  )
};
/* ❗ Map over the data in state, rendering a Character at each iteration */
export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
