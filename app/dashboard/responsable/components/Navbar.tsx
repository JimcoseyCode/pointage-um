import React from 'react';
import styles from '../styles/Navbar.module.css';
import {FaCalendarAlt, FaUsers, FaChartBar, FaCog} from 'react-icons/fa'; // Importation des icônes

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>Logo</div>
            <ul className={styles.menu}>
                <li><FaCalendarAlt className={styles.icon} /> Permissions</li>
                <li><FaUsers className={styles.icon} /> Planning</li>
            </ul>
        </nav>
    );
};
export default Navbar;
