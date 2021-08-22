import React, { PureComponent } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  Button
} from 'react-native';

import EZSwiper from 'react-native-ezswiper';
import { pxToDp } from './styleKits';

export default class page extends PureComponent {
  render() {
    return (
      <ScrollView>
        <View
          style={{
            backgroundColor:"#fff",
            margin:pxToDp(8),
            borderRadius: pxToDp(8),
            elevation: 4,
            shadowColor: 'black',  //  阴影颜色
            shadowOffset: { width: 0, height: 0 },  // 阴影偏移
            shadowOpacity: 1,  // 阴影不透明度
            shadowRadius: 10,  //  圆角
          }}
        >
          <Text style={styles.big}>{this.props.pagedata.name}</Text>
          <View style={{ flexDirection: 'row', paddingLeft: pxToDp(20) }}>
            <Text>{this.props.pagedata.local}</Text>
            <Text style={{ paddingLeft: pxToDp(20) }}>{this.props.pagedata.year2}</Text>
          </View>
          <View>
            <Text style={{ padding: pxToDp(20) }}>{this.props.pagedata.introduce}</Text>
          </View>
          <View style={{ flex: 1 }}>
            {this.props.pagedata.img.map((item, id) => (
              <View key={id} style={{ flex: 1 }}>
                <Image
                  key={id}
                  source={{ uri: item }}
                  style={{
                    width: '90%',
                    height: pxToDp(300),
                    alignSelf: 'center',
                    marginBottom: pxToDp(10),
                    borderRadius: pxToDp(8)
                  }}
                />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center'
    // top:300
  },
  swiper: {
    backgroundColor: '#f1f1f1'
  },
  cell: {
    // backgroundColor: 'red',
    width: '100%',
    height: '100%',
    borderWidth: pxToDp(5),
    borderRadius: pxToDp(24)
  },

  image: {
    width: '50%',
    height: '100%'
    // zIndex:3,
  },
  big: {
    fontSize: pxToDp(25),
    fontWeight: '700',
    color: '#000',
    margin: pxToDp(20),
    marginBottom: pxToDp(10)
  },
  mid: {
    fontSize: pxToDp(15),
    fontWeight: '400',
    color: 'white'
  }
});
