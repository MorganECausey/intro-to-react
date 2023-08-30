import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './Character'; 

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
  
  // ❗ Create effects to fetch the data and put it in state
  const [peopleData, setPeopleData] = useState([]);
  const [planetsData, setPlanetsData] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    axios.get(urlPeople)
    .then(response => setPeopleData(response.data))
    .catch(error => console.error('Error fetching data', error));

    axios.get(urlPlanets)
      .then(response => setPlanetsData(response.data))
      .catch(error => console.error('Error fetching data', error));
  }, []);

  const handleCharacterClick = character => {
    setSelectedCharacter(prevSelected => (prevSelected === character ? null : character))
  };

  const getPlanetByID = planetId => {
    const planet = planetsData.find(planet => planet.id === planetId);
    return planet ? planet.name : 'Unknown';
  }
  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      <ul> 
      {peopleData.map(person => (
          <Character
          key={person.id}
          name={person.name}
          homeworld={getPlanetByID(person.homeworld)}
          isSelected={selectedCharacter === person.id}
          onClick={() => handleCharacterClick(person.id)}
          />
        ))}
        </ul>
    </div>
  );
}
/* ❗ Map over the data in state, rendering a Character at each iteration */
export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
