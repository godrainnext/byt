import React, { PureComponent } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  DeviceEventEmitter
} from 'react-native';
import Top from '../../../component/common/top';
import { pxToDp } from '../../../utils/styleKits';
import { getUserFollow, cancelFollow } from '@service/mine';
class Index extends PureComponent {
  state = { follow: [] };
  componentDidMount() {}
  removeFollow = async (id) => {
    await cancelFollow(id);
    DeviceEventEmitter.emit('removeFollow');
  };
  render() {
    return (
      <View style={{ backgroundColor: '#E2F4FE', flex: 1 }}>
        <Top icon1="arrow-back" title="关注" />
        {this.props.route.params?.map((item) => (
          <View style={styles.box} key={item.id}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image style={styles.image} source={{ uri: item.avatar }} />
              <Text style={{ fontSize: pxToDp(16), marginLeft: pxToDp(10) }}>
                {item.name ? item.name : '未知用户名'}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.touch}
              onPress={() => this.removeFollow(item.id)}
            >
              <Text style={{ fontSize: pxToDp(16), color: 'pink' }}>
                取消关注
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textinput: {
    backgroundColor: '#F5F5F5',
    textAlign: 'center',
    height: pxToDp(40),
    borderRadius: pxToDp(30),
    marginLeft: pxToDp(10),
    marginRight: pxToDp(10),
    marginTop: pxToDp(5)
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: pxToDp(10),
    borderBottomWidth: pxToDp(1),
    borderBottomColor: '#D3D3D3',
    height: pxToDp(65)
  },
  image: {
    height: pxToDp(50),
    width: pxToDp(50),
    borderRadius: pxToDp(25),
    marginLeft: pxToDp(10)
  },
  touch: {
    height: pxToDp(30),
    width: pxToDp(80),
    marginRight: pxToDp(10),
    alignSelf: 'center',
    borderRadius: pxToDp(20),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderColor: 'pink',
    borderWidth: 1
  }
});
export default Index;
