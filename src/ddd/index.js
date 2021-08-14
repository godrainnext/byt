import React, { PureComponent, createRef } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image
} from 'react-native';
import Page from './page';
import { Modalize } from 'react-native-modalize';
import EZSwiper from 'react-native-ezswiper';
import { pxToDp } from './styleKits';
const screenWidth = Dimensions.get('window').width;
const imgzz =
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg14.360buyimg.com%2Fn1%2Fjfs%2Ft15130%2F245%2F2284505791%2F297895%2Ffa8ada4a%2F5a93939dNaa84c4c1.jpg&refer=http%3A%2F%2Fimg14.360buyimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630212303&t=e5e7a1cf401964bdfeca7410e630d1d0';

export default class Exswiper extends PureComponent {
  state = {
    currentPage: {
      id: 1,
      year: '1921年',
      name: '徐玉兰1',
      local: '富阳区1',
      title: 'abab',
      local: '1富阳',
      year2: '1921年~2017年',
      introduce: '1阿巴阿巴阿巴阿巴阿巴',
      img: [imgzz, imgzz, imgzz],
      nearby: [{ location: '122', event: '111', time: '111' }],
      titleimg: [imgzz, imgzz, imgzz]
    },
    pagedata: [
      {
        id: 1,
        year: '1921年',
        name: '徐玉兰1',
        local: '富阳区1',
        title: 'abab',
        local: '1富阳',
        year2: '1921年~2017年',
        introduce: '1阿巴阿巴阿巴阿巴阿巴',
        img: [imgzz, imgzz, imgzz],
        nearby: [{ location: '122', event: '111', time: '111' }],
        titleimg: [imgzz, imgzz, imgzz]
      },
      {
        id: 2,
        year: '1921年',
        name: '徐玉兰2',
        local: '富阳区2',
        title: 'abab',
        local: '2富阳',
        year2: '1921年~2017年',
        introduce: '2阿巴阿巴阿巴阿巴阿巴',
        img: [imgzz, imgzz, imgzz],
        nearby: [{ location: '122', event: '111', time: '111' }],
        titleimg: [imgzz, imgzz, imgzz]
      },
      {
        id: 3,
        year: '1921年',
        name: '徐玉兰3',
        local: '富阳区3',
        title: 'abab',
        local: '3富阳',
        year2: '1921年~2017年',
        introduce: '3阿巴阿巴阿巴阿巴阿巴',
        img: [imgzz, imgzz, imgzz],
        nearby: [{ location: '122', event: '111', time: '111' }],
        titleimg: [imgzz, imgzz, imgzz]
      },
      {
        id: 4,
        year: '1921年',
        name: '徐玉兰3',
        local: '富阳区4',
        title: 'abab',
        local: '4富阳',
        year2: '1921年~2017年',
        introduce: '3阿巴阿巴阿巴阿巴阿巴',
        img: [imgzz, imgzz, imgzz],
        nearby: [{ location: '122', event: '111', time: '111' }],
        titleimg: [imgzz, imgzz, imgzz]
      },
      {
        id: 5,
        year: '1921年',
        name: '徐玉兰3',
        local: '富阳区5',
        title: 'abab',
        local: '5富阳',
        year2: '1921年~2017年',
        introduce: '3阿巴阿巴阿巴阿巴阿巴',
        img: [imgzz, imgzz, imgzz],
        nearby: [{ location: '122', event: '111', time: '111' }],
        titleimg: [imgzz, imgzz, imgzz]
      },
      {
        id: 6,
        year: '1921年',
        name: '徐玉兰3',
        local: '富阳区6',
        title: 'abab',
        local: '6富阳',
        year2: '1921年~2017年',
        introduce: '3阿巴阿巴阿巴阿巴阿巴',
        img: [imgzz, imgzz, imgzz],
        nearby: [{ location: '122', event: '111', time: '111' }],
        titleimg: [imgzz, imgzz, imgzz]
      },
      {
        id: 7,
        year: '1921年',
        name: '徐玉兰3',
        local: '富阳区7',
        title: 'abab',
        local: '7富阳',
        year2: '1921年~2017年',
        introduce: '3阿巴阿巴阿巴阿巴阿巴',
        img: [imgzz, imgzz, imgzz],
        nearby: [{ location: '122', event: '111', time: '111' }],
        titleimg: [imgzz, imgzz, imgzz]
      },
      {
        id: 8,
        year: '1921年',
        name: '徐玉兰3',
        local: '富阳区8',
        title: 'abab',
        local: '8富阳',
        year2: '1921年~2017年',
        introduce: '3阿巴阿巴阿巴阿巴阿巴',
        img: [imgzz, imgzz, imgzz],
        nearby: [{ location: '122', event: '111', time: '111' }],
        titleimg: [imgzz, imgzz, imgzz]
      },
      {
        id: 9,
        year: '1921年',
        name: '徐玉兰3',
        local: '富阳区9',
        title: 'abab',
        local: '9富阳',
        year2: '1921年~2017年',
        introduce: '3阿巴阿巴阿巴阿巴阿巴',
        img: [imgzz, imgzz, imgzz],
        nearby: [{ location: '122', event: '111', time: '111' }],
        titleimg: [imgzz, imgzz, imgzz]
      },
      {
        id: 10,
        year: '1921年',
        name: '徐玉兰3',
        local: '富阳区10',
        title: 'abab',
        local: '10富阳',
        year2: '1921年~2017年',
        introduce: '3阿巴阿巴阿巴阿巴阿巴',
        img: [imgzz, imgzz, imgzz],
        nearby: [{ location: '122', event: '111', time: '111' }],
        titleimg: [imgzz, imgzz, imgzz]
      },
      {
        id: 11,
        year: '1921年',
        name: '徐玉兰3',
        local: '富阳区11',
        title: 'abab',
        local: '11富阳',
        year2: '1921年~2017年',
        introduce: '3阿巴阿巴阿巴阿巴阿巴',
        img: [imgzz, imgzz, imgzz],
        nearby: [{ location: '122', event: '111', time: '111' }],
        titleimg: [imgzz, imgzz, imgzz]
      },
      {
        id: 12,
        year: '1921年',
        name: '徐玉兰3',
        local: '富阳区12',
        title: 'abab',
        local: '12富阳',
        year2: '1921年~2017年',
        introduce: '3阿巴阿巴阿巴阿巴阿巴',
        img: [imgzz, imgzz, imgzz],
        nearby: [{ location: '122', event: '111', time: '111' }],
        titleimg: [imgzz, imgzz, imgzz]
      }
    ]
  };

  changepage = (obj) => {
    this.setState({ currentPage: obj });
  };
  renderRow(obj) {
    return (
      <View key={obj.id} style={styles.cell}>
        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{obj.year}</Text>
          <Text style={{ color: '#ff755d', fontWeight: 'bold' }}>
            {obj.name}
          </Text>
          <Text style={{ color: '#aeaeae', fontSize: 12 }}>{obj.local}</Text>
          <View
            style={{
              position: 'absolute',
              top: 0,
              right: 10,
              flexDirection: 'row'
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#fa6e57',
                top: -5
              }}
            >
              {obj.id}
            </Text>
            <Text
              style={{
                fontSize: 15
              }}
            >
              / {this.state.pagedata.length}
            </Text>
          </View>
        </View>
      </View>
    );
  }
  render() {
    const modalizeRef = createRef();
    return (
      <View style={{ flex: 1 }}>
        <View style={{ width: '90%', alignSelf: 'center' }}>
          {this.state.currentPage.titleimg.map((item, id) => (
            <Image
              key={id}
              style={{ height: 200, marginBottom: 10 }}
              source={{ uri: item }}
            />
          ))}
        </View>
        <Modalize
          ref={modalizeRef}
          modalStyle={styles.content__modal}
          alwaysOpen={500}
          handlePosition="inside"
        >
          <View style={{ marginBottom: pxToDp(200) }}>
            <View style={{ flex: 1 }}>
              <View style={styles.container}>
                <EZSwiper
                  style={[styles.swiper, { width: '100%' }]}
                  dataSource={this.state.pagedata}
                  width={360}
                  height={pxToDp(100)}
                  renderRow={this.renderRow.bind(this)}
                  ratio={1}
                  index={0}
                  horizontal={true}
                  loop={false}
                  onDidChange={(index) => this.changepage(index)}
                  // autoplayTimeout={false}
                />
              </View>
              {/* <Image source={require('./blue.jpg')} style={styles.image}/> */}
              <Page pagedata={this.state.currentPage} />
            </View>
          </View>
        </Modalize>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',

    // top:300
    height: 100
  },
  swiper: {
    backgroundColor: '#f1f1f1'
  },
  cell: {
    // backgroundColor: 'red',
    width: '90%',
    height: '90%',
    borderWidth: 2,
    borderColor: '#e08471',
    borderRadius: 10,
    padding: 10,
    marginTop: 5,
    marginLeft: 18
  },
  content__modal: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.45,
    shadowRadius: 16
  },
  image: {
    width: '50%',
    height: '100%'
    // zIndex:3,
  },
  big: {
    fontSize: 25,
    fontWeight: '700',
    color: 'white',
    margin: 20,
    marginBottom: 10
  },
  mid: {
    fontSize: 15,
    fontWeight: '400',
    color: 'white'
  }
});
