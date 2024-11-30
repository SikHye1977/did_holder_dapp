import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import HomeScreen from '../screen/HomeScreen';
import ConnectionScreen from '../screen/ConnectionScreen';

function StackNavigator() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Connection" component={ConnectionScreen} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({});

export default StackNavigator;