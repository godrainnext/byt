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
import { updateAddress } from './store/actions';

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
        this.props.updateAddress([
          {
            id: res.insertId,
            name: this.state.person,
            address: this.state.address,
            phoneNum: this.state.phone,
            isdefault: 0
          }
        ]);
      })
      .then(() => this.context.navigate('Myorder'));
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
      <View style={{ backgroundColor: '#e2f4fe', flex: 1 }}>
        <Top icon1="arrow-back" title="新增地址" />
        <View style={s.top}>
          <View style={{ height: pxToDp(45) }}>
            <Input
              placeholder="姓名"
              onChangeText={(person) => this.setState({ person })}
              style={{
                height: pxToDp(45),
                paddingLeft: pxToDp(12)
              }}
              leftIcon={<Text style={{ fontSize: pxToDp(18) }}>收 货 人</Text>}
            />
          </View>
          <View style={{ height: pxToDp(45) }}>
            <Input
              placeholder="11位手机号"
              onChangeText={(phone) => this.setState({ phone })}
              style={{
                height: pxToDp(45),
                paddingLeft: pxToDp(7)
              }}
              leftIcon={<Text style={{ fontSize: pxToDp(18) }}>联系电话</Text>}
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
        <View style={{ height: pxToDp(45) }}>
          <Input
            placeholder="请输入地址"
            onChangeText={(address) => this.setState({ address })}
            style={{
              height: pxToDp(45),
              paddingLeft: pxToDp(7)
            }}
            leftIcon={<Text style={{ fontSize: pxToDp(18) }}>地址信息</Text>}
          />
        </View>
        <View
          style={{
            height: pxToDp(45),
            marginTop: pxToDp(20)
          }}
        >
          <View style={s.bottom}>
            <View style={{ justifyContent: 'center', height: pxToDp(45) }}>
              <Text style={{ fontSize: pxToDp(17) }}>设为默认地址</Text>
            </View>
            <View>
              <Switch
                style={{ marginTop: pxToDp(10), marginRight: pxToDp(10) }}
                //动态改变value
                value={this.state.value}
                //当切换开关室回调此方法
                onValueChange={(value) => {
                  this.setState({ value: value });
                }}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            backgroundColor: '#ecf6fc',
            width: pxToDp(300),
            height: pxToDp(50),
            borderRadius: pxToDp(50),
            alignSelf: 'center',
            marginBottom: pxToDp(300)
          }}
        >
          <TouchableOpacity
            style={{ width: '100%', height: '100%' }}
            onPress={this.saveAddress}
          >
            <Text
              style={{
                alignSelf: 'center',
                top: pxToDp(15),
                fontSize: pxToDp(18),
                color: '#000'
              }}
            >
              保存
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const s = StyleSheet.create({
  top: {
    height: pxToDp(100)
  },
  center: {
    height: pxToDp(160)
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: pxToDp(10)
  }
});
export default connect(() => ({}), { updateAddress })(NewAddress);
