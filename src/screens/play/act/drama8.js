import React, { PureComponent } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  StyleSheet
} from 'react-native';
import Top from '../../../component/common/top';
import { pxToDp } from '../../../utils/styleKits';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContext } from '@react-navigation/native';
import Svg from 'react-native-svg-uri';
import { right } from '../../../component/common/iconSvg';
class Index extends PureComponent {
  state = {
    dramalist: {
      title: '柳永',
      author: '王仁杰',
      year: '2013年',
      int1: '科举落第之后，柳永过着尤红殢翠、耽溺诗酒的放浪生涯，一封妻子的书信敦促他谨记十年前离乡别井的初衷，他悔恨交加，立志科场进取。',
      int2: '后虽再试中榜，却因《鹤冲天》一词冒犯朝廷而又落第，悲愤之余的柳永，无奈地自嘲自己为“奉旨填词柳三变”。失意的柳永在江南干谒尝尽人间冷暖，犯了官场大忌，又一次被命运摆弄。',
      int3: '江南蹭蹬六年，柳永回到心为之所系的撷芳楼，却发现虫娘已不复旧虫娘，他明白自己该走了。年过半百的柳永圆了科举梦，到地方上做过小官。风烛残年，仁宗皇帝怜他年老，恩召京城当个户部五品闲官。',
      int4: '此时他已病入膏肓，情场上风光不再，只有虫娘楚楚时常陪侍在侧。他拒绝了朝廷的“应制”，不愿再为之歌功颂德。最后时刻，他颇有自知之明地回顾了自己一生的得与失、恩与怨、功与过。伟大歌者魂归道山，留下了不朽词作，为我们民族的文化史增添了辉煌篇章。',
      text1:
        '2013南京越剧《柳永》将于10月16日在南京人民大会堂演出，有机巧妙的剧情，亮点频出的唱腔，以及艺术家们投入而到位的表演，此场演出异彩纷呈，定会给观众朋友们带来耳目一新的视听感受。',
      text2:
        '越剧《柳永》是福建著名剧作家王仁杰为王君安量身创作的一部戏。柳永是北宋著名词人，婉约派最具代表性的人物，崇安（今福建武夷山）人，其词多描绘城市风光和歌妓生活,在当时流传极其广泛，人称“凡有井水饮处，皆能歌柳词”。越剧《柳永》撷取了柳永一生的几个重要片断，彰显其文学成就。',
      text3:
        '芳华越剧团这次为《柳永》配备的创作队伍堪称国家级，与越剧大师尹桂芳生前长期合作的上海音乐学院连波教授担任唱腔设计，中国舞台美术学会副会长、中央戏剧学院教授刘杏林担任舞美设计，中央戏剧学院硕士生导师胡耀辉担任灯光设计。',
      path1:
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fphotoblog%2F1310%2F13%2Fc4%2F27438803_27438803_1381656050044_mthumb.jpg&refer=http%3A%2F%2Fimg.pconline.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632100400&t=d0f2a390628f6a7082bd4b8b7460e864',
      path2:
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg1001.pocoimg.cn%2Fimage%2Fpoco%2Fworks%2F24%2F2013%2F0830%2F21%2F64538678201308302117502196233708479_019_64538678.jpg&refer=http%3A%2F%2Fimg1001.pocoimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632106758&t=9449c470539ff45db1bf9d4f32815b7a'
    }
  };
  static contextType = NavigationContext;
  render() {
    return (
      <View style={{ backgroundColor: '#E2F4FE',flex:1 }}>
        <Top icon1="arrow-back" title="柳永" />
        <ScrollView
          style={{
            padding: pxToDp(20),
            flex: 1
          }}
        >
          <Image
            style={{
                height: pxToDp(180),
                borderRadius: pxToDp(8)
            }}
            source={{ uri: this.state.dramalist.path1 }}
          />
          <Text
            style={{
                fontSize: pxToDp(18),
                color: '#000',
                fontWeight: 'bold',
                marginTop: pxToDp(8)
            }}
          >
            {this.state.dramalist.title}
          </Text>
          <Text style={styles.title1}>
          作者：&ensp;{this.state.dramalist.author} &emsp;&emsp;创作年代:&ensp;
            {this.state.dramalist.year}
          </Text>
          <View
            style={{
              marginTop: pxToDp(4)
            }}
          >
            <Text style={styles.text}>剧情简介</Text>
            <Text style={styles.title1}>
              &emsp;&emsp;{this.state.dramalist.int1}
            </Text>
            <Text style={styles.title}>
              &emsp;&emsp;{this.state.dramalist.int2}
            </Text>
            <Text style={styles.title}>
              &emsp;&emsp;{this.state.dramalist.int3}
            </Text>
            <Text style={styles.title}>
              &emsp;&emsp;{this.state.dramalist.int4}
            </Text>
          </View>
          <View style={{ marginTop: pxToDp(4) }}>
          <Text style={styles.text2}>演出历史</Text>
            <Text style={styles.title}>
              &emsp;&emsp;{this.state.dramalist.text1}
            </Text>
            <Text style={styles.title}>
              &emsp;&emsp;{this.state.dramalist.text2}
            </Text>
            <Text style={styles.title}>
              &emsp;&emsp;{this.state.dramalist.text3}
            </Text>
          </View>
          <View>
          <Text
              style={{
                fontSize: pxToDp(18),
                fontWeight: 'bold',
                marginTop: pxToDp(40),
                marginBottom:pxToDp(20)
              }}
            >
              剧本详情
            </Text>
            <TouchableOpacity
            style={styles.book}
              onPress={() => this.context.navigate('Screenpaly')}
            >
              <Image
                style={{
                  height: pxToDp(100),
                  borderRadius: pxToDp(8)
                }}
                source={{ uri: this.state.dramalist.path2 }}
              />
              <View style={{ marginTop: pxToDp(-60), marginLeft: pxToDp(300) }}>
                <Svg width="32" height="32" svgXmlData={right} />
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  title1: {
    fontSize: pxToDp(16),
    marginTop: pxToDp(4),
    lineHeight:pxToDp(24),
    color:'#333333',
    alignSelf:'center',
    marginTop:pxToDp(20)
    
  },
  title: {
    fontSize: pxToDp(16),
 
    lineHeight:pxToDp(24),
    color:'#333333'
  },
  text: {
    fontSize: pxToDp(18),
    fontWeight: 'bold',
    marginBottom: pxToDp(20),
    marginTop:pxToDp(40)
  },
  text2: {
    fontSize: pxToDp(18),
    fontWeight: 'bold',
    marginBottom: pxToDp(20),
    marginTop:pxToDp(40)
  },

  book: {
    marginTop: pxToDp(8),
    marginBottom: pxToDp(32),
    height: pxToDp(100),
    borderRadius: pxToDp(8)
  }
});
export default Index;
