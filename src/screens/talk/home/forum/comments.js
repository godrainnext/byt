import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions, TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard 
} from 'react-native';
import { pxToDp } from '@utils/styleKits';
import { NavigationContext } from '@react-navigation/native';
import SvgUri from 'react-native-svg-uri';
import {
  dianzan,
  pinglun,
  sandian,
  allcomment
} from '../../../../component/common/iconSvg';
import RBSheet from 'react-native-raw-bottom-sheet';
import { getCommentInnerById } from '@service/moment'
import request from  '@service/index'
class Index extends PureComponent {
  state = {
    isvisible: false,
    reply: [],
    mycomment:'',
  };
  showRBsheet = async (id) => {
    await getCommentInnerById(id).then(res => this.setState({ reply: [...res[0].recomment] })).then(() => this[`RBSheet${id}`].open())
  }
  reply = (id) => {
    this.props.inputRef.focus()
    console.log(this.props.inputRef);
  }
  _submit=async (id)=>{
    if(!this.state.mycomment) {
      return alert('留言不能为空')
  }
    
   await request.post({url:`comment/${id}/reply`,data:{content:this.state.mycomment}}).then(res=>{
    this.setState({mycomment:''}) 
    getCommentInnerById(id).then(res => this.setState({ reply: [...res[0].recomment] }))})
  }
  render() {

    const { comments } = this.props;
    const newComments = [];
    comments.forEach((element) => {
      if (!newComments.some((item) => item.id === element.id)) {
        newComments.push(element);
      }
    });

    console.log(newComments);
    return (
      <View>
        {newComments.length ? (
          newComments.map((item) => (
            <View key={item.id} style={{ backgroundColor: '#f6fbfe' }}>
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
                  <TouchableOpacity onPress={() => this.reply(item.id)}>
                    <SvgUri svgXmlData={pinglun} width="20" height="20" />
                  </TouchableOpacity>
                </View>
              </View>
              {/* {item.reply.map((reply) => ( */}
              {item.reply.content ? (<View style={{ backgroundColor: '#f6fbfe' }}>
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

                        bottom: pxToDp(10),
                        fontSize: pxToDp(16)
                      }}
                    >
                      回复{item.user.nickName}:
                    </Text>
                    <Text
                      style={{

                        bottom: pxToDp(10),
                        fontSize: pxToDp(16),
                        width: '90%'
                      }}
                    >
                      {item.reply.content}
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      marginBottom: pxToDp(25),
                    }}
                  >
                    <SvgUri
                      svgXmlData={dianzan}
                      width="15"
                      height="15"
                      style={{ marginRight: 20 }}
                    />
                    <TouchableOpacity onPress={() => this.showRBsheet(item.id)}>
                      <SvgUri svgXmlData={pinglun} width="15" height="15" />
                    </TouchableOpacity>
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
                  <TouchableOpacity onPress={() => this.showRBsheet(item.id)}>
                    <View style={{ flexDirection: 'row', }}>

                      <Text style={{ fontSize: 12, color: 'gray' }}>全部回复</Text>
                      <SvgUri svgXmlData={allcomment} width='12' height='12' style={{ marginBottom: 5, paddingLeft: 10, paddingTop: 3 }} />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>) : <View></View>}
              <View>
                <RBSheet
                  ref={ref => {
                    this[`RBSheet${item.id}`] = ref
                  }
                  }
                  height={495}
                  openDuration={0}>
                  <ScrollView style={{ flex: 1 }}>
                    {this.state.reply?.map((item) => (
                      <View key={item.id}>
                        <View style={{ flexDirection: 'row', marginLeft: pxToDp(10) }}>
                          <Image source={{ uri: item.avatar }} style={{ width: pxToDp(40), height: pxToDp(40), margin: pxToDp(15), borderRadius: pxToDp(40) }} />
                          <Text style={{ marginTop: pxToDp(20) }}>{item.nickName}</Text>
                        </View >
                        <View style={{ marginLeft: (80) }}>
                          <View style={{ flexDirection: 'row' }}>
                            <Text style={{ marginBottom: pxToDp(10), bottom: pxToDp(20), fontSize: pxToDp(16) }}>回复{item.nickName}:</Text>
                            <Text style={{ marginBottom: pxToDp(10), bottom: pxToDp(20), fontSize: pxToDp(16), width: '90%' }}>{item.content}</Text>
                          </View>
                          <Text style={{ marginBottom: pxToDp(10), color: 'gray', fontSize: pxToDp(13), marginTop: pxToDp(-15) }}>{item.createAt}</Text>
                          <View style={{ flexDirection: 'row', position: 'absolute', right: pxToDp(20), bottom: pxToDp(10), backgroundColor: '#fff' }}>
                            <SvgUri svgXmlData={dianzan} width='20' height='20' style={{ marginRight: pxToDp(20) }} />
                            <SvgUri svgXmlData={pinglun} width='20' height='20' />
                          </View>
                        </View>
                      </View>))}
                  </ScrollView>
               



                  <View style={{ backgroundColor: '#e2f4fe', height: 40, width: Dimensions.get('window').width, alignItems: 'center', flexDirection: 'row', position: 'absolute', bottom: 0 }}>
                    <TextInput
                      placeholder='发一条友善的评论'
                      style={{ height: '80%', backgroundColor: '#fcfcfc', width: '75%', marginLeft: pxToDp(20), borderRadius: pxToDp(20), paddingLeft: pxToDp(10) }}
                      onChangeText={(mycomment) => this.setState({ mycomment })}
                      value={this.state.mycomment}
                      ref={(ref) => this.inputRef = ref}
                    />
                    <TouchableOpacity onPress={()=>this._submit(item.id)}>
                      <Text style={{ marginLeft: pxToDp(20) }}>回复</Text>
                    </TouchableOpacity>
                  </View>
                </RBSheet>
              </View>
            </View>

          ))

        ) : (
          <View style={{ height: pxToDp(300), justifyContent: 'center', alignItems: 'center', opacity: .5 }}>
            <Text style={{ fontSize: 20, fontWeight: '900' }}>发一条评论吧~</Text>
          </View>
        )}

      </View>
    );
  }
}

export default Index;
