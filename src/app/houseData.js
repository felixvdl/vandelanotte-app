import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableHighlight,
  AsyncStorage,
  Text,
  View,
  Image,
  TextInput,
  Picker,
  Dimensions,
  Linking
} from 'react-native';
import {Grid, Col, Icon, SocialIcon} from 'react-native-elements';


let { height, width } = Dimensions.get('window')

export class HouseData extends Component {

  navigate(routeName) {
    this.props.navigator.push({
      name: routeName
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.return}>
            <Icon
              onPress={ this.navigate.bind(this, 'second') }
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

        <View style={styles.percentage}>
          <Text style={{color: 'white', fontSize: 11}}> Resultaat</Text>
        </View>
        <View style={styles.data1}>
          <Grid>
            <Col>
              <View style={styles.dataRowLeft}>
                <Text style={styles.dataHeader}></Text>
              </View>
            </Col>
          </Grid>
          <Grid>
            <Col style={{alignItems:'center',marginTop: -0.03 * height}}>
              <Text style={styles.dataText}>niet geïndexeerd kad. inkomen</Text>
              <Text style={styles.dataText}>geïndexeerd kad. inkomen</Text>
            </Col>
            <Col style={{alignItems:'center', marginTop: -0.03 * height}}>
              <Text style={styles.dataText}>1.228,57</Text>
              <Text style={styles.dataText}>1.154,86</Text>

            </Col>
          </Grid>

        </View>
        <View style={styles.data2}>
          <Grid>
            <Col>
              <View style={styles.dataRowLeft}>
                <Text style={styles.dataHeader}>Niet Gemeubeld</Text>
              </View>
            </Col>
          </Grid>
          <Grid>
            <Col style={{alignItems:'center', marginTop: -0.03 * height}}>
              <Text style={styles.dataText}>huurvoordeel oud</Text>
              <Text style={styles.dataText}>huurvoordeel nieuw</Text>
              <Text style={styles.dataText}>verschil</Text>
            </Col>
            <Col style={{alignItems:'center', marginTop: -0.03 * height}}>

              <Text style={styles.dataText}>1.228,57</Text>
              <Text style={styles.dataText}>1.154,86</Text>
              <Text style={styles.dataText}>1.081,14</Text>
            </Col>
          </Grid>
        </View>
        <View style={styles.data3}>
          <Grid>
            <Col>
              <View style={styles.dataRowLeft}>
                <Text style={styles.dataHeader}>Gemeubeld</Text>
              </View>
            </Col>
          </Grid>
          <Grid>
            <Col style={{alignItems:'center', marginTop: -0.03 * height}}>
              <Text style={styles.dataText}>huurvoordeel oud</Text>
              <Text style={styles.dataText}>huurvoordeel nieuw</Text>
              <Text style={styles.dataText}>verschil</Text>
            </Col>
            <Col style={{alignItems:'center', marginTop: -0.03 * height}}>
              <Text style={styles.dataText}>1.228,57</Text>
              <Text style={styles.dataText}>1.154,86</Text>
              <Text style={styles.dataText}>1.081,14</Text>
            </Col>
          </Grid>
        </View>
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
  container: {
    backgroundColor: '#011b28',
    height: height
  },
  header: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    alignItems: 'center',
    top: -20
  },
  return: {
    left: -165,
    top: 40
  },
  result: {
    alignItems: 'center',
  },
  percentage: {
    backgroundColor: '#032537',
    top: 0.02 * height,
    left: 0.04 * width,
    width: 0.92 * width,
    borderRadius: 2,
    height: 0.04 * height,
    alignItems: 'center',
    justifyContent: 'center'
  },
  data1: {
    backgroundColor: '#0D2C42',
    top: 0.017 * height,
    height: 0.15* height,
    width: 0.92 * width,
    left: 0.04 * width,
    borderRadius: 2
  },
  data2: {
    backgroundColor: '#0D2C42',
    top: 0.05 * height,
    height: 0.15* height,
    width: 0.92 * width,
    left: 0.04 * width,
    borderRadius: 2
  },
  data3: {
    backgroundColor: '#0D2C42',
    top: 0.08 * height,
    height: 0.15* height,
    width: 0.92 * width,
    left: 0.04 * width,
    borderRadius: 2
  },
  dataHeader: {
    color: '#567687',
    fontWeight:'bold',
    fontSize: 11,
    paddingBottom: 0.01 * height,
    paddingTop: 0.01 * height,
  },
  dataRowLeft: {
    borderBottomWidth: 0.5,
    borderColor: '#305468',
    marginLeft: 0.02 * width,
    marginRight: 0.02 * width,
  },
  dataText: {
    color: 'white',
    fontSize: 10,
    paddingTop: 6,
  },
  social: {
    height: 40,
    width: 40,
    top: 0.28 * height
  }
});
