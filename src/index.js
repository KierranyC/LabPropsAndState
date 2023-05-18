import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const Color = (props) =>{
  const color = props.color;
  const selectColor = props.selectColor;
  const selectedColor = props.selectedColor;
  const isSelected = selectedColor === color ? 'selected' : '';

  return (
    <div className={`${color} ${isSelected}`} onClick={() => selectColor(color)} />
  )
}

const Picker = () => {
  const [selectedColor, setSelectedColor] = useState('');

  const selectColor = (colorName) => {
    setSelectedColor(colorName);
  }

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
      <Color color='blue' selectColor={selectColor} setSelectColor={setSelectedColor}/>
      <Color color='yellow' selectColor={selectColor} setSselectColor={setSelectedColor}/>
      <Color color='orange' selectColor={selectColor} setSelectColor={setSelectedColor}/>
      </div>
      </div>
  );
}

ReactDOM.render(
  <Picker />,
  document.getElementById('app')
);
