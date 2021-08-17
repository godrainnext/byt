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
        <View style={{ padding: pxToDp(15) }}>
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
                  width: pxToDp(320),
                  height: pxToDp(240),
                  borderRadius: pxToDp(8),
                  marginLeft: pxToDp(13)
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
                opacity: 0.2
              }}
            />

            <View style={{ marginTop: pxToDp(15) }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  style={{
                    width: pxToDp(40),
                    height: pxToDp(40),
                    borderRadius: pxToDp(40)
                  }}
                  source={require('../../../../res/play/1.jpg')}
                />
                <Text style={{ fontSize: pxToDp(15), marginLeft: pxToDp(10) }}>
                  真是厉害
                </Text>
              </View>
              <View style={{ marginLeft: pxToDp(45), marginTop: pxToDp(5) }}>
                <Text>
                  真不错真不错真不错真不错真不错真不错真不错真不错真不错真不错真不错真不错真不错真不错真不错真不错真不错真不错真不错真不错真不错真不错真不错真不错真不错
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: pxToDp(10),
                  marginLeft: pxToDp(45),
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginRight: pxToDp(10)
                }}
              >
                <View>
                  <Text>2021.06.21</Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    this.rendertouch1();
                  }}
                  style={{ flexDirection: 'row' }}
                >
                  <Icon
                    name={like ? 'like2' : 'like1'}
                    size={18}
                    color={like ? 'black' : 'red'}
                  />
                  <Text>6</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  width: pxToDp(310),
                  marginLeft: pxToDp(40),
                  marginTop: pxToDp(20),
                  height: pxToDp(1),
                  backgroundColor: 'black',
                  opacity: 0.2
                }}
              />
            </View>

            <View style={{ marginTop: pxToDp(15) }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  style={{
                    width: pxToDp(40),
                    height: pxToDp(40),
                    borderRadius: pxToDp(40)
                  }}
                  source={require('../../../../res/play/1.jpg')}
                />
                <Text style={{ fontSize: pxToDp(15), marginLeft: pxToDp(10) }}>
                  真是厉害
                </Text>
              </View>
              <View style={{ marginLeft: pxToDp(45), marginTop: pxToDp(5) }}>
                <Text>
                  真不错真不错真不错真不错真不错真不错真不错真不错真不错真不错真不错真不错真不错真不错真不错真不错真不错真不错真不错真不错真不错真不错真不错真不错真不错
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: pxToDp(10),
                  marginLeft: pxToDp(45),
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginRight: pxToDp(10)
                }}
              >
                <View>
                  <Text>2021.06.21</Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    this.rendertouch2();
                  }}
                  style={{ flexDirection: 'row' }}
                >
                  <Icon
                    name={alike ? 'like2' : 'like1'}
                    size={18}
                    color={alike ? 'black' : 'red'}
                  />
                  <Text>6</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  width: pxToDp(310),
                  marginLeft: pxToDp(40),
                  marginTop: pxToDp(20),
                  height: pxToDp(1),
                  backgroundColor: 'black',
                  opacity: 0.2
                }}
              />
            </View>

            <View style={{ marginTop: pxToDp(15) }}>
              <TouchableOpacity
                style={{ flexDirection: 'row', alignItems: 'center' }}
              >
                <Image
                  style={{
                    width: pxToDp(40),
                    height: pxToDp(40),
                    borderRadius: pxToDp(40)
                  }}
                  source={require('../../../../res/play/1.jpg')}
                />
                <Text style={{ fontSize: pxToDp(15), marginLeft: pxToDp(10) }}>
                  真是厉害
                </Text>
              </TouchableOpacity>
              <View style={{ marginLeft: pxToDp(45), marginTop: pxToDp(5) }}>
                <Text>
                  真不错真不错真不错真不错真不错真不错真不错真不错真不错真不错真不错真不错真不错真不错真不错真不错真不错真不错真不错真不错真不错真不错真不错真不错真不错
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: pxToDp(10),
                  marginLeft: pxToDp(45),
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginRight: pxToDp(10)
                }}
              >
                <View>
                  <Text>2021.06.21</Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    this.rendertouch3();
                  }}
                  style={{ flexDirection: 'row' }}
                >
                  <Icon
                    name={blike ? 'like2' : 'like1'}
                    size={18}
                    color={blike ? 'black' : 'red'}
                  />
                  <Text>6</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  width: pxToDp(310),
                  marginLeft: pxToDp(40),
                  marginTop: pxToDp(20),
                  height: pxToDp(1),
                  backgroundColor: 'black',
                  opacity: 0.2
                }}
              />
            </View>
          </ScrollView>
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
