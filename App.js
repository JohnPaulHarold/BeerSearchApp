/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import { AppStyles } from './App.styles';
import { Platform } from 'react-native';
import {
  Container,
  Header,
  Left,
  Right,
  Button,
  Icon,
  Body,
  Content,
  Text,
  Title,
  Footer,
  FooterTab
} from 'native-base';
import { SearchForm } from './components/SearchForm/SearchForm';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
});

export const App = () => {
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>Header</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        <Text>{instructions}</Text>
        <SearchForm />
      </Content>
      <Footer>
        <FooterTab>
          <Button full>
            <Text>Footer</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};
