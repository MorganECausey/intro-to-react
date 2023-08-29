import React, {useState, useEffect} from 'react'

function Character(props) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  const [urlPeople, setUrlPeople] = useState([]);
  const [urlPlanets, setUrlPlanets] = useState([]);
  const [showHomeworld, setShowHomeworld] = useState(false);

    const handleToggleHomeworld = () => {
      setShowHomeworld(prevShow => prevShow);
    };
  
  // ❗ Create a "toggle" click handler to show or remove the homeworld

  return (
    <div>
      <button onClick={handleToggleHomeworld}></button>
      
      {/* Use the same markup with the same attributes as in the mock */}
    </div>
  )
}

export default Character
