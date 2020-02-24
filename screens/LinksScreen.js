import * as React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import MenuItem from '../components/MenuItem.js';

const styles = StyleSheet.create({
  menu: {
    
  },

  menuItem: {
    flex: 2,
  },
});

export default function LinksScreen() {
  return (
    <FlatList
      data={[
        {name: 'Chipotle Chicken, Brown Rice & Avocado Bowl', img: '../assets/images/acsf.img'},
        {name: 'lol veggies i guess', img: '../assets/images/aegg.png'},
        {name: 'sorry excuse for desert', img: '../assets/images/afsh.png'},
      ]}
      renderItem={({item}) => <MenuItem img={item.img} name={item.name} />}
    />
  );
}