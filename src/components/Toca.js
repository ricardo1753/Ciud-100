import React from 'react'

function Toca(props) {
  return (
    <div>
      <audio autoPlay>
        <source
          src={props.fuente}
          type="audio/mpeg"
        ></source>
      </audio>
    </div>
  )
}

export default Toca