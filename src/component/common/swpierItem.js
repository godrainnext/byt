/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';
import SvgUri from 'react-native-svg-uri';
import { Card } from 'react-native-shadow-cards';
import { choose, deleteIcon, edit } from '../../component/common/iconSvg';
import { NavigationContext } from '@react-navigation/native';
import { connect } from 'react-redux';
import { deleteAddressAction } from '@screens/my/address/store/actions';
import { deleteAddress } from '@service/mine';
class SwpierItem extends PureComponent {
  state = {
    // isClick: false,
    checkedItem: 1
  };
  static contextType = NavigationContext;
  // changBtn = (id) => {
  //   this.setState({ checkedItem: id });
  // };
  // changBtn = () => {
  //   this.props.changeBtn(this.props.itemId)
  //   // this.setState({isClick: !this.state.isClick});
  //   // console.log(this.state.isClick);
  // };
  deleteItem = () => {
    this.props.deleteAddressAction(this.props.item);
    console.log(this.props.item);
    console.log(this.props.item.id);
    deleteAddress(this.props.item.id).then((res) => console.log('删除成功'));
  };
  render() {
    return (
      <View style={{ marginBottom: 10, elevation: 10 }}>
        <Card style={{ width: '100%' }} elevation={10}>
          <SwipeRow
            leftOpenValue={75}
            rightOpenValue={-160}
            disableRightSwipe={true} //禁止向右滑动
          >
            <View style={styles.rowBack}>
              <View style={styles.backRightBtnRight}>
                <TouchableOpacity
                  style={{ width: '100%', height: '100%' }}
                  onPress={this.deleteItem}
                >
                  <SvgUri
                    width="30"
                    height="30"
                    svgXmlData={deleteIcon}
                    style={{ left: 25, top: 45 }}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={{ backgroundColor: '#fff', height: 120, widht: 500 }}>
              <View
                style={{ width: 200, flexDirection: 'row', marginRight: 225 }}
              >
                {/* 姓名 */}
                <Text
                  style={{
                    fontSize: 20,
                    position: 'absolute',
                    left: 30,
                    top: 10,
                    fontWeight: 'bold',
                    opacity: 0.8
                  }}
                >
                  {this.props.item.name}
                </Text>
                {/* 电话号码 */}
                <Text
                  style={{
                    fontSize: 15,
                    position: 'absolute',
                    left: 150,
                    top: 15,
                    width: 120,
                    fontWeight: 'bold',
                    opacity: 0.8
                  }}
                >
                  {this.props.item.phoneNum}
                </Text>
              </View>
              {/* 地址等其他信息 */}
              <View
                style={{
                  position: 'absolute',
                  left: 30,
                  top: 45,
                  width: '80%'
                }}
              >
                <Text
                  style={{ color: 'gray', fontWeight: 'bold', opacity: 0.5 }}
                  numberOfLines={1}
                >
                  {this.props.address}
                </Text>
              </View>

              <View style={{ position: 'absolute', left: 30, bottom: -10 }}>
                <TouchableOpacity
                  onPress={this.props.onPress}
                  style={{
                    width: 23,
                    height: 23,
                    borderWidth: 0.5,
                    borderRadius: 30,
                    borderColor: 'gray'
                  }}
                >
                  <SvgUri
                    svgXmlData={this.props.isChecked ? choose : null}
                    width="25"
                    height="25"
                    style={{ right: 2, bottom: 2 }}
                  />
                </TouchableOpacity>
                <Text style={{ left: 35, bottom: 20, opacity: 0.5 }}>
                  默认地址
                </Text>
              </View>
            </View>
          </SwipeRow>
        </Card>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#fcfcfc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1
  },

  backRightBtn: {},
  backRightBtnLeft: {
    backgroundColor: '#1ac599', //2bed6b 1ac599
    position: 'absolute',
    right: 80,
    width: 80,
    top: 0.2,
    height: 120
  },
  backRightBtnRight: {
    backgroundColor: '#fa292c',
    height: 120,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 0
  }
});
export default connect(() => ({}), {
  deleteAddressAction
})(SwpierItem);
