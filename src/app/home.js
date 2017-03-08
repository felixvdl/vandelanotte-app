import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableHighlight,
  AsyncStorage,
  Text,
  View,
  Image,
  Linking,
  Dimensions
} from 'react-native';
import { SocialIcon, Button } from 'react-native-elements'


let { height, width } = Dimensions.get('window')

export class Home extends Component {

  navigate(routeName) {
    this.props.navigator.push({
      name: routeName
    });
  }
  render() {
    return (
      <View>
        <View style={styles.header}>
          <View style={styles.logo}>
            <Image
              source={require('../img/logo.jpg')}
            />
          </View>
        </View>
        <Button
          title='VAA bedrijswagen'
          icon={{name: 'drive-eta'}}
          onPress= {this.navigate.bind(this, 'first')}
          backgroundColor= '#002445'
          buttonStyle={{top: 0.15 * height, height: 30}}
          borderRadius={3}
        />
        <Button
          title='VAA woning'
          icon={{name: 'store-mall-directory'}}
          onPress= {this.navigate.bind(this, 'second')}
          backgroundColor= '#002445'
          buttonStyle={{top: 0.16 * height, height: 30}}
          borderRadius={3}
        />
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
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
  header: {
    alignItems: 'center'
  },
  logo: {
    width: 50,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0.35 * height
  },
  social: {
    height: 40,
    width: 40,
    top: 0.35 * height
  }
});
