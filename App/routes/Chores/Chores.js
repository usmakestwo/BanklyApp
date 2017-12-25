import React, { Component } from 'react';
import { Col, Row } from "react-native-easy-grid";
import Layout from '../../components/Layout/Layout';
import ChoresList from '../../components/ChoresList/ChoresList';
import ChoresFab from '../../components/ChoresFab/ChoresFab';
import ChoresModal from '../../components/ChoresModal/ChoresModal';
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
        <ChoresList chores={mockChores} />
        <Row style={{ height: 100 }}>
          <ChoresFab toggleFab={this.toggleFab} />
          <ChoresModal active={this.state.active} toggleFab={this.toggleFab}/>
        </Row>
      </Layout>
    )
  }
};

export default ChoresScreen;