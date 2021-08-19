import React, { PureComponent } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { pxToDp } from '@utils/styleKits';
import Icon from 'react-native-vector-icons/AntDesign';
import Top from '@components/common/top';
import { NavigationContext } from '@react-navigation/native';
import { dianzan } from '../../../../component/common/iconSvg';
import SvgUri from 'react-native-svg-uri';
class Index extends PureComponent {
  state = {
    like: true,
    alike: true,
    blike: true
  };

  rendertouch1 = () => {
    const { like } = this.state;
    this.setState({ like: !like });
  };

  rendertouch2 = () => {
    const { alike } = this.state;
    this.setState({ alike: !alike });
  };

  rendertouch3 = () => {
    const { blike } = this.state;
    this.setState({ blike: !blike });
  };
  static contextType = NavigationContext;
  render() {
    const { like, alike, blike } = this.state;
    return (
      <View style={{ backgroundColor: '#ecf6fc', flex: 1 }}>
        <Top icon1="arrow-back" title="五女拜寿" />
        <View style={{ padding: pxToDp(10) }}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            scrollbars="none"
            style={{}}
          >
            <View>
              <Text style={{ fontSize: pxToDp(20), fontWeight: 'bold' }}>
                五女拜寿
              </Text>
            </View>
            <Text
              style={{
                marginTop: pxToDp(10),
                fontSize: pxToDp(17),
                marginBottom: pxToDp(10)
              }}
            >
              牡丹竞放笑春风，喜满华堂寿烛红。白首齐眉庆偕老，五女争来拜寿翁。
            </Text>
            <View>
              <Image
                style={{
                  width: '100%',
                  height: pxToDp(200),
                  borderRadius: pxToDp(8),
                }}
                source={require('../../../../res/play/fengmian4.png')}
              />
            </View>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>老家院（白）</Text>:
              老爷——禀老爷夫人，扬州/苏州大小姐大姑爷，二小姐、二姑爷；杭州四小姐四姑爷、五小姐五姑爷带来各式各样寿礼，一齐给你拜寿来了！
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>杨继康（白）</Text>: 快快有请
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>老家院（白）</Text>:
              老爷吩咐，有请各位小姐姑爷
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>众女、婿（白）</Text>:
              岳父、岳母/爹爹母亲 小婿/孩儿大礼拜祝寿诞
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>杨继康、夫人（白）</Text>:
              贤婿女儿起来
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>众女、婿（白）</Text>:
              多谢岳父、岳母/爹爹母亲
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>杨继康（白）</Text>:
              众位贤婿女儿路上辛苦了
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>俞志云</Text>:
              白玉如意献岳丈，如意吉祥祝寿长。接手谕/ 知有告老还乡意，愿奉养/
              如同孝敬亲爹娘。常言道/ 长婿当作半子靠，迎二老/ 安居姑苏寿而康。
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>杨夫人（白）</Text>:
              大姑爷不愧是尚书公子，孝心可嘉。
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>杨继康（白）</Text>: 是啊
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>双桃</Text>:
              小名儿虽叫牡丹，却有惭国色天香。
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>（珍白）</Text>:
              爹爹母亲，赤金寿星笑口开，寿比南山景云辉。你女婿件件都听我，爹娘啊/
              养老要到我家来。
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>丁大富</Text>: 贤妻说/
              报答双亲宠和爱，为尽孝/ 虎丘山下造楼台。
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>杨夫人（白）</Text>:
              二姑爷是，扬州/苏州首富，老爷看，这赤金寿星真象你啊。
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>杨继康（白）</Text>: 哈哈
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>陈文新</Text>: 献上这/
              玲珑珊瑚福临门，爹爹说/ 亲家本是同窗友，湖山有幸迎知音。
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>陈文华</Text>: 呈上了/
              翡翠宝瓶万寿春，母亲说/ 天下风光西湖好，颐养天年可长生。
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>四香、五凤</Text>:
              爹爹、母亲！爹娘呀，公婆临别细叮咛，还请二老到杭城，姐妹晨昏来侍奉，百依百顺孝双亲。
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>杨继康（白）</Text>:
              陈亲家教子有方，真不愧相国后代啊
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>杨夫人（白）</Text>:
              是啊，这两对小夫妻真讨人喜欢
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>双桃（白）</Text>:
              啊，爹爹母亲，扬州/苏州花园数丁家又大又漂亮，你一定要到我家来养老
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>丁大富（白）</Text>:
              对、对，岳母，你一定要道我家来啊
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>俞志云（白）</Text>:
              长婿如同长子，理应请二老到我家来
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>众儿女（白）</Text>:
              岳父、岳母/爹爹母亲 到我家来~到我家来~
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>杨继康（白）</Text>:
              好了，不要争了，你们都有孝心，待我告老后再做商议，你们到花厅用茶去吧
            </Text>
           {/* 分界线 */}
           <View
              style={{
                width: pxToDp(350),
                marginTop: pxToDp(20),
                height: pxToDp(1),
                backgroundColor: 'black',
                opacity: 0.2,
                marginBottom:pxToDp(10)
              }}
            />
            <View style={{marginBottom:pxToDp(120)}}>
              <View style={{ flexDirection: 'row', width: '95%', justifyContent: 'space-between',alignItems:'center'}}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image style={{  width: pxToDp(40),height: pxToDp(40),margin: pxToDp(5), borderRadius: pxToDp(20)}} source={{uri:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp0.qhmsg.com%2Ft01c0bee555e7f14acf.jpg&refer=http%3A%2F%2Fp0.qhmsg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631928400&t=8fa3da0873ef4c8b3fbc9f9a83582446"}}/>
                  <View>
                    <Text style={{fontSize:pxToDp(14)}}>越剧小生</Text>
                    <Text style={{fontSize:pxToDp(13),color:'grey'}}>12分钟前</Text>
                  </View>
                </View>
                <SvgUri
                  svgXmlData={dianzan}
                  width="15"
                  height="15"
                />
              </View>
              <Text style={{marginLeft:pxToDp(50),fontSize:pxToDp(14)}}>抬头能和你分享同一个月亮，就很美好</Text>
            </View>
          </ScrollView>
          <View
          style={{
            backgroundColor: '#fff',
            height: pxToDp(48),
            width:'110%',
            alignItems: 'center',
            flexDirection: 'row',
            position: 'absolute',
            bottom:70
          }}
        >
          <TextInput
            placeholder="发一条友善的评论"
            style={{
              height: '80%',
              backgroundColor: '#ddd',
              width: '75%',
              marginLeft: pxToDp(20),
              borderRadius: pxToDp(20),
              paddingLeft: pxToDp(10)
            }}
          />
          <TouchableOpacity>
            <Text style={{ marginLeft: pxToDp(20) }}>发布</Text>
          </TouchableOpacity>
        </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Text: {
    fontSize: pxToDp(16),
    marginTop: pxToDp(25),
    lineHeight: pxToDp(25)
  },
  texthead: {
    fontWeight: 'bold'
  }
});
export default Index;
