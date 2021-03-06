import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { pxToDp } from '../../../../utils/styleKits';
import Top from '../../../../component/common/top';
class Index extends PureComponent {
  render() {
    const { goToPage, tabs, activeTab } = this.props;
    return (
      <View>
        <Top icon1="arrow-back" title="全部订单" />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            backgroundColor: '#D5E8E6',
            height: pxToDp(50)
          }}
        >
          {tabs.map((v, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => goToPage(i)}
              style={{
                justifyContent: 'center',
                borderBottomColor: '#62bfad',
                borderBottomWidth: activeTab === i ? pxToDp(3) : 0
              }}
            >
              <Text
                style={{
                  color: activeTab === i ? 'black' : 'grey',
                  fontSize: activeTab === i ? pxToDp(18) : pxToDp(16)
                }}
              >
                {v}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }
}
export default Index;
