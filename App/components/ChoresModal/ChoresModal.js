import React from 'react';
import { Modal } from 'react-native';
import {
  Button,
  Text,
  Card,
  CardItem,
  Form,
  Item,
  Label,
  Input } from 'native-base';
import { Col } from "react-native-easy-grid";

const ChoresModal = props => (
  <Modal
    animationType="slide"
    transparent={false}
    visible={props.active}
  >
    <Card
      style={{
        marginTop: 100,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 100,
      }}>
      <CardItem header>
        <Text>Add Chore</Text>
      </CardItem>
      <Form>
        <Item floatingLabel>
          <Label>Chore Name</Label>
          <Input />
        </Item>
        <Item floatingLabel>
          <Label>Repeat</Label>
          <Input />
        </Item>
        <Item floatingLabel last>
          <Label>Amount</Label>
          <Input />
        </Item>
      </Form>
      <Button>
        <Text>Save</Text>
      </Button>
      <Button onPress={() => { props.toggleFab() }}>
        <Text>Close</Text>
      </Button>
    </Card>
  </Modal>
);

export default ChoresModal;
