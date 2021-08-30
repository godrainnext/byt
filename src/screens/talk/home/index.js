import React, { memo } from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import CustormerBar from './components/CustormerBar';
import Live from './live';
import Forum from './forum/index';
import Sing from './sing/index'
import { pxToDp } from '../../../utils/styleKits';

export default memo(() => {
  return (

    <ScrollableTabView
      style={{ backgroundColor: '#FFF' }}
      tabUnderlineWidth='5'
      renderTabBar={() => <CustormerBar />}
      tabUnderlineWidth={5}
      tabBarTextStyle={{ fontSize: pxToDp(18) }}
      tabBarBackgroundColor='#fff'
      initialPage={1} >
      <Sing tabLabel='百曲' />
      <Forum tabLabel="乐道" />
      <Live tabLabel="如面" />
    </ScrollableTabView>

  );
});
