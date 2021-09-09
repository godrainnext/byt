import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { pxToDp } from '../../utils/styleKits';

class List extends PureComponent {
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: pxToDp(8),
          marginRight: pxToDp(24),
          marginLeft: pxToDp(24)
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Ionicons name={this.props.icon} size={25} color="#62bfad" />
          <Text
            style={{
              fontSize: pxToDp(16),
              margin: pxToDp(8),
              marginLeft: pxToDp(16),
              color: '#333333'
            }}
          >
            {this.props.title}
          </Text>
        </View>
        <Ionicons name="chevron-forward" size={15} color="#666666" />
      </View>
    );
  }
}

export default List;
