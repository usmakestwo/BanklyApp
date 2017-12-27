import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getChoreService } from '../../actions/chore';
import { Col, Row } from "react-native-easy-grid";
import Layout from '../../components/Layout/Layout';
import ChoresList from '../../components/ChoresList/ChoresList';
import ChoresFab from '../../components/ChoresFab/ChoresFab';
import ChoresModal from '../../components/ChoresModal/ChoresModal';

/**
 * Chore Route
 */
class ChoresScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this.toggleFab = this.toggleFab.bind(this);
  }

  componentWillMount() {
    this.props.getChoreService(1);
  }
  
  toggleFab() {
    this.setState({ active: !this.state.active });
  }
  render() {
    return (
      <Layout>
        <ChoresList chores={this.props.chores} />
        <Row style={{ height: 100 }}>
          <ChoresFab toggleFab={this.toggleFab} />
          <ChoresModal active={this.state.active} toggleFab={this.toggleFab}/>
        </Row>
      </Layout>
    )
  }
};

const mapState = state => ({
  chores: state.chore.chores,
});

const mapDispatchToProps = dispatch => ({
  getChoreService: (id) => dispatch(getChoreService(id)),
});

export default connect(mapState, mapDispatchToProps)(ChoresScreen);
