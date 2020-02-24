import * as React from 'react';
import { ScrollView, Text } from 'react-native';



export default function MenuScreen() {
    const [menu, setMenu] = React.useState();
    React.useEffect(() => {
        fetch("http://44.232.86.238/dining/menu/overviewMenu")
            .then(resp => resp.json())
            .then(data => setMenu(data));
    }, [])
    return <ScrollView><Text>{JSON.stringify(menu, null, 2)}</Text></ScrollView>;
}