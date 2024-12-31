import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Vibration} from 'react-native';

import type { InitConfig } from '@credo-ts/core'
import { Agent } from '@credo-ts/core'
import { agentDependencies } from '@credo-ts/react-native'
import { StackParamList } from '../navigation/StackNavigator';
import { StackScreenProps } from '@react-navigation/stack';
import { StackNavigations } from '../constants';
import Footer from '../components/Footer';

// const config: InitConfig = {
//   label: 'docs-agent-react-native',
//   walletConfig: {
//     id: 'wallet-id',
//     key: 'testkey0000000000000000000000000',
//   },
// }
// const agent = new Agent({
//   config,
//   dependencies: agentDependencies,
// })

function Home( ) {
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.content}>
        <Text>this is home</Text>
      </SafeAreaView>
    </SafeAreaView>
    // <SafeAreaView style={styles.container}>
    //   <Text style={styles.titleText}>UXM <Text style={styles.text}>HOLDER</Text></Text>
    //   <SafeAreaView style={styles.body}>
    //     <TouchableOpacity style={styles.card} onPress={() => {navigation.navigate(StackNavigations.CONNECTION)}}>
    //       <Text>CONNECTION</Text>
    //     </TouchableOpacity>
    //   </SafeAreaView>
    // </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;