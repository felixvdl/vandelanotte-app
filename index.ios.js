'use strict'
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import { Home } from './src/app/home'
import { Car } from './src/app/car'
import { CarData } from './src/app/carData'
import { House } from './src/app/house'
import { HouseData } from './src/app/houseData'


class Main extends Component {

  renderScene(route, navigator) {
    if(route.name == 'home') {
      return <Home navigator={navigator} />
    }
    if(route.name == 'first') {
      return <Car navigator={navigator} />
    }
    if(route.name == 'second') {
      return <House navigator={navigator} />
    }
    if(route.name == 'cardata') {
      return <CarData navigator={navigator} {...route.passProps}/>
    }
    if(route.name == 'housedata') {
      return <HouseData navigator={navigator} {...route.passProps}/>
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Navigator
          initialRoute={{name: 'home'}}
          renderScene={this.renderScene.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

AppRegistry.registerComponent('VandelanotteApp', () => Main);
