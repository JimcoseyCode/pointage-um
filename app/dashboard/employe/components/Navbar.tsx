// components/Navbar.tsx
import { Calendar, FileText, HelpCircle, Settings } from "lucide-react";
import styles from "../styles/Navbar.module.css";

interface NavbarProps {
  onNavItemClick: (view: string) => void;
}

export default function Navbar({ onNavItemClick }: NavbarProps) {
  return (
    <aside className={styles.navbar}>
      <div className={styles.navItems}>
        <div className={styles.navItem} onClick={() => onNavItemClick("planning")}>
          <Calendar className={styles.navIcon} />
        </div>
        <div className={styles.navItem} onClick={() => onNavItemClick("documents")}>
          <FileText className={styles.navIcon} />
        </div>
        <div className={styles.navItem} onClick={() => onNavItemClick("help")}>
          <HelpCircle className={styles.navIcon} />
        </div>
        <div className={styles.navItem} onClick={() => onNavItemClick("settings")}>
          <Settings className={styles.navIcon} />
        </div>
      </div>
    </aside>
  );
}