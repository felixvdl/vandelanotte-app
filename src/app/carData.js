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

export class CarData extends Component {
  constructor(props) {
    super(props)
    this.state = {
      prijs: this.props.prijs,
      brandstof: this.props.brandstof,
      uitstoot: this.props.uitstoot
    }
  }
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
              onPress={ this.navigate.bind(this, 'first') }
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
        <View style={styles.result}>
          <Text style={{color: '#1F95D2', fontWeight: 'bold'}}>Resultaat</Text>
        </View>
        <View style={styles.percentage}>
          <Text style={{color: 'white', fontSize: 11}}> Percentage: 8,06%</Text>
        </View>
        <View style={styles.data1}>
          <Grid>
            <Col style={{alignItems:'center'}}>
              <View style={styles.dataRowLeft}>
                <Text style={styles.dataHeader}>                                                                 </Text>
              </View>
              <Text style={styles.dataText}> 0 - 1 jaar</Text>
              <Text style={styles.dataText}> 2 jaar</Text>
              <Text style={styles.dataText}> 3 jaar</Text>
              <Text style={styles.dataText}> 4 jaar</Text>
              <Text style={styles.dataText}> 5 jaar</Text>
              <Text style={styles.dataText}> 5 + jaar</Text>
            </Col>
            <Col>
              <View style={styles.dataRow}>
                <Text style={styles.dataHeader}>VAA (6/7)</Text>
              </View>
              <Text style={styles.dataText}>14.742,86</Text>
              <Text style={styles.dataText}>13.858,29</Text>
              <Text style={styles.dataText}>12.973,71</Text>
              <Text style={styles.dataText}>12.089,14</Text>
              <Text style={styles.dataText}>11.204,57</Text>
              <Text style={styles.dataText}>10.320,00</Text>
            </Col>
            <Col>
              <View style={styles.dataRowRight}>
                <Text style={styles.dataHeader}>VAA (MAAND)</Text>
              </View>
              <Text style={styles.dataText}>1.228,57</Text>
              <Text style={styles.dataText}>1.154,86</Text>
              <Text style={styles.dataText}>1.081,14</Text>
              <Text style={styles.dataText}>1.007,43</Text>
              <Text style={styles.dataText}>933,71</Text>
              <Text style={styles.dataText}>860,00</Text>
            </Col>
          </Grid>

        </View>
        <View style={styles.data2}>
          <Grid>
            <Col style={{alignItems:'center'}}>
              <View style={styles.dataRowLeft}>
                <Text style={styles.dataHeader}>   {"\n"}                                        </Text>
              </View>
              <Text style={styles.dataText}> 0 - 1 jaar</Text>
              <Text style={styles.dataText}> 2 jaar</Text>
              <Text style={styles.dataText}> 3 jaar</Text>
              <Text style={styles.dataText}> 4 jaar</Text>
              <Text style={styles.dataText}> 5 jaar</Text>
              <Text style={styles.dataText}> 5 + jaar</Text>
            </Col>
            <Col>
              <View style={styles.dataRow}>
                <Text style={styles.dataHeader}>Verworpen uitgave/jaar </Text>
              </View>
              <Text style={styles.dataText}>14.742,86</Text>
              <Text style={styles.dataText}>13.858,29</Text>
              <Text style={styles.dataText}>12.973,71</Text>
              <Text style={styles.dataText}>12.089,14</Text>
              <Text style={styles.dataText}>11.204,57</Text>
              <Text style={styles.dataText}>10.320,00</Text>
            </Col>
            <Col>
              <View style={styles.dataRow}>
                <Text style={styles.dataHeader}>Ven. {"\n"}belasting</Text>
              </View>
              <Text style={styles.dataText}>14.742,86</Text>
              <Text style={styles.dataText}>13.858,29</Text>
              <Text style={styles.dataText}>12.973,71</Text>
              <Text style={styles.dataText}>12.089,14</Text>
              <Text style={styles.dataText}>11.204,57</Text>
              <Text style={styles.dataText}>10.320,00</Text>
            </Col>
            <Col>
              <View style={styles.dataRowRight}>
                <Text style={styles.dataHeader}>PB (À 52,50 %)</Text>
              </View>
              <Text style={styles.dataText}>1.228,57</Text>
              <Text style={styles.dataText}>1.154,86</Text>
              <Text style={styles.dataText}>1.081,14</Text>
              <Text style={styles.dataText}>1.007,43</Text>
              <Text style={styles.dataText}>933,71</Text>
              <Text style={styles.dataText}>860,00</Text>
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
    top: -0.03 * height
    },
  return: {
    left: -0.25 * height,
    top: 0.06 * height
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
    height: 0.25* height,
    width: 0.92 * width,
    left: 0.04 * width,
    borderRadius: 2
  },
  data2: {
    backgroundColor: '#0D2C42',
    top: 0.05 * height,
    height: 0.25* height,
    width: 0.92 * width,
    left: 0.04 * width,
    borderRadius: 2
  },
  dataHeader: {
    color: '#567687',
    fontWeight:'bold',
    fontSize: 11,
    paddingBottom: 0.01 * height,
    paddingTop: 0.01 * height
  },
  dataRowRight: {
    borderBottomWidth: 0.5,
    borderColor: '#305468',
    marginRight: 0.02 *width
  },
  dataRow: {
    borderBottomWidth: 0.5,
    borderColor: '#305468',
  },
  dataRowLeft: {
    borderBottomWidth: 0.5,
    borderColor: '#305468',
    marginLeft: 0.02 * width,
  },
  dataText: {
    color: 'white',
    fontSize: 10,
    paddingTop: 6
  },
  social: {
    height: 40,
    width: 40,
    top: 0.2 * height
  }
});
