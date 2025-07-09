import React, { useState } from 'react';
import './AssuranceLogiciel.css';
import yellowExclamation from '../assets/yellowExclamation.png';
import incendieImg from '../assets/incendie.png';
import inondationImg from '../assets/inondation.png';
import vandalismeImg from '../assets/vandalisme.png';
import accidentImg from '../assets/accident.png';
import maladieImg from '../assets/maladie.png';
import rhImg from '../assets/rh.png';
import prevoyanceImg from '../assets/prevoyance.png';
import retraiteImg from '../assets/retraite.png';
import crmImg from '../assets/crm.png';
import commercialImg from '../assets/commercial.png';
import productionImg from '../assets/production.png';
import paieImg from '../assets/paie.png';
import comptabiliteImg from '../assets/comptabilite.png';
import wallet from '../assets/wallet.png';

const AssuranceLogiciels = () => {
    const [selectedItems, setSelectedItems] = useState({
        assurances: [],
        logiciels: []
    });
    const [activeTab, setActiveTab] = useState('assurance');

    const assurancesData = {
        locaux: [
            { id: 'incendie', name: 'Incendie', image: incendieImg, cost: 1000 },
            { id: 'inondation', name: 'Inondation', image: inondationImg, cost: 1000 },
            { id: 'vandalisme', name: 'Vandalisme', image: vandalismeImg, cost: 1000 }
        ],
        responsabilite: [
            { id: 'accidents', name: 'Accidents du travail', image: accidentImg, cost: 1000 },
            { id: 'maladies', name: 'Maladies professionnelles', image: maladieImg, cost: 1000 }
        ],
        rh: [
            { id: 'assurance-rh', name: 'Assurance des Ressources Humaines', image: rhImg, cost: 1000 },
            { id: 'prevoyance', name: 'Assurance prévoyance', image: prevoyanceImg, cost: 1000 },
            { id: 'retraite', name: 'Assurance retraite', image: retraiteImg, cost: 1000 }
        ]
    };

    const logicielsData = [
        { id: 'crm', name: 'CRM', image: crmImg, cost: 1000 },
        { id: 'commercial', name: 'Commercial', image: commercialImg, cost: 1000 },
        { id: 'stock', name: 'Gestion des stocks', image: incendieImg, cost: 1000 },
        { id: 'production', name: 'Production', image: productionImg, cost: 1000 },
        { id: 'rh', name: 'RH', image: rhImg, cost: 1000 },
        { id: 'paie', name: 'Paie', image: paieImg, cost: 1000 },
        { id: 'comptabilite', name: 'Comptabilité', image: comptabiliteImg, cost: 1000 }
    ];

    const toggleSelection = (type, id) => {
        setSelectedItems(prev => {
            const currentArray = [...prev[type]];
            const index = currentArray.indexOf(id);

            if (index === -1) {
                currentArray.push(id);
            } else {
                currentArray.splice(index, 1);
            }

            return { ...prev, [type]: currentArray };
        });
    };

    const calculateTotal = () => {
        const assurancesTotal = selectedItems.assurances.length * 1000;
        const logicielsTotal = selectedItems.logiciels.length * 1000;
        return assurancesTotal + logicielsTotal;
    };

    return (
        <div className="decisions-app">
            <header>
                <h1>Vos décisions : Assurance et logiciels</h1>
            </header>

            <nav className="tabs">
                <button
                    className={`tab ${activeTab === 'assurance' ? 'active' : ''}`}
                    onClick={() => setActiveTab('assurance')}
                >
                    Choix de contrat d'assurance
                </button>
                <button
                    className={`tab ${activeTab === 'logiciel' ? 'active' : ''}`}
                    onClick={() => setActiveTab('logiciel')}
                >
                    Choix des logiciels
                </button>
            </nav>

            <main>
                {activeTab === 'assurance' ? (
                    <>
                        <section className="category">
                            <h2>Assurance des locaux <span><img src={yellowExclamation} alt="" /></span></h2>
                            <div className="options-grid">
                                {assurancesData.locaux.map(item => (
                                    <OptionCard
                                        key={item.id}
                                        item={item}
                                        selected={selectedItems.assurances.includes(item.id)}
                                        onToggle={() => toggleSelection('assurances', item.id)}
                                    />
                                ))}
                            </div>
                        </section>

                        <section className="category">
                            <h2>Assurance Responsabilité Civile <span><img src={yellowExclamation} alt="" /></span></h2>
                            <div className="options-grid">
                                {assurancesData.responsabilite.map(item => (
                                    <OptionCard
                                        key={item.id}
                                        item={item}
                                        selected={selectedItems.assurances.includes(item.id)}
                                        onToggle={() => toggleSelection('assurances', item.id)}
                                    />
                                ))}
                            </div>
                        </section>

                        <section className="category">
                            <h2>Assurance des Ressources Humaines <span><img src={yellowExclamation} alt="" /></span></h2>
                            <div className="options-grid">
                                {assurancesData.rh.map(item => (
                                    <OptionCard
                                        key={item.id}
                                        item={item}
                                        selected={selectedItems.assurances.includes(item.id)}
                                        onToggle={() => toggleSelection('assurances', item.id)}
                                    />
                                ))}
                            </div>
                        </section>
                    </>
                ) : (
                    <section className="category">
                        <h2>Logiciels par métier <span><img src={yellowExclamation} alt="" /></span></h2>
                        <div className="options-grid">
                            {logicielsData.map(item => (
                                <OptionCard
                                    key={item.id}
                                    item={item}
                                    selected={selectedItems.logiciels.includes(item.id)}
                                    onToggle={() => toggleSelection('logiciels', item.id)}
                                />
                            ))}
                        </div>
                    </section>
                )}
            </main>

            <footer className="total-section">
                <h2>Coût Total <span><img src={yellowExclamation} alt="" /></span></h2>
                <div className="total-amount">
                    {calculateTotal()}
                    <img src={wallet} alt="icon" />
                </div>
                <div className="action-buttons">
                    <button className="btn cancel">Annuler</button>
                    <button className="btn confirm">Confirmer</button>
                </div>
            </footer>

        </div>
    );
};

const OptionCard = ({ item, selected, onToggle }) => (
    <div className={`option-card ${selected ? 'selected' : ''}`} onClick={onToggle}>
        <div className="option-image-container">
            <img src={item.image} alt={item.name} className="option-image" />
        </div>
        <div className="option-content">
            <h3 className="option-name">{item.name}</h3>
            <p className="option-cost">Coût : {item.cost} BA</p>
        </div>
        <input
            type="checkbox"
            checked={selected}
            onChange={onToggle}
            className="option-checkbox"
        />
    </div>
);

export default AssuranceLogiciels;