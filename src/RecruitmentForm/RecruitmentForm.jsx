import React, { useState } from 'react';
import './RecruitmentForm.css';
import exclamation from '../assets/exclamation.png';
import dropdownArrow from '../assets/dropdownArrow.png';
import RecruitmentImage from '../assets/RecruitmentImage.png'; 

const RecruitmentForm = () => {
  const [effectif, setEffectif] = useState('');

  const handleDecrement = () => {
    const currentValue = Number(effectif || 0);
    setEffectif(currentValue > 0 ? currentValue - 1 : '');
  };

  const handleIncrement = () => {
    setEffectif(Number(effectif || 0) + 1);
  };

  return (
    <div className="recruitment-card">
      <div className="form-section">
        <h2 className="form-title">Besoins en recrutement</h2>

        <div className="form-content-wrapper">
          <div className="form-group full-width">
            {/* 👇 2. Add the icon to the label */}
            <label htmlFor="effectif" className="form-label">
              Effectif <img src={exclamation} alt="info" className="info-icon" />
            </label>
            <div className="input-with-buttons">
              <input type="number" id="effectif" className="form-input" placeholder="Effectif" value={effectif} onChange={(e) => setEffectif(e.target.value)} />
              <div className="quantity-buttons">
                <button className="quantity-btn" onClick={handleDecrement}>-</button>
                <button className="quantity-btn" onClick={handleIncrement}>+</button>
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="qualification" className="form-label">
                Qualification <img src={exclamation} alt="info" className="info-icon" />
              </label>
              <select id="qualification" className="form-select" style={{ backgroundImage: `url(${dropdownArrow})` }}>
                <option value=""></option>
                <option value="option1">Option 1</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="formation" className="form-label">
                Formation <img src={exclamation} alt="info" className="info-icon" />
              </label>
              <input type="text" id="formation" className="form-input" />
            </div>
          </div>

          <div className="form-actions">
            <button className="btn btn-secondary">Annuler</button>
            <button className="btn btn-primary">Confirmer</button>
          </div>
        </div>
      </div>
      <div className="illustration-section">
        <img src={RecruitmentImage} alt="Factory illustration" className="illustration-image" />
      </div>
    </div>
  );
};

export default RecruitmentForm;

