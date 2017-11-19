import React from 'react';
import { Body, List, ListItem, Text, CheckBox, Right } from 'native-base';
import chores from '../../mock/chores.json';

const ChoresList = () => (
  <List style={{ height: 420 }}>
    <ListItem itemDivider>
      <Text>Chores</Text>
    </ListItem>
    {chores.map((chore) => (
      <ListItem key={chore.id}>
        <CheckBox checked={false} />
        <Body>
          <Text>{chore.name}</Text>
          <Text note>${chore.amount}</Text>
        </Body>
        <Right>
          <Text note>{chore.due}</Text>
        </Right>
      </ListItem>
    ))}
  </List>
);

export default ChoresList;
