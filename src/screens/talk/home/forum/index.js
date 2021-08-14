import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

import { pxToDp } from '@utils/styleKits';

import Tiebar from './luntan';
import { NavigationContext } from '@react-navigation/native';
import { getMomentListByStatus } from '@service/moment';
class Index extends PureComponent {
  state = {
    field: ['活动精选', '热门话题'],
    showSharePop: false, //分享弹窗，默认不显示,
    dongtai: []
  };
  componentDidMount() {
    getMomentListByStatus(0).then((res) => {
      this.setState({ dongtai: [...res] });
      console.log(res);
    });
  }
  
  static contextType = NavigationContext;
  render() {
    return (
      <ScrollView>
        <View></View>
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
