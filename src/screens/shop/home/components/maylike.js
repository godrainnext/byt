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
            <Text style={{ fontSize: pxToDp(16),color:'#333333'}}>{this.props.name}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View style={styles.bottext}>
                <Text style={{ color: '#f0bb51', fontSize: pxToDp(14) }}>￥{this.props.price}</Text>
                <Text style={{ color: '#999999', fontSize: pxToDp(12), }}>{this.props.number}人付款</Text>
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
    width: pxToDp(165.5),
    borderRadius: pxToDp(8),
    marginTop:pxToDp(10),
    elevation: 5,  //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
    shadowColor: 'black',  //  阴影颜色
    shadowRadius: pxToDp(8),  //  圆角
  },
  image: {
    height: pxToDp(160),
    width: pxToDp(165.5),
    borderTopLeftRadius: pxToDp(8),
    borderTopRightRadius: pxToDp(8)
  },
  shopCar: {
    elevation: 5,  //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
    shadowColor: 'grey',  //  阴影颜色
    shadowRadius: pxToDp(16),  //  圆角,
    height: pxToDp(28),
    width: pxToDp(28),
    borderRadius: pxToDp(14),
    alignItems:'center',
    justifyContent:'center'
  }
});

export default Index;
