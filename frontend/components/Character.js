import React, {useState, useEffect} from 'react'

function Character(props) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  const [selectedCharacter, setSelectedCharacter] = useState(null)
  const { name, homeworld, isSelected, onClick } = props;
  // ❗ Create a "toggle" click handler to show or remove the homeworld

  return (
    <div>
      <h1>Characters </h1>
      <li
      className={`character-card ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
      >
        <p className="character-name">{name} (Person)</p>
        {isSelected && (
          <p className="character-planet">Homeworld {homeworld}</p>
        )}
      </li>
      {/* Use the same markup with the same attributes as in the mock */}
    </div>
  );
}

export default Character
