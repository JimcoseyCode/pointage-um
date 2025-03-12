// app/components/Layout.tsx

//Le composant Layout sera utilisé pour encapsuler la structure général de l'application(barre de navigation,barre supérieur,et contenu principal).

import React from 'react';
import Navbar from './Navbar';
import Topbar from './Topbar';
import styles from '../styles/Layout.module.css';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>
        <Topbar />
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
};

export default Layout;





// import React from 'react';
// import Navbar from './Navbar';
// import Topbar from './Topbar';
// import styles from '../styles/Layout.module.css';

// // ça c'est pour pouvoir rentrée un children c'est à dire un composant dans le composant principale exemple: <Layout><Planning/></Layout> qui elle même la prend et la met dans le main ici en bas.
// interface Props {
//     children: React.ReactNode;
//   }

// const Layout: React.FC<Props> = ({ children }) => {
//     return(
//         <div className={styles.contaiers}>
//             <Navbar />
//             <div className={styles.content}>
//             <Topbar />
//                 <main>{children}</main>
//             </div>
//         </div>
//     )
// }
// export default Layout;
