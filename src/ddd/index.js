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
      year: '1879年',
      name: '创始人高炳火',
      local: '甘霖镇',
      year2: '1921年~2017年',
      introduce:
        '1906年，与李世泉等人在草台上试验演出，这是越剧第一次试验演出。',
      img: [gaobinghuo],

      titleimg: [imgzz]
    },
    pagedata: [
      {
        id: 1,
        year: '1879年',
        name: '创始人高炳火',
        local: '甘霖镇',
        year2: '1879年~1956年',
        introduce:
          '1906年，与李世泉等人在草台上试验演出，这是越剧第一次试验演出',
        img: [gaobinghuo],

      },
      {
        id: 2,
        year: '1890年',
        name: '代表人物卫梅朵',
        local: '嵊州市',
        year2: '1890年~1931年',
        introduce: '工小旦，在越剧唱腔方面做了积极探索。',
        img: [weimeiduo],
        titleimg: [imgzz]
      },
      {
        id: 3,
        year: '1890年',
        name: '创始人李世泉',
        local: '嵊州市',
        year2: '1890年',
        introduce:
          '1906年3月27日，与李茂正等演出《双金花》，为越剧史上首次正式演出。参与成立了越剧第一个科班。',
        img: [],
        titleimg: [imgzz]
      },
      {
        id: 4,
        year: '1895年',
        name: '代表人物费翠棠',
        local: '嵊州市',
        year2: '1895年~1967年',
        introduce: '工旦角，擅演青衣。师从马潮水',
        img: [feicuitang],
        titleimg: [imgzz]
      },
      {
        id: 5,
        year: '1897年',
        name: '代表人物白玉梅',
        local: '嵊州市',
        year2: '1897年~1976年',
        introduce:
          '与王永春合作编写了越剧《梁祝》的剧本。\n18岁与小生王永春合演越剧《梁祝》，被称为“越剧梅兰芳”。白玉梅一生只收两个徒弟，亲生女儿小白玉梅，另一位是白玉玲。',
        img: [baiyumei],
        titleimg: [imgzz]
      },
      {
        id: 6,
        year: '1906年',
        name: '越剧诞生',
        local: '东王村',
        year2: '1906年',
        introduce:
          '1906年农历三月初三（3月27日），高炳火，李世泉等在东王村演出，这是越剧的第一次正式演出，这一天被认定为越剧诞生日，东王村也成为越剧诞生地。此时的越剧称为小歌班',
        img: [],
        titleimg: [imgzz]
      },
      {
        id: 7,
        year: '1910年',
        name: '代表人物施银花',
        local: '嵊州市',
        year2: '1910年~1984年',
        introduce: '艺术上有“施腔”之称',
        img: [shiyinghua1, shiyinghua2],
        titleimg: [imgzz]
      },
      {
        id: 8,
        year: '1916年',
        name: '代表人物姚水娟',
        local: '后山县',
        year2: '1916年~2076年',
        introduce: '工小旦，被誉为“越剧皇后”。有“三花不如一娟”的说法',
        img: [yaoshuijuan],
        titleimg: [imgzz]
      },
      {
        id: 9,
        year: '1916年',
        name: '进入上海',
        local: '上海市',
        year2: '1917年',
        introduce:
          '1917年，小歌班第一次进入上海演出。这时的越剧缺少配乐，表演也还处于初期发展阶段。',
        img: [],
        titleimg: [imgzz]
      },
      {
        id: 10,
        year: '1917年',
        name: '代变人物王杏花',
        local: '新昌县',
        year2: '1917年~1999年',
        introduce: '工旦角，擅演正旦，闺门旦。',
        img: [wangxinghua],
        titleimg: [imgzz]
      },
      {
        id: 11,
        year: '1919年',
        name: '代表人物尹桂芳',
        local: '新昌县',
        year2: '1919年~2000年',
        introduce: '工小生，越剧尹派艺术创始人',
        img: [yinguifang1, yinguifang2],
        titleimg: [imgzz]
      },
      {
        id: 12,
        year: '1920年',
        name: '代表人物筱丹桂',
        local: '长乐镇',
        year2: '1920年~1947年',
        introduce: '工旦角，被称为“越剧皇后”',
        img: [xiaodangui1, xiaodangui2],
        titleimg: [imgzz]
      },
      {
        id: 13,
        year: '1921年',
        name: '代表人物徐玉兰',
        local: '富阳区',
        year2: '1921年~2017年',
        introduce: '工小生，“徐派”。',
        img: [xuyulan],
        titleimg: [imgzz]
      },
      {
        id: 14,
        year: '1922年',
        name: '代表人物袁雪芬',
        local: '嵊州市',
        year2: '1922年~2011年',
        introduce:
          '工小丹，力倡越剧改革，唱腔被称为“袁派”。\n 1946年把《祥林嫂》首次搬上越剧舞台，被舆论称为“新越剧的里程碑”。\n1949年，她和梅兰芳、周信芳、程砚秋作为戏曲界特邀代表参加了第一届中国人民政治协商会议，并出席开国大典。',
        img: [yuanxuefeng1, yuanxuefeng2],
        titleimg: [imgzz]
      },
      {
        id: 15,
        year: '1922年',
        name: '代表人物张桂凤',
        local: '萧山区',
        year2: '1922年~2012年',
        introduce: '工老生，也饰演老旦角色，有“张桂凤派”',
        img: [zhangguifeng],
        titleimg: [imgzz]
      },
      {
        id: 16,
        year: '1923年',
        name: '第一个女子科班成立',
        local: '嵊州市',
        year2: '1923年',
        introduce:
          '1923年农历五月廿七日，王金水与金荣水在浙江嵊县开办第一个绍兴文戏女子科班，这一天成为女子越剧诞生日。',
        img: [],
        titleimg: [imgzz]
      },
      {
        id: 17,
        year: '1923年',
        name: '代表人物竺水招',
        local: '嵊州市',
        year2: '1923年~1968年',
        introduce: '工小旦及小生，有“越剧西施”之称。戏路宽广，有“竺派”之称。',
        img: [zhushuizhao],
        titleimg: [imgzz]
      },
      {
        id: 18,
        year: '1923年',
        name: '代表人物傅全香',
        local: '嵊州市',
        year2: '1923年',
        introduce: '工花旦，其唱腔优美，被誉为“越剧花腔女高音”。有“傅派”之称。',
        img: [fuquanxiang],
        titleimg: [imgzz]
      },
      {
        id: 19,
        year: '1924年',
        name: '女班第一次在上海演出',
        local: '上海市',
        year2: '1924年',
        introduce:
          '1924年，越剧女班第一次在上海演出。越剧女班的出现，改变了越剧的发展方向，男班与女班并存，但仍以男班为主。',
        img: [],
        titleimg: [imgzz]
      },
      {
        id: 20,
        year: '1924年',
        name: '代表人物范瑞娟',
        local: '嵊州市',
        year2: '1924年~2017年',
        introduce: '工小生，有“范派”之称。',
        img: [fanruijuan],
        titleimg: [imgzz, imgzz]
      },
      {
        id: 21,
        year: '1925年',
        name: '代表人物徐天红',
        local: '余姚市',
        year2: '1925年',
        introduce: '工老生，被誉为“越剧第一老生”',
        img: [xutianhong],
        titleimg: [imgzz]
      },
      {
        id: 22,
        year: '1926年',
        name: '代表人物吴小楼',
        local: '杭州市',
        year2: '1926年~1998年',
        introduce: '工老生，被称为“吴小楼派”',
        img: [wuxiaolou],
        titleimg: [imgzz]
      },
      {
        id: 23,
        year: '1938年',
        name: '女子越剧时期',
        local: '上海市',
        year2: '1938年~1942年',
        introduce:
          '1937年抗战爆发后，越剧男班衰后，被女班取代。上海成为越剧中心。根据樊迪民的建议，绍兴文戏正式更名为“越剧”',
        img: [],
        titleimg: [imgzz]
      },
      {
        id: 24,
        year: '1939年',
        name: '上海兴盛',
        local: '上海市',
        year2: '1939年',
        introduce:
          '发展到1939年，越剧已在上海有了很多戏迷和爱好者，但是这十数家戏班在报刊广告和其他对外宣称中并未统一名称，小歌班、的笃班、绍兴文戏、草台戏班等名称都各自沿用。',
        img: [],
        titleimg: [imgzz]
      },
      {
        id: 25,
        year: '1956年',
        name: '代表剧目追鱼',
        local: '上海越剧院',
        year2: '1956年',
        introduce:
          '书生张珍因家道中落，与丞相之女牡丹的婚姻被拒。鲤鱼精变作牡丹与张珍相会。真假牡丹女引发许多误会。后鲤鱼精留在人间与张珍结合。',
        img: [zhuiyu],
        titleimg: [imgzz]
      },
      {
        id: 26,
        year: '1962年',
        name: '代表人物何英',
        local: '嵊州市',
        year2: '1962年',
        introduce: '工旦角。师承傅全香，嗓音甜美，被称作“越剧仙子。',
        img: [heying],
        titleimg: [imgzz]
      },
      {
        id: 27,
        year: '1963年',
        name: '代表人物何赛飞',
        local: '岱山县',
        year2: '1963年',
        introduce: '浙江小百花越剧团演员',
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
        <Top title="时空地图" icon1="arrow-back" />
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
                // autoplayTimeout={false}
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
