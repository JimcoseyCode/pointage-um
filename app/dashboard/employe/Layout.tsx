// components/Layout.tsx
import type React from "react";
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";
import styles from "./styles/Layout.module.css";


interface LayoutProps {
  children: React.ReactNode;
  onNavItemClick?: (view: string) => void; // Ajoutez cette ligne
}
export default function Layout({ children, onNavItemClick }: LayoutProps) {
  return (
    <div className={styles.layout}>
      <Navbar onNavItemClick={onNavItemClick}  />
      <div className={styles.mainContent}>
        <Topbar />
        <main className={styles.content}>{children}</main>
      </div>
    </div>
  );
}