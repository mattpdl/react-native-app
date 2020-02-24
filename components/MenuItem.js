import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    menuItem: {
        backgroundColor: '#fff',
        borderRadius: 10,
        margin: 10,
    },

    image: {
        flex: 3,
        height: 300,
        width: 400,
    },

    name: {
        flex: 1,
    },

    text: {
        fontSize: 16,
    },
});

export default function MenuItem(props) {
    return (
        <View style={styles.menuItem}>
            <Image source={{uri: props.img}} style={styles.image}></Image>
            <View style={styles.name}>
                <Text style={styles.text}>{props.name}</Text>
            </View>
        </View>
    );
}