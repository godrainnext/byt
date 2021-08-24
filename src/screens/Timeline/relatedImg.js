import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Waterfall from '../../component/common/waterfall';
import Top from '../../component/common/top';

export default class relatedImg extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Top title="相关图片" icon1="arrow-back" />
        <Waterfall />
      </View>
    );
  }
}
