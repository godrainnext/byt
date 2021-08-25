import React, { PureComponent } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TouchableNativeFeedback
} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import { pxToDp } from '../../../../utils/styleKits';
import Icon from 'react-native-vector-icons/AntDesign';
import Top from '../../../../component/common/top';
import { NavigationContext } from '@react-navigation/native';

const CONTENT = [
  {
    title: '方亚芬 天问教学',
    text: '袁派优秀传人方亚芬',
    content1: '第一集',
    content2: '第二集',
    content3: '第三集',
    content4: '第四集',
    path: require('../../../../res/genre/1.jpg')
  },
  {
    title: '茅威涛教你越剧',
    text: '尹派茅威涛教学',
    content1: '第一集',
    content2: '第二集',
    content3: '第三集',
    content4: '第四集',
    path: require('../../../../res/genre/3.jpg')
  },
  {
    title: '越剧《葬花》教学',
    text: '黄志清-越剧花旦',
    content1: '第一集',
    content2: '第二集',
    content3: '第三集',
    content4: '第四集',
    path: require('../../../../res/genre/4.jpg')
  },
  {
    title: '林再民越剧小课堂',
    text: '唱腔篇',
    content1: '第一集',
    content2: '第二集',
    content3: '第三集',
    content4: '第四集',
    path: require('../../../../res/genre/5.jpg')
  },
  {
    title: '王文娟系列',
    text: '越剧一代宗师',
    content1: '第一集',
    content2: '第二集',
    content3: '第三集',
    content4: '第四集',
    path: require('../../../../res/genre/6.jpg')
  },
  {
    title: '尹桂芳越剧教学',
    text: '“越剧皇帝”、流派宗师',
    content1: '第一集',
    content2: '第二集',
    content3: '第三集',
    content4: '第四集',
    path: require('../../../../res/genre/7.jpg')
  }
];
export default class Index extends PureComponent {
  state = {
    activeSections: [],
    collapsed: true,
    multipleSelect: false,
    isRadius: true
  };

  setSections = (sections) => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,isRadius:!this.state.isRadius
    });
  };
  static contextType = NavigationContext;
  renderHeader = (section) => {
    return (
      <View
        style={{
          height:pxToDp(72),
          marginTop: pxToDp(16),
          alignItems: 'center',
          justifyContent:"center",
          backgroundColor: '#fff',
          borderTopLeftRadius: pxToDp(8),
          borderTopRightRadius: pxToDp(8),
          borderBottomLeftRadius: this.state.isRadius?pxToDp(8):0,
          borderBottomRightRadius: this.state.isRadius?pxToDp(8):0,
          elevation: 2,
shadowColor: 'black',  //  阴影颜色
 shadowOffset: { width: 0, height: 0 },  // 阴影偏移
 shadowOpacity: 1,  // 阴影不透明度
 shadowRadius: 10,  //  圆角
        }}
      >
        <View style={styles.box}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image style={styles.image} source={section.path} />
            <View style={{ marginLeft: pxToDp(10) }}>
              <Text style={styles.title}>{section.title}</Text>
              <Text style={{ fontSize: pxToDp(14) }}>{section.text}</Text>
            </View>
          </View>
          <Image
            style={styles.icon}
            source={require('../../../../res/箭头下.png')}
          />
        </View>
      </View>
    );
  };

  renderContent = (section) => {
    return (
      <ScrollView
        style={{
          backgroundColor: 'rgba(255,255,255,0.5)',
          height: pxToDp(80),
          flexDirection: 'row',
          borderBottomLeftRadius: pxToDp(8),
          borderBottomRightRadius: pxToDp(8)
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <TouchableOpacity
          style={styles.kidbox}
          onPress={() => this.context.navigate('Video')}
        >
          <Icon name="playcircleo" size={20} color={'black'} />
          <Text style={{ fontSize: pxToDp(15) }}>{section.content1}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.kidbox}
          onPress={() => this.context.navigate('Video')}
        >
          <Icon name="playcircleo" size={20} color={'black'} />
          <Text style={{ fontSize: pxToDp(15) }}>{section.content2}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.kidbox}
          onPress={() => this.context.navigate('Video')}
        >
          <Icon name="playcircleo" size={20} color={'black'} />
          <Text style={{ fontSize: pxToDp(15) }}>{section.content3}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.kidbox}
          onPress={() => this.context.navigate('Video')}
        >
          <Icon name="playcircleo" size={20} color={'black'} />
          <Text style={{ fontSize: pxToDp(15) }}>{section.content4}</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  };
  changeState=()=> {
    console.log(123);
    this.setState({isRadius:!this.state.isRadius});
  };
  render() {
    const { multipleSelect, activeSections } = this.state;
    console.log('111',this.state.isRadius);
    return (
      <View style={{ backgroundColor: '#ECF6FC', flex: 1 }}>
        <Top icon1="arrow-back" title="越剧大师教学" />
        <ScrollView
          style={{ flex: 1, padding: pxToDp(16) }}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ marginBottom: pxToDp(32), marginTop: pxToDp(-8) }}>
            <Image
              source={require('../../../../res/genre/5.jpg')}
              style={styles.headimage}
            />

            <Accordion
              activeSections={activeSections}
              sections={CONTENT}
              touchableComponent={TouchableNativeFeedback}
              expandMultiple={multipleSelect}
              renderHeader={this.renderHeader}
              renderContent={this.renderContent}
              duration={400}
              onChange={this.setSections}
              renderAsFlatList={false}
              changeState={this.changeState}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    width: pxToDp(330),
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  image: {
    height: pxToDp(60),
    width: pxToDp(60),
    borderRadius: pxToDp(32)
  },
  title: {
    fontSize: pxToDp(17),
    fontWeight: 'bold',
    marginBottom: pxToDp(5)
  },
  icon: {
    width: pxToDp(20),
    height: pxToDp(20)
  },
  headimage: {
    width: '100%',
    height: pxToDp(210),
    borderRadius: pxToDp(8),
    marginTop: pxToDp(10)
  },
  kidbox: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: pxToDp(48),
    width: pxToDp(78),
    marginLeft: pxToDp(16),
    marginTop: pxToDp(16),
    borderRadius: pxToDp(8),
    alignItems: 'center',
    justifyContent: 'center',
    elevation:2,
    shadowColor: 'black', //  阴影颜色
    shadowOffset: { width: 0, height: 0 }, // 阴影偏移
    shadowOpacity: 1, // 阴影不透明度
    shadowRadius: 10 //  圆角
  }
});
