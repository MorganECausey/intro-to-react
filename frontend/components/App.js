import React, { useEffect } from 'react'
import axios from 'axios'
import Character from './Character'
import { useState } from 'react' 

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
  
  // ❗ Create effects to fetch the data and put it in state
  const [character, setCharacter] = useState(null);
  
  useEffect(() => {
    const promise1 = urlPeople
    const promise2 = urlPlanets
    Promise.all(promise1, promise2)
  })

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
