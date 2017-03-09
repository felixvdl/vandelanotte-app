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
  Item,
  PickerItemIOS,
  Dimensions
} from 'react-native';
import { SocialIcon, Icon, FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'


let { height, width } = Dimensions.get('window')

export class Car extends Component {
  constructor() {
    super()
    this.state = {
      prijs: "",
      brandstof: "benzine",
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
        <View style={{marginTop: 0.2 * height}}>
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
            onChangeText={ (text)=> this.setState({uitstoot: text}) }
            keyboardType="numeric"
            placeholder="CO² uitstoot (g/km)"
            clearButtonMode= 'while-editing'
          />
          <View style={{alignItems: 'center'}}>
            <PickerIOS
              selectedValue={this.state.uitstoot}
              onValueChange= {(label) => this.setState({brandstof: label})}
              style={styles.picker}
              itemStyle={{fontSize: 14, top: -0.1 * height}}
            >
              <PickerItemIOS
                key="benzine"
                value="benzine"
                label="benzine"
              />
              <PickerItemIOS
                key="diesel"
                value="diesel"
                label="diesel"
              />
            </PickerIOS>
          </View>
        </View>
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
    top: 0.02* height
  },
  picker: {
    width: 0.89 * width,
    height: 0.20 * height,
    top: 0.07 * height,
    backgroundColor: 'transparent'
  }
});
