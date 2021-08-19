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
        <Top icon1="arrow-back" title="柳毅传书" />
        <View style={{ padding: pxToDp(10) }}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            scrollbars="none"
            style={{}}
          >
            <View>
              <Text style={{ fontSize: pxToDp(20), fontWeight: 'bold' }}>
                柳毅传书
              </Text>
            </View>
            <Text
              style={{
                marginTop: pxToDp(10),
                fontSize: pxToDp(17),
                marginBottom: pxToDp(10)
              }}
            >
              陈少春演柳毅，吴小楼钱塘君，钱妙花演洞庭君，陈佩君演泾河小龙
            </Text>
            <View>
              <Image
                style={{
                  width: '100%',
                  height: pxToDp(200),
                  borderRadius: pxToDp(8),
                }}
                source={require('../../../../res/play/fengmian6.jpg')}
              />
            </View>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>小龙（白）</Text>: 小贱人，
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>（唱）</Text>: 胆敢一再冲撞我，
              看你**起风波。 妄想爹娘偏护你， 除非石烂海又枯。
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>小龙父（白）</Text>:
              夫妻又在争吵什么？
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>小龙（白）</Text>: 父王啊，
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>（唱）</Text>:
              贱人仗势太不顾，在儿面前逞威武
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>三娘（白）</Text>: 父王，
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>（唱）</Text>:
              儿夫他海上任意兴风浪，游荡水底真轻狂。儿媳好言把他劝，反将恶语对三娘。今日回来又逞性，打得儿媳遍体伤，伏望父王训诫他。
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>小龙（唱）</Text>:
              分明是花言巧语假装腔，适才公然将我骂，还有狂言骂父王，这等妖妇不整治，爹娘脸上也无光。
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>小龙父（白）</Text>: 贱婢，
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>（唱）</Text>:
              你龙宫生来龙宫长，就应该尊敬丈夫孝爹娘，却为何不守妇道耍骄性？
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>三娘（唱）</Text>:
              父王啊，儿媳是谨守妇道敬尊长，幼读诗书知礼仪，长听慈训学贤良，晨昏劝夫行正道，何敢谎言骗父王，父王若还不肯信，问过锦鳞便知详。
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>小龙（白）</Text>: 住口
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>（唱）</Text>:
              你口善心苦谁不知，何用辩驳多言讲。
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>三娘（唱）</Text>:
              儿媳句句是实言，伏望父王作主张。
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>小龙父（唱）</Text>:
              你在我面前敢如此，平日定是不贤良。
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>三娘（唱）</Text>:
              儿媳是一再受冤屈，
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>小龙父（白）</Text>: 呸
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>（唱）</Text>:
              休逞骄性卖疯狂，自古道敬夫如敬天，泾河哪容你乱纲常，快将她贬进冷宫去。
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>三娘（唱）</Text>:
              谁知他，父子同具恶心肠。
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>小龙父（白）</Text>: 拖下
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>三娘（唱）</Text>:
              冷宫将至王宫远，免得每日见魔王。
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>小龙（唱）</Text>: 竟敢无恐犯尊严，
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>小龙父（唱）</Text>:
              气得我龙须倒卷，怒火万丈！
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>小龙（唱）</Text>:
              拖下去剥去衣衫重重打。
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>小龙父（白）</Text>:
              押下去，气死我也！
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
