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

const images = [
  {
    uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.suning.cn%2Fuimg%2Fsop%2Fcommodity%2F116653756720291044813259_x.jpg&refer=http%3A%2F%2Fimage.suning.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630212204&t=22ad86c170d88f61d711ee42232071d9'
  },
  {
    uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcbu01.alicdn.com%2Fimg%2Fibank%2F2018%2F549%2F381%2F9152183945_1560607903.400x400.jpg&refer=http%3A%2F%2Fcbu01.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630212256&t=851b3be093f1822e6e741ad5e0feeee0'
  },
  {
    uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg14.360buyimg.com%2Fn1%2Fjfs%2Ft15130%2F245%2F2284505791%2F297895%2Ffa8ada4a%2F5a93939dNaa84c4c1.jpg&refer=http%3A%2F%2Fimg14.360buyimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630212303&t=e5e7a1cf401964bdfeca7410e630d1d0'
  }
];

class exswiper extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      imgUrl: {
        uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.suning.cn%2Fuimg%2Fsop%2Fcommodity%2F116653756720291044813259_x.jpg&refer=http%3A%2F%2Fimage.suning.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630212204&t=22ad86c170d88f61d711ee42232071d9'
      }
    };
  }

  switch = (index) => {
    this.setState({ imgUrl: index });
  };

  renderRow(obj, index) {
    return (
      <View style={styles.cell}>
        <Image
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: undefined,
            height: undefined
          }}
          resizeMode={'stretch'}
          source={obj}
        />
      </View>
    );
  }
  render() {
    return (
      <View>
        <View style={{ width: '100%', alignItems: 'center' }}>
          <View>
            <View style={styles.container}>
              <EZSwiper
                style={[styles.swiper, { width: pxToDp(410) }]}
                dataSource={images}
                width={pxToDp(410)}
                height={pxToDp(400)}
                renderRow={this.renderRow}
                // ratio={0.9}
                index={0}
                horizontal={true}
                loop={false}
                offset={0}
                onDidChange={(index) => this.switch(index)}
                // autoplayTimeout={false}
              />
            </View>
          </View>
          {/* <Image source={require('./blue.jpg')} style={styles.image}/> */}

          <TouchableOpacity
            style={{
              height: '40%',
              backgroundColor: '#383A3F',
              width: '85%',
              position: 'absolute',
              borderRadius: 3,
              bottom: 20,
              elevation: 10,
              padding: 15,
              flexDirection: 'row'
            }}
            onPress={() => this.props.navigation.navigate('shopDetail')}
          >
            <Image source={this.state.imgUrl} style={styles.image} />
            <View style={{ padding: 10 }}>
              <Text style={styles.big}>title</Text>
              <Text style={styles.mid}>neinong</Text>
            </View>
          </TouchableOpacity>
          <View>
            <Text>进入点击带色块的区间，点击换色</Text>
          </View>
        </View>
      </View>
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
    width: '96%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  image: {
    width: '50%',
    height: '100%'
    // zIndex:3,
  },
  big: {
    fontSize: 15,
    fontWeight: '700',
    color: 'white'
  },
  mid: {
    fontSize: 15,
    fontWeight: '400',
    color: 'white'
  }
});

export default exswiper;
