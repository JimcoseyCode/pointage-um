import React from 'react';
import Layout from './components/Layout';
import Planning from './components/Planning';

const PlanningPage = () => {
    return(
        <Layout>
            <Planning /> 
        </Layout>
    );
};

export default PlanningPage;


// import React from 'react';
// import Head from 'next/head'; // Import de Head
// import Layout from './components/Layout';
// import Planning from './components/Planning';

// const PlanningPage = () => {
//   return (
//     <Layout>
//       <Head>
//         <title>Planning - Gestion des employés</title>
//         <meta name="description" content="Gestion du planning des employés" />
//       </Head>
//       <Planning />
//     </Layout>
//   );
// };

// export default PlanningPage;  