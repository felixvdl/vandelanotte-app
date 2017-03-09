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



export class Car extends Component {
  constructor() {
    super()
    this.state = {
      prijs: "",
      brandstof: "",
      uitstoot: ""
    }
  }
  navigate(routeName) {
    this.props.navigator.push({
      name: routeName,
      passProps: {
        prijs: this.state.prijs,
        brandstof: this.state.brandstof,
        uitstoot: this.state.uitstoot
      }
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
          <FormLabel>Voordeel van alle aard bedrijfswagen</FormLabel>
          <FormInput
            inputStyle={styles.input}
            onChangeText={ (text)=> this.setState({prijs: text}) }
            keyboardType="numeric"
            placeholder="Catalogusprijs (incl. werkelijk betaalde BTW)"
            clearButtonMode= 'while-editing'
          />
          <FormInput
            inputStyle={styles.input}
            onChangeText={ (text)=> this.setState({brandstof: text}) }
            placeholder="Brandstof"
            clearButtonMode= 'while-editing'
          />
          <FormInput
            inputStyle={styles.input}
            onChangeText={ (text)=> this.setState({uitstoot: text}) }
            keyboardType="numeric"
            placeholder="CO² uitstoot (g/km)"
            clearButtonMode= 'while-editing'
          />
          <Button
            title='BEREKEN'
            icon={{name: 'done'}}
            buttonStyle={styles.button}
            borderRadius={3}
            backgroundColor= '#002445'
            onPress= { this.navigate.bind(this, 'cardata') }
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
