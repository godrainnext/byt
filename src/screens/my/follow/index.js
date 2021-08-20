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
import { NavigationContext } from '@react-navigation/native';

class Index extends PureComponent {
  static contextType = NavigationContext;

  state = { follow: [] };
  removeFollow = async (id) => {
    await cancelFollow(id);
    getUserFollow().then((res) => {
      this.setState({ follow: res.follow });
    });
  };
  componentDidMount() {
    this.removeFollows = DeviceEventEmitter.addListener('removeFollow', () => {
      getUserFollow().then((res) => {
        this.setState({ follow: res.follow });
      });
    });
    getUserFollow().then((res) => {
      this.setState({ follow: res.follow });
    });
  }
  componentWillUnmount() {
    this.removeFollows.remove();
  }
  render() {
    return (
      <View style={{ backgroundColor: '#E2F4FE', flex: 1 }}>
        <Top icon1="arrow-back" title="关注" />
        {this.state.follow?.map((item) => (
          <View style={styles.box} key={item.id}>
            <TouchableOpacity
              onPress={() => this.context.navigate('OthersHome', item.id)}
              style={{ flexDirection: 'row', alignItems: 'center' }}
            >
              <Image style={styles.image} source={{ uri: item.avatar }} />
              <Text style={{ fontSize: pxToDp(16), marginLeft: pxToDp(8) }}>
                {item.name ? item.name : '未知用户名'}
              </Text>
            </TouchableOpacity>
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
    marginLeft: pxToDp(8),
    marginRight: pxToDp(8),
    marginTop: pxToDp(8)
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: pxToDp(8),
    borderBottomWidth: pxToDp(1),
    borderBottomColor: '#D3D3D3',
    height: pxToDp(65)
  },
  image: {
    height: pxToDp(50),
    width: pxToDp(50),
    borderRadius: pxToDp(25),
    marginLeft: pxToDp(8)
  },
  touch: {
    height: pxToDp(30),
    width: pxToDp(80),
    marginRight: pxToDp(8),
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
