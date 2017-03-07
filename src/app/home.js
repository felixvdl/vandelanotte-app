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


export class Home extends Component {

  navigate(routeName) {
    this.props.navigator.push({
      name: routeName
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image
            source={require('../img/logo.jpg')}
          />
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableHighlight onPress={ this.navigate.bind(this,'first') } style={styles.buttonRegister}>
            <Text style={styles.buttonText}>BIK company car</Text>
          </TouchableHighlight>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableHighlight onPress={ this.navigate.bind(this, 'first') } style={styles.buttonLogin}>
            <Text style={styles.buttonText}>BIK house</Text>
          </TouchableHighlight>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <SocialIcon
            type= 'twitter'
            style= {styles.social}
            raised= {false}
            onPress={() =>
            Linking.openURL('https://twitter.com/VandelanotteAcc')
            }
          />
          <SocialIcon
            type= 'facebook'
            style= {styles.social}
            raised= {false}
            onPress={() =>
            Linking.openURL('https://www.facebook.com/VandelanotteAcc')
            }
          />
          <SocialIcon
            type= 'linkedin'
            style= {styles.social}
            raised= {false}
            onPress={() =>
            Linking.openURL('https://www.linkedin.com/company/vandelanotte')
            }
          />
          <SocialIcon
            type= 'google-plus-official'
            style= {styles.social}
            raised= {false}
            onPress={() =>
            Linking.openURL('https://plus.google.com/108256165087014072595')
            }
          />
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
