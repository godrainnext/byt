import React, { memo } from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import CustormerBar from './components/CustormerBar';
import Live from './live';
import Forum from './forum/index';

export default memo(() => {
  return (
    <ScrollableTabView initialPage={0} renderTabBar={() => <CustormerBar />}>
      <Live tabLabel="直播广场" />
      <Forum tabLabel="论坛" />
    </ScrollableTabView>
  );
});
