import React, { PureComponent } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  TouchableNativeFeedback
} from 'react-native';
import Top from '@components/common/top';
import { pxToDp } from '@utils/styleKits';
import Swiper from 'react-native-swiper';
import { NavigationContext } from '@react-navigation/native';
import Svg from 'react-native-svg-uri';
import { shopCar } from '../../../../component/common/iconSvg';
class Index extends PureComponent {
  static contextType = NavigationContext;
  render() {
    return (
      <View style={styles.ocard}>
        <TouchableNativeFeedback
          useForeground={true}
          onPress={() => this.context.navigate('Good', this.props.id)}
        >
          <View>
            <Image
              style={styles.image}
              source={{ uri: this.props.imguri }}
            ></Image>
            <View style={{ padding: pxToDp(8) }}>
              <Text style={{ fontSize: pxToDp(16), color: '#333333' }}>
                {this.props.name}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <View style={styles.bottext}>
                  <Text style={{ color: '#62bfad', fontSize: pxToDp(14) }}>
                    ￥{this.props.price}
                  </Text>
                  <Text style={{ color: '#999999', fontSize: pxToDp(12) }}>
                    {this.props.number}人付款
                  </Text>
                </View>
                <View style={styles.shopCar}>
                  <Svg width="20" height="20" svgXmlData={shopCar} />
                </View>
              </View>
            </View>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  ocard: {
    backgroundColor: 'white',
    width: pxToDp(164),
    borderRadius: pxToDp(8),
    marginTop: pxToDp(12),
    elevation: 2, //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
    shadowColor: 'black', //  阴影颜色
    shadowRadius: pxToDp(8) //  圆角
  },
  image: {
    height: pxToDp(170),
    width: '100%',
    borderTopLeftRadius: pxToDp(8),
    borderTopRightRadius: pxToDp(8)
  },
  shopCar: {
    height: pxToDp(30),
    width: pxToDp(30),
    borderRadius: pxToDp(15),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: pxToDp(2),
    borderColor: '#62bfad'
  }
});

export default Index;
