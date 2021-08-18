import React, { PureComponent } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { NavigationContext } from '@react-navigation/native';
import { pxToDp, screenWidth } from '../../utils/styleKits';
export default class HeaderHaveBack extends PureComponent {
  state = {
    modalVisible: false,
    status: {}
  };
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };
  static contextType = NavigationContext;
  render() {
    const { modalVisible } = this.state;
    const jubao = () => {
      this.setModalVisible(!modalVisible);
      this.context.navigate('Jubao');
    };
    return (
      <View style={{ backgroundColor: '#ecf6fc' }}>
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
                <View style={{ alignItems: 'center' }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                      width: pxToDp(280),
                      alignItems: 'center'
                    }}
                  >
                    <TouchableOpacity style={{ alignItems: 'center' }}>
                      <FontAwesome name="qq" size={25} color="#87CEFA" />
                      <Text>qq</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignItems: 'center' }}>
                      <FontAwesome name="wechat" size={25} color="#32CD32" />
                      <Text>微信</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignItems: 'center' }}>
                      <FontAwesome name="weibo" size={25} color="#FA8072" />
                      <Text>微博</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{ alignItems: 'center' }}
                      onPress={jubao}
                    >
                      <FontAwesome
                        name="exclamation"
                        size={25}
                        color="#DC143C"
                      />
                      <Text>举报</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignItems: 'center' }}>
                      <Ionicons name="star" size={25} color="#FFD700" />
                      <Text>收藏</Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      this.setModalVisible(!modalVisible);
                    }}
                    style={{
                      borderWidth: pxToDp(1),
                      borderColor: 'black',
                      height: pxToDp(25),
                      width: pxToDp(200),
                      borderRadius: pxToDp(12),
                      alignItems: 'center',
                      marginTop: pxToDp(20)
                    }}
                  >
                    <Text style={{ fontSize: pxToDp(14) }}>取消</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </View>
        <View
          style={{
            width: '100%',
            height: pxToDp(48),
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <View style={styles.icon1}>
            <TouchableOpacity onPress={() => this.context.goBack()}>
              <Ionicons name={this.props.icon1} size={25} color="#468CD3" />
            </TouchableOpacity>
          </View>

          <View style={styles.textview}>
            {/* 标题名 */}
            <Text style={styles.textstyle}>{this.props.title}</Text>
          </View>

          <View style={styles.icon2}>
            {this.props.rightTitle ? null : (
              <TouchableOpacity
                onPress={() => {
                  this.setModalVisible(!modalVisible);
                }}
              >
                {/* <IconFont style={{ color: "#fff" }} name="iconfanhui" /> */}
                <Feather name={this.props.icon2} size={25} color="#468CD3" />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon1: {
    width: pxToDp(45),
    height: '100%',
    left: 5,
    justifyContent: 'center'
  },
  icon2: {
    width: pxToDp(40),
    height: '100%',
    justifyContent: 'center'
  },
  textview: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textstyle: {
    fontSize: pxToDp(18),
    color: '#468cd3'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    }
  }
});
