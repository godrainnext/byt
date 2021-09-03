import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
  Modal,
  StyleSheet
} from 'react-native';
import { pxToDp } from '../../../../utils/styleKits';
import Top from '../../../../component/common/top';
import { connect } from 'react-redux';
import { deleteOrider } from '../../../../service/mine';
import { ToastAndroid } from 'react-native';
import Mybtn from '../../../../component/common/mybtn';

class Index extends PureComponent {
  state = {
    orider: [],
    modalVisible: false
  };
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
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };
  render() {
    const { modalVisible } = this.state;
    return (
      <View style={{ backgroundColor: '#D5E8E6', flex: 1 }}>
        <Top icon1="arrow-back" title="售后/退款" />
        <ScrollView showsVerticalScrollIndicator={false}>
          {this.state.orider?.map((item) => (
            <View
              key={item.oriderId}
              style={{
                marginLeft: pxToDp(16),
                marginTop: pxToDp(8),
                marginBottom: pxToDp(8),
                marginRight: pxToDp(16),
                borderRadius: pxToDp(8),
                backgroundColor: '#fff',
                elevation: 2,
                shadowColor: 'black', //  阴影颜色
                shadowOffset: { width: 0, height: 0 }, // 阴影偏移
                shadowOpacity: 1, // 阴影不透明度
                shadowRadius: 10 //  圆角
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  margin: pxToDp(10)
                }}
              >
                <Text style={{
                  fontSize: pxToDp(18),
                  color: '#000000',
                  fontWeight: 'bold'
                }}>百越庭售卖店</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: pxToDp(10)
                }}
              >
                <Image
                  style={{
                    height: pxToDp(110),
                    width: pxToDp(110),
                    borderRadius: pxToDp(8)
                  }}
                  source={{ uri: item.img }}
                />

                <View
                  style={{
                    marginLeft: pxToDp(8),
                    width: pxToDp(216)
                  }}
                >
                  <Text style={{ fontSize: pxToDp(16) }}>{item.title}</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop: pxToDp(16)
                    }}
                  >
                    <Text style={{ fontSize: pxToDp(14), color: '#999999' }}>
                      {item.color}
                    </Text>
                    <Text
                      style={{
                        fontSize: pxToDp(14),
                        color: '#333333',
                        marginRight: pxToDp(8)
                      }}
                    >
                      ×{item.count}
                    </Text>
                  </View>
                  <Text style={{ color: '#62bfad', marginTop: pxToDp(24) }}></Text>
                </View>
              </View>

              <View
                style={{
                  justifyContent: 'flex-end',
                  flexDirection: 'row',
                  marginTop: pxToDp(10),
                  marginBottom: pxToDp(16),
                  marginRight: pxToDp(16),
                  alignItems: 'center'
                }}
              >
                <Text style={{
                  fontSize: pxToDp(14),
                  color: '#333333',
                  fontWeight: 'bold',
                  marginLeft: pxToDp(16)
                }} >
                  实付款
                </Text>
                <Text
                  style={{
                    fontSize: pxToDp(12),
                    color: '#333333',
                    fontWeight: 'bold'
                  }}
                >
                  ￥
                </Text>
                <Text
                  style={{
                    fontSize: pxToDp(14),
                    fontWeight: 'bold',
                    color: '#333333',
                    marginRight: pxToDp(16)
                  }}
                >
                  {' '}
                  {item.price * item.count}
                </Text>
                <Mybtn
                  title="删除记录"
                  onPress={() => this.setModalVisible(!modalVisible)}
                  buttonStyle={{
                    width: pxToDp(90),
                    height: pxToDp(30),
                    borderRadius: pxToDp(32),
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  titleStyle={{
                    height: 30,
                    color: 'white',
                    fontSize: pxToDp(14),
                    marginTop: pxToDp(10)
                  }}
                />
              </View>
              <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              this.setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={{ fontSize: pxToDp(18), color: '#000000' }}>是否确认删除订单</Text>
                <Text style={{ fontSize: pxToDp(14), color: '#666666' }}>删除后无法恢复</Text>
                <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginTop: pxToDp(32) }}>
                  <Mybtn
                    title="取消"
                    onPress={() => {
                      this.setModalVisible(!modalVisible);
                    }}
                    buttonStyle={{
                      width: pxToDp(90),
                      height: pxToDp(30),
                      borderRadius: pxToDp(32),
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: pxToDp(8)
                    }}
                    titleStyle={{
                      height: 30,
                      color: 'white',
                      fontSize: pxToDp(14),
                      marginTop: pxToDp(10)
                    }}
                  />
                  <Mybtn
                    title="确认"
                    onPress={() => {
                      this.setModalVisible(!modalVisible);
                      deleteOrider(item.oriderId).then((res) => {
                        const newrefund = this.state.orider.filter(
                          (item2) => item2.oriderId !== item.oriderId
                        );
                        this.setState({ orider: newrefund });
                        ToastAndroid.show('删除订单成功', ToastAndroid.SHORT);
                      })
                    }}
                    buttonStyle={{
                      width: pxToDp(90),
                      height: pxToDp(30),
                      borderRadius: pxToDp(32),
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginLeft: pxToDp(8)
                    }}
                    titleStyle={{
                      height: 30,
                      color: 'white',
                      fontSize: pxToDp(14),
                      marginTop: pxToDp(10)
                    }}
                  />
                </View>
              </View>
            </View>
          </Modal>
        </View>
   
            </View>
          ))}
        </ScrollView>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalView: {
    margin: pxToDp(20),
    backgroundColor: 'white',
    borderRadius: pxToDp(24),
    padding: pxToDp(35),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    }
  }
});

export default connect((state) => ({
  orider: state.getIn(['oriderReducer', 'orider'])
}))(Index);
