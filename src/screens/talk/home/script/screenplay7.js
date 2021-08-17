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
        <Top icon1="arrow-back" title="碧玉簪" />
        <View style={{ padding: pxToDp(15) }}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            scrollbars="none"
            style={{}}
          >
            <View>
              <Text style={{ fontSize: pxToDp(20), fontWeight: 'bold' }}>
                碧玉簪
              </Text>
            </View>
            <Text
              style={{
                marginTop: pxToDp(10),
                fontSize: pxToDp(17),
                marginBottom: pxToDp(10)
              }}
            >
              三盖衣
            </Text>
            <View>
              <Image
                style={{
                  width: pxToDp(320),
                  height: pxToDp(240),
                  borderRadius: pxToDp(8),
                  marginLeft: pxToDp(13)
                }}
                source={require('../../../../res/play/fengmian7.jpg')}
              />
            </View>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>（秀唱）</Text>:
              谯楼打罢二更鼓，官人他独坐一旁不理我。我自从嫁到王家一月多，真好比口吃黄连我心里苦。那婆婆拉他上楼来，总希望我们夫妻从此可和睦。谁知他怒气冲冲独自坐，他是不理不睬恶摆布。我不明不白受委屈，可怜我有满腹的委屈向谁诉。枉费了婆婆一片心，看起来今生夫妻难和睦。
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>（白）</Text>:
              耳听得谯楼打三更，夜已深那人已静，见冤家他身上衣衫多单薄，今夜岂非要受寒冷。我若是叫他去安寝，那冤家是定不见好意反见恨；要是他受了风寒成了病，叫秀英如何能安心？
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>（白）</Text>: 噢！有了。
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>（唱）</Text>:
              我还是取衣将盖，免得我官人身寒冷。我占占兢将衣盖，那冤家平日见我像仇人，吓得我不敢去近身。想秀英并非待错他，他为何见我像眼中钉？像他这种负心汉，我还有什么夫妻情？唉！我不顾冤家自安睡，我想起了婆婆年迈人。
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>（白）</Text>:
              唉！这冤家虽是无礼，那婆婆待我总是不错呀！
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>（唱）</Text>:
              冤家他枉读诗书理不明，那婆婆她待我像亲生，更何况王门只有他单丁子，冻坏了官司人要急死了婆婆老大人。我还是将衣衫与他盖，想起往事心头恨。
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>（白）</Text>:
              唉！冤家呀冤家！世界上哪有你这种不通情理的禽……禽兽呀！
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>（唱）</Text>:
              父母爱我似珍宝，这冤家当我路边草；他既这样对待我，我任凭冤家他冻一宵。我还是将衣衫藏笼箱，猛想起于归之期娘训教。
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>（白）</Text>:
              想我出嫁之时，我母亲再三的训教，她说道要我到了王家，要孝顺公婆，敬重丈夫。想今夜天气寒冷，我若顾他盖衣，这冤家定不见好意；我若是不去顾他，被外人知道，定要骂我礼义不周，还要怪我父母养女不教。唉！爹娘呀爹娘！你叫女儿如何是好？娘呀！
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>（唱）</Text>:
              难进难退我李秀英，今夜叫我如何好？啊……娘呀娘呀！曾记得我爹爹做大寿，母亲上楼把喜讯报，说道是已将女儿终身许，郎才女貌结鸾交。说玉林这也好他那也好，说玉林他貌也好才也高。我是口不应声心欢笑，但只望洞房花烛早日到。谁知道我进了王家事颠倒，我夫妻聚头情义少。自出娘胎十八岁，这样的苦楚我受不了。天呀！还是我爹娘错配婚？还是我秀命不好？娘……呀！耳听得谯楼打四更，见冤家浑身颤抖他身寒冷。我若不将衣衫盖，他如何坐得到天明？
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>（白）</Text>: 我也罢！
            </Text>
            <Text style={styles.Text}>
              <Text style={styles.texthead}>（唱）</Text>:
              冤家呀，你虽没有夫妻情，我秀英待你是真心，我手持衣衫上前去，盖罢衣衫我心安宁。
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
