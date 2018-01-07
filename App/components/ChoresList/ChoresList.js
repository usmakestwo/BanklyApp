import React from 'react';
import { Body, List, ListItem, Text, CheckBox, Right } from 'native-base';

/**
 * Render chore list
 * @param {object} props - Chores
 */
const ChoresList = props => (
  <List style={{ height: 420 }}>
    <ListItem itemDivider>
      <Text>Chores</Text>
    </ListItem>
    {props.chores.map((chore) => (
      <ListItem key={chore.id}>
        <CheckBox
          checked={chore.completed}
          onPress={() => props.onPress(chore.id)}
        />
        <Body>
          <Text>{chore.name}</Text>
          <Text note>${chore.amount}</Text>
        </Body>
        <Right>
          <Text note>{chore.recurrent}</Text>
        </Right>
      </ListItem>
    ))}
  </List>
);

export default ChoresList;
