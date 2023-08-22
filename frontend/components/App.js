import React, { useEffect } from 'react'
import axios from 'axios'
import Character from './Character'
import { useState } from 'react' 

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
  
  // ❗ Create effects to fetch the data and put it in state
  const [character, setCharacter] = useState([]);
  const fetchData = async () => {
    const response = await fetch(urlPeople, urlPlanets);
    const character = await response.json();
    setCharacter(character);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {character.map(item => {
        <div key={character.id}>{character.name}</div>
      })}
    </div>
  )
}
/* ❗ Map over the data in state, rendering a Character at each iteration */
export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
