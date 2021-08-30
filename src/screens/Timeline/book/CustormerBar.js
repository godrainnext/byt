import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { pxToDp } from '@utils/styleKits';
class Index extends PureComponent {
  render() {
    const { goToPage, tabs, activeTab } = this.props;
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            backgroundColor: 'white',
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
                  fontSize: activeTab === i ? pxToDp(16) : pxToDp(14)
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
