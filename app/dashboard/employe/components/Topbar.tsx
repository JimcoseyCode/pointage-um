'use client'

import { User, LogOut, Settings, ChevronDown } from 'lucide-react'
import { useSession, signOut } from 'next-auth/react'
import { useState, useRef, useEffect } from 'react'
import styles from '../styles/Topbar.module.css'
import { Badge } from "@/components/ui/badge"
export default function Topbar() {
  const { data: session } = useSession()
  const user = session?.user
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  // Fermer le menu si on clique en dehors
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleLogout = async () => {
    await signOut({ callbackUrl: '/auth' })
  }

  return (
    <header className={styles.topbar}>
      <div className={styles.topbarContent}>
        <h1 className='styles.title'>Bienvenue <Badge >{session?.user?.name}</Badge></h1>
        <div className={styles.userInfo}>
          <span className={styles.userRole}>EMPLOYÉ</span>
          <div className={styles.userAvatarContainer} ref={menuRef}>
            <div 
              className={styles.userAvatar} 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <User className={styles.userIcon} />
              <ChevronDown className={styles.chevronIcon} size={14} />
            </div>
            
            {isMenuOpen && (
              <div className={styles.userMenu}>
                <div className={styles.userMenuHeader}>
                  <p className={styles.userName}>{user?.name || 'Utilisateur'}</p>
                  <p className={styles.userEmail}>{user?.email || 'email@exemple.com'}</p>
                </div>
                <div className={styles.userMenuDivider}></div>
                <ul className={styles.userMenuList}>
                  <li className={styles.userMenuItem}>
                    <Settings size={16} />
                    <span>Paramètres</span>
                  </li>
                  <li 
                    className={`${styles.userMenuItem} ${styles.logoutItem}`}
                    onClick={handleLogout}
                  >
                    <LogOut size={16} />
                    <span>Déconnexion</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}