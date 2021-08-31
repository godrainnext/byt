import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView
} from 'react-native';
import { pxToDp } from '../../../../utils/styleKits';
import Top from '../../../../component/common/top';
import { connect } from 'react-redux';
import { deleteOrider } from '../../../../service/mine';
import { ToastAndroid } from 'react-native';

class Index extends PureComponent {
  state = { orider: [] };
  componentDidMount() {
    const refund = this.props.orider.filter((item) => item.status === 3);
    this.setState({ orider: refund });
  }
  deleteOrider(id) {
    Alert.alert('是否确认删除订单？', '确认后就不可更改了哦', [
      { text: '取消' },
      {
        text: '确认',
        onPress: () => {
          deleteOrider(id).then((res) => {
            const newrefund = this.state.orider.filter(
              (item) => item.oriderId !== id
            );
            this.setState({ orider: newrefund });
            ToastAndroid.show('删除订单成功', ToastAndroid.SHORT);
          });
        }
      }
    ]);
  }
  render() {
    return (
      <View style={{ backgroundColor: '#E2F4FE', flex: 1 }}>
        <Top icon1="arrow-back" title="售后/退款" />
        <ScrollView showsVerticalScrollIndicator={false}>
          {this.state.orider?.map((item) => (
            <View
              key={item.oriderId}
              style={{
                height: pxToDp(230),
                marginLeft: pxToDp(20),
                marginRight: pxToDp(20),
                borderBottomWidth: pxToDp(1),
                borderBottomColor: 'grey'
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: pxToDp(20)
                }}
              >
                <Text style={{ fontSize: pxToDp(17) }}>百越庭售卖店</Text>
              </View>
              <View style={{ flexDirection: 'row', marginTop: pxToDp(10) }}>
                <Image
                  style={{
                    height: pxToDp(110),
                    width: pxToDp(110),
                    borderRadius: pxToDp(8)
                  }}
                  source={{ uri: item.img }}
                />
                <View style={{ width: pxToDp(176) }}>
                  <View>
                    <Text
                      style={{ fontSize: pxToDp(16), marginLeft: pxToDp(8) }}
                    >
                      {item.title}
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: pxToDp(16),
                        marginLeft: pxToDp(16),
                        marginTop: pxToDp(8)
                      }}
                    >
                      {item.color}
                    </Text>
                  </View>
                </View>

                <View style={{ right: pxToDp(20), alignSelf: 'flex-end' }}>
                  <Text>￥{item.price}.00</Text>
                </View>
              </View>

              <View
                style={{
                  justifyContent: 'flex-end',
                  flexDirection: 'row',
                  marginTop: pxToDp(10)
                }}
              >
                <TouchableOpacity
                  onPress={() => this.deleteOrider(item.oriderId)}
                  style={{
                    borderColor: 'grey',
                    borderWidth: pxToDp(1),
                    height: pxToDp(23),
                    width: pxToDp(70),
                    borderRadius: pxToDp(8),
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: pxToDp(10)
                  }}
                >
                  <Text style={{ fontSize: pxToDp(15) }}>删除记录</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}
export default connect((state) => ({
  orider: state.getIn(['oriderReducer', 'orider'])
}))(Index);
