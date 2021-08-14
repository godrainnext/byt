import React, { PureComponent } from 'react';
import {
  Animated,
  Easing,
  StyleSheet,
  View,
  Text,
  Button,
  TouchableHighlight,
  Image
} from 'react-native';
import { BoxShadow } from 'react-native-shadow';
import { pxToDp } from '../../../utils/styleKits';

export default class IndexScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <BoxShadow
          setting={{
            height: pxToDp(180),
            width: pxToDp(120),
            marginTop: pxToDp(10),
            color: '#708090',
            border: 4,
            radius: 3,
            opacity: 0.4,
            x: 1,
            y: 1,
            style: { marginVertical: 5 }
          }}
        >
          <TouchableHighlight
            style={{
              position: 'relative',
              height: pxToDp(180),
              width: pxToDp(120),
              backgroundColor: '#fff',
              borderRadius: 3,
              overflow: 'hidden'
            }}
          >
            <Image source={require('../../../res/3.jpg')}></Image>
          </TouchableHighlight>
        </BoxShadow>
      </View>
    );
  }
}
