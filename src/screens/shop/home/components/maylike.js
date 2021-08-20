import React, { PureComponent } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView
} from 'react-native';
import Top from '@components/common/top';
import { pxToDp } from '@utils/styleKits';
import Swiper from 'react-native-swiper';
import { NavigationContext } from '@react-navigation/native';
import Svg from 'react-native-svg-uri';
import { shopCar } from '../../../../component/common/iconSvg'
class Index extends PureComponent {
  static contextType = NavigationContext;
  render() {
    return (
      <View style={styles.ocard}>
        <TouchableOpacity
          onPress={() => this.context.navigate('Good', this.props.id)}
        >
          <Image
            style={styles.image}
            source={{ uri: this.props.imguri }}
          ></Image>
          <View style={{ padding: pxToDp(4) }}>
            <Text style={{ fontSize: pxToDp(15) }}>{this.props.name}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View style={styles.bottext}>
                <Text style={{ color: '#f0bb51', fontSize: pxToDp(15) }}>￥{this.props.price}</Text>
                <Text style={{ color: 'grey', fontSize: pxToDp(13) }}>{this.props.number}人付款</Text>
              </View>
              <TouchableOpacity style={styles.shopCar}>
                <Svg width="32" height="32" svgXmlData={shopCar} />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  ocard: {
    backgroundColor: 'white',
    width: pxToDp(172),
    borderRadius: pxToDp(8),
    margin: pxToDp(8),
    marginRight: pxToDp(5),
    elevation: 5,  //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
    shadowColor: 'black',  //  阴影颜色
    shadowRadius: pxToDp(8),  //  圆角
  },
  image: {
    height: pxToDp(170),
    width: pxToDp(172),
    borderTopLeftRadius: pxToDp(8),
    borderTopRightRadius: pxToDp(8)
  },
  shopCar: {
    elevation: 5,  //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
    shadowColor: 'gray',  //  阴影颜色
    shadowRadius: pxToDp(8),  //  圆角,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    height: pxToDp(32),
    width: pxToDp(32),
    borderRadius: pxToDp(16)
  }
});

export default Index;
