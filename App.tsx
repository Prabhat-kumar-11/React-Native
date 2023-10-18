/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

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
import {NetflixCard} from './src/components/NetflixCard';

function App(): JSX.Element {
  return (
    
    <View style={styles.container}>
      <NetflixCard />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {},

});

export default App;
