import React, { useState, useCallback } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {
  ScrollTabView,
  ScrollView,
  FlatList
} from 'react-native-scroll-head-tab-view';
import CustormerBar from './CustormerBar';
import VideoInro from './VideoInro/index';
import VideoCom from './VideoCom/index';
function TabView1(props) {
  const data = new Array(1).fill({});

  return (
    <ScrollView {...props}>
      <VideoInro {...props} />
    </ScrollView>
  );
}

function TabView2(props) {
  return (
    <ScrollView {...props}>
      <VideoCom {...props} />
    </ScrollView>
  );
}
export default function Example() {
  const [userInfo, setUserInfo] = useState({
    videoCom: { videoComid: 1 },
    videoInro: {
      dtid: 1
    }
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
        <TabView1 tabLabel="简介" userinfo={userInfo} />
        <TabView2 tabLabel="评论" userinfo={userInfo} />
      </ScrollTabView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
