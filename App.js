import * as React from 'react';
import { useDispatch } from "react-redux";
import { Image } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
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

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();


const InnerBottomTabs = () => {
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      initialRouteName="Fill"
      tabBarOptions={{
        activeTintColor: '#fff',
        labelStyle: { fontSize: wp('2%'), fontWeight: 'bold' },
        style: { backgroundColor: '#000', padding: 0, margin: 0, height: hp('9%') },
        indicatorStyle: { backgroundColor: '#fff' },
      }}>
      <Tab.Screen
        name="Fill"
        component={Fill}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require('./assets/fillwhite.png')}
              style={{ width: 25, height: 25 }}
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

const App = () => {
  const dispatch = useDispatch();
  React.useEffect(async () => {
    const jsonValue = await AsyncStorage.getItem('@schemes');
    console.warn(jsonValue)
    const data = jsonValue != null ? JSON.parse(jsonValue) : [];
    dispatch({
      type: "SET_GRAFFITI",
      payload: data
    });
  }, []);

  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );

};

export default function Root(){
  return(
    <Provider store={store}>
      <App/>
    </Provider>
  )
}