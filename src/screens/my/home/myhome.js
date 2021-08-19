import React, { useState, useCallback } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {
  ScrollTabView,
  ScrollView,
  FlatList
} from 'react-native-scroll-head-tab-view';
import moduleName from 'react-redux';
import Dongtai from '../seetings/component/dontai';
import Collect from '../seetings/component/collect';
import Soucang from '../seetings/component/soucang';
import CustormerBar from '../seetings/component/CustormerBar';

function TabView1(props) {
  const data = new Array(1).fill({});

  return (
    <ScrollView {...props}>
      <Dongtai {...props} />
    </ScrollView>
  );
}

function TabView2(props) {
  return (
    <ScrollView {...props}>
      <Collect {...props} />
    </ScrollView>
  );
}

function TabView3(props) {
  const data = new Array(2).fill({});
  return (
    <ScrollView {...props}>
      <Soucang {...props} />
    </ScrollView>
  );
}

export default function Example(props) {
  const [userInfo, setUserInfo] = useState({
    collect: [
      { collectid: 1, collectimg: '', title: '乌拉乌拉乌拉', playnum: 111 }
    ],

    soucang: [
      {
        scid: 1,
        scimg:
          'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg',
        bookname: '111111',
        name: '12111',
        date: '2019-05-02'
      }
    ]
  });
  const [headerHeight, setHeaderHeight] = useState(200);
  const headerOnLayout = useCallback((event) => {
    const { height } = event.nativeEvent.layout;
    setHeaderHeight(height);
  }, []);

  const _renderScrollHeader = useCallback(() => {
    const data = new Array(1).fill({});
    return (
      <View onLayout={headerOnLayout}>
        <CustormerBar />
      </View>
    );
  }, []);
  return (
    <View style={styles.container}>
      <ScrollTabView
        headerHeight={headerHeight}
        renderScrollHeader={_renderScrollHeader}
      >
        <TabView1
          tabLabel="动态"
          userinfo={userInfo}
          userId={props.route.params}
        />

        <TabView2
          tabLabel="收藏"
          userinfo={userInfo}
          userId={props.route.params}
        />
        <TabView3
          tabLabel="剧本"
          userinfo={userInfo}
          userId={props.route.params}
        />
      </ScrollTabView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
