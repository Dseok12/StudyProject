import React from "react";
import ColorContext from "../contexts/color";

const ColorBox = () => {
  return (
    <ColorContext.Consumer>
      {value => (
        <div
          style={{
            width='64px',
            
          }}
        />
      )}
    </ColorContext.Consumer>
  )
}

export default ColorBox;