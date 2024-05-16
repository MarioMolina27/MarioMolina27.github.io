/* eslint-disable react/prop-types */
import './Switch.css';
export default function Switch({ selectedOption, handleOptionChange }) {
  return (
    <div className="switches-container">
      <input
        type="radio"
        id="switchExperiencia"
        name="switchPlan"
        value="Experiencia"
        checked={selectedOption === 'Experiencia'}
        onChange={handleOptionChange}
      />
      <input
        type="radio"
        id="switchEstudios"
        name="switchPlan"
        value="Estudios"
        checked={selectedOption === 'Estudios'}
        onChange={handleOptionChange}
      />
      <label htmlFor="switchExperiencia" className={`switch-option ${selectedOption !== 'Experiencia' && 'notSelected'}`}>
        Experiencia
      </label>
      <label htmlFor="switchEstudios" className={`switch-option ${selectedOption !== 'Estudios' && 'notSelected'}`}>
        Estudios
      </label>
      <div className="switch-wrapper">
        <div className="switch">
          <div>EXPERIENCIA</div>
          <div>ESTUDIOS</div>
        </div>
      </div>
    </div>
  );
}
