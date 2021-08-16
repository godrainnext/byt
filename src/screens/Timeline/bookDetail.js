import React, { Component } from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import Top from '../../component/common/top';
import { pxToDp } from '../../utils/styleKits';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import JianJie from './book/JianJie';
import BasicMessage from './book/BasicMessage';
import CustormerBar from './book/CustormerBar';

export default class bookDetail extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Top icon1="arrow-back" title="追鱼" />

        <View
          style={{
            backgroundColor: '#ecf6fc',
            height: pxToDp(150),
            margin: pxToDp(10),
            flexDirection: 'row'
          }}
        >
          <Image
            style={{
              width: pxToDp(120),
              height: pxToDp(130),
              margin: pxToDp(10),
              backgroundColor: '#ecf6fc'
            }}
            source={require('../../res/play/1.jpg')}
          />
          <View
            style={{
              margin: pxToDp(10),
              justifyContent: 'space-around',
              height: pxToDp(100)
            }}
          >
            <Text style={{ fontWeight: 'bold', fontSize: pxToDp(20) }}>
              追鱼
            </Text>
            <Text style={{ color: '#666' }}>Chasing fish</Text>
            <Text style={{ fontSize: pxToDp(16) }}>佚名</Text>
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
