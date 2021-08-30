/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { PureComponent } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import SwpierItem from '../../../component/common/swpierItem';
import Top from '../../../component/common/top';
import { NavigationContext } from '@react-navigation/native';
import { pxToDp } from '../../../utils/styleKits';
import { connect } from 'react-redux';
import requset from '@service/index';
import Mybtn from '../../../component/common/mybtn';
class SwiperListItem extends PureComponent {
  state = {
    checkedId: 1,
    isClick: true,
    listData: []
  };

  changeBtn = (id, item) => {
    requset.patch({ url: `/user/address/${id}` }).then((res) => {
      this.setState({ checkedId: id });
      this.props.route.params.changeDefaultAddress(item);
    });
  };
  componentDidMount() {
    this.setState({ checkedId: this.props.route.params.id });
  }
  static contextType = NavigationContext;
  render() {
    return (
      <View style={styles.outView}>
        <Top icon1="arrow-back" title="收货地址" />

        <ScrollView>
          <View style={{ paddingBottom: pxToDp(105), margin: pxToDp(8) }}>
            {this.props.address.map((item) => (
              <SwpierItem
                onPress={() => this.changeBtn(item.id, item)}
                isChecked={this.state.checkedId === item.id}
                name={item.name}
                phonenumber={item.phoneNum}
                address={item.address}
                key={item.id}
                item={item}
              />
            ))}
          </View>
        </ScrollView>

        <View
          style={{
            position: 'absolute',
            bottom: 0,
            backgroundColor: '#fff',
            width: '100%',
            height: pxToDp(54),
            justifyContent: 'center'
          }}
        >
          <Mybtn
            title='新增收货地址'
            onPress={() =>
              this.context.navigate(
                'newAddress',
                this.props.route.params.orider
              )
            }
            buttonStyle={{
              width: pxToDp(320),
              height: pxToDp(40),
              alignSelf: 'center',
              borderRadius: pxToDp(32),
            }}
            titleStyle={{
              color: 'white',
              fontSize: pxToDp(16)
            }}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  outView: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff'
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  rowFront: {
    alignItems: 'center',
    backgroundColor: '#CCC',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    justifyContent: 'center',
    height: pxToDp(50)
  },
  leftView: {
    width: pxToDp(75),
    alignItems: 'center',
    backgroundColor: 'green',
    height: pxToDp(50),
    justifyContent: 'center'
  },
  backRightBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: pxToDp(90),
    height: '100%'
  },
  backRightBtnLeft: {
    backgroundColor: 'skyblue',
    left: pxToDp(275),
    width: pxToDp(60)
  }
});

export default connect((state) => ({
  address: state.getIn(['addressReducer', 'address'])
}))(SwiperListItem);
