"use client"
import { useState } from "react";
import styles from "../styles/ViewSettings.module.css"; 

// const ViewSettings: React.FC = () => {
  
// };

// export default ViewSettings;



import React from 'react'

export default function ViewSettings() {
  const [selectedRole, setSelectedRole] = useState<string>("manager");
  const [hourlyRate, setHourlyRate] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleHourlyRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (parseFloat(value) < 9.4) {
      setError("Le taux horaire ne peut pas être inférieur à 9.4");
    } else {
      setError("");
    }
    setHourlyRate(value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.gridContainer}>
        <div className={styles.card}>
          <h2>Qui soumet la déclaration de présence par première ?</h2>
          <div>
            <label className={styles.radioContainer}>
              <input
                type="radio"
                name="declaration"
                value="manager"
                checked={selectedRole === "manager"}
                onChange={() => setSelectedRole("manager")}
              />
              <div>
                <span>Manager</span>
                <p>
                  Le Manager est responsable de la soumission des registres de présence de tous les employés par premier.
                </p>
              </div>
            </label>

            <label className={styles.radioContainer}>
              <input
                type="radio"
                name="declaration"
                value="employee"
                checked={selectedRole === "employee"}
                onChange={() => setSelectedRole("employee")}
              />
              <div>
                <span>Employé</span>
                <p>
                  Les employés déclarent leur arrivée et attendent la validation du manager.
                </p>
              </div>
            </label>
          </div>
        </div>

        <div className={styles.card}>
          <h2>Taux horaire :</h2>
          <input
            type="number"
            placeholder="Valeur"
            className={styles.inputField}
            value={hourlyRate}
            onChange={handleHourlyRateChange}
            min="9.4"
          />
          {error && <p className={styles.errorText}>{error}</p>}
          <p className={styles.infoText}>
            Le salaire horaire minimum autorisé est de <strong>9.4</strong>. Saisissez une valeur pour définir le taux standard pour les employés.
          </p>
        </div>
      </div>
    </div>
  );
}
