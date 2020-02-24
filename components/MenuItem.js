import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';

const styles = StyleSheet.create({
    imageContainer: {
        alignItems: 'center',
        justifyContent: "center"
    },

    image: {
        flex: 3,
        height: 300,
        width: 350,
    },

    name: {
        paddingLeft: 22
    },

    text: {
        textAlign: "left",
        fontSize: 16,
    }
});

export default function MenuItem(props) {
    return (
        <View style={{ height: 500 }}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: props.img }} style={styles.image}></Image>
            </View>
            <View style={styles.name}>
                <Text style={styles.text}>{props.name}</Text>
            </View>
            <View>
                <AirbnbRating size={25} showRating={false} />
            </View>
        </View>
    );
}