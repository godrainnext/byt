import React, { PureComponent } from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import Top from '../../component/common/top';
import { pxToDp } from '../../utils/styleKits';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import JianJie from './book/JianJie';
import BasicMessage from './book/BasicMessage';
import CustormerBar from './book/CustormerBar';

export default class bookDetail extends PureComponent {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Top icon1="arrow-back" title="追鱼" />
        <View
          style={{
            backgroundColor: 'white',
            marginTop: pxToDp(8),
            marginLeft: pxToDp(16),
            flexDirection: 'row'
          }}
        >
          <Image
            style={{
              width: pxToDp(100),
              height: pxToDp(120),
              borderRadius: pxToDp(8),
              backgroundColor: '#ecf6fc'
            }}
            source={require('../../res/play/1.jpg')}
          />
          <View
            style={{
              marginLeft: pxToDp(8),
              justifyContent: 'flex-start'
            }}
          >
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: pxToDp(20),
                color: '#000000',
                marginTop: pxToDp(2)
              }}
            >
              追鱼
            </Text>
            <Text style={{ color: '#666666', fontSize: pxToDp(14) }}>
              Chasing fish
            </Text>
            <Text
              style={{
                fontSize: pxToDp(16),
                color: '#333333',
                marginTop: pxToDp(10)
              }}
            >
              佚名
            </Text>
          </View>
        </View>
        <ScrollableTabView
          initialPage={0}
          renderTabBar={() => <CustormerBar />}
        >
          <JianJie tabLabel="书籍简介" />
          <BasicMessage tabLabel="基本信息" />
        </ScrollableTabView>
      </View>
    );
  }
}
