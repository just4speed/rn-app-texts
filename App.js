import * as React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Image, View, Text } from 'react-native';
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
import Powerline from './screens/Powerline';
import Background from './screens/Background.jsx';
import Highlight from './screens/Highlight.jsx';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();


const InnerBottomTabs = () => {
  const main = useSelector(state => state.main);
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      initialRouteName="Fill"
      tabBarOptions={{
        activeTintColor: '#fff',
        labelStyle: { fontSize: wp('2%'), fontWeight: 'bold' },
        style: {
          backgroundColor: '#000', padding: 0, margin: 0, height: hp('9%')
        },
        indicatorStyle: { backgroundColor: '#fff' },
      }}
      screenOptions={{
        swipeEnabled: false
      }}
    >
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
        name="Power line"
        component={Powerline}
        listeners={{
          tabPress: e => {
            if(!main.powerlines){
              e.preventDefault();
            }
          },
        }}
        options={{
          tabBarLabelStyle: {
            fontSize: wp('2%'), fontWeight: 'bold', opacity: main.powerlines ? 1: 0.5
          },
          tabBarIcon: ({ color }) => (
            <Image
              source={require('./assets/forcewhite.png')}
              style={{ width: 25, height: 25, opacity: main.powerlines ? 1: 0.5 }}
            />
          )
        }}
      />
      <Tab.Screen
        name="Highlight"
        component={Highlight}
        listeners={{
          tabPress: e => {
            if(!main.highlights){
              e.preventDefault();
            }
          },
        }}
        options={{
          tabBarLabelStyle: {
            fontSize: wp('2%'), fontWeight: 'bold', opacity: main.highlights ? 1: 0.5
          },
          tabBarIcon: ({ color }) => (
            <Image
              source={require('./assets/highlightwhite.png')}
              style={{ width: 25, height: 25, opacity: main.highlights ? 1: 0.5 }}
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
  const today = new Date();
  React.useEffect(async () => {
    const jsonValue = await AsyncStorage.getItem('@schemes');
    const data = jsonValue != null ? JSON.parse(jsonValue) : [];
    dispatch({
      type: "SET_GRAFFITI",
      payload: data
    });
  }, []);

  if(
    !(today.getFullYear() === 2021 && today.getMonth() === 8)
  ){
    return(
      <View style={{ padding: wp("10%") }}>
        <Text>Home Page</Text>
      </View>
    )
  }

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