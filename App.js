import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import facebook from './screens/fb';
import instagram from './screens/in'

export default function App() {
  return (
    <AppContainer/>
  );
}
const TabNavigator = createBottomTabNavigator({
  Facebook :{screen: facebook},
  Instagram :{screen: instagram},
})
const AppContainer = createAppContainer(TabNavigator);

