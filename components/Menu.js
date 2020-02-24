import * as React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MenuItem from "./MenuItem";

export function Menu({ data }) {
    return <ScrollView><SafeAreaView>
        <FlatList
            data={data}
            renderItem={({ item }) => <MenuItem name={item.name} img="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></MenuItem>}
            keyExtractor={(s) => s.name}
        />
    </SafeAreaView></ScrollView>
}