import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import Constants from 'expo-constants';
 import HomeScreen from './screen/HomeScreen'
 import AppHeader from './AppHeader'
export default function App() {
  return (
    <View >
    
  <AppContainer/>
    </View>
  );
}
var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
 
});

const AppContainer = createAppContainer(AppNavigator);

