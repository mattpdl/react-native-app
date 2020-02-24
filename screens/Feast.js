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

export default class Feast extends Component {
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
          source = {require('../assets/images/feast.jpg')}>
             <Text style={textStyles.title}>Feast at Rieber</Text>
        </ImageBackground>
        <Text style={textStyles.subtitle}>Self-service Pan-Asian eatery with stylish modern decor, open to UCLA students and guests.</Text>
        <Text></Text>
      </View>
    </View>
    );
  }
}
