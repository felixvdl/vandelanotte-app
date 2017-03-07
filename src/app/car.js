import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableHighlight,
  AsyncStorage,
  Text,
  View,
  Image,
  Linking
} from 'react-native';
import { SocialIcon } from 'react-native-elements'


export class Car extends Component {

  navigate(routeName) {
    this.props.navigator.push({
      name: routeName
    });
  }
  render() {
    return (
      <Text>hello</Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    paddingTop: 150
  },
  logo: {
    width: 50,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    top: 50
  },
  buttonLogin: {
    height: 30,
    backgroundColor: '#002445',
    width: 350,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3

  },
  buttonRegister: {
    height: 30,
    backgroundColor: '#002445',
    width: 350,
    alignItems: 'center',
    marginTop: 180,
    justifyContent: 'center',
    borderRadius: 3
  },
  buttonText: {
    fontSize: 14,
    color: 'white',
    alignSelf: 'center'
  },
  description: {
    fontSize:12,
    color: '#a1b2ce',
    marginBottom: 20
  },
  social: {
    height: 40,
    width: 40,
    top: 70
  }
});
