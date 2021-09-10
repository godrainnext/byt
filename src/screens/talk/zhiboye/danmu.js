import React from 'react';
import { StyleSheet, SafeAreaView, Dimensions } from 'react-native';

import Danmaku from './components/src/index'

import { danmakuData } from './components/data/index'

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Danmaku data={danmakuData}/>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    backgroundColor: '#725E82'
  },
  headerWrapper: {
    marginTop: 30,
    backgroundColor: '#eee'
  },
  title: {
    paddingVertical: 10,
    fontSize: 30,
    textAlign: 'center'
  }
});