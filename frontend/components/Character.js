import React, { useState } from 'react'

function Character(props) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  const { name, homeworld, isSelected, onClick } = props;
  const [showHomeworld, setShowHomeworld] = useState(false);
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const handleHomeworldToggle = () => {
    setShowHomeworld(prevShow => !prevShow);
  };

  return (
      <div
      className={`character-card ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
      >
        <div>
          <p className="character-name" onClick={handleHomeworldToggle}>{name}</p>
        {isSelected && showHomeworld && (
          <p className="character-planet">Planet: {homeworld}</p>
        )}
        </div>
      </div>
  );
}

export default Character
