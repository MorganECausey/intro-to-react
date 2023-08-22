import React from 'react'

function Character(props) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
    class Character extends React.Component {
      constructor(props) {

      }
    }
  
  // ❗ Create a "toggle" click handler to show or remove the homeworld

  return (
    <div>
      <h3>{"character-name"}</h3>
      <p>Planet: {"character-planet"}</p>
      {/* Use the same markup with the same attributes as in the mock */}
    </div>
  )
}

export default Character
