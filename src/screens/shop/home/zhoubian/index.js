import React, { PureComponent } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { pxToDp } from '@utils/styleKits';
import { NavigationContext } from '@react-navigation/native';
import Top from '@components/common/top';
import Maylike from '../components/maylike';
import { getShopListByStatus } from '@service/shop';
class Index extends PureComponent {
  state = {
    shop: []
  };
  componentDidMount() {
    const status = this.props.route.params;
    getShopListByStatus(status).then((res) => {
      this.setState({ shop: res });
    });
  }
  static contextType = NavigationContext;
  render() {
    return (
      <View>
        <Top icon1="arrow-back" title="周边商城" />
        <ScrollView
          style={{
            marginBottom: pxToDp(70),
            height: '100%',
            backgroundColor: '#ecf6fc'
          }}
        >
          {this.state.shop.map((item, id) => (
            <Maylike
              key={item.id}
              imguri={item.imguri}
              name={item.title}
              number={item.sellnum}
              price={item.price}
              id={item.id}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  scrollview: {
    backgroundColor: '#E2F4FE',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  tcard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: pxToDp(420)
  },
  ocard: {
    backgroundColor: 'white',
    width: pxToDp(170),
    borderRadius: pxToDp(10),
    margin: pxToDp(10),
    marginRight: pxToDp(5)
  },
  image: {
    height: pxToDp(170),
    width: pxToDp(170),
    borderTopLeftRadius: pxToDp(10),
    borderTopRightRadius: pxToDp(10)
  },
  bottext: {
    flexDirection: 'row',
    margin: pxToDp(5),
    justifyContent: 'space-between'
  }
});
export default Index;
