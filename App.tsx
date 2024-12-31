/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import StackNavigator from './src/navigation/StackNavigator';
import Footer from './src/components/Footer';

// Setting For Credo
// import type { InitConfig } from '@credo-ts/core'
// import { Agent } from '@credo-ts/core'
// import { agentDependencies } from '@credo-ts/react-native'

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


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <StackNavigator/>
      <Footer/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});

export default App;
