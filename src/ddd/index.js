import React, { PureComponent, createRef } from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import Page from './page';
import { Modalize } from 'react-native-modalize';

import { pxToDp } from './styleKits';
import Top from '../component/common/top';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
const screenWidth = Dimensions.get('window').width;
const imgzz =
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01b5d25e437bd7a801216518a5dfcc.jpg%401280w_1l_2o_100sh.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631521402&t=fb184d02ab6406a9632bc6918240d82d';
const gaobinghuo =
  'https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/baike/s=220/sign=5e4c07519258d109c0e3aeb0e158ccd0/a5c27d1ed21b0ef498cdfc71ddc451da81cb3ef3.jpg';
const weimeiduo =
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fa4.att.hudong.com%2F46%2F19%2F01300000688399127469195386240_s.jpg&refer=http%3A%2F%2Fa4.att.hudong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632127775&t=fbee03fa7962c6d7c85dca8f53cf2461';
const feicuitang =
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fm.yueju.net%2Frepository%2Fimage%2FrQb8apG2R_69hOG-194FKA.jpg&refer=http%3A%2F%2Fm.yueju.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632127789&t=a5a3f48ab43e75a2c9843a4ee0aefd26';
const baiyumei =
  'https://bkimg.cdn.bcebos.com/pic/b999a9014c086e061d95d34b2f476cf40ad162d95d29?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto';
const shiyinghua1 =
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fa1.att.hudong.com%2F25%2F40%2F01300000016998118914042636825_s.jpg&refer=http%3A%2F%2Fa1.att.hudong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632127836&t=3e93ce25577272873202b2fc7d89378c';
const shiyinghua2 =
  'https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/baike/s=220/sign=ea7f6ae8ab773912c0268263c8188675/3c6d55fbb2fb4316715e562f22a4462309f7d325.jpg';
const yaoshuijuan =
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fii.911cha.com%2Fyingwenming%2Fmingxing%2F13255.jpg&refer=http%3A%2F%2Fii.911cha.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632126532&t=9064b95758bd11d17a7ef88727e2e24a';
const wangxinghua =
  'https://bkimg.cdn.bcebos.com/pic/8326cffc1e178a82f2f4ffb8f403738da877e8da?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto';
const yinguifang1 =
  'https://gss0.baidu.com/70cFfyinKgQFm2e88IuM_a/forum/w=580/sign=b15640fe0c3387449cc52f74610ed937/f552cdc451da81cb7ea99d635266d01608243188.jpg';
const yinguifang2 =
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F8385014932%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632126633&t=36adff9adbab2102feb11850fc657cb9';
const xiaodangui1 =
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp3.qhmsg.com%2Fdmsmty%2F702_985_%2Ft017408a4d356f0bef1.jpg&refer=http%3A%2F%2Fp3.qhmsg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632127909&t=8428fa16eb953be8670a8cbd901abacf';
const xiaodangui2 =
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fa0.att.hudong.com%2F70%2F18%2F01300000222260121935183203366.jpg&refer=http%3A%2F%2Fa0.att.hudong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632127924&t=3077c25013e058beb5c762f80c28798d';
const xuyulan =
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffjrb.fjsen.com%2Ffjrb%2Fimages%2F2017-04%2F20%2F12%2Fres07_attpic_brief.jpg&refer=http%3A%2F%2Ffjrb.fjsen.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632126735&t=dc748f1d31e93205a54aca343e10a938';
const yuanxuefeng1 =
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.hinews.cn%2Fpic%2F0%2F11%2F49%2F13%2F11491385_151951.jpg&refer=http%3A%2F%2Fwww.hinews.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632127950&t=c06368f2c4e2cdd36b01d394c350f4fe';
const yuanxuefeng2 =
  'https://img1.baidu.com/it/u=1844694310,3908600857&fm=26&fmt=auto&gp=0.jpg';
const zhangguifeng =
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdaily.cnnb.com.cn%2Fwbcs%2Fres%2F1%2F20120305%2F26751330880706711.jpg&refer=http%3A%2F%2Fdaily.cnnb.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632127994&t=a886d2ea3f49c378b2aff2737f1f5896';
const zhushuizhao =
  'https://img1.baidu.com/it/u=763936269,3191378860&fm=26&fmt=auto&gp=0.jpg';
const fuquanxiang =
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhznews.hangzhou.com.cn%2Fwenti%2Fcontent%2Fattachement%2Fjpg%2Fsite2%2F20171025%2F00e04c46002f1b5a15b403.jpg&refer=http%3A%2F%2Fhznews.hangzhou.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632128020&t=269991ae41581346d6355b96f1acb4cc';
const fanruijuan =
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg10.huaien.com%2F12%2F20170220%2F1487560619272.png&refer=http%3A%2F%2Fimg10.huaien.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632128037&t=5cb5fe841b4628b2d7e08ef0f3e893be';
const xutianhong =
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimages.china.cn%2Fattachement%2Fjpg%2Fsite1000%2F20090304%2F000802e406ec0b1872060d.jpg&refer=http%3A%2F%2Fimages.china.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632128053&t=69e3f77e4eb50651f61aba1bf1da6516';
const wuxiaolou =
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs14.sinaimg.cn%2Fbmiddle%2F521ce24c06e1790c1f2fd&refer=http%3A%2F%2Fs14.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632126917&t=674af89d181d207256a6c207d11c097f';
const zhuiyu =
  'https://img0.baidu.com/it/u=3421590723,3157332085&fm=26&fmt=auto&gp=0.jpg';
const heying =
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20181114%2F5c1f8294dd634a91a344903c53d5fe71.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632128075&t=072d8bda169f250d256f03565e39c4fd';
const hesaifei1 =
  'https://img1.baidu.com/it/u=2406477329,1594733909&fm=26&fmt=auto&gp=0.jpg';
const hesaifei2 =
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdingyue.nosdn.127.net%2F8tdzDoYs9sQciKwRQSshI6qTUyFSDR2claG%3DY52T087Dh1534402855712compressflag.png&refer=http%3A%2F%2Fdingyue.nosdn.127.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632127002&t=989c2a9a0fae15cad0216e667ef216c6';

export default class Exswiper extends PureComponent {
  state = {
    currentPage: {
      id: 1,
      year: '1879???',
      name: '??????????????????',
      local: '?????????',
      year2: '1921???~2017???',
      introduce:
        '1906???????????????????????????????????????????????????????????????????????????????????????',
      img: [gaobinghuo],

      titleimg: [imgzz]
    },
    pagedata: [
      {
        id: 1,
        year: '1879???',
        name: '??????????????????',
        local: '?????????',
        year2: '1879???~1956???',
        introduce:
          '1906????????????????????????????????????????????????????????????????????????????????????',
        img: [gaobinghuo],

      },
      {
        id: 2,
        year: '1890???',
        name: '?????????????????????',
        local: '?????????',
        year2: '1890???~1931???',
        introduce: '??????????????????????????????????????????????????????',
        img: [weimeiduo],
        titleimg: [imgzz]
      },
      {
        id: 3,
        year: '1890???',
        name: '??????????????????',
        local: '?????????',
        year2: '1890???',
        introduce:
          '1906???3???27????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????',
        img: [],
        titleimg: [imgzz]
      },
      {
        id: 4,
        year: '1895???',
        name: '?????????????????????',
        local: '?????????',
        year2: '1895???~1967???',
        introduce: '??????????????????????????????????????????',
        img: [feicuitang],
        titleimg: [imgzz]
      },
      {
        id: 5,
        year: '1897???',
        name: '?????????????????????',
        local: '?????????',
        year2: '1897???~1976???',
        introduce:
          '?????????????????????????????????????????????????????????\n18????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????',
        img: [baiyumei],
        titleimg: [imgzz]
      },
      {
        id: 6,
        year: '1906???',
        name: '????????????',
        local: '?????????',
        year2: '1906???',
        introduce:
          '1906????????????????????????3???27??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????',
        img: [],
        titleimg: [imgzz]
      },
      {
        id: 7,
        year: '1910???',
        name: '?????????????????????',
        local: '?????????',
        year2: '1910???~1984???',
        introduce: '??????????????????????????????',
        img: [shiyinghua1, shiyinghua2],
        titleimg: [imgzz]
      },
      {
        id: 8,
        year: '1916???',
        name: '?????????????????????',
        local: '?????????',
        year2: '1916???~2076???',
        introduce: '??????????????????????????????????????????????????????????????????????????????',
        img: [yaoshuijuan],
        titleimg: [imgzz]
      },
      {
        id: 9,
        year: '1916???',
        name: '????????????',
        local: '?????????',
        year2: '1917???',
        introduce:
          '1917??????????????????????????????????????????????????????????????????????????????????????????????????????????????????',
        img: [],
        titleimg: [imgzz]
      },
      {
        id: 10,
        year: '1917???',
        name: '?????????????????????',
        local: '?????????',
        year2: '1917???~1999???',
        introduce: '???????????????????????????????????????',
        img: [wangxinghua],
        titleimg: [imgzz]
      },
      {
        id: 11,
        year: '1919???',
        name: '?????????????????????',
        local: '?????????',
        year2: '1919???~2000???',
        introduce: '???????????????????????????????????????',
        img: [yinguifang1, yinguifang2],
        titleimg: [imgzz]
      },
      {
        id: 12,
        year: '1920???',
        name: '?????????????????????',
        local: '?????????',
        year2: '1920???~1947???',
        introduce: '???????????????????????????????????????',
        img: [xiaodangui1, xiaodangui2],
        titleimg: [imgzz]
      },
      {
        id: 13,
        year: '1921???',
        name: '?????????????????????',
        local: '?????????',
        year2: '1921???~2017???',
        introduce: '???????????????????????????',
        img: [xuyulan],
        titleimg: [imgzz]
      },
      {
        id: 14,
        year: '1922???',
        name: '?????????????????????',
        local: '?????????',
        year2: '1922???~2011???',
        introduce:
          '???????????????????????????????????????????????????????????????\n 1946?????????????????????????????????????????????????????????????????????????????????????????????\n1949???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????',
        img: [yuanxuefeng1, yuanxuefeng2],
        titleimg: [imgzz]
      },
      {
        id: 15,
        year: '1922???',
        name: '?????????????????????',
        local: '?????????',
        year2: '1922???~2012???',
        introduce: '?????????????????????????????????????????????????????????',
        img: [zhangguifeng],
        titleimg: [imgzz]
      },
      {
        id: 16,
        year: '1923???',
        name: '???????????????????????????',
        local: '?????????',
        year2: '1923???',
        introduce:
          '1923????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????',
        img: [],
        titleimg: [imgzz]
      },
      {
        id: 17,
        year: '1923???',
        name: '?????????????????????',
        local: '?????????',
        year2: '1923???~1968???',
        introduce: '??????????????????????????????????????????????????????????????????????????????????????????',
        img: [zhushuizhao],
        titleimg: [imgzz]
      },
      {
        id: 18,
        year: '1923???',
        name: '?????????????????????',
        local: '?????????',
        year2: '1923???',
        introduce: '?????????????????????????????????????????????????????????????????????????????????????????????',
        img: [fuquanxiang],
        titleimg: [imgzz]
      },
      {
        id: 19,
        year: '1924???',
        name: '??????????????????????????????',
        local: '?????????',
        year2: '1924???',
        introduce:
          '1924??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????',
        img: [],
        titleimg: [imgzz]
      },
      {
        id: 20,
        year: '1924???',
        name: '?????????????????????',
        local: '?????????',
        year2: '1924???~2017???',
        introduce: '????????????????????????????????????',
        img: [fanruijuan],
        titleimg: [imgzz, imgzz]
      },
      {
        id: 21,
        year: '1925???',
        name: '?????????????????????',
        local: '?????????',
        year2: '1925???',
        introduce: '?????????????????????????????????????????????',
        img: [xutianhong],
        titleimg: [imgzz]
      },
      {
        id: 22,
        year: '1926???',
        name: '?????????????????????',
        local: '?????????',
        year2: '1926???~1998???',
        introduce: '???????????????????????????????????????',
        img: [wuxiaolou],
        titleimg: [imgzz]
      },
      {
        id: 23,
        year: '1938???',
        name: '??????????????????',
        local: '?????????',
        year2: '1938???~1942???',
        introduce:
          '1937?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????',
        img: [],
        titleimg: [imgzz]
      },
      {
        id: 24,
        year: '1939???',
        name: '????????????',
        local: '?????????',
        year2: '1939???',
        introduce:
          '?????????1939???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????',
        img: [],
        titleimg: [imgzz]
      },
      {
        id: 25,
        year: '1956???',
        name: '??????????????????',
        local: '???????????????',
        year2: '1956???',
        introduce:
          '??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????',
        img: [zhuiyu],
        titleimg: [imgzz]
      },
      {
        id: 26,
        year: '1962???',
        name: '??????????????????',
        local: '?????????',
        year2: '1962???',
        introduce: '????????????????????????????????????????????????????????????????????????',
        img: [heying],
        titleimg: [imgzz]
      },
      {
        id: 27,
        year: '1963???',
        name: '?????????????????????',
        local: '?????????',
        year2: '1963???',
        introduce: '??????????????????????????????',
        img: [hesaifei1, hesaifei2],
        titleimg: [imgzz]
      }
    ],
    swiperShow: false
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        swiperShow: true
      });
    }, 100);
  }

  changepage = (obj) => {
    this.setState({ currentPage: obj });
    console.log(this.state.currentPage);
  };
  renderRow(obj) {
    if (this.state.swiperShow) {
      return (
        <View key={obj.id} style={styles.cell}>
          <View>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: pxToDp(16),
                color: '#000'
              }}
            >
              {obj.year}
            </Text>
            <Text
              style={{
                color: '#333',
                fontWeight: 'bold',
                fontSize: pxToDp(14)
              }}
            >
              {obj.name}
            </Text>
            <Text style={{ color: '#666', fontSize: pxToDp(14) }}>
              {obj.local}
            </Text>
            <View
              style={{
                position: 'absolute',
                top: 0,
                right: pxToDp(10),
                flexDirection: 'row'
              }}
            >
              <Text
                style={{
                  fontSize: pxToDp(20),
                  fontWeight: 'bold',
                  color: '#333',
                  top: pxToDp(-5)
                }}
              >
                {obj.id}
              </Text>
              <Text
                style={{
                  fontSize: pxToDp(16)
                }}
              >
                / {this.state.pagedata.length}
              </Text>
            </View>
          </View>
        </View>
      );
    } else {
      return <View></View>;
    }
  }
  render() {
    const modalizeRef = createRef();
    console.log(this.state.swiperShow);
    return (
      <View style={{ flex: 1 }}>
        <Top title="????????????" icon1="arrow-back" />
        <View style={{ padding: pxToDp(16), flex: 1 }}>

        </View>
        <Modalize
          ref={modalizeRef}
          modalStyle={styles.content__modal}
          alwaysOpen={pxToDp(416)}
          handlePosition="inside"
        >
          <View style={{ marginBottom: pxToDp(200) }}>
            <View style={{ flex: 1 }}>
              <View style={styles.container}>
                <SwiperFlatList
                  data={this.state.pagedata}
                  renderItem={({ item }) => this.renderRow(item)}
                  index={0}
                  renderAll={true}
                  loop={false}
                  onChangeIndex={({ index }) => { this.setState({ currentPage: this.state.pagedata[index] }) }}
                //??autoplayTimeout={false}
                />
              </View>
              {/* <Image source={require('./blue.jpg')} style={styles.image}/> */}
              <Page currentdata={this.state.currentPage} />
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
    height: pxToDp(100)
  },
  swiper: {
    backgroundColor: '#f1f1f1'
  },
  cell: {
    // backgroundColor: 'red',
    height: pxToDp(80),
    width: pxToDp(345),
    borderWidth: pxToDp(1.5),
    borderColor: '#62bfad',
    borderRadius: pxToDp(8),
    padding: pxToDp(10),
    margin: pxToDp(15),
  },
  content__modal: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.45,
    shadowRadius: pxToDp(16)
  },
  image: {
    width: '50%',
    height: '100%'
    // zIndex:3,
  },
  big: {
    fontSize: pxToDp(25),
    fontWeight: '600',
    color: 'white',
    margin: pxToDp(20),
    marginBottom: pxToDp(10)
  },
  mid: {
    fontSize: pxToDp(15),
    fontWeight: '400',
    color: 'white'
  }
});
