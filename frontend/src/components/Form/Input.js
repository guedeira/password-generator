import React from 'react';
import './Input.css';

function Input({ label, value, onChange, min, max }) {
  const handleChange = (e) => {
    const newValue = Number(e.target.value); // Converte para número
    if (newValue >= min && newValue <= max) {
      onChange(e); // Chama a função passada pelo componente pai
    }
  };

  return (
    <div className="input-container">
      <label>{label}</label>
      <div className="slider-container">
        <input
          type="range" // Tipo slider
          min={min}
          max={max}
          value={value}
          onChange={handleChange} // Atualiza o valor no slider
          className="slider"
        />
        <input
          type="number" // Campo numérico ao lado do slider
          min={min}
          max={max}
          value={value}
          onChange={handleChange} // Atualiza o valor no input numérico
          className="number-input"
        />
      </div>
    </div>
  );
}

export default Input;
