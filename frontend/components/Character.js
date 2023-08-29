import React from 'react'

function Character(props) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
    const [isHomeworldRendering, setIsHomeowrldRendering] = useState(false);

    const click = () => {
      setIsHomeowrldRendering(!isHomeworldRendering);
    };
  
  // ❗ Create a "toggle" click handler to show or remove the homeworld

  return (
    <div>
      <button onClick={click}></button>
      {isHomeworldRendering ? (
        <div> Planet: {'character-planet'} </div>
      ) : (
        <div> {'character-planet'} </div>
      )}
      {/* Use the same markup with the same attributes as in the mock */}
    </div>
  )
}

export default Character
