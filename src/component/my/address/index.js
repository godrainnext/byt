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
    console.log(this.props);
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
              marginTop: pxToDp(5),
              borderRadius: pxToDp(10),
              margin: pxToDp(5),
              backgroundColor: 'white'
            }}
          >
            <View
              style={{
                marginTop: pxToDp(20),
                marginLeft: pxToDp(20),
                flexDirection: 'row'
              }}
            >
              <Text style={{ fontSize: pxToDp(16) }}>
                {this.props.defaultAddress?.name}
              </Text>
              <Text style={{ fontSize: pxToDp(16), marginLeft: pxToDp(40) }}>
                {this.props.defaultAddress?.phoneNum}
              </Text>
              <Image
                style={{
                  width: pxToDp(20),
                  height: pxToDp(20),
                  marginLeft: pxToDp(130),
                  marginTop: pxToDp(15)
                }}
                source={require('../../../res/箭头.png')}
              />
            </View>
            <View style={{ marginLeft: pxToDp(20), marginBottom: pxToDp(10) }}>
              <Text style={{ fontSize: pxToDp(14) }}>
                {this.props.defaultAddress?.address}
              </Text>
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
