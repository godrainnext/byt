import React from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import CustormerBar from './components/CustormerBar';
import Orderone from './pages/orderone';

import { shallowEqual, useSelector } from 'react-redux';

export default ({ route, navigation }) => {
  const { orider } = useSelector(
    (state) => ({
      orider: state.getIn(['oriderReducer', 'orider'])
    }),
    shallowEqual
  );

  const needPay = orider.filter((item) => item.status === 0);
  const needReceipt = orider.filter((item) => item.status === 1);
  const needComment = orider.filter((item) => item.status === 2);
  return (
    <ScrollableTabView
      initialPage={route.params}
      renderTabBar={() => <CustormerBar />}
    >
      <Orderone tabLabel="全部" orider={orider} />
      <Orderone tabLabel="待支付" orider={needPay} />
      <Orderone tabLabel="待收货" orider={needReceipt} />
      <Orderone tabLabel="待评价" orider={needComment} />
    </ScrollableTabView>
  );
};
