import React, { PureComponent } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  TextInput
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { pxToDp } from '@utils/styleKits';
import request from '@service/index'
import { getVideoCommentById, getCommentInnerById } from '../../../service/video';
import SvgUri from 'react-native-svg-uri';
import { pinglun, dianzan, sandian, allcomment } from '../../common/iconSvg';
import RBSheet from 'react-native-raw-bottom-sheet';
import changeImgSize from '@utils/changeImgSize';
import dayjs from 'dayjs';
import { connect } from 'react-redux';
class index extends PureComponent {
  state = { comment: [], mycomment: '', reply: [] };
  componentDidMount() {
    getVideoCommentById(this.props.videoId).then((res) => {
      this.setState({ comment: res });
    });
  }
  showRBsheet = async (id) => {
    await getCommentInnerById(id)
      .then((res) => this.setState({ reply: [...res[0].recomment] }))
      .then(() => this[`RBSheet${id}`].open());
  };
  _submit = (id) => {
    request.post({ url: `/comment/video/${id}/reply`, data: { content: this.state.mycomment } }).then(res => {
      const recom = {
        content: this.state.mycomment,
        createAt: dayjs(new Date()).format('YYYY-MM-DD -HH-mm'),
        id: res.insertId,
        user: {
          ...this.props.userInfo
        }
      }
      this.setState({ reply: [recom, ...this.state.reply], mycomment: '' })
    })
  }
  _submit2 = () => {
    request.post({ url: `/comment/video/${this.props.videoId}`, data: { content: this.state.mycomment } }).then(res => {
      const comment = {
        content: this.state.mycomment,
        createAt: dayjs(new Date()).format('YYYY-MM-DD -HH-mm'),
        id: res.insertId,
        user: {
          ...this.props.userInfo
        },
        recomment: null
      }
      this.setState({ comment: [...this.state.comment, comment], mycomment: '' })
    })
  }
  render() {
    return (
      <View>
        {this.state.comment.length ? (
          this.state.comment.map((item) => (
            <View key={item.id}>
              <View style={{ flexDirection: 'row' }}>
                <Image
                  source={{ uri: changeImgSize(item.user.avatar, 'small') }}
                  style={{
                    width: pxToDp(40),
                    height: pxToDp(40),
                    margin: pxToDp(15),
                    borderRadius: pxToDp(20)
                  }}
                />
                <Text style={{ marginTop: pxToDp(24) }}>
                  {item.user.nickName}
                </Text>
                <TouchableOpacity
                  style={{ position: 'absolute', right: 30, top: 30 }}
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
                  {item.createAt?.split('T')[1] ? item.createAt?.split('T')[0] : createAt?.split(' ')[0]}
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
                  <TouchableOpacity onPress={() => this.showRBsheet(item.id)}>
                    <SvgUri svgXmlData={pinglun} width="20" height="20" />
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <RBSheet
                  ref={(ref) => {
                    this[`RBSheet${item.id}`] = ref;
                  }}
                  height={495}
                  openDuration={0}
                >
                  <ScrollView
                    style={{ flex: 1 }}
                    showsVerticalScrollIndicator={false}
                  >
                    {item.recomment?.map((items) => (
                      <View key={items.id}>
                        <View
                          style={{
                            flexDirection: 'row',
                            marginLeft: pxToDp(10)
                          }}
                        >
                          <Image
                            source={{
                              uri: changeImgSize(items.user.avatar, 'small')
                            }}
                            style={{
                              width: pxToDp(40),
                              height: pxToDp(40),
                              margin: pxToDp(15),
                              borderRadius: pxToDp(40)
                            }}
                          />
                          <Text style={{ marginTop: pxToDp(20) }}>
                            {items.user.nickName}
                          </Text>
                        </View>
                        <View style={{ marginLeft: 80 }}>
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
                              {items.content}
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
                            {items.createAt}
                          </Text>
                          <View
                            style={{
                              flexDirection: 'row',
                              position: 'absolute',
                              right: pxToDp(20),
                              bottom: pxToDp(10),
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
                    ))}
                  </ScrollView>
                  <View
                    style={{
                      backgroundColor: '#fff',
                      height: pxToDp(50),
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
                        height: '80%',
                        backgroundColor: '#fcfcfc',
                        width: '75%',
                        marginLeft: pxToDp(20),
                        borderRadius: pxToDp(24),
                        paddingLeft: pxToDp(10)
                      }}
                      onChangeText={(mycomment) => this.setState({ mycomment })}
                      value={this.state.mycomment}
                      ref={(ref) => (this.inputRef = ref)}
                    />
                    <TouchableOpacity onPress={this._submit}>
                      <Text style={{ marginLeft: pxToDp(20) }}>发布</Text>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      backgroundColor: '#D5E8E6',
                      height: pxToDp(50),
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
                        height: '80%',
                        backgroundColor: '#fcfcfc',
                        width: '75%',
                        marginLeft: pxToDp(20),
                        borderRadius: pxToDp(16),
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
            <Text style={{ fontSize: 20, fontWeight: '900' }}>
              发一条评论吧~
            </Text>
          </View>
        )}
        <View
          style={{
            backgroundColor: '#D5E8E6',
            height: pxToDp(50),
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
              height: '80%',
              backgroundColor: '#fcfcfc',
              width: '75%',
              marginLeft: pxToDp(20),
              borderRadius: pxToDp(16),
              paddingLeft: pxToDp(10)
            }}
            onChangeText={(mycomment) => this.setState({ mycomment })}
            value={this.state.mycomment}
            ref={(ref) => (this.inputRef = ref)}
          />
          <TouchableOpacity onPress={() => this._submit2()}>
            <Text style={{ marginLeft: pxToDp(20) }}>回复</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default connect((state) => ({
  userInfo: state.getIn(['homeReducer', 'userInfo'])
}))(index);
