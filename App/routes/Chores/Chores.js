import React, { Component } from 'react';
import { Text } from 'native-base';
import Layout from '../../components/Layout/Layout';
import ChoresList from '../../components/ChoresList/ChoresList';
import ChoresFab from '../../components/ChoresFab/ChoresFab';
import mockChores from '../../mock/chores.json';

class ChoresScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this.toggleFab = this.toggleFab.bind(this);
  }
  
  toggleFab() {
    this.setState({ active: !this.state.active });
  }
  render() {
    return (
      <Layout>
        <ChoresList />
        <ChoresFab active={this.state.active} toggleFab={this.toggleFab} />
      </Layout>
    )
  }
};

export default ChoresScreen;