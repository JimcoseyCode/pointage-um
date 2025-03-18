import React from 'react';
import Layout from './components/Layout';
import ViewSettingsComponent from './components/ViewSettings'; // ✅ Renommé pour éviter le conflit

const ViewSettingsPage = () => { 
    return(
        <Layout>
            <ViewSettingsComponent /> {/* ✅ Utilisation correcte */}
        </Layout>
    );
};

export default ViewSettingsPage; 
