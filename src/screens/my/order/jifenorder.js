import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Top from '../../../component/common/top';

export default class jifenorder extends Component {
  render() {
    console.log(this.props.route.params);
    return (
      <View>
        <Top title="订单详情" icon1="arrow-back" />
      </View>
    );
  }
}
