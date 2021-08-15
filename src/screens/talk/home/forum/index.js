import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Modal,
  DeviceEventEmitter
} from 'react-native';

import { pxToDp } from '@utils/styleKits';

import Tiebar from './luntan';
import { NavigationContext } from '@react-navigation/native';
import { getMomentListByStatus } from '@service/moment';
import Addmoment from './addMoment';
import { FAB } from 'react-native-elements';

class Index extends PureComponent {
  state = {
    field: ['活动精选', '热门话题'],
    showSharePop: false, //分享弹窗，默认不显示,
    dongtai: [],
    isShow: false //
  };
  componentDidMount() {
    this.changeListener = DeviceEventEmitter.addListener('momentChange');
    getMomentListByStatus(0, 0, 10).then((res) => {
      this.setState({ dongtai: [...res].reverse() });
      console.log(res);
    });
  }
  componentWillUnmount() {
    this.changeListener.remove();
  }
  changeVisible = () => {
    console.log(123);
    this.setState({ isShow: !this.state.isShow });
  };

  static contextType = NavigationContext;
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#ecf6fc' }}>
        <View>
          <Addmoment
            toggleModalProps={this.changeVisible}
            isModalVisible={this.state.isShow}
          />
        </View>
        <ScrollView>
          <View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{ height: 150 }}
            >
              {this.state.field.map((item, index) => (
                <TouchableOpacity
                  style={{
                    marginLeft: pxToDp(10),
                    marginTop: pxToDp(30),
                    width: pxToDp(200),
                    height: pxToDp(90),
                    borderRadius: pxToDp(10)
                  }}
                >
                  <ImageBackground
                    source={require('../../../../res/play/1.jpg')}
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '100%',
                      height: '100%',
                      opacity: 0.6,
                      backgroundColor: 'black',
                      borderRadius: pxToDp(10)
                    }}
                    imageStyle={{ borderRadius: pxToDp(10) }}
                  >
                    <Text style={{ color: 'white', fontSize: pxToDp(20) }}>
                      {item}
                    </Text>
                  </ImageBackground>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <View style={{ marginLeft: pxToDp(10) }}>
              <Text style={{ fontSize: pxToDp(25), fontWeight: 'bold' }}>
                小NGA奥
              </Text>
            </View>

            <Tiebar dongtai={this.state.dongtai} />
          </View>
        </ScrollView>
        <FAB
          size="large"
          placement="right"
          color="#B0C4DE"
          onPress={this.changeVisible}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: pxToDp(130),
    backgroundColor: 'transparent'
  }
});
export default Index;
