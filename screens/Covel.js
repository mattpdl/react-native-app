import React, { Component } from 'react';
import { ScrollView, View, Image, StyleSheet, Text, ImageBackground} from 'react-native';
import * as Font from 'expo-font';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  styling: {
    width: 500,
    height: 150,
  },
});

const textStyles = StyleSheet.create({
  title: {
    textAlign: "center",
    marginTop: 50,
    fontWeight: "bold",
    fontSize: 50,
    fontFamily: 'bebas-neue',
    color: 'white'
  },
  subtitle: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight:8,
    paddingLeft: 8,
    fontSize: 14,
    width: 410,
    textAlign: "center",
    backgroundColor: '#d3d3d3',
    color: 'gray',

  },
  info: {
    marginLeft: 10,
    textAlign: "left",
  },
});

export default class Covel extends Component {
  componentDidMount() {
    Font.loadAsync({
      'bebas-neue' : require('../assets/fonts/BebasNeue.otf')
    })
  }
  render() {
    return (
    <View>
      <View style={styles.container}>
        <ImageBackground 
          style={styles.styling} 
          source = {require('../assets/images/covel.jpg')}>
             <Text style={textStyles.title}>Covel Commons</Text>
        </ImageBackground>
        <Text style={textStyles.subtitle}>Guests can enjoy dishes inspired by the villas and villages countries such as Lebanon, 
        Spain, and Turkey to name a few.</Text>
        <Text></Text>
      </View>
    </View>
    );
  }
}
