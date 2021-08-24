import React, { PureComponent } from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import { pxToDp } from '@utils/styleKits';
import { NavigationContext } from '@react-navigation/native';
import Top from '@components/common/top';
import Maylike from '../components/maylike';
import { getShopListByStatus } from '@service/shop';
class Index extends PureComponent {
  state = {
    zuliList: []
  };
  componentDidMount() {
    const status = this.props.route.params;
    getShopListByStatus(status).then((res) => {
      this.setState({ zuliList: res });
    });
  }
  static contextType = NavigationContext;
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Top icon1="arrow-back" title="戏服租赁" />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            flex: 1,
            backgroundColor: '#ecf6fc'
          }}
        >
          <View
            style={{
              flexWrap: 'wrap',
              flexDirection: 'row',
              marginLeft: pxToDp(16),
              marginRight: pxToDp(16),
              justifyContent: 'space-between',
              marginTop: pxToDp(-2)
            }}
          >
            {this.state.zuliList.map((item, id) => (
              <Maylike
                key={item.id}
                imguri={item.imguri}
                name={item.title}
                number={item.sellnum}
                price={item.price}
                id={item.id}
              />
            ))}
          </View>
          <View style={{ height: pxToDp(20) }}></View>
        </ScrollView>
      </View>
    );
  }
}
export default Index;
