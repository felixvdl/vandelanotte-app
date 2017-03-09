import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableHighlight,
  AsyncStorage,
  Text,
  View,
  Image,
  TextInput,
  PickerIOS,
  Dimensions,
  Item,
  UIExplorerBlock
} from 'react-native';
import { SocialIcon, Icon, FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'


let { height, width } = Dimensions.get('window')

export class House extends Component {
  constructor() {
    super()
    this.state = {
      ki: "",
      error: ""
    }
  }
  goBack(routeName) {
    this.props.navigator.push({
      name: routeName,
    })
  }
  navigate(routeName) {
    if (this.state.ki > 745) {
      this.props.navigator.push({
        name: routeName,
        passProps: {
          ki: this.state.ki,
        }
      })
    } else {
      this.setState({error: "kadastraal inkomen moet boven 745 zijn"})
    };
  }
  render() {
    return (
      <View>
        <View style={styles.header}>
          <View style={styles.return}>
            <Icon
              onPress={ this.goBack.bind(this, 'home') }
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
          </View>
          <FormLabel>Voordeel van alle aard woning</FormLabel>
          <FormInput
            inputStyle={styles.input}
            keyboardType="numeric"
            onChangeText={ (text)=> this.setState({ki: text}) }
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
          <View style={{alignItems:'center'}}>
            <Text style={styles.error}>{this.state.error}</Text>
          </View>
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
    top: -0.03 * height
  },
  return: {
    left: -0.25 * height,
    top: 0.06 * height
  },
  button: {
    top: 15
  },
  error: {
    color: 'red',
    top: 0.03 * height,
    fontSize: 12
  }
});
