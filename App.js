import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
// Redux
import {Provider} from 'react-redux';
import {store} from './redux/store';
// Screens

// Drawer Navigation Screens
import About from './screens/drawer/About.jsx';
import Saved from './screens/drawer/Saved.jsx';
// Buttons Screens
import Fill from './screens/Fill.jsx';
import Outline from './screens/Outline.jsx';
import Background from './screens/Background.jsx';
import Force from './screens/Force.jsx';
import Highlight from './screens/Hightlight.jsx';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

const InnerBottomTabs = () => {
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      initialRouteName="Fill"
      tabBarOptions={{
        activeTintColor: '#fff',
        labelStyle: { fontSize: 8, fontWeight: 'bold' },
        style: { backgroundColor: '#000', padding: 0, margin: 0, height: 70 },
        indicatorStyle: { backgroundColor: '#fff' },
      }}>
      <Tab.Screen
        name="Fill"
        component={Fill}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require('./assets/fillwhite.png')}
              style={{ width: 25, height: 25, marginLeft: 5 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Outline"
        component={Outline}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require('./assets/outlinewhite.png')}
              style={{ width: 25, height: 25 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Background"
        component={Background}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require('./assets/backgroundwhite2.png')}
              style={{ width: 25, height: 25}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Force"
        component={Force}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require('./assets/forcewhite.png')}
              style={{ width: 25, height: 25 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Highlight"
        component={Highlight}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require('./assets/highlightwhite.png')}
              style={{ width: 25, height: 25 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Create"
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#000',
          width: 240,
        },
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#fff',
      }}>
      <Drawer.Screen
        name="Create"
        component={InnerBottomTabs}
        options={{
          headerStyle: {
            backgroundColor: '#000',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Drawer.Screen
        name="Saved"
        component={Saved}
        options={{
          headerStyle: {
            backgroundColor: '#000',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Drawer.Screen
        name="About"
        component={About}
        options={{
          headerStyle: {
            backgroundColor: '#000',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </Provider>
  );
}