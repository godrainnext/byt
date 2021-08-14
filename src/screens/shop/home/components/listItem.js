import React, { PureComponent } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { pxToDp } from '../../../../utils/styleKits';

class ListItem extends PureComponent {
  state = {
    isSub: 'true'
  };
  subClick = () => {
    this.setState({ isSub: !this.state.isSub });
  };

  render() {
    return (
      <View
        style={{
          backgroundColor: '#fff',
          height: pxToDp(100),
          borderBottomWidth: 0.2,
          borderBottomColor: 'gray'
        }}
      >
        <View style={{ backgroundColor: '#fff' }}>
          <Image
            source={require('../../../../res/1.jpg')}
            style={{
              width: pxToDp(40),
              height: pxToDp(40),
              borderRadius: pxToDp(20),
              margin: pxToDp(10)
            }}
          />
        </View>
        <View
          style={{ position: 'absolute', top: pxToDp(10), left: pxToDp(60) }}
        >
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
            {this.props.username}
          </Text>
          <Text
            style={{ marginTop: pxToDp(12), width: pxToDp(250), fontSize: 12 }}
          >
            {this.props.subs}
          </Text>
          <Text
            style={{ marginTop: pxToDp(12), width: pxToDp(250), fontSize: 13 }}
          >
            {this.props.createTime}
          </Text>
        </View>
      </View>
    );
  }
}

export default ListItem;
