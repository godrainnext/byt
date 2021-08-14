import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { pxToDp } from '@utils/styleKits';
import { NavigationContext } from '@react-navigation/native';
import SvgUri from 'react-native-svg-uri';
import {
  dianzan,
  pinglun,
  sandian
} from '../../../../component/common/iconSvg';

const point =
  '<svg t="1627566102075" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7382" width="200" height="200"><path d="M512 0c57.6 0 108.8 44.8 108.8 108.8S569.6 211.2 512 211.2s-108.8-44.8-108.8-102.4S454.4 0 512 0z m0 812.8c57.6 0 108.8 44.8 108.8 108.8S569.6 1024 512 1024s-108.8-44.8-108.8-108.8S454.4 812.8 512 812.8z m0-409.6c57.6 0 108.8 44.8 108.8 108.8S569.6 620.8 512 620.8 403.2 569.6 403.2 512 454.4 403.2 512 403.2z" fill="#8C8C8C" p-id="7383"></path></svg>';
const playnumber =
  '<svg t="1627565895776" class="icon" viewBox="0 0 1194 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5884" width="200" height="200"><path d="M981.324356 0.01024H213.339396a211.281196 211.281196 0 0 0-213.329156 213.329155v597.321636a211.281196 211.281196 0 0 0 213.329156 213.329156h767.98496a211.281196 211.281196 0 0 0 213.329156-213.329156V213.339395a211.451859 211.451859 0 0 0-213.329156-213.329155z m127.997493 810.650791a125.650873 125.650873 0 0 1-127.997493 127.997494H213.339396a125.736204 125.736204 0 0 1-127.997494-127.997494V213.339395a125.736204 125.736204 0 0 1 127.997494-127.997493h767.98496a125.736204 125.736204 0 0 1 127.997493 127.997493v597.321636z m0 0" fill="#333333" p-id="5885"></path><path d="M829.775324 472.918312l-345.593232-151.335703a42.665831 42.665831 0 0 0-60.585481 38.953904v302.62874a42.665831 42.665831 0 0 0 60.585481 38.953904l345.891893-151.335703a42.239173 42.239173 0 0 0-0.298661-77.865142z m0 0" fill="#333333" p-id="5886"></path></svg>';

class Index extends PureComponent {
  state = {
    isvisible: false
  };
  render() {
    const { comments } = this.props;
    const newComments = [];
    comments.forEach((element) => {
      if (!newComments.some((item) => item.id === element.id)) {
        newComments.push(element);
      }
    });
    return (
      <View>
        {newComments.length ? (
          newComments.map((item) => (
            <View key={item.id}>
              <View style={{ flexDirection: 'row' }}>
                <Image
                  source={{ uri: item.user.avatarUrl }}
                  style={{
                    width: pxToDp(50),
                    height: pxToDp(50),
                    margin: pxToDp(15),
                    borderRadius: pxToDp(40)
                  }}
                />
                <Text style={{ marginTop: pxToDp(20) }}>
                  {item.user.nickName}
                </Text>
                <TouchableOpacity
                  style={{ position: 'absolute', right: 20, top: 20 }}
                  onPress={() => {
                    this.setState({ isvisible: true });
                  }}
                >
                  <SvgUri svgXmlData={sandian} width="20" height="20" />
                </TouchableOpacity>
              </View>
              <View style={{ marginLeft: 80 }}>
                <Text
                  style={{
                    marginBottom: pxToDp(10),
                    bottom: pxToDp(20),
                    fontSize: pxToDp(16),
                    width: '90%'
                  }}
                >
                  {item.content}
                </Text>
                <Text
                  style={{
                    marginBottom: pxToDp(10),
                    color: 'gray',
                    fontSize: pxToDp(13),
                    marginTop: pxToDp(-15)
                  }}
                >
                  {item.createTime}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    position: 'absolute',
                    right: 20,
                    bottom: 10
                  }}
                >
                  <TouchableOpacity>
                    <SvgUri
                      svgXmlData={dianzan}
                      width="20"
                      height="20"
                      style={{ marginRight: 20 }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <SvgUri svgXmlData={pinglun} width="20" height="20" />
                  </TouchableOpacity>
                </View>
              </View>
              {/* {item.reply.map((reply) => ( */}
              <View>
                <View style={{ flexDirection: 'row', marginLeft: pxToDp(35) }}>
                  <Image
                    source={{ uri: item.reply.avatar }}
                    style={{
                      width: pxToDp(40),
                      height: pxToDp(40),
                      margin: pxToDp(15),
                      borderRadius: pxToDp(40)
                    }}
                  />
                  <Text style={{ marginTop: pxToDp(20) }}>
                    {item.reply.nickName}
                  </Text>
                </View>
                <View style={{ marginLeft: 100 }}>
                  <View style={{ flexDirection: 'row' }}>
                    <Text
                      style={{
                        marginBottom: pxToDp(10),
                        bottom: pxToDp(20),
                        fontSize: pxToDp(16)
                      }}
                    >
                      回复{item.user.nickName}:
                    </Text>
                    <Text
                      style={{
                        marginBottom: pxToDp(10),
                        bottom: pxToDp(20),
                        fontSize: pxToDp(16),
                        width: '90%'
                      }}
                    >
                      {item.reply.content}
                    </Text>
                  </View>
                  <Text
                    style={{
                      marginBottom: pxToDp(10),
                      color: 'gray',
                      fontSize: pxToDp(13),
                      marginTop: pxToDp(-15)
                    }}
                  >
                    {item.reply.createAt}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      position: 'absolute',
                      right: 20,
                      bottom: 10,
                      backgroundColor: '#fff'
                    }}
                  >
                    <SvgUri
                      svgXmlData={dianzan}
                      width="20"
                      height="20"
                      style={{ marginRight: 20 }}
                    />
                    <SvgUri svgXmlData={pinglun} width="20" height="20" />
                  </View>
                </View>
              </View>
            </View>
          ))
        ) : (
          <View>
            <Text>暂无评论</Text>
          </View>
        )}
      </View>
    );
  }
}

export default Index;
