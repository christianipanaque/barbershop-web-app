import React, { useState } from 'react';
import mockHaircuts from '../testing/mockHaircuts.json'; // Adjust the path as necessary
import styles from './HaircutSelectionComponent.module.css'


const HaircutSelectionComponent = () => {
    const [selectedHaircut, setSelectedHaircut] = useState(null);

    // Function to handle haircut selection
    const handleHaircutSelect = (haircut) => {
        setSelectedHaircut(haircut.id);
    };

    return (
        <div className={styles["haircut-selection-component"]}>
            <h2>Select a Haircut</h2>
            <div className={styles["haircut-options"]}>
                {mockHaircuts.map((haircut) => (
                    <div
                        key={haircut.id}
                        className={`${styles["haircut-option"]} ${selectedHaircut === haircut.id ? styles.selected : ''}`}
                        onClick={() => handleHaircutSelect(haircut)}
                    >
                        <img src={haircut.image} alt={haircut.name} style={{ width: '100px', height: '100px' }} />
                        <p>{haircut.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HaircutSelectionComponent;
