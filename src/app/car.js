import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableHighlight,
  AsyncStorage,
  Text,
  View,
  Image,
  TextInput,
  Picker
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
      <View style={styles.container}>
          <Text style={styles.heading}>
            Join us now!
          </Text>
           <TextInput
            onChangeText={ (text)=> this.setState({email: text}) }
            style={styles.input} placeholder="List price (incl. the VAT actually paid)"
            clearButtonMode= 'while-editing'>
          </TextInput>

  {/*
          <TextInput
            onChangeText={ (text)=> this.setState({name: text}) }
            style={styles.input} placeholder="Name">
          </TextInput> */}

          <TextInput
            onChangeText={ (text)=> this.setState({password: text}) }
            style={styles.input}
            placeholder="Diesel or Petrol"
            secureTextEntry={true}
            clearButtonMode= 'while-editing'>
          </TextInput>

          <TextInput
            onChangeText={ (text)=> this.setState({password_confirmation: text}) }
            style={styles.input}
            placeholder="CO² emission (g/km)"
            secureTextEntry={true}
            clearButtonMode= 'while-editing'>
          </TextInput>

          <TouchableHighlight  style={styles.button}>
            <Text style={styles.buttonText}>
              calculate
            </Text>
          </TouchableHighlight>
        </View>    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    paddingTop: 120
  },
  input: {
    height: 50,
    marginTop: 10,
    padding: 4,
    fontSize: 18,
    borderWidth: 0.5,
    borderColor: '#e2e6e9'
  },
  button: {
    height: 50,
    backgroundColor: '#002445',
    alignSelf: 'stretch',
    marginTop: 10,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 22,
    color: '#FFF',
    alignSelf: 'center'
  },
  heading: {
    fontSize: 30,
    color: 'white'
  },
  error: {
    color: 'red',
    paddingTop: 10
  },
  loader: {
    marginTop: 20
  }
});
