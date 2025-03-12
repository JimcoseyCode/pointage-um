
"use client";

import React, { useState } from 'react';
import styles from '../styles/Planning.module.css';
import { FaPlay, FaChevronLeft, FaChevronRight } from 'react-icons/fa';


interface Employee {
  id: number;
  name: string;
  plannedTime: string; //changer 
  realTime: string;
  tasks: string;
  notes: string;
  details: string;
  lundi:string;
  mardi:string;
  mercredi:string;
  jeudi:string;
  vendredi:string;
  samedi:string;
  dimanche:string;
}

const Planning = () => {
  const [view, setView] = useState('jour');
  const handleViewChange = (newView: string) => {
        setView(newView);
  };

  const [employees, setEmployees] = useState<Employee[]>([
    { id: 1, name: 'EL HILALI HAMZA', plannedTime: '08:00 - 15:00', realTime: '', tasks: 'Chantier A, Peinture', notes: 'Pause de 30 minutes', details: 'faire le mur A', lundi: '08:00 - 15:00',mardi:'',mercredi:'',jeudi:'11:00 - 12:00',vendredi:'',samedi:'',dimanche:'' },
    { id: 2, name: 'RAPHAEL BOUCHRANI', plannedTime: '08:00 - 12:00 / 15:00 - 18:00', realTime: '', tasks: 'Chantier B, Logistique', notes: 'Retard de 10 minutes', details: 'recupere le matériel ', lundi: '08:00 - 12:00 / 15:00 - 18:00',mardi:'',mercredi:'',jeudi:'',vendredi:'',samedi:'16:00 - 19:00',dimanche:''},
   
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [editCell, setEditCell] = useState<{ employeeId: number; cellKey: string } | null>(null);
  const [date, setDate] = useState(new Date());
  const [timers, setTimers] = useState<{ [employeeId: number]: { startTime: number; intervalId: NodeJS.Timeout } }>({});
  const [newEmployee, setNewEmployee] = useState<Employee | null>(null);
  const [editingValue, setEditingValue] = useState('');

  const handlePlay = (employeeId: number) => {
    setTimers(prevTimers => {
      if (prevTimers[employeeId]) {
        clearInterval(prevTimers[employeeId].intervalId);
        const newTimers = { ...prevTimers };
        delete newTimers[employeeId];
        return newTimers;
      } else {
        const startTime = Date.now();
        const intervalId = setInterval(() => {
          const elapsedMinutes = Math.round((Date.now() - startTime) / 60000);
          setEmployees(prevEmployees => prevEmployees.map(emp => {
            if (emp.id === employeeId) {
              return { ...emp, realTime: `${elapsedMinutes} min` };
            }
            return emp;
          }));
        }, 60000);
        return { ...prevTimers, [employeeId]: { startTime, intervalId } };
      }
    });
  };

  const handleAddEmployee = () => {
    if (newEmployee) {
      setEmployees(prevEmployees => [...prevEmployees, { ...newEmployee, id: Date.now() }]);
      setNewEmployee(null);
    }
  };

  const handleCellClick = (employeeId: number, cellKey: string, value: string) => {
    setEditCell({ employeeId, cellKey });
    setEditingValue(value);
  };

  const handleCellChange = (employeeId: number, cellKey: string, value: string) => {
    setEmployees(prevEmployees => prevEmployees.map(emp => {
      if (emp.id === employeeId) {
        return { ...emp, [cellKey]: value };
      }
      return emp;
    }));
    setEditCell(null);
    setEditingValue('');
  };

 

  const handleKeyDown = (e: React.KeyboardEvent, employeeId: number, cellKey: string) => {
    if (e.key === 'Enter') {
      handleCellChange(employeeId, cellKey, editingValue);
    }
  };

  const filteredEmployees = employees.filter(emp => emp.name.toLowerCase().includes(searchQuery.toLowerCase()));

  const renderDayView = () => (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Employé</th>
          <th>Horaire prévu</th>
          <th>Horaire réel</th>
          <th>Tâches assignées</th>
          <th>Remarque</th>
          <th>Plus de détails</th>
        </tr>
      </thead>
      <tbody>
        {filteredEmployees.map(emp => (
          <tr key={emp.id} className={timers[emp.id] ? styles.employeePresent : ''}>
            <td>
              {emp.name} <button className={styles.playButton} onClick={() => handlePlay(emp.id)}><FaPlay /></button>
            </td>
            <td onClick={() => handleCellClick(emp.id, 'plannedTime', emp.plannedTime)}>
              {editCell?.employeeId === emp.id && editCell?.cellKey === 'plannedTime' ? (
                <input type="text" value={editingValue} onChange={e => setEditingValue(e.target.value)} onKeyDown={e => handleKeyDown(e, emp.id, 'plannedTime')} />
              ) : (
                emp.plannedTime
              )}
            </td>
            <td onClick={() => handleCellClick(emp.id, 'realTime', emp.realTime)}>
              {editCell?.employeeId === emp.id && editCell?.cellKey === 'realTime' ? (
                <input type="text" value={editingValue} onChange={e => setEditingValue(e.target.value)} onKeyDown={e => handleKeyDown(e, emp.id, 'realTime')} />
              ) : (
                <span className={timers[emp.id] ? styles.runningTimer : ''}>{emp.realTime}</span>
              )}
            </td>
            <td onClick={() => handleCellClick(emp.id, 'tasks', emp.tasks)}>
              {editCell?.employeeId === emp.id && editCell?.cellKey === 'tasks' ? (
                <input type="text" value={editingValue} onChange={e => setEditingValue(e.target.value)} onKeyDown={e => handleKeyDown(e, emp.id, 'tasks')} />
              ) : (
                emp.tasks
              )}
            </td>
            <td onClick={() => handleCellClick(emp.id, 'notes', emp.notes)}>
              {editCell?.employeeId === emp.id && editCell?.cellKey === 'notes' ? (
                <input type="text" value={editingValue} onChange={e => setEditingValue(e.target.value)} onKeyDown={e => handleKeyDown(e, emp.id, 'notes')} />
              ) : (
                emp.notes
              )}
            </td>
            <td onClick={() => handleCellClick(emp.id, 'details', emp.details)}>
              {editCell?.employeeId === emp.id && editCell?.cellKey === 'details' ? (
                <input type="text" value={editingValue} onChange={e => setEditingValue(e.target.value)} onKeyDown={e => handleKeyDown(e, emp.id, 'details')} />
              ) : (
                emp.details
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );


  const renderWeekView = () => (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Employé</th>
          <th>Lun</th>
          <th>Mar</th>
          <th>Mer</th>
          <th>Jeu</th>
          <th>Ven</th>
          <th>sam</th>
          <th>dim</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(emp => (
          <tr key={emp.id}>
            <td>{emp.name}</td>
            <td onClick={() => handleCellClick(emp.id, 'lundi', emp.lundi)}>
              {editCell?.employeeId === emp.id && editCell?.cellKey === 'lundi' ? (
                <input
                  type="text"
                  value={editingValue}
                  onChange={e => setEditingValue(e.target.value)}
                  onKeyDown={e => handleKeyDown(e, emp.id, 'lundi')}
                />
              ) : (
                emp.lundi
              )}
            </td>
            <td onClick={() => handleCellClick(emp.id,'mardi', emp.mardi)}>
              {editCell?.employeeId === emp.id && editCell?.cellKey === 'mardi' ? (
                <input type="text" value={editingValue} onChange={e => setEditingValue(e.target.value)} onKeyDown={e => handleKeyDown(e, emp.id, 'mardi')} />
              ) : (
                emp.mardi
              )}
            </td>
            <td onClick={() => handleCellClick(emp.id, 'mercredi', emp.mercredi)}>
              {editCell?.employeeId === emp.id && editCell?.cellKey === 'mercredi' ? (
                <input type="text" value={editingValue} onChange={e => setEditingValue(e.target.value)} onKeyDown={e => handleKeyDown(e, emp.id, 'mercredi')} />
              ) : (
                emp.mercredi
              )}
            </td>
            <td onClick={() => handleCellClick(emp.id, 'jeudi', emp.jeudi)}>
              {editCell?.employeeId === emp.id && editCell?.cellKey === 'jeudi' ? (
                <input type="text" value={editingValue} onChange={e => setEditingValue(e.target.value)} onKeyDown={e => handleKeyDown(e, emp.id, 'jeudi')} />
              ) : (
                emp.jeudi
              )}
            </td>
            <td onClick={() => handleCellClick(emp.id, 'vendredi', emp.vendredi)}>
              {editCell?.employeeId === emp.id && editCell?.cellKey === 'vendredi' ? (
                <input type="text" value={editingValue} onChange={e => setEditingValue(e.target.value)} onKeyDown={e => handleKeyDown(e, emp.id, 'vendredi')} />
              ) : (
                emp.vendredi
              )}
            </td>
            <td onClick={() => handleCellClick(emp.id, 'samedi', emp.samedi)}>
              {editCell?.employeeId === emp.id && editCell?.cellKey === 'samedi' ? (
                <input type="text" value={editingValue} onChange={e => setEditingValue(e.target.value)} onKeyDown={e => handleKeyDown(e, emp.id, 'samedi')} />
              ) : (
                emp.samedi
              )}
            </td>
            <td onClick={() => handleCellClick(emp.id, 'dimanche', emp.dimanche)}>
              {editCell?.employeeId === emp.id && editCell?.cellKey === 'dimanche' ? (
                <input type="text" value={editingValue} onChange={e => setEditingValue(e.target.value)} onKeyDown={e => handleKeyDown(e, emp.id, 'dimanche')} />
              ) : (
                emp.dimanche
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div className={styles.planning}>
      <div className={styles.topSection}>
        <input type="text" placeholder="Rechercher un employé" className={styles.searchInput} value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
        <button className={styles.addEmployeeButton} onClick={() => setNewEmployee({ id: 0, name: '', plannedTime: '', realTime: '', tasks: '', notes: '', details: '', lundi: '', mardi: '', mercredi: '', jeudi: '', vendredi: '', samedi: '', dimanche: '' })}>Ajouter un employé</button>
        {newEmployee && (
          <div className={styles.buttonGroup}>
            <input type="text" placeholder="Nom" value={newEmployee.name} onChange={e => setNewEmployee({ ...newEmployee, name: e.target.value })} />
            <button onClick={handleAddEmployee}>Enregistrer</button>
            <button onClick={() => setNewEmployee(null)}>Annuler</button>
          </div>
        )}
        <div className={styles.dateNavigation}>
          <button className={styles.dateNavButton} onClick={() => setDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth(), prevDate.getDate() - 1))}><FaChevronLeft /></button>
          <span>{date.toLocaleDateString()}</span>
          <button className={styles.dateNavButton} onClick={() => setDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth(), prevDate.getDate() + 1))}><FaChevronRight /></button>
        </div>
      </div>
      <div className={styles.header}>
        <button className={styles.viewButton} onClick={() => handleViewChange('jour')}>Jour</button>
        <button className={styles.viewButton} onClick={() => handleViewChange('semaine')}>Semaine</button>
      </div>
      {view === 'jour' ? renderDayView() : renderWeekView()}
    </div>
  );
};

export default Planning;