import * as React from 'react';
import { SafeAreaView, FlatList, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';

export function Menu({ data }) {
    return <ScrollView><SafeAreaView>
        <FlatList
            data={data}
            renderItem={({ item }) => <Text style={style.text}>{item.name}</Text>}
            keyExtractor={(s) => s.name}
            numColumns={4}
            columnWrapperStyle={style.row}
        />
    </SafeAreaView></ScrollView>
}

const style = StyleSheet.create({
    row: {
        flex: 1,
    },
    text: {
        textAlign: "left",
        width: "25%"
    }
});