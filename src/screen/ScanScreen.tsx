import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { StackParamList } from '../navigation/StackNavigator';
import { StackScreenProps } from '@react-navigation/stack';
import { StackNavigations } from '../constants';

function ScanScreen() {
  return (
    <View>
      <Text>
        this is Scan Screen
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({});

export default ScanScreen;