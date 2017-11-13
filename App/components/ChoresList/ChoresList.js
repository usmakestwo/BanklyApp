import React from 'react';
import { Body, List, ListItem, Text, CheckBox, Right } from 'native-base';

const ChoresList = () => (
  <List style={{ height: 420 }}>
    <ListItem itemDivider>
      <Text>Chores</Text>
    </ListItem>
    <ListItem>
        <CheckBox checked={false} />
        <Body>
          <Text>Wash Car</Text>
          <Text note>$10</Text>
        </Body>
        <Right>
          <Text note>Weekly</Text>
        </Right>
    </ListItem>
    <ListItem>
        <CheckBox checked={false} />
        <Body>
          <Text>Wash Car</Text>
          <Text note>$10</Text>
        </Body>
        <Right>
          <Text note>Monthly</Text>
        </Right>
    </ListItem>
    <ListItem>
        <CheckBox checked={false} />
        <Body>
          <Text>Wash Car</Text>
          <Text note>$10</Text>
        </Body>
        <Right>
          <Text note>Weekly</Text>
        </Right>
    </ListItem>
    <ListItem>
        <CheckBox checked={false} />
        <Body>
          <Text>Wash Car</Text>
          <Text note>$10</Text>
        </Body>
        <Right>
          <Text note>Daily</Text>
        </Right>
    </ListItem>
  </List>
);

export default ChoresList;
