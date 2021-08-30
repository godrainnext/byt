import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { pxToDp } from '@utils/styleKits';
import { ScrollView } from 'react-native-gesture-handler';
import { NavigationContext } from '@react-navigation/native';
import { getVideList } from '@service/home';
import SvgUri from 'react-native-svg-uri';
import { dianzan, pinglun, star, zhuanfa } from '../../common/iconSvg';
class index extends PureComponent {
  state = { arr: [] };
  componentDidMount() {
    getVideList(0).then((res) => {
      this.setState({ arr: res });
    });
  }
  static contextType = NavigationContext;

  render() {
    const {
      collectionNum = 0,
      likeNum = 0,
      title = '',
      watchNum = 0
    } = this.props.videoInfo;
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginVertical: 2, padding: 10 }}>
          <View style={{ marginVertical: 2, padding: 10 }}>
            <View>
              <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold' }}>
                {title}
              </Text>
              <Text
                style={{
                  fontSize: pxToDp(14),
                  color: 'gray',
                  marginTop: pxToDp(12)
                }}
              >
                {watchNum}播放&emsp;{likeNum}喜欢
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: pxToDp(16),
                marginBottom: pxToDp(16)
              }}
            >
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <SvgUri svgXmlData={dianzan} width="20" height="20" />
                <Text>{likeNum}</Text>
              </View>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <SvgUri svgXmlData={pinglun} width="20" height="20" />
                <Text>{collectionNum}</Text>
              </View>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <SvgUri
                  svgXmlData='<svg t="1629783261983" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="200" height="200"><path d="M512.3264254 70.7935776v62.1873686c0.77734223 0 2.20246928 0.64778484 2.85025412 1.16601333 0.38867111 0.77734223 0.64778484 1.55468446 1.03645596 2.20246928l106.10719698 215.58287662c8.80987717 17.87886803 25.5227329 30.31634153 45.0858428 33.81438156l237.08934101 41.45824538c0.77734223 0.1295574 1.68424077 0.25911372 2.46158302 0.38867112 0.38867111 0 1.03645596 0.51822851 1.16601333 0.90689855 0.25911372 1.16601334 0.64778484 2.46158301 1.03645593 3.62759634 0.25911372 0.77734223 1.03645596 3.10936891-1.16601228 5.70050933L738.40341994 597.70196726c-15.41728502 14.51038542-22.41336401 35.88729345-18.52665285 56.61641562L763.01925327 886.48455783v0.1295574c0.38867111 2.33202668-1.55468446 4.27538118-2.72069675 5.18228079-0.25911372 0.25911372-0.51822851 0.38867111-0.77734223 0.64778485-1.03645596-0.25911372-2.33202668-0.77734223-3.75715374-1.42512707l-215.58287662-107.79143883c-8.80987717-4.40493858-18.26753915-6.60740786-27.85475851-6.60740786-9.45766198 0-18.91532401 2.20246928-27.59564482 6.47785152l-217.2671174 107.79143778c-0.64778484 0.25911372-1.16601334 0.64778484-1.8137982 0.90689961-0.1295574 0-0.64778484 0.25911372-1.42512703 0.25911375-0.77734223 0-1.42512706-0.1295574-1.55468446-0.25911375-1.42512706-1.16601334-2.59114041-3.49803897-2.7206978-4.66405227v-0.12955741L304.77608373 654.70705398c4.01626747-20.98823694-2.9798115-42.62425872-18.6562103-57.26420151L116.52973822 439.51284849c-1.55468446-1.81379818-2.33202668-5.31183819-2.20246929-7.38475007 0.64778484-1.42512706 1.29556967-2.07291189 1.55468339-2.33202565 0.1295574-0.1295574 0.38867111-0.25911372 1.16601332-0.38867111 1.16601334-0.1295574 2.33202668-0.25911372 3.36848264-0.51822851l237.08934206-43.14248616c19.43355248-3.49803897 36.01685085-16.06506985 44.69717061-33.68482522L508.18060055 136.73809991c1.42512706-2.72069779 3.62759633-3.62759633 4.01626748-3.62759632V70.7935776m0.12955737 0c-24.87494701 0-48.06565326 14.89905651-59.72578451 38.08976381l-106.10719701 215.5828766-237.08934206 43.14248616c-26.55918886 3.36848263-46.38141246 21.50646439-54.67306111 46.38141246-6.60740786 23.19070623 0 51.43413587 18.26753914 69.70167504l170.75614861 159.35513104-44.826728 232.16617496c-4.92316709 24.87494701 6.60740786 51.43413587 26.55918885 66.33319238 11.14190384 8.42120604 25.00450441 12.56703091 38.73754866 12.56703092 10.75323273 0 21.37690807-2.59114041 30.83457004-7.64386383l217.26711739-107.79143881 215.58287661 107.79143881c9.9758905 4.92316709 21.50646439 8.29164865 31.48235488 8.29164867 14.89905651 0 28.24342964-4.92316709 38.08976381-13.21481576 19.951781-14.89905651 31.48235488-39.77400459 26.55918782-66.33319238l-43.14248621-232.16617496 170.75614863-160.90981548c18.26753915-18.26753915 24.87494701-44.82672801 16.58329836-69.70167505-6.60740786-24.87494701-28.24342964-43.14248722-53.11837772-46.38141247l-237.08934098-41.45824535-106.10719698-215.58287662c-9.84633309-23.19070623-34.72128012-38.21932013-59.59622822-38.21932014z" p-id="4153" fill="#515151"></path></svg>'
                  width="20"
                  height="20"
                />
                <Text>缓存</Text>
              </View>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <SvgUri svgXmlData={zhuanfa} width="20" height="20" />
                <Text>分享</Text>
              </View>
            </View>
            <View>
              <View>
                <Text style={{ fontSize: pxToDp(20), fontWeight: 'bold' }}>
                  为你推荐
                </Text>
              </View>
              <View style={{ marginTop: pxToDp(16), marginBottom: pxToDp(-8) }}>
                {this.state.arr.map((item) => (
                  <TouchableOpacity
                    key={item.id}
                    onPress={() => this.context.push('Video', item.id)}
                  >
                    <View
                      style={{
                        height: pxToDp(110),
                        borderRadius: pxToDp(8),
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        backgroundColor: '#fff',
                        marginBottom: pxToDp(8),
                        elevation: 2,
                        shadowColor: 'black', //  阴影颜色
                        shadowOffset: { width: 0, height: 0 }, // 阴影偏移
                        shadowOpacity: 1, // 阴影不透明度
                        shadowRadius: 10 //  圆角
                      }}
                    >
                      <View
                        style={{
                          flexDirection: 'row',
                          marginBottom: pxToDp(5),
                          marginTop: pxToDp(5)
                        }}
                      >
                        <Image
                          style={{
                            width: '40%',
                            height: pxToDp(90),
                            borderRadius: pxToDp(8),
                            marginLeft: pxToDp(16)
                          }}
                          source={{ uri: item.avatar }}
                        ></Image>
                        <View
                          style={{
                            width: '60%',
                            height: pxToDp(90),
                            padding: pxToDp(8)
                          }}
                        >
                          <Text
                            numberOfLines={1}
                            style={{ fontSize: pxToDp(16), fontWeight: 'bold' }}
                          >
                            {item.title}
                          </Text>
                          <Text
                            numberOfLines={1}
                            style={{
                              marginTop: pxToDp(5),
                              marginBottom: pxToDp(5)
                            }}
                          >
                            {item.ezcontent}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: pxToDp(16)
              }}
            >
              <Text style={{ fontSize: pxToDp(14), color: 'grey' }}>
                —暂无更多—
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default index;
