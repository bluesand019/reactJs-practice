import { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#36454F");

  const setColorHandler = (e) => {
    setColor(e.target.value);
  };

  return (
    <>
      <div className="container">
        <h2 className="heading">Color picker app</h2>
        <div className="display" style={{ backgroundColor: color }}>
          Selected color: {color}
        </div>
        <p>Select a color:</p>
        <input
          className="color-picker"
          type="color"
          value={color}
          onChange={(e) => setColorHandler(e)}
        />
      </div>
    </>
  );
}

export default ColorPicker;
