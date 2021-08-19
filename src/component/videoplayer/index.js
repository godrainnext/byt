import React, { useState, useCallback, useEffect,memo } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {
  ScrollTabView,
  ScrollView,
  FlatList
} from 'react-native-scroll-head-tab-view';
import CustormerBar from './VideoHead';
import VideoInro from './VideoInro/index';
import VideoCom from './VideoCom/index';
import { getVideoById } from '@service/home';
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
export default memo(function Example(props) {
  const [videoInfo, setvideoInfo] = useState({});
  useEffect(() => {
    getVideoById(props.route.params).then((res) => {
      setvideoInfo(res);
    });
  }, []);
  const [headerHeight, setHeaderHeight] = useState(200);
  const headerOnLayout = useCallback((event) => {
    const { height } = event.nativeEvent.layout;
    setHeaderHeight(height);
  }, []);

  const _renderScrollHeader = useCallback((video) => {
    const data = new Array(1).fill({});
    return (
      <View onLayout={headerOnLayout}>
        <CustormerBar videoInfo={video} />
      </View>
    );
  }, []);

  return (
    <View style={styles.container}>
      <ScrollTabView
        headerHeight={headerHeight}
        renderScrollHeader={() => _renderScrollHeader(videoInfo)}
      >
        <TabView1 tabLabel="简介" videoInfo={videoInfo} />
        <TabView2 tabLabel="评论" videoId={props.route.params} />
      </ScrollTabView>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
