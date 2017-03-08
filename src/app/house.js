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
import { SocialIcon, Icon, FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'



export class House extends Component {

  navigate(routeName) {
    this.props.navigator.push({
      name: routeName
    });
  }
  render() {
    return (
      <View>
        <View style={styles.header}>
          <View style={styles.return}>
            <Icon
              onPress={ this.navigate.bind(this, 'home') }
              name='keyboard-arrow-left'
              color= 'green'
              size= {40}
            />
          </View>
          <Image
            source={require('../img/icon.png')}
            style= {{width: 40, height: 40}}
          />
        </View>
        <View style={styles.container}>
            {/* <TextInput
              onChangeText={ (text)=> this.setState({email: text}) }
              style={styles.input} placeholder="List price (incl. the VAT actually paid)"
              clearButtonMode= 'while-editing'>
            </TextInput>
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
            </TouchableHighlight> */}
          </View>
          <FormLabel>Voordeel van alle aard woning</FormLabel>
          <FormInput
            inputStyle={styles.input}
            keyboardType="numeric"
            placeholder="Niet geïndexeerd kadastraal inkomen"
            clearButtonMode= 'while-editing'
          />
          <Button
            title='BEREKEN'
            icon={{name: 'done'}}
            buttonStyle={styles.button}
            borderRadius={3}
            backgroundColor= '#002445'
            onPress= { this.navigate.bind(this, 'housedata') }
          />

        </View>
        );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: 10,
    paddingTop: 120
  },
  header: {
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    alignItems: 'center',
    top: -20
  },
  return: {
    left: -165,
    top: 40
  },
  button: {
    top: 15
  },
  // input: {
  //   paddingTop: 30,
  //   paddingBottom: 20
  // }



});
