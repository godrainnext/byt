import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  TextInput,
  ToastAndroid
} from 'react-native';
import { pxToDp } from '@utils/styleKits';
import SvgUri from 'react-native-svg-uri';
import {
  dianzan,
  pinglun,
} from '../../../../component/common/iconSvg';
import RBSheet from 'react-native-raw-bottom-sheet';
import { getCommentInnerById } from '@service/moment';
import Ionicons from 'react-native-vector-icons/Ionicons';
import request from '@service/index';
class Index extends PureComponent {
  state = {
    isvisible: false,
    reply: [],
    mycomment: ''
  };
  showRBsheet = async (id) => {
    await getCommentInnerById(id)
      .then((res) => {
        if (res[0].recomment) this.setState({ reply: [...res[0].recomment] });
        else {
          return;
        }
      })
      .then(() => this[`RBSheet${id}`].open());
  };
  reply = (id) => {
    this.props.inputRef.focus();
  };
  _submit = (id) => {
    if (!this.state.mycomment) {
      ToastAndroid.show('留言内容不能为空', ToastAndroid.SHORT);
      return;
    }

    request
      .post({
        url: `comment/${id}/reply`,
        data: { content: this.state.mycomment }
      })
      .then((res) => {
        this.setState({ mycomment: '' });
        getCommentInnerById(id).then((res) => {
          this.setState({ reply: [...res[0].recomment] });
        });
      });
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
                    width: pxToDp(40),
                    height: pxToDp(40),
                    margin: pxToDp(8),
                    borderRadius: pxToDp(20)
                  }}
                />
                <Text style={{ marginTop: pxToDp(16), fontSize: pxToDp(14), color: '#333333', fontWeight: 'bold' }}>
                  {item.user.nickName}
                </Text>
              </View>
              <View style={{ marginLeft: pxToDp(60) }}>
                <Text
                  style={{
                    bottom: pxToDp(15),
                    fontSize: pxToDp(14),
                    color: '#333333',
                    width: '90%'
                  }}
                >
                  {item.content}
                </Text>
                <Text
                  style={{
                    marginBottom: pxToDp(10),
                    color: '#666666',
                    fontSize: pxToDp(14),
                    marginTop: pxToDp(-10)
                  }}
                >
                  {item.createTime?.split(' ')[0]}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    position: 'absolute',
                    right: 20,
                    bottom: 15
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
                  <TouchableOpacity onPress={() => this.showRBsheet(item.id)}>
                    <SvgUri svgXmlData={pinglun} width="20" height="20" />
                  </TouchableOpacity>
                </View>
              </View>
              {item.reply.content ? (
                <View style={{ marginLeft: pxToDp(60), marginTop: pxToDp(-8) }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ marginTop: pxToDp(15), fontSize: pxToDp(14), color: '#333333', fontWeight: 'bold' }}>
                      {item.reply.nickName}:
                    </Text>
                    <Text
                      style={{
                        fontSize: pxToDp(14),
                        marginTop: pxToDp(15),
                        color: '#333333',
                        width: '90%'
                      }}>
                      {item.reply.content}
                    </Text>
                  </View>
                  <View style={{ marginTop: pxToDp(10) }}>
                    <TouchableOpacity onPress={() => this.showRBsheet(item.id)}>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: pxToDp(12), color: '#666666' }}>
                          全部回复
                        </Text>
                        <Ionicons name="chevron-forward" size={16} color="#666666" />
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              ) : (
                <View>
                </View>
              )}
              <View>
                <RBSheet
                  ref={(ref) => {
                    this[`RBSheet${item.id}`] = ref;
                  }}
                  height={495}
                  openDuration={0}
                >
                  <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                    {this.state.reply.length ? this.state.reply.map((items) => (
                      <View key={items.id}>
                        <View
                          style={{
                            flexDirection: 'row',
                            marginLeft: pxToDp(10)
                          }}
                        >
                          <Image
                            source={{ uri: items.avatar }}
                            style={{
                              width: pxToDp(40),
                              height: pxToDp(40),
                              margin: pxToDp(8),
                              borderRadius: pxToDp(20)
                            }}
                          />
                          <Text style={{ marginTop: pxToDp(16), fontSize: pxToDp(14), color: '#333333', fontWeight: 'bold' }}>
                            {items.nickName}
                          </Text>
                        </View>
                        <View style={{ marginLeft: 80 }}>
                          <View style={{ flexDirection: 'row' }}>
                            <Text
                              style={{
                                marginBottom: pxToDp(10),
                                bottom: pxToDp(20),
                                fontSize: pxToDp(14),
                                color: '#333333'
                              }}
                            >
                              回复{item.user.nickName}:
                            </Text>
                            <Text
                              style={{
                                marginBottom: pxToDp(10),
                                bottom: pxToDp(20),
                                fontSize: pxToDp(14),
                                color: '#333333',
                                width: '90%'
                              }}
                            >
                              {items.content}
                            </Text>
                          </View>
                          <View style={{ marginTop: pxToDp(-10) }}>
                            <Text
                              style={{
                                marginBottom: pxToDp(10),
                                color: 'gray',
                                fontSize: pxToDp(14),
                                color: '#666666',
                                marginTop: pxToDp(-15)
                              }}
                            >
                              {items.createAt?.split(' ')[0]}
                            </Text>
                            <View
                              style={{
                                flexDirection: 'row',
                                position: 'absolute',
                                right: pxToDp(20),
                                bottom: 15,
                                backgroundColor: '#fff'
                              }}
                            >
                              <SvgUri
                                svgXmlData={dianzan}
                                width="20"
                                height="20"
                                style={{ marginRight: pxToDp(20) }}
                              />
                              <SvgUri
                                svgXmlData={pinglun}
                                width="20"
                                height="20"
                              />
                            </View>
                          </View>
                        </View>
                      </View>
                    )) : <View style={{ alignItems: 'center', marginTop: pxToDp(200) }}>
                      <Text style={{ fontSize: pxToDp(18), fontWeight: '900' }}>发一条评论吧~</Text>
                    </View>}
                  </ScrollView>

                  <View
                    style={{
                      backgroundColor: 'white',
                      height: 40,
                      width: Dimensions.get('window').width,
                      alignItems: 'center',
                      flexDirection: 'row',
                      position: 'absolute',
                      bottom: 0
                    }}
                  >
                    <TextInput
                      placeholder="发一条友善的评论"
                      style={{
                        height: '100%',
                        backgroundColor: '#fcfcfc',
                        padding: pxToDp(5),
                        width: '75%',
                        marginLeft: pxToDp(20),
                        borderRadius: pxToDp(20),
                        paddingLeft: pxToDp(10)
                      }}
                      onChangeText={(mycomment) => this.setState({ mycomment })}
                      value={this.state.mycomment}
                      ref={(ref) => (this.inputRef = ref)}
                    />
                    <TouchableOpacity onPress={() => this._submit(item.id)}>
                      <Text style={{ marginLeft: pxToDp(20) }}>回复</Text>
                    </TouchableOpacity>
                  </View>
                </RBSheet>
              </View>
            </View>
          ))
        ) : (
          <View
            style={{
              height: pxToDp(300),
              justifyContent: 'center',
              alignItems: 'center',
              opacity: 0.5
            }}
          >
            <Text style={{ fontSize: pxToDp(18), fontWeight: '900' }}>
              发一条评论吧~
            </Text>
          </View>
        )}
      </View>
    );
  }
}

export default Index;
