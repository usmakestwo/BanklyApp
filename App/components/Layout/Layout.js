import React, { Component } from 'react';
import { Container, Header, Title, Content, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Grid } from "react-native-easy-grid";

import PropTypes from 'prop-types';
import Balance from '../Balance/Balance';

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Bankly</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Balance amount={100} />
          <Grid>
            {this.props.children}
          </Grid>
        </Content>
      </Container>
    );
  }
}

export default Layout;
