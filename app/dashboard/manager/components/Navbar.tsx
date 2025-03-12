//Le composant Navbar représente la barre de navigation à gauche.

/*
import React from 'react';
import styles from '../styles/Navbar.module.css';

const Navbar = () =>{
    return(
        <nav className={styles.navbar}>
            <div className={styles.logo}>Logo</div>
            <ul className={styles.menu}>
                <li>Planning</li>
                <li>Employés</li>
                <li>Rapports</li>
                <li>Paramètres</li>
            </ul>
        </nav>
    );
};

export default Navbar;
*/


import React from 'react';
import styles from '../styles/Navbar.module.css';
import {FaCalendarAlt, FaUsers, FaChartBar, FaCog} from 'react-icons/fa'; // Importation des icônes

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>Logo</div>
            <ul className={styles.menu}>
                <li><FaCalendarAlt className={styles.icon} /> Planning</li>
                <li><FaUsers className={styles.icon} /> Employés</li>
                <li><FaChartBar className={styles.icon} /> Rapports</li>
                <li><FaCog className={styles.icon} /> Paramètres</li>
            </ul>
        </nav>
    );
};
export default Navbar;






// app/components/Navbar.tsx
// import React from 'react';
// import Link from 'next/link';
// import { FaCalendarAlt, FaUsers, FaChartBar, FaCog, FaSignOutAlt } from 'react-icons/fa';
// import styles from '../styles/Navbar.module.css';

// const Navbar = () => {
//   return (
//     <nav className={styles.navbar}>
//       <div className={styles.logo}>Logo</div>
//       <ul className={styles.menu}>
//         <li>
//           <FaCalendarAlt className={styles.icon} />
//           <Link href="/planning">Planning</Link>
//         </li>
//         <li>
//           <FaUsers className={styles.icon} />
//           <Link href="/employes">Employés</Link>
//         </li>
//         <li>
//           <FaChartBar className={styles.icon} />
//           <Link href="/rapports">Rapports</Link>
//         </li>
//         <li>
//           <FaCog className={styles.icon} />
//           <Link href="/parametres">Paramètres</Link>
//         </li>
//         <li>
//           <FaSignOutAlt className={styles.icon} />
//           <Link href="/deconnexion">Déconnexion</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;