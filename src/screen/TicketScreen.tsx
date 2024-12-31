import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { StackParamList } from '../navigation/StackNavigator';
import { StackScreenProps } from '@react-navigation/stack';
import { StackNavigations } from '../constants';

// type AuthHomeScreenProps = StackScreenProps<StackParamList, typeof StackNavigations.TICKET>
// {navigation}: AuthHomeScreenProps 

function TicketScreen( ) {
  return (
    <View>
      <Text>
        this is Ticket Screen
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({});

export default TicketScreen;