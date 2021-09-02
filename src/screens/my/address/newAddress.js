/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { PureComponent } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import Top from '../../../component/common/top';
import { Input } from 'react-native-elements';
import Picker from 'react-native-picker';
import CityJson from './citys.json';
import { NavigationContext } from '@react-navigation/native';
import { pxToDp } from '../../../utils/styleKits';
import requset from '@service/index';
import { connect } from 'react-redux';
import { getAddressListAction } from './store/actions';
import Mybtn from '../../../component/common/mybtn';
class NewAddress extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      person: '',
      phone: '',
      Buttonvalue: false,
      address: ''
    };
  }
  saveAddress = () => {
    requset
      .post({
        url: '/user/address',
        data: {
          name: this.state.person,
          address: this.state.address,
          phoneNum: this.state.phone
        }
      })
      .then((res) => {
        this.props.getAddressListAction();
      })
      .then(() => {
        console.log(this.props.route.params);
        this.props.route.params
          ? this.context.navigate('Myorder', this.props.route.params)
          : this.context.goBack();
      });
  };
  static contextType = NavigationContext;
  //选择地区
  showCityPicker = () => {
    //初始化组件
    Picker.init({
      pickerData: CityJson,
      selectedValue: ['北京', '北京'],
      wheelFlex: [1, 1, 0], // 显示省和市
      pickerConfirmBtnText: '确定',
      pickerCancelBtnText: '取消',
      pickerTitleText: '选择城市',
      onPickerConfirm: (data) => {
        // data =  [浙江，杭州，西湖区]
        this.setState({
          city: data[1]
        });
      }
    });
    //显示组件
    Picker.show();
  };
  render() {
    return (
      <View style={{ backgroundColor: '#D5E8E6', flex: 1 }}>
        <Top icon1="arrow-back" title="新增地址" />
        <View
          style={{
            backgroundColor: 'white',
            margin: pxToDp(8),
            borderRadius: pxToDp(16),
            elevation: 2,
            shadowColor: 'black', //  阴影颜色
            shadowOffset: { width: 0, height: 0 }, // 阴影偏移
            shadowOpacity: 1, // 阴影不透明度
            shadowRadius: 10 //  圆角
          }}
        >
          <View style={s.top}>
            <View style={{ height: pxToDp(55) }}>
              <Input
                placeholder="姓名"
                onChangeText={(person) => this.setState({ person })}
                style={{
                  height: pxToDp(45),
                  paddingLeft: pxToDp(12),
                  fontSize: 14
                }}
                leftIcon={
                  <Text style={{ fontSize: pxToDp(16) }}>收 货 人</Text>
                }
              />
            </View>
            <View style={{ height: pxToDp(55) }}>
              <Input
                placeholder="11位手机号"
                onChangeText={(phone) => this.setState({ phone })}
                style={{
                  height: pxToDp(45),
                  paddingLeft: pxToDp(7),
                  fontSize: pxToDp(14)
                }}
                leftIcon={
                  <Text style={{ fontSize: pxToDp(16) }}>联系电话</Text>
                }
              />
            </View>
          </View>
          {/* <View style={s.center}>
          <View style={{ height: pxToDp(pxToDp(45)) }}>
              <TouchableOpacity onPress={this.showCityPicker}>
              <Input
                inputStyle={{ color: "black" }}
                leftIcon={
                  <Text style={{ fontSize: pxToDp(18) }}>所在地区：</Text>
                }
                value={this.state.city}
                disabled={true}
                rightIcon={
                  <Text style={{ fontSize: pxToDp(17), color: "#666" }}>
                    {this.state.city ? "" : "请选择所在地区"}
                    {this.state.city ? (
                      ""
                    ) : (
                      <AntDesign name="right" size={pxToDp(17)} color="#666" />
                    )}
                  </Text>
                }
              />
            </TouchableOpacity> 
          </View>
        </View> */}
          <View style={{ height: pxToDp(55) }}>
            <Input
              placeholder="请输入地址"
              onChangeText={(address) => this.setState({ address })}
              style={{
                height: pxToDp(55),
                fontSize: pxToDp(14),
                paddingLeft: pxToDp(8)
              }}
              leftIcon={<Text style={{ fontSize: pxToDp(16) }}>地址信息</Text>}
            />
          </View>

          <View
            style={{
              height: pxToDp(55),
              marginTop: pxToDp(20)
            }}
          >
            <View style={s.bottom}>
              <View style={{ justifyContent: 'center', height: pxToDp(45) }}>
                <Text style={{ fontSize: pxToDp(16) }}>设为默认地址</Text>
              </View>
              <View>
                <Switch
                  style={{ marginTop: pxToDp(10), marginRight: pxToDp(8) }}
                  //动态改变value
                  value={this.state.value}
                  thumbColor="#ecf6fc"
                  color="#468cd3"
                  //当切换开关室回调此方法
                  onValueChange={(value) => {
                    this.setState({ value: value });
                  }}
                />
              </View>
            </View>
          </View>
        </View>

        <Mybtn
          onPress={this.saveAddress}
          title="保存信息"
          buttonStyle={{
            width: pxToDp(340),
            height: pxToDp(40),
            borderRadius: pxToDp(32),
            alignSelf: 'center',
            marginTop: pxToDp(400)
          }}
          linearGradientProps={{
            colors: ['#fa9222', '#ffd501'],
            start: { x: 0, y: 0.5 },
            end: { x: 1, y: 0.5 }
          }}
        />
      </View>
    );
  }
}
const s = StyleSheet.create({

  center: {
    height: pxToDp(160)
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: pxToDp(8)
  }
});
export default connect(() => ({}), { getAddressListAction })(NewAddress);
