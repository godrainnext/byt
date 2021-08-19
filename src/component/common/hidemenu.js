import React, { PureComponent, createRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  TextInput,
  Dimensions
} from 'react-native';
import { Modalize } from 'react-native-modalize';
import { pxToDp } from '../../utils/styleKits';
import { NavigationContext } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SvgUri from 'react-native-svg-uri';
import { map, timeline, img, book } from './iconSvg';
import Accordion from './accordion';
const height = Dimensions.get('screen').height;
export class AlwaysOpen extends PureComponent {
  // function(params) {
  //   if (this.props.ArrIndex == 1) {
  //     daddata = this.state.daddata;
  //   } else if (this.props.ArrIndex == 2) {
  //     daddata = this.state.daddata2;
  //   } else {
  //     daddata = this.state.daddata3;
  //   }
  // }
  constructor(props) {
    super(props);
    this.state = {
      daddata: [
        {
          id: '1',
          name: '越剧',
          detail1:
            '越剧，中国主要戏曲剧种之一，起源于浙江嵊州，兴盛于上海，主要流行于苏浙沪等地区，目前为中国第二大戏曲剧种。越剧曲调婉转柔美，小提琴协奏曲《梁祝》的主旋律就采用了越剧的曲调。越剧在早期只有男演员，进入上海发展后因女班演出广受欢迎，发展为各角色均有女演员扮演的女子越剧。1949年后，开始',
          detail2:
            '招收部分男演员，但现在仍以女子越剧为主。越剧原来流行于苏浙沪一带，后在中国广受欢迎。越剧舞台语音的基础语音是嵊县方言音。在越剧发展过程中，越剧语音在嵊州方言的基础上，吸收了中州音韵和官话的语音，这初始越剧扩大了观众范围。\n 南方的新生剧种也不乏枚举，如丹剧、杭剧、海门山歌剧、黄戏、坐子戏淮剧、甬剧、湖剧等等。越剧是其中最具南方地域特色--阴柔之美的典型。',
          warn: '本站的全部概述文字在知识共享署名-相同方式共享3.0协议之条款下提供，附加条款亦可能应用。（请参阅使用条款）',
          kid: [
            { id: '1', title: '创作时间 ', message: '' },
            { id: '2', title: '尺寸', message: '' },
            { id: '3', title: '提出者', message: '' },
            { id: '4', title: '时期/流派', message: '' },
            { id: '5', title: '构成要素', message: '' },
            { id: '6', title: '简称', message: '' },
            { id: '7', title: '创作者', message: '' },
            { id: '8', title: '表演形式', message: '' },
            { id: '9', title: '题材', message: '' },
            {
              id: '10',
              title: '主要流派',
              message: '袁雪芬派、范瑞娟派、尹桂芳派'
            },
            { id: '11', title: '形成时间', message: '清末' },
            { id: '12', title: '国家/地域', message: '苏浙沪' },
            { id: '13', title: '别称', message: '女子科班、绍兴女子文戏' }
          ]
        },
        {
          id: '2',
          name: '何赛飞',
          detail1:
            '何赛飞（1963年4月11日-），中国越剧戏剧女演员，资深女演员。籍贯浙江省舟山市岱山县。曾演出多部电视剧，何赛飞多数在古装剧里饰演太皇太后、太后，民国剧中扮演姨太太等。',
          detail2: '',
          warn: '本站的全部概述文字在知识共享署名-相同方式共享3.0协议之条款下提供，附加条款亦可能应用。（请参阅使用条款）',
          kid: [
            { id: '1', title: '出生地点 ', message: '浙江省' },
            { id: '2', title: '英文名', message: 'Saifei He' },
            { id: '3', title: '职业', message: '演员' },
            { id: '4', title: '语言', message: '国语、英语' },
            { id: '5', title: '教育程度', message: '浙江艺术学校毕业' },
            { id: '6', title: '配偶', message: '杨楠（1988年结婚）' },
            { id: '7', title: '活跃年代', message: '1984年至今' },
            {
              id: '8',
              title: '活跃年代',
              message: '互联网电影数据库（IMDb）信息'
            },
            { id: '9', title: '国籍', message: '中华人民共和国' },
            { id: '10', title: '性别', message: '女性' },
            { id: '11', title: '出生时间', message: '1963年4月11日' }
          ]
        },
        {
          id: '3',
          name: '黄梅戏',
          detail1:
            '黄梅戏，是中国五大戏剧剧种之一，是安徽省安庆市主要地方戏曲，黄梅戏的前身名为怀腔，是起源于皖赣鄂三省交界一带的采茶调，又称黄梅调，在清中后期，采茶调与安徽省安庆府当地民间戏剧结合，并用安庆怀宁方言歌唱和念白，逐渐发展为一个新的戏剧剧种，当时称为怀腔，这',
          detail2:
            '就是早期的黄梅戏的雏形。其后怀腔又借鉴吸收了青阳腔和徽调的音乐、表演和剧目，开始演出“本戏”。后以安庆府怀宁县石牌镇为中心、并经过一百多年的发展，最终黄梅戏成为安徽主要的地方戏曲剧种，并且随着向周边的江西省九江市、湖北省黄冈市传播以后延伸，最终成为全国知名的大剧种。中华人民共和国成立后，黄梅戏迅速发展成对全中国有影响力的剧种，并扬名海外。2006年黄梅戏入选第一批中国国家级非物质文化遗产。',
          warn: '本站的全部概述文字在知识共享署名-相同方式共享3.0协议之条款下提供，附加条款亦可能应用。（请参阅使用条款）',
          kid: [
            { id: '1', title: '发源地', message: '湖北省黄梅县' },
            { id: '2', title: '流传地', message: '皖、赣、鄂毗邻地区' },
            { id: '3', title: '行当', message: '小生' },
            { id: '4', title: '乐器', message: '高胡' },
            { id: '5', title: '代表剧目', message: '江山美人' },
            { id: '6', title: '著名人物', message: '王少舫' },
            { id: '7', title: '地位', message: '中国五大剧种之一' },
            {
              id: '8',
              title: '奇闻轶事1',
              message: '中国第三个有本科教育的戏曲剧种'
            },
            {
              id: '9',
              title: '奇闻轶事2',
              message: '1980年以来，安徽先后出现安徽桐啊啊啊啊啊'
            },
            { id: '10', title: '尺寸', message: '' },
            { id: '11', title: '表演形式', message: '' },
            { id: '12', title: '创作时间', message: '' },
            { id: '13', title: '创作者', message: '' },
            { id: '14', title: '中文名', message: '黄梅戏' },
            { id: '15', title: '遗产编号', message: 'IV-60' },
            { id: '16', title: '批准时间', message: '2006年' },
            {
              id: '17',
              title: '申报地区',
              message: '安徽省安庆市、湖北省黄梅县'
            },
            { id: '18', title: '非遗级别', message: '国家级' },
            { id: '19', title: '遗产级别', message: '传统戏剧' }
          ]
        }
      ]
    };
  }
  static contextType = NavigationContext;
  modalizeRef = createRef(null);
  renderContent = () => (
    <View
      style={{
        padding: pxToDp(20),
        flex: 1,
        backgroundColor: '#ecf6fc',
        borderRadius: pxToDp(12)
      }}
    >
      <View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            height: pxToDp(48),
            alignItems: 'center'
          }}
        >
          <Text
            style={{
              fontSize: pxToDp(18),
              fontWeight: 'bold',
              margin: pxToDp(10)
            }}
          >
            {this.state.daddata[this.props.ArrData].name}
          </Text>
        </View>

        {/* 时空地图、时间线、相关图片 */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
        >
          {/* 时空地图 */}
          <TouchableOpacity onPress={() => this.context.navigate('Timemap')}>
            <View
              style={{
                justifyContent: 'center',
                height: pxToDp(60)
              }}
            >
              <View style={{ alignItems: 'center' }}>
                <SvgUri svgXmlData={map} width="30" height="30" />
              </View>
              <Text style={{ marginTop: pxToDp(4) }}>时空地图</Text>
            </View>
          </TouchableOpacity>
          {/* 时间线 */}
          <TouchableOpacity
            onPress={() => this.context.navigate('NewTimeLine')}
          >
            <View style={{ justifyContent: 'center', height: pxToDp(60) }}>
              <View style={{ alignItems: 'center' }}>
                <SvgUri svgXmlData={timeline} width="30" height="30" />
              </View>
              <Text style={{ marginTop: pxToDp(4) }}>时间线</Text>
            </View>
          </TouchableOpacity>
          {/* 相关图片 */}
          <TouchableOpacity onPress={() => this.context.navigate('relatedImg')}>
            <View style={{ justifyContent: 'center', height: pxToDp(60) }}>
              <View style={{ alignItems: 'center' }}>
                <SvgUri svgXmlData={img} width="30" height="30" />
              </View>
              <Text style={{ marginTop: pxToDp(4) }}>相关图片</Text>
            </View>
          </TouchableOpacity>
          {/* 相关书籍 */}
          <TouchableOpacity
            onPress={() => this.context.navigate('relatedBook')}
          >
            <View style={{ justifyContent: 'center', height: pxToDp(60) }}>
              <View style={{ alignItems: 'center' }}>
                <SvgUri svgXmlData={book} width="30" height="30" />
              </View>
              <Text style={{ marginTop: pxToDp(4) }}>相关书籍</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={s.bigbox}>
        <View
          style={{
            borderBottomColor: '#666',
            borderBottomWidth: pxToDp(1.1),
            margin: pxToDp(10)
          }}
        >
          <Text
            style={{
              fontSize: pxToDp(18),
              marginBottom: pxToDp(5)
            }}
          >
            概述
          </Text>
        </View>

        <Accordion daddata={this.state.daddata[this.props.ArrData]} />
      </View>
    </View>
  );
  render() {
    return (
      <Modalize
        ref={this.modalizeRef}
        modalStyle={s.content__modal}
        alwaysOpen={pxToDp(540)}
        handlePosition="inside"
      >
        {this.renderContent()}
      </Modalize>
    );
  }
}

const s = StyleSheet.create({
  content__modal: {
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: pxToDp(0.45),
    shadowRadius: pxToDp(16)
  },

  content__subheading: {
    marginBottom: 2,
    fontSize: 16,
    fontWeight: '600',
    color: '#ccc'
  },

  content__heading: {
    fontSize: pxToDp(24),
    fontWeight: '600',
    color: '#333'
  },

  content__description: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 15,
    fontWeight: '200',
    lineHeight: pxToDp(22),
    color: '#666'
  },
  bigbox: {
    flex: 1,
    marginBottom:pxToDp(200),
    marginTop: pxToDp(20)
  }
});
