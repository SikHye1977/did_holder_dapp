import { createStackNavigator } from '@react-navigation/stack';
import React, { startTransition } from 'react';
import {StyleSheet, View} from 'react-native';
import HomeScreen from '../screen/HomeScreen';
import ConnectionScreen from '../screen/ConnectionScreen';
import { StackNavigations } from '../constants';
import TicketScreen from '../screen/TicketScreen';
import ScanScreen from '../screen/ScanScreen';


export type StackParamList = {
  [StackNavigations.HOME]: undefined;
  [StackNavigations.CONNECTION]: undefined;
  [StackNavigations.SCAN]: undefined;
  [StackNavigations.TICKET]: undefined;
}

function StackNavigator() {
  const Stack = createStackNavigator<StackParamList>();

  return (
    <Stack.Navigator>
      <Stack.Screen name={StackNavigations.HOME} component={HomeScreen} />
      <Stack.Screen name={StackNavigations.CONNECTION} component={ConnectionScreen} />
      <Stack.Screen name={StackNavigations.SCAN} component={ScanScreen} />
      <Stack.Screen name={StackNavigations.TICKET} component={TicketScreen} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({});

export default StackNavigator;