import React, { useState } from 'react';
import './FournisseurChoice.css';

const FournisseurChoice = () => {
    const [expandedSection, setExpandedSection] = useState(null);
    const [filters, setFilters] = useState({ qualification: [], genre: [], age: '' });

    const suppliersData = [
        {
            id: 1,
            name: 'Lucien Montague',
            type: 'Haut de gamme',
            quality: 50,
            price: 20000,
            image: '/images/lucien.jpg',
            qualification: 'exp',
            genre: 'homme',
            age: 45
        },
        {
            id: 2,
            name: 'Elodie Dubois',
            type: 'Bas de gamme',
            quality: 80,
            price: 20000,
            image: '/images/elodie.jpg',
            qualification: 'non-exp',
            genre: 'femme',
            age: 30
        },
        {
            id: 3,
            name: 'Lorem Montague',
            type: 'Moyen de gamme',
            quality: 50,
            price: 20000,
            image: '/images/lorem.jpg',
            qualification: 'exp',
            genre: 'homme',
            age: 25
        }
    ];

    const [filteredSuppliers, setFilteredSuppliers] = useState(suppliersData);


    const toggleSection = (section) => {
        setExpandedSection(expandedSection === section ? null : section);
        setFilters({ qualification: [], genre: [], age: '' });
        setFilteredSuppliers(suppliersData);
    };


    const handleCheckboxChange = (event) => {
        const { name, value, checked } = event.target;
        setFilters((prev) => {
            const updated = checked
                ? [...prev[name], value]
                : prev[name].filter((v) => v !== value);
            return { ...prev, [name]: updated };
        });
    };

    const handleAgeChange = (event) => {
        setFilters({ ...filters, age: event.target.value });
    };

    const handleSearch = () => {
        const { qualification, genre, age } = filters;

        const results = suppliersData.filter(supplier => {
            const matchQualification = qualification.length === 0 || qualification.includes(supplier.qualification);
            const matchGenre = genre.length === 0 || genre.includes(supplier.genre);
            const matchAge = age === '' || supplier.age === parseInt(age);
            return matchQualification && matchGenre && matchAge;
        });

        setFilteredSuppliers(results);
    };


    const renderSection = (label, key) => (
        <>
            <button className="dropdown-btn" onClick={() => toggleSection(key)}>
                {label} <span className={`arrow ${expandedSection === key ? 'rotated' : ''}`}>▾</span>
            </button>


            <div className={`dropdown-content ${expandedSection === key ? 'expanded' : ''}`}>
                <div className="fournisseur-international-container">
                    <div className="atelier-selector">
                        <label>Numéro Atelier</label>
                        <select>
                            <option>Atelier 1</option>
                            <option>Atelier 2</option>
                            <option>Atelier 3</option>
                        </select>
                    </div>

                    {/* Zone de filtres */}
                    <div className="search-panel">
                        <div className="form-group">
                            <label>Qualification</label>
                            <div>
                                <label><input type="checkbox" name="qualification" value="exp" onChange={handleCheckboxChange} /> Expérimenté</label><br />
                                <label><input type="checkbox" name="qualification" value="non-exp" onChange={handleCheckboxChange} /> Non Expérimenté</label>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Genre</label>
                            <div>
                                <label><input type="checkbox" name="genre" value="femme" onChange={handleCheckboxChange} /> Femme</label><br />
                                <label><input type="checkbox" name="genre" value="homme" onChange={handleCheckboxChange} /> Homme</label>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Âge</label>
                            <input type="number" value={filters.age} onChange={handleAgeChange} />
                        </div>

                        <button className="search-btn" onClick={handleSearch}>Search</button>
                    </div>

                    {/* Liste des fournisseurs */}
                    <div className="result-panel">
                        <h3 className="supplier-title">Listes des fournisseurs</h3>
                        <div className="supplier-list">
                            {filteredSuppliers.length > 0 ? (
                                filteredSuppliers.map((supplier) => (
                                    <div className="supplier-card" key={supplier.id}>
                                        <img src={supplier.image} alt={supplier.name} className="supplier-img" />
                                        <div className="supplier-info">
                                            <h4>{supplier.name}</h4>
                                            <p><b>Type :</b> {supplier.type}</p>
                                            <div className="quality-bar">
                                                <label>Qualité</label>
                                                <div className="bar">
                                                    <div className="fill" style={{ width: `${supplier.quality}%` }}></div>
                                                </div>
                                                <span>{supplier.quality}%</span>
                                            </div>
                                        </div>
                                        <div className="supplier-actions">
                                            <div className="price">{supplier.price.toLocaleString()} $</div>
                                            <button className="select-btn">Sélectionner</button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="no-results">Il n'y a pas de fournisseurs disponibles avec ces critères.</p>
                            )}
                        </div>

                    </div>
                </div>
                <div className="section-buttons">
                    <button className="cancel">Annuler</button>
                    <button className="confirm">Confirmer</button>
                </div>
            </div>
        </>
    );

    return (
        <div className="supplier-form">
            <div className="supplier-sections">
                {renderSection('Fournisseurs internationaux', 'international')}
                {renderSection('Fournisseurs nationaux', 'national')}
                {renderSection('Fournisseurs concurrents', 'competitors')}
            </div>
        </div>
    );
};

export default FournisseurChoice;