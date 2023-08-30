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
      onClick={() => {
        onClick();
        handleHomeworldToggle();
      }}
      >
        <div>
          <p className="character-name">{name}</p>
        {isSelected && (
          <p className={`character-planet ${showHomeworld ? '' : 'hidden'}`}>
          Planet: {homeworld}
          </p>
        )}
        </div>
      </div>
  );
}

export default Character
