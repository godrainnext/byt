import React, { createRef, useRef } from 'react';
import { Modalize } from 'react-native-modalize';
import Screen from './index';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';
import { PureComponent } from 'react';
import MapView from 'react-native-maps';
export default class timeline extends PureComponent {
  render() {
    const modalizeRef = createRef();
    return (
      <View style={{ flex: 1 }}>
        <Modalize
          ref={modalizeRef}
          modalStyle={s.content__modal}
          alwaysOpen={500}
          handlePosition="inside"
        >
          <Screen />
        </Modalize>
      </View>
    );
  }
}

const s = StyleSheet.create({
  content__modal: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.45,
    shadowRadius: 16
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
});
