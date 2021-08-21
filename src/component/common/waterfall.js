import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  TouchableOpacity
} from 'react-native';
// import FastImage from 'react-native-fast-image';
import Masonry from 'react-native-masonry';
import { pxToDp } from '../../utils/styleKits';
// import Slider from '@react-native-community/slider';
// list of images
let data = [
  {
    data: {
      caption: '呜呜呜现场太好看了'
    },
    uri: 'https://img-pre.ivsky.com/img/tupian/pre/201102/21/yueju_xiyuanji_wutaijuzhao-012.jpg',
    renderFooter: (data) => {
      return (
        <View key="brick-header" style={styles.box}>
          <TouchableOpacity>
            <Text style={{ lineHeight: 20, fontSize: 14 }}>{data.caption}</Text>
          </TouchableOpacity>
        </View>
      );
    }
  },
  {
    data: {
      caption: '唱作俱佳，期待更多演出'
    },
    uri: 'http://www.hq.xinhuanet.com/news/2018-07/18/1123142330_15318781642021n.jpg',
    renderFooter: (data) => {
      return (
        <View key="brick-header" style={styles.box}>
          <TouchableOpacity>
            <Text style={{ lineHeight: 20, fontSize: 14 }}>{data.caption}</Text>
          </TouchableOpacity>
        </View>
      );
    }
  },
  {
    data: {
      caption: '偶像简直帅爆了，唱功一流！'
    },
    uri: 'https://img.zcool.cn/community/01f69759089f88a801214550da5668.jpg@1280w_1l_2o_100sh.jpg',
    renderFooter: (data) => {
      return (
        <View key="brick-header" style={styles.box}>
          <TouchableOpacity>
            <Text style={{ lineHeight: 20, fontSize: 14 }}>{data.caption}</Text>
          </TouchableOpacity>
        </View>
      );
    }
  },
  {
    data: {
      caption: '演奏技巧与情绪宣泄都十分到位'
    },
    uri: 'https://im0-tub-com.yandex.net/i?id=311621150350fec7aa7f86f39adc2010&n=13&exp=1',
    renderFooter: (data) => {
      return (
        <View key="brick-header" style={styles.box}>
          <TouchableOpacity>
            <Text style={{ lineHeight: 20, fontSize: 14 }}>{data.caption}</Text>
          </TouchableOpacity>
        </View>
      );
    }
  },
  {
    data: {
      caption: '演的精彩！下次还来捧场'
    },
    uri: 'https://n.sinaimg.cn/sinakd10114/561/w640h721/20210811/7bee-e49e2ffc4b5387cc43620674c52db664.jpg',
    renderFooter: (data) => {
      return (
        <View key="brick-header" style={styles.box}>
          <TouchableOpacity>
            <Text style={{ lineHeight: 20, fontSize: 14 }}>{data.caption}</Text>
          </TouchableOpacity>
        </View>
      );
    }
  },
  {
    data: {
      caption: '名家荟萃，很多段子是第一次现场观看'
    },
    uri: 'https://img-pre.ivsky.com/img/tupian/pre/201102/21/yueju_xiyuanji_wutaijuzhao-001.jpg',
    renderFooter: (data) => {
      return (
        <View key="brick-header" style={styles.box}>
          <TouchableOpacity>
            <Text style={{ lineHeight: 20, fontSize: 14 }}>{data.caption}</Text>
          </TouchableOpacity>
        </View>
      );
    }
  },
  {
    data: {
      caption: '我终于来见你了，明目张胆又深情款款'
    },
    uri: 'https://img-pre.ivsky.com/img/tupian/pre/201102/21/yueju_xiyuanji_wutaijuzhao-007.jpg',
    renderFooter: (data) => {
      return (
        <View key="brick-header" style={styles.box}>
          <TouchableOpacity>
            <Text style={{ lineHeight: 20, fontSize: 14 }}>{data.caption}</Text>
          </TouchableOpacity>
        </View>
      );
    }
  },
  {
    data: {
      caption: '没有任何形容词可以来表达内心的激动'
    },
    uri: 'https://img-pre.ivsky.com/img/tupian/pre/201102/21/yueju_xueshouyin_wutaijuzhao-002.jpg',
    renderFooter: (data) => {
      return (
        <View key="brick-header" style={styles.box}>
          <TouchableOpacity>
            <Text style={{ lineHeight: 20, fontSize: 14 }}>{data.caption}</Text>
          </TouchableOpacity>
        </View>
      );
    }
  },
  {
    data: {
      caption: '看哭了看哭了，真是国粹！'
    },
    uri: 'https://img-pre.ivsky.com/img/tupian/pre/201102/21/yuejuwutairenwu.jpg',
    renderFooter: (data) => {
      return (
        <View key="brick-header" style={styles.box}>
          <TouchableOpacity>
            <Text style={{ lineHeight: 20, fontSize: 14 }}>{data.caption}</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
];

const createBrick = (uri) => ({ uri });

const data1 = [
  'https://t7.baidu.com/it/u=2338252153,649362902&fm=193&f=GIF',
  'https://t7.baidu.com/it/u=1922394591,3720337942&fm=193&f=GIF',
  'https://t7.baidu.com/it/u=2373005152,2504562567&fm=193&f=GIF'
].map(createBrick);

const data2 = [
  'https://t7.baidu.com/it/u=2923241779,2573640847&fm=193&f=GIF',
  'https://t7.baidu.com/it/u=890938330,494135193&fm=193&f=GIF',
  'https://t7.baidu.com/it/u=153134176,2818220628&fm=193&f=GIF'
].map(createBrick);

const data3 = [
  'https://t7.baidu.com/it/u=1652624770,1452801921&fm=193&f=GIF',
  'https://t7.baidu.com/it/u=2501110440,16462349&fm=193&f=GIF',
  'https://t7.baidu.com/it/u=1117806358,2517440368&fm=193&f=GIF'
].map(createBrick);

const appendData = [data1, data2, data3];

export default class example extends Component {
  constructor() {
    super();

    this.state = {
      columns: 2,
      padding: 5,
      data,
      dataIndex: 0
    };
  }

  _addData = () => {
    if (this.state.dataIndex < 3) {
      this.setState((state) => {
        const addData = appendData[this.state.dataIndex];
        const appendedData = [...state.data, ...addData];

        return {
          data: appendedData,
          dataIndex: state.dataIndex + 1
        };
      });
    }
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#f4f4f4' }}>
        {/* <View style={[styles.center, styles.header]}>
					<Text style={{ fontWeight: '800', fontSize: 20 }}>市集</Text>
				</View> */}
        <View style={{ flex: 1, flexGrow: 10, padding: this.state.padding }}>
          <Masonry
            bricks={this.state.data}
            columns={this.state.columns}
            onEndReached={this._addData}
            priority="balance"
            //缝隙
            spacing={3}
            imageContainerStyle={{
              borderTopLeftRadius: pxToDp(16),
              borderTopRightRadius: pxToDp(16),
              borderBottomWidth: 3,
              borderBottomColor: 'red'
            }}
            // customImageComponent={FastImage}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    flex: 1,
    flexBasis: '10%'
  },
  header: {
    flexGrow: 1
  },
  buttonGroup: {
    flexGrow: 1
  },
  slider: {
    flexGrow: 1
  },
  button: {
    backgroundColor: '#dbdcdb',
    padding: 10,
    marginRight: 4,
    borderRadius: 4,
    borderBottomColor: '#7b7b7b',
    borderBottomWidth: 5
  },
  buttonText: {
    color: '#404040'
  },
  center: {
    marginTop: 30,
    // marginBottom: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  headerTop: {
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  userPic: {
    height: 20,
    width: 20,
    borderRadius: 8,
    marginRight: 10
  },
  userName: {
    fontSize: 20
  },
  box: {
    backgroundColor: 'white',
    padding: 5,
    paddingRight: 9,
    paddingLeft: 9,
    borderBottomLeftRadius: pxToDp(16),
    borderBottomRightRadius: pxToDp(16)
  }
});
