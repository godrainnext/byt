import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { pxToDp } from '@utils/styleKits';
import { connect } from 'react-redux';
import { getAddressListAction } from '@screens/my/address/store/actions';
import { NavigationContext } from '@react-navigation/native';
import { Fragment } from 'react';
class Address extends PureComponent {
  componentDidMount() {
    const defaultAddress = this.props.address.find(
      (item) => item.isdefault === 1
    );
    this.props.changeDefaultAddresses(defaultAddress);
    this.props.changeAddressId(defaultAddress.id);
  }
  changeDefaultAddress = (address) => {
    this.props.changeDefaultAddresses(address);
    this.props.changeAddressId(address.id);
  };
  static contextType = NavigationContext;
  render() {
    return (
      <Fragment>
        {this.props.address.length ? (
          <TouchableOpacity
            onPress={() =>
              this.context.navigate('address', {
                id: this.props.defaultAddress?.id,
                changeDefaultAddress: this.changeDefaultAddress,
                orider: this.props.orider
              })
            }
            style={{
              borderRadius: pxToDp(8),
              backgroundColor: 'white',
              flexDirection: 'row',
              height: pxToDp(80)
            }}
          >
            <View style={{ width: pxToDp(318) }}>
              {/* 姓名 电话 */}
              <View
                style={{
                  height: pxToDp(50),
                  alignItems: 'center',
                  marginLeft: pxToDp(8),
                  flexDirection: 'row'
                }}
              >
                <Text style={{ fontSize: pxToDp(16) }}>
                  {this.props.defaultAddress?.name}
                </Text>
                <Text style={{ fontSize: pxToDp(16), marginLeft: pxToDp(40) }}>
                  {this.props.defaultAddress?.phoneNum}
                </Text>
              </View>
              {/* 地址 */}
              <View style={{ marginLeft: pxToDp(8) }}>
                <Text style={{ fontSize: pxToDp(14) }}>
                  {this.props.defaultAddress?.address}
                </Text>
              </View>
            </View>
            <View
              style={{
                height: pxToDp(80),
                justifyContent: 'center'
              }}
            >
              <Image
                style={{
                  width: pxToDp(20),
                  height: pxToDp(20)
                }}
                source={require('../../../res/箭头.png')}
              />
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() =>
              this.context.navigate('newAddress', {
                ...this.props.route.params
              })
            }
          >
            <Text>还没有地址?前往添加新地址</Text>
          </TouchableOpacity>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  address: state.getIn(['addressReducer', 'address'])
});

export default connect(mapStateToProps, {
  getAddressListAction
})(Address);
