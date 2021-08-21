import React, { memo } from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import CustormerBar from './components/CustormerBar';
import Live from './live';
import Forum from './forum/index';
import Sing from './sing/index'

export default memo(() => {
  return (
    <ScrollableTabView initialPage={0} renderTabBar={() => <CustormerBar />}>
      <Sing tabLabel='百曲' />
      <Forum tabLabel="乐道" />
      <Live tabLabel="如面" />
    </ScrollableTabView>
  );
});
