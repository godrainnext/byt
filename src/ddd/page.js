import React, { PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from 'react-native';
import { pxToDp } from './styleKits';

export default class page extends PureComponent {
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            margin: pxToDp(16),
            borderRadius: pxToDp(8),
            elevation: 1,
            shadowColor: 'black', //  阴影颜色
            shadowOffset: { width: 0, height: 0 }, // 阴影偏移
            shadowOpacity: 1, // 阴影不透明度
            shadowRadius: 10, //  圆角
          }}
        >
          <Text style={styles.big}>{this.props.currentdata.name}</Text>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: pxToDp(10),
              marginTop: pxToDp(-2),
              marginBottom: pxToDp(4),
            }}
          >
            <Text>{this.props.currentdata.local}</Text>
            <Text style={{ paddingLeft: pxToDp(20) }}>
              {this.props.currentdata.year2}
            </Text>
          </View>
          <View>
            <Text style={{ marginLeft: pxToDp(10), marginBottom: pxToDp(8),marginRight:pxToDp(10) }}>
              {this.props.currentdata.introduce}
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            {this.props.currentdata.img.map((item, id) => (
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
    fontSize: pxToDp(18),
    fontWeight: 'bold',
    color: '#000',
    margin: pxToDp(10),
    marginBottom: pxToDp(10),
  },
  mid: {
    fontSize: pxToDp(15),
    fontWeight: '400',
    color: 'white'
  }
});
