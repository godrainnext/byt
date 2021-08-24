import React, { PureComponent, createRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { Modalize } from 'react-native-modalize';
import { pxToDp } from '../../utils/styleKits';
import { NavigationContext } from '@react-navigation/native';
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
            '越剧，中国主要戏曲剧种之一，起源于浙江嵊州，兴盛于上海，主要流行于苏浙沪等地区，目前为中国第二大戏曲剧种。越剧曲调婉转柔美，小提琴协奏曲《梁祝》的主旋律就采用了越剧的曲调。越剧在早期只有男演员，进入上海发展后因女班演出广受欢迎，发展为各角色均有女演员扮演的女子越剧。1949年后，',
          detail2:
            '开始招收部分男演员，但现在仍以女子越剧为主。越剧原来流行于苏浙沪一带，后在中国广受欢迎。越剧舞台语音的基础语音是嵊县方言音。在越剧发展过程中，越剧语音在嵊州方言的基础上，吸收了中州音韵和官话的语音，这初始越剧扩大了观众范围。\n        南方的新生剧种也不乏枚举，如丹剧、杭剧、海门山歌剧、黄戏、坐子戏淮剧、甬剧、湖剧等等。越剧是其中最具南方地域特色--阴柔之美的典型。',
          warn: '本站的全部概述文字在知识共享署名-相同方式共享3.0协议之条款下提供，附加条款亦可能应用。（请参阅使用条款）',
          kid: [
            { id: '1', title: '创作时间 ', message: '无' },
            { id: '2', title: '非遗级别', message: '国家级' },
            { id: '3', title: '提出者', message: '的笃班《申报》' },
            { id: '4', title: '时期/流派', message: '无' },
            { id: '5', title: '构成要素', message: '无' },
            { id: '6', title: '英文', message: 'Yue Opera' },
            { id: '7', title: '创作者', message: '无' },
            { id: '8', title: '表演形式', message: '长于抒情，以唱为主' },
            { id: '9', title: '题材', message: '以“才子佳人”为主' },
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
            '黄梅戏，是中国五大戏剧剧种之一，是安徽省安庆市主要地方戏曲，黄梅戏的前身名为怀腔，是起源于皖赣鄂三省交界一带的采茶调，又称黄梅调，在清中后期，采茶调与安徽省安庆府当地民间戏剧结合，并用安庆怀宁方言歌唱和念白，逐渐发展为一个新的戏剧剧种，当时称为怀腔，这就是早期的黄梅戏的雏',
          detail2:
            '形。其后怀腔又借鉴吸收了青阳腔和徽调的音乐、表演和剧目，开始演出“本戏”。后以安庆府怀宁县石牌镇为中心、并经过一百多年的发展，最终黄梅戏成为安徽主要的地方戏曲剧种，并且随着向周边的江西省九江市、湖北省黄冈市传播以后延伸，最终成为全国知名的大剧种。中华人民共和国成立后，黄梅戏迅速发展成对全中国有影响力的剧种，并扬名海外。2006年黄梅戏入选第一批中国国家级非物质文化遗产。',
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
            { id: '10', title: '尺寸', message: '无' },
            { id: '11', title: '表演形式', message: '无' },
            { id: '12', title: '创作时间', message: '无' },
            { id: '13', title: '创作者', message: '无' },
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
        },
        {
          id: '4',
          name: '张桂凤',
          detail1:
            '张桂凤（1922年11月13人-2012年3月4日），生于浙江萧山坎山镇，中国国家一级演员，越剧十姐妹之一，擅长老生。1945年，加入雪声剧团。1947年，参与越剧十姐妹的联合义演。同年加入东山越艺社。1951年参加华东越剧实验剧团。1955年转为上海越剧院主要演员。张桂凤在越剧老生方面颇有艺术功底，被',
          detail2:
            '称作“张桂凤派”。代表作有《梁山伯与祝英台》、《二堂放子》、《打金枝》、《李娃传》等。传人有董柯娣、章海灵、张承好等。',
          warn: '本站的全部概述文字在知识共享署名-相同方式共享3.0协议之条款下提供，附加条款亦可能应用。（请参阅使用条款）',
          kid: [
            { id: '1', title: '国籍', message: '中华人民共和国' },
            { id: '2', title: '出生时间', message: '1922年11月13日' },
            { id: '3', title: '死亡时间', message: '2012年3月4日' }
          ]
        },
        {
          id: '5',
          name: '姚水娟',
          detail1:
            '姚水娟（1916年-1976年），原名姚文贤，生于中国嵊县后山镇，越剧女演员，工小旦，被誉为“越剧皇后。1939年，与魏素云组成云水剧团，1940年，与李艳芳组成越华剧团，1951年，姚水娟加入浙江越剧实验剧团。1961年，进入浙江省艺术学校教学。1976年，',
          detail2:
            '因患癌症去世。',
          warn: '本站的全部概述文字在知识共享署名-相同方式共享3.0协议之条款下提供，附加条款亦可能应用。（请参阅使用条款）',
          kid: [
            { id: '1', title: '出生时间', message: '1916年' },
            { id: '2', title: '死亡时间', message: '1976年' },
            { id: '3', title: '原名', message: '姚文贤' },
            { id: '4', title: '性别', message: '女' },
            { id: '5', title: '出生地点', message: '中国浙江嵊县后山镇' },
            { id: '6', title: '职业', message: '越剧演员' },
            { id: '7', title: '主工', message: '小旦' },
            {
              id: '8',
              title: '代表作品',
              message: '《琵琶记》'
            },
            {
              id: '9',
              title: '著名角色',
              message: '李夫人'
            },
            {
              id: '10',
              title: '地位',
              message: '三花一娟'
            }
          ]
        },
        {
          id: '6',
          name: '京剧',
          detail1:
            '京剧又名平剧、京戏，是中国戏曲剧种之一。京剧的诞生时间一般追溯到清朝乾隆五十五年（1790年）。为庆祝乾隆皇帝八十大寿，四大徽班相继进京。京剧的形成，主要是以徽戏与汉戏作为基础，又广泛吸收了当时已经存在的一些戏曲剧种例如昆曲、秦腔、梆子、弋阳腔等之优长，并不断在艺术上大胆革新和创',
          detail2:
            '造，最终在老北京文化的大背景之下自成体系。京剧的分布以北京为中心，遍及全国各地。京剧被视为中国国粹，于2010年，获选进入人类非物质文化遗产代表作名录。京剧唱词通俗易懂，唱腔朴实爽朗，也易于为一般民众所接受。京剧的传统剧目约有一千多个，其中一部分来自徽戏、汉戏、昆曲、秦腔等剧种，还有相当一部分，是京剧艺人与民间作家专为京剧编写的。京剧的艺术风格较擅长表现金戈铁马的题材，故事大多取自历史演义与小说话本。京剧的角色行当划分早期为生、旦、净、末、丑、武行、流行(龙套)七行，后改为生、旦、净、丑四大行，每行中再有细分。京剧的伴奏称为“场面”。京剧的场面，基本上是研习皮黄戏旧制逐渐丰富发展而成的。按乐器的性能，分为“文场”和‘武场”。文场有弦乐器胡琴(又 称京胡)、京二胡，弹拨乐器月琴、小三弦(又称弦子)，吹管乐器笛子、唢呐、海笛和笙，以胡琴为主奏乐器:武场以鼓板为主，小锣、大锣次之。武场的鼓板、大锣和小锣与文场的胡琴、月琴和三弦合称为“六场通透”。京剧唱腔以徽调的二黄和汉调的西皮为主，西皮和二黄都有反调。另外还有昆腔、南梆子、四平调、高拔子吹腔等多种辅助腔调，用以表现各种不同的情感。京剧的发展史，上曾出现了许多具有相当艺术造诣的著名演员，如咸丰、同治年间以余三胜、张二奎、程长庚构成的“老三鼎甲”，以及胡喜禄、梅巧玲、徐碟仙、刘赶三等，他们对近代京剧的发展起到了奠基的作用。光绪年间，又形成了以孙菊仙、汪桂芬、谭鑫培为代表的“新三鼎甲”的中兴局面。光绪后期，剧坛上还有例如王楞仙、杨小楼、王凤卿等不少个性突出的演员。到了清末民初，有汪笑侬、潘月樵、夏氏兄弟、“四大名旦”即梅兰芳、尚小云、荀慧生、程砚秋等著名的京剧表演艺术家。代表作品有《潘烈士投海》、《黑奴吁天录》、《霸王别姬》、《空城计》、《二进宫》、《打渔杀家》等。',
          warn: '本站的全部概述文字在知识共享署名-相同方式共享3.0协议之条款下提供，附加条款亦可能应用。（请参阅使用条款）',
          kid: [
            { id: '1', title: '艺术形式', message: '“念唱做打”' },
            { id: '2', title: '行当', message: '生、旦、净、丑' },
            { id: '3', title: '尺寸', message: '无' },
            { id: '4', title: '提出者', message: '无' },
            { id: '5', title: '时期/流派', message: '无' },
            { id: '6', title: '构成要素', message: '无' },
            { id: '7', title: '简称', message: '无' },
            { id: '8', title: '别称', message: '平剧、京戏' },
            { id: '9', title: '创作者', message: '无' },
            { id: '10', title: '创作时间', message: '无' },
            { id: '11', title: '表演形式', message: '无' },
            { id: '12', title: '题材', message: '无' },
            { id: '13', title: '形成年代', message: '1790年' },
            { id: '14', title: '流传地区', message: '全国' },
            {
              id: '15',
              title: '所用乐器',
              message: '板、单皮鼓、大锣、铙、钹、京胡'
            },
            { id: '16', title: '代表人物', message: '程砚秋' }
          ]
        },
        {
          id: '7',
          name: '昆曲',
          detail1:
            '昆曲是中华戏曲之一，发源自元末明初，发源地为苏州府昆山县（今江苏苏州昆山）。昆曲是流传于苏州、上海、无锡一带的曲唱艺术体系，糅合了唱念做表、舞蹈及武术的表演艺术。现在一般亦指代其舞台形式——昆剧，素有“百戏之母”的雅称。',
          detail2:
            '        昆曲以鼓、板控制演唱节奏，以曲笛、三弦等为主要伴奏乐器，其唱念语音为“中州韵”，北曲遵“中原”，南曲遵“洪武”。昆曲唱腔华丽婉转、念白儒雅、表演细腻。2001年， 昆曲被联合国教科文组织列为“人类口述和非物质遗产代表作”。2018年12月，教育部办公厅关于公布北京大学为昆曲中华优秀传统文化传承基地。2019年10月2日，在2019中国戏曲文化周上，昆剧参与其中。',
          warn: '本站的全部概述文字在知识共享署名-相同方式共享3.0协议之条款下提供，附加条款亦可能应用。（请参阅使用条款）',
          kid: [
            {
              id: '1',
              title: '发源地',
              message: '苏州府昆山县（今江苏苏州昆山）'
            },
            { id: '2', title: '创始人', message: '顾坚' },
            { id: '3', title: '改良者', message: '魏良辅' },
            { id: '4', title: '施影响于', message: '京剧' },
            { id: '5', title: '行当', message: '生、旦、净、末、丑、外、贴' },
            { id: '6', title: '乐器', message: '琵琶' },
            { id: '7', title: '代表剧目', message: '琵琶记' },
            { id: '8', title: '派别', message: '湘昆' },
            {
              id: '9',
              title: '奇闻轶事1',
              message:
                '魏良辅年轻时学习北曲，未获成功，。于是专心攻习南曲。一天魏良辅在偶然之中听到1个年轻人操着弦索唱了几句北曲，声腔跌宕起起伏伏穿云裂石。'
            },
            {
              id: '10',
              title: '奇闻轶事2',
              message:
                '魏良辅研习昆山腔，吸取了北曲中州调和海盐腔的唱法，每有心得，必去请教驻军太仓南关的户侯过云适，待善曲的过云适满意乃止。'
            },
            {
              id: '11',
              title: '尺寸',
              message: '无'
            },
            {
              id: '12',
              title: '题材',
              message: '无'
            },
            {
              id: '13',
              title: '表演形式',
              message: '武术'
            },
            {
              id: '14',
              title: '创作时间',
              message: '元末，明初'
            },
            {
              id: '15',
              title: '创作者',
              message: '无'
            }
          ]
        },
        {
          id: '8',
          name: '白玉梅',
          detail1:
            '白玉梅（1897年-1976年），原名朱岩铨，又名朱洵浦，浙江省嵊县贵汀人，越剧男班时期四大名旦之一。 \n        16岁开始学戏，18岁与小生王永春合演越剧《梁祝》，被称为“越剧梅兰芳”。白玉梅一生只收两个徒弟，亲生女儿小白玉梅，另一位是白玉玲。',
          detail2:
            '        白玉梅擅演剧目颇多，如《梁祝》（饰祝英台）、《琵琶记》（赵五娘）、《文武香球》（侯月英）、《倪凤煽茶》（倪凤）、《呆大富贵》（连氏）等等。',
          warn: '本站的全部概述文字在知识共享署名-相同方式共享3.0协议之条款下提供，附加条款亦可能应用。（请参阅使用条款）',
          kid: [
            { id: '1', title: '性别', message: '男' },
            { id: '2', title: '原名', message: '朱岩铨' },
            { id: '3', title: '曾用名', message: '朱洵浦' },
            { id: '4', title: '出生地点', message: '浙江省嵊县贵汀' },
            { id: '5', title: '职业', message: '越剧演员' },
            { id: '6', title: '代表作品', message: '《梁山伯与祝英台》' },
            { id: '7', title: '著名角色', message: '侯月英' },
            {
              id: '8',
              title: '搭档',
              message: '王永春'
            },
            {
              id: '9',
              title: '弟子',
              message: '白玉玲'
            },
            { id: '10', title: '地位', message: '“越剧梅兰芳”' },
            { id: '11', title: '出生时间', message: '1897年' },
            { id: '12', title: '死亡时间', message: '1976年' }
          ]
        },
        {
          id: '9',
          name: '徐天红',
          detail1:
            '徐天红（1925年9月13日-），生于浙江余姚，越剧女演员，擅演老生，为一级演员。1941年，参加天星越剧团。1945年，参加红星越剧团。1946年，组建天红越剧团，1947年8月，参与《山河恋》联合义演，为“越剧十姐妹”之一。1950年2月，与戚雅仙组建合作越剧团，担任团长。1950年9月，与尹桂芳重新组',
          detail2:
            '建芳华越剧团。1960年8月，进入上海越剧院。代表作《梁祝》（饰演祝公远）、《二堂放子》（饰演刘彦昌）等。被誉为“越剧第一老生”。',
          warn: '本站的全部概述文字在知识共享署名-相同方式共享3.0协议之条款下提供，附加条款亦可能应用。（请参阅使用条款）',
          kid: [{ id: '1', title: '出生时间', message: '1925年9月13日' }]
        },
        {
          id: '10',
          name: '梁山伯与祝英台',
          detail1:
            '梁山伯与祝英台，越剧古装戏，源自民间传说梁山伯与祝英台。越剧《梁祝》，曾名《梁祝哀史》，为越剧的代表剧目之一。',
          detail2: '',
          warn: '本站的全部概述文字在知识共享署名-相同方式共享3.0协议之条款下提供，附加条款亦可能应用。（请参阅使用条款）',
          kid: [
            { id: '1', title: '重要人物', message: '王永春' },
            { id: '2', title: '源自', message: '梁山伯与祝英台（民间传说）' },
            { id: '3', title: '地位', message: '越剧代表剧目之一' },
            { id: '4', title: '形成时间', message: '1917年' }
          ]
        },
        {
          id: '11',
          name: '红楼梦',
          detail1:
            '红楼梦，越剧古装戏，越剧代表剧目之一。为剧作家徐进于1958年所编写一出越剧剧目，由于其为首度将整个《红楼梦》的故事完整地呈现於戏剧舞台，且以优美的台词、唱词，细致的表现手法，丰富的人物个性塑造，再配合上越剧本身语言的特色，以及主演者徐玉兰、王文娟等人的演技及优秀嗓音，使其在',
          detail2:
            '1958年2月18日于上海首演以来，广受到欢迎，其后并在1959年在北京作为国庆10周年演出，至1962年该剧在香港被拍成戏曲电影，使之更加广为流传。越剧《红楼梦》成为当代戏剧中红楼戏的经典代表作，后来两岸三地改编的红楼戏曲及电影，或受其影响，或试图改弦更张以超越之。而这部戏也不断重新演出，1990年代以后， 开始由新一代的越剧演员来演出此剧。',
          warn: '本站的全部概述文字在知识共享署名-相同方式共享3.0协议之条款下提供，附加条款亦可能应用。（请参阅使用条款）',
          kid: [
            { id: '1', title: '创作地点', message: '上海' },
            { id: '2', title: '时期', message: '中国（清）' },
            { id: '3', title: '编写者', message: '徐进' },
            { id: '4', title: '代表人物', message: '无' },
            { id: '5', title: '思想主张', message: '无' },
            { id: '6', title: '创始人', message: '无' },
            { id: '7', title: '时间', message: '无' },
            { id: '8', title: '尺寸', message: '无' },
            { id: '9', title: '题材', message: '无' }
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
        borderRadius: pxToDp(16)
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
              color:'#000000',
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
              <Text style={{ marginTop: pxToDp(4),fontSize:pxToDp(12),color:'#333333'}}>时空地图</Text>
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
              <Text style={{ marginTop: pxToDp(4),fontSize:pxToDp(12),color:'#333333' }}>时间线</Text>
            </View>
          </TouchableOpacity>
          {/* 相关图片 */}
          <TouchableOpacity onPress={() => this.context.navigate('relatedImg')}>
            <View style={{ justifyContent: 'center', height: pxToDp(60) }}>
              <View style={{ alignItems: 'center' }}>
                <SvgUri svgXmlData={img} width="30" height="30" />
              </View>
              <Text style={{ marginTop: pxToDp(4),fontSize:pxToDp(12),color:'#333333' }}>相关图片</Text>
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
              <Text style={{ marginTop: pxToDp(4),fontSize:pxToDp(12),color:'#333333' }}>相关书籍</Text>
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
              color:'#000000',
              fontWeight:'bold',
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
    marginBottom: pxToDp(200),
    marginTop: pxToDp(20)
  }
});
