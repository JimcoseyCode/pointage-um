import React from 'react';
import Layout from './components/Layout';
import Planning from './components/Planning';
import LogoutButton from '@/components/LogoutButton';
const PlanningPage = () => {
    return(
        <Layout>
            <Planning /> 
        </Layout>
    );
};

export default PlanningPage;