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
import { pxToDp } from '../../utils/styleKits';
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
  };
  render() {
    return (
      <View style={{ marginBottom: 10,}}>
        <Card style={{ width: '100%' }} elevation={10}>
          <SwipeRow
            leftOpenValue={75}
            rightOpenValue={-88}
            disableRightSwipe={true} //禁止向右滑动
          >
            <View>
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

            <View style={{ backgroundColor: '#fff', height: 120, width: '100%' ,borderRadius:6,overflow:'hidden'}}>
              <View
                style={{ width: 200, flexDirection: 'row', marginRight: 225,alignItems:'center'}}
              >
                {/* 姓名 */}
                <Text
                  style={{
                    fontSize: 16,
                    color:'#333333',
                    opacity: 0.8,
                    padding:16
                  }}
                >
                  {this.props.item.name}
                </Text>
                {/* 电话号码 */}
                <Text
                  style={{
                    fontSize: 12,
                    marginLeft:pxToDp(8),
                    width: 120,
                    color:'#666666',
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
                  top: pxToDp(54),
                  width: '90%',
                  paddingBottom:pxToDp(12),
                  marginLeft:pxToDp(16),
                  borderBottomWidth:0.2,
                  borderColor:'#666666'
                }}
              >
                <Text
                  style={{ color:'#333333',opacity: 0.5 }}
                  numberOfLines={1}
                >
                  {this.props.address}
                </Text>
              </View>

              <View style={{ position: 'absolute', left: 16, bottom: -10 }}>
                <TouchableOpacity
                  onPress={this.props.onPress}
                  style={{
                    width: pxToDp(22),
                    height:  pxToDp(22),
                    borderWidth: 0.1,
                    borderRadius: 32,
                    borderColor: '#666666'
                  }}
                >
                  <SvgUri
                    svgXmlData={this.props.isChecked ? choose : null}
                    width="25"
                    height="25"
                    style={{ right: 2, bottom: 2 }}
                  />
                </TouchableOpacity>
                <Text style={{ left: 35, bottom: 20, opacity: 0.5 ,color:'#666666',fontSize:12}}>
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

  backRightBtnRight: {
    backgroundColor: '#f8726f',
    height: 120,
    width: 80,
    borderRadius:6,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 0
  }
});
export default connect(() => ({}), {
  deleteAddressAction
})(SwpierItem);
