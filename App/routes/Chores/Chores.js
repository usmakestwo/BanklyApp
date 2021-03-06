import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getChoreService,
  choreUpdateStatus
} from '../../actions/chore';
import { Col, Row } from "react-native-easy-grid";
import Layout from '../../components/Layout/Layout';
import ChoresList from '../../components/ChoresList/ChoresList';
import ChoresFab from '../../components/ChoresFab/ChoresFab';
import ChoresModal from '../../components/ChoresModal/ChoresModal';

/**
 * Chore Screen
 */
class ChoresScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    /**
     * Bind event handlers to this
     */
    this.toggleFab = this.toggleFab.bind(this);
    this.toggleChore = this.toggleChore.bind(this);
  }

  /**
   * Lifecycle Hook
   */
  componentWillMount() {
    // Calls Chores service on mount
    this.props.getChoreService(1);
  }
  
  toggleFab() {
    this.setState({ active: !this.state.active });
  }

  /**
   * Toggles checkbox of chore list
   * @param id - chore id
   */
  toggleChore(id) {
    this.props.choreUpdateStatus(id);
  }
  render() {
    return (
      <Layout>
        <ChoresList
          chores={this.props.chores}
          onPress={this.toggleChore}
          />
        <Row style={{ height: 100 }}>
          <ChoresFab
            toggleFab={this.toggleFab}
          />
          <ChoresModal
            active={this.state.active}
            toggleFab={this.toggleFab}
          />
        </Row>
      </Layout>
    )
  }
};

/**
 * Map state to component
 * @param {object} state - redux state
 */
const mapState = state => ({
  chores: state.chore.chores,
});

/**
 * Map action to component function
 * @param {function} dispatch - redux dispatcher
 */
const mapDispatchToProps = dispatch => ({
  getChoreService: (id) => dispatch(getChoreService(id)),
  choreUpdateStatus: (id) => dispatch(choreUpdateStatus(id)),
});

export default connect(mapState, mapDispatchToProps)(ChoresScreen);
