import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import MenuScreen from '../screens/MenuScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="De Neve"
        component={HomeScreen}
        options={{
          title: 'De Neve',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
        }}
      />
      <BottomTab.Screen
        name="Covel"
        component={MenuScreen}
        options={{
          title: 'Covel',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-restaurant" />,
        }}
      />
      <BottomTab.Screen
        name="BPlate"
        component={LinksScreen}
        options={{
          title: 'BPlate',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
      <BottomTab.Screen
        name="Feast"
        component={LinksScreen}
        options={{
          title: 'Feast',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'De Neve':
      return 'De Neve';
    case 'Covel':
      return 'Covel';
    case 'BPlate':
      return 'BPlate';
    case 'Feast':
      return 'Feast'
  }
}
