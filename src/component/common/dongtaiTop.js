import React, { PureComponent } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import { NavigationContext } from '@react-navigation/native';
import { pxToDp, screenWidth } from '../../utils/styleKits';
import Mybtn from './mybtn';
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
      <View style={{ backgroundColor: '#D5E8E6' }}>
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
                      <FontAwesome5 name="heart-broken" size={25} color="#999999" />
                      <Text>不感兴趣</Text>
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
                  <Mybtn
                    title="取消"
                    onPress={() => {
                      this.setModalVisible(!modalVisible);
                    }}
                    buttonStyle={{
                      width: pxToDp(90),
                      height: pxToDp(30),
                      alignSelf: 'center',
                      borderRadius: pxToDp(32),
                      marginTop: pxToDp(32)
                    }}
                    titleStyle={{
                      color: 'white',
                      marginTop: pxToDp(-3),
                      fontSize: pxToDp(14)
                    }}
                  />
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
              <Ionicons name={this.props.icon1} size={25} color="#62bfad" />
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
                <Feather name={this.props.icon2} size={25} color="#62bfad" />
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
    left: pxToDp(16),
    justifyContent: 'center'
  },
  icon2: {
    width: pxToDp(40),
    right: pxToDp(16),
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
    color: '#62bfad'
  },
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
