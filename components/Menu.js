import * as React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import MenuItem from "./MenuItem";

export function Menu({ data }) {
    return <ScrollView><SafeAreaView>
        <FlatList
            data={data}
            renderItem={({ item }) => <MenuItem name={item.name} img="../assets/images/v.png"></MenuItem>}
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
});