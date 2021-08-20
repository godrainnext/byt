import React, { memo } from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import CustormerBar from './components/CustormerBar';
import Orderone from './pages/orderone';
import { useRoute } from '@react-navigation/native';
import { shallowEqual, useSelector } from 'react-redux';
import { OrderFour, OrderThree, OrderTwo } from '../..';

export default (props) => {
  const { orider } = useSelector(
    (state) => ({
      orider: state.getIn(['oriderReducer', 'orider'])
    }),
    shallowEqual
  );
  const route = useRoute();
  const needPay = orider.filter((item) => item.status === 0);
  const needReceipt = orider.filter((item) => item.status === 1);
  const needComment = orider.filter((item) => item.status === 2);
  console.log(route.params);
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
