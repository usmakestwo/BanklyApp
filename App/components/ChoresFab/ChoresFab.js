import React from 'react';
import { Fab, Icon, Button } from 'native-base';

const ChoresFab = props => (
  <Fab
    active
    direction="up"
    style={{ backgroundColor: '#5067FF' }}
    position="bottomRight"
    onPress={() => props.toggleFab()}>
    <Icon name="ios-add" />
  </Fab>
);

export default ChoresFab;
