import React, { PureComponent } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { pxToDp } from '../../../../utils/styleKits';
import Orderitem from './orderItem';

class Index extends PureComponent {
  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.props.orider.length ? (
          <ScrollView
            style={{ backgroundColor: '#E2F4FE', flex: 1, height: '100%' }}
          >
            <Orderitem page={this.props.orider} />
          </ScrollView>
        ) : (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#E2F4FE',
              flex: 1
            }}
          >
            <Text style={{ fontSize: pxToDp(15) }}>您还没有相关的订单</Text>
            <Text style={{ fontSize: pxToDp(15), color: 'grey' }}>
              可以去看看有哪些想买的
            </Text>
          </View>
        )}
      </View>
    );
  }
}
export default Index;
