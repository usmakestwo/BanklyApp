import React from 'react';
import { Text } from 'native-base';
import Layout from '../../components/Layout/Layout';
import ChoresList from '../../components/ChoresList/ChoresList';
import mockChores from '../../mock/chores.json';

const ChoresScreen = () => (
  <Layout>
    <Text>Chores Screen</Text>
    <ChoresList />
  </Layout>
);

export default ChoresScreen;