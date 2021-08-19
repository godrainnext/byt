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
        <Top icon1="arrow-back" title="山河恋" />
        <View style={{ padding: pxToDp(10) }}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            scrollbars="none"
            style={{}}
          >
            <View>
              <Text style={{ fontSize: pxToDp(20), fontWeight: 'bold' }}>
                山河恋
              </Text>
            </View>
            <Text
              style={{
                marginTop: pxToDp(10),
                fontSize: pxToDp(17),
                marginBottom: pxToDp(10)
              }}
            >
              送信选段
            </Text>
            <View>
              <Image
                style={{
                  width: '100%',
                  height: pxToDp(200),
                  borderRadius: pxToDp(8),
                }}
                source={require('../../../../res/play/fengmian9.jpg')}
              />
            </View>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>季娣（唱）</Text>
              :呀...啐...我道你是个君子人，这样的戏弄人家不该应。
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>申息（唱）</Text>
              :我本是个大将军，岂可与你去送信。
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>季娣（唱）</Text>
              :即是将军有身份。你缘何与我不缠清啊？
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>申息（唱）</Text>
              :谁叫你我的说话你不听，吴寿已经得了病，神思恍惚口难言，病势要紧重十分，故而你有话只管对我讲，我何曾与你缠不清。
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>季娣（白）</Text>
              :如此说来是我错怪了你？
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>申息（白）</Text>:
              这样说来我是唐突了你。
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>季娣（白）</Text>: 不妨事。
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>申息（白）</Text>:
              小姐，问小姐到此有何干？
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>季娣（唱）</Text>: 特地前来送书信
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>申息（唱）</Text>: 这封书信何人写？
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>季娣（唱）</Text>:
              那吴寿的妹妹名戴赢。
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>申息（唱）</Text>:
              她不是被人掳去无踪影
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>季娣（唱）</Text>
              :此事我已早知情，那黎瑟想把皇后害，逼她的口供她不肯，故所以暗中写好书一封，她要我送与吴寿便详情。
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>申息（唱）</Text>:
              你把书信交与我，我替你去读与那吴寿听，只是我也想托你带封信，不知小姐肯不肯。
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>季娣（唱）</Text>:
              你把书信交与我，我替你送与收信人。
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>申息（唱）</Text>:
              我不是书信是口信。
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>季娣（唱）</Text>:
              口信说来呀我记在心。
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>申息（唱）</Text>:
              这个口信要当心，不可说与那旁人听。出我的口，入你的心，答应了去送要守信。
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>季娣（唱）</Text>:
              既然答应焉有反悔。请说吧。
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>申息（唱）</Text>: 噢，哎，妹妹啊……
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>季娣（唱）</Text>:
              啊呀，你在叫什么呀？
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>申息（唱）</Text>:
              我是在念信给你听啊。现在我与你口信念，就如同和你见了面。你的美貌像天仙，我无限爱恋入心田。啊贤妹啊，我唤你，你不知，我想你，你不见，我与你说话你不回答，我和你说的全是肺腑言。噢贤妹啊，我是一见就钟情你，未知你可否将我恋。
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>季娣（唱）</Text>:
              我是一见就钟情你，
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>申息（唱）</Text>:
              对呀，你我正好相爱恋。
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
