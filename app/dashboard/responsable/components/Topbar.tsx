import React from 'react';
import styles from '../styles/Topbar.module.css';

const Topbar = () => {
  const currentDate = new Date();
  const options: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    // hour: 'numeric',
    // minute: 'numeric',
    // hour12: true,
  };
  
  const formattedDate = currentDate.toLocaleDateString('en-US', options);

  return (
    <div className={styles.topbar}>
      <div className={styles.title}>Responsable</div>
      <div className={styles.rightSection}>
        <div className={styles.date}>{formattedDate}</div>
        <div className={styles.profile}>
          <img
            src="/profile_h.png"
            alt="Profile"
            className={styles.profileImage}
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;