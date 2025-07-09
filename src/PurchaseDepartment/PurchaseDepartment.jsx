import React, { useState } from 'react';
import './PurchaseDepartment.css';
import FournisseurChoice from '../FournisseurChoice/FournisseurChoice.jsx';
import exclamation from '../assets/exclamation.png';

const PurchaseDepartment = () => {
  const [selectedRange, setSelectedRange] = useState('bas'); // un seul actif
  const [selectedComponent, setSelectedComponent] = useState('composant1'); // un seul actif

  return (
    <div className='AchatContainer'>
      <h2>Vos décisions : Département Achats</h2>

      {/* Boutons de gamme */}
      <div className='ChoixFournisseur'>
        <button
          className={`choixBtn ${selectedRange === 'bas' ? 'active' : ''}`}
          onClick={() => setSelectedRange('bas')}
        >
          Fournisseurs bas gamme
        </button>
        <button
          className={`choixBtn ${selectedRange === 'moyen' ? 'active' : ''}`}
          onClick={() => setSelectedRange('moyen')}
        >
          Fournisseurs moyen gamme
        </button>
        <button
          className={`choixBtn ${selectedRange === 'haut' ? 'active' : ''}`}
          onClick={() => setSelectedRange('haut')}
        >
          Fournisseur haut gamme
        </button>
      </div>

      {/* Onglets Composant */}
      <div className="choixMatiere">
        <span
          className={selectedComponent === 'composant1' ? 'active' : ''}
          onClick={() => setSelectedComponent('composant1')}
        >
          Composant 1
        </span>
        <span
          className={selectedComponent === 'composant2' ? 'active' : ''}
          onClick={() => setSelectedComponent('composant2')}
        >
          Composant 2
        </span>
        <span
          className={selectedComponent === 'emballage' ? 'active' : ''}
          onClick={() => setSelectedComponent('emballage')}
        >
          Emballage
        </span>
      </div>

      <label className="form-label">
        Choix Fournisseurs <img src={exclamation} alt="info" className="info-icon" />
      </label>

      <div className='ListeFournisseurs'>
        <FournisseurChoice
          selectedRange={selectedRange}
          selectedComponent={selectedComponent}
        />
      </div>
    </div>
  );
};

export default PurchaseDepartment;
