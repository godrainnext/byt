import React, { Component } from 'react';
import { View ,Text} from 'react-native';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import VideoHead from './VideoHead.js/index';
// 引入子页面
import VideoInro from './VideoInro/index';
import VideoCom from './VideoCom/index';
import { pxToDp } from '../../utils/stylesKits';

export default () => {
    return <ScrollableTabView
      style={{}}
      initialPage={0}
      renderTabBar={() => <VideoHead />}
    >
      <VideoInro tabLabel='简介'></VideoInro>
      <VideoCom tabLabel='评论'></VideoCom>
    </ScrollableTabView>;
  }

// export default index;