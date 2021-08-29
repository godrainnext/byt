import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { pxToDp } from '@utils/styleKits';
import { connect } from 'react-redux';
import { getAddressListAction } from '@screens/my/address/store/actions';
import { NavigationContext } from '@react-navigation/native';
import { Fragment } from 'react';
import List from '@components/common/list';

class MyAddress extends PureComponent {
  state = { defaultAddress: {} };
  componentDidMount() {
    const defaultAddress = this.props.address.find(
      (item) => item.isdefault === 1
    );
    this.setState({ defaultAddress });
    this.props.getAddressListAction();
  }
  changeDefaultAddress = (payload) => {
    this.setState({ defaultAddress: payload });
  };
  static contextType = NavigationContext;
  render() {
    return (
      <Fragment>
        <TouchableOpacity
          onPress={() =>
            this.context.navigate('address', {
              id: this.state.defaultAddress?.id,
              changeDefaultAddress: this.changeDefaultAddress,
              orider: this.props.orider
            })
          }
        >
          <List icon="cart-outline" title="收货地址" />
        </TouchableOpacity>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  address: state.getIn(['addressReducer', 'address'])
});

export default connect(mapStateToProps, {
  getAddressListAction
})(MyAddress);
