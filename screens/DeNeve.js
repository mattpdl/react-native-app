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

export default class DeNeve extends Component {
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
          source = {require('../assets/images/DeNeve.jpeg')}>
             <Text style={textStyles.title}>De Neve</Text>
        </ImageBackground>
        <Text style={textStyles.subtitle}>All-you-can-eat buffet-style eatery dishes up comfort food and sandwiches in a spacious setting.</Text>
        <Text></Text>
      </View>
    </View>
    );
  }
}
