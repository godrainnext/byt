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
import changeImgSize from '@utils/changeImgSize';
import { NavigationContext } from '@react-navigation/native';
import { getUserFans } from '@service/mine';
class Index extends PureComponent {
  static contextType = NavigationContext;
  state = { fans: [] };
  componentDidMount() {
    this.addFollow = DeviceEventEmitter.addListener('addFollow', () => {
      getUserFans().then((res) => {
        this.setState({ fans: res.fans });
      });
    });

    getUserFans().then((res) => {
      this.setState({ fans: res.fans });
    });
  }
  componentWillUnmount() {
    this.addFollow.remove();
  }

  render() {
    return (
      <View style={{ backgroundColor: '#E2F4FE', flex: 1 }}>
        <Top icon1="arrow-back" title="粉丝" />
        <View>
          {this.state.fans.map((item) => (
            <View style={styles.box} key={item.id}>
              <TouchableOpacity
                onPress={() => this.context.navigate('OthersHome', item.id)}
                style={{ flexDirection: 'row', alignItems: 'center' }}
              >
                <Image
                  style={styles.image}
                  source={{ uri: changeImgSize(item.avatar) }}
                />
                <Text style={{ fontSize: pxToDp(16), marginLeft: pxToDp(10) }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.touch}>
                <Text style={{ fontSize: pxToDp(16), color: 'pink' }}>
                  已互粉
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textinput: {
    backgroundColor: '#F5F5F5',
    textAlign: 'center',
    height: pxToDp(40),
    borderRadius: pxToDp(32),
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
    borderRadius: pxToDp(24),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: 'pink'
  }
});
export default Index;
