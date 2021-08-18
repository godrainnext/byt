/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import {
    View,
    Text,
    tras,
    Dimensions,
    ScrollView,
    ImageBackground,
    TouchableOpacity, Image, SvgUri,
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import ParallaxScrollView from 'react-native-parallax-scrollview';
import { pxToDp } from '@utils/styleKits';
import Dongtai from './screens/my/seetings/component/dontai'
import Collect from './screens/my/seetings/component/collect'
import Soucang from './screens/my/seetings/component/soucang'
import CustormerBar from './CustormerBar'

const SCREEN_HEIGHT = Dimensions.get('window').height

export default class hello extends Component {
    state = {
        issub: false,
        index: 0,
        userinfo:
        {
            id: 1, bcimg: 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg', userimg: 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg', username: 'ppp', userqm: 'aaaaaaaaaaaaaaaaaaaaa', userfans: 10, usergz: 10, userhz: 1,

            collect: [{
                collectid: 1,
                collectimg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1501%2F10%2Fc5%2F1703828_1420863335187_mthumb.jpg&refer=http%3A%2F%2Fimg.pconline.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631240166&t=6f9aea8e73cc81bb70adf7fe6241bded'
                , title: '乌拉乌拉乌拉乌拉乌拉乌拉', playnum: 111, label: '视频'
            },
            {
                collectid: 1,
                collectimg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1501%2F10%2Fc5%2F1703828_1420863335187_mthumb.jpg&refer=http%3A%2F%2Fimg.pconline.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631240166&t=6f9aea8e73cc81bb70adf7fe6241bded'
                , title: '乌拉乌拉乌拉乌拉乌拉乌拉', playnum: 111, label: '视频'
            },
            {
                collectid: 1,
                collectimg: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1501%2F10%2Fc5%2F1703828_1420863335187_mthumb.jpg&refer=http%3A%2F%2Fimg.pconline.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631240166&t=6f9aea8e73cc81bb70adf7fe6241bded'
                , title: '乌拉乌拉乌拉乌拉乌拉乌拉', playnum: 111, label: '视频'
            },
            ],

            dongtai: [{
                dtid: 1, dtimg: 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg',
                name: 'wulawulaaaa', date: '03月20日', dt: '乌拉乌拉乌拉乌拉乌拉乌拉乌拉乌拉乌拉', dz: 123,
                dtimg2: ['https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg', 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg', 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg', 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg', 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg', 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg'
                ]
            },
           
        
        ],

            soucang: [{ scid: 1, scimg: 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg', bookname: '111111', name: '12111', date: '2019-05-02' }]

        }
    }

    render() {
        const { userinfo } = this.state
        return (
            <ParallaxScrollView

            backgroundSource='http://i.imgur.com/s4JEY9E.jpg'
            navBarTitle='Custom Title'
            navBarTitleColor='#fff'
            navBarColor='#e2f4fe'
            headerView={(
                <View style={{ height: pxToDp(300),width:'100%' }}>
                <ImageBackground style={{ width: '100%', height: pxToDp(150) }} source={{ uri: userinfo.bcimg }} />
                <View>
                    <TouchableOpacity>
                        <Image source={{ uri: userinfo.userimg }} style={{ width: pxToDp(90), height: pxToDp(90), borderRadius: pxToDp(50), margin: pxToDp(10) }} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: pxToDp(20), top: pxToDp(0), left: pxToDp(10), width: pxToDp(150) }} numberOfLines={1}>{userinfo.username}</Text>
                </View>
                <View style={{ flexDirection: 'row', position: 'absolute', top: pxToDp(160), right: pxToDp(0) }}>
                    <View style={{ marginRight: pxToDp(55) }}>

                        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold' }}>{userinfo.userfans}</Text>
                            <Text style={{ fontSize: pxToDp(15), color: 'gray' }}>粉丝</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginRight: pxToDp(55) }}>
                        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold' }}>{userinfo.usergz}</Text>
                            <Text style={{ fontSize: pxToDp(15), color: 'gray' }}>关注</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginRight: pxToDp(10) }}>

                        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold' }}>{userinfo.userhz}</Text>
                            <Text style={{ fontSize: pxToDp(15), color: 'gray' }}>获赞</Text>
                        </TouchableOpacity>
                    </View>
              
                        <TouchableOpacity
                        style={{
                            position: 'absolute', top: pxToDp(50),
                            borderRadius: pxToDp(5), 
                            right: pxToDp(10), 
                            width: pxToDp(200), 
                            height: pxToDp(40), 
                            justifyContent: 'center',
                             alignItems: 'center', borderWidth:
                              pxToDp(2), borderColor: this.state.issub?'#fff':'pink',
                              backgroundColor: this.state.issub ? '#ccc' : '#fff'
                        }}
                            onPress={() => { this.setState({ issub: !this.state.issub }) }}>
                            <Text style={{ color: this.state.issub?'#fff':'pink', fontSize: pxToDp(15) }}>{this.state.issub ? '已关注' : '关注'}</Text>
                        </TouchableOpacity>
                  
                </View>

                <View style={{ position: 'absolute', bottom: pxToDp(-10), left: pxToDp(10), width: '80%' }}>
                    <Text style={{ color: '#ccc', fontSize: 15 }} numberOfLines={1}>{this.state.userinfo.userqm}</Text>

                </View>
            </View>
            )}
            leftIcon={{name: 'rocket', color: 'rgba(228, 117, 125, 1)', size: 30, type: 'font-awesome'}}
            leftIconOnPress={() => this.setState({index: (this.state.index + 1 ) % 3})}
            rightIcon={{name: 'user', color: 'rgba(228, 117, 125, 1)', size: 30, type: 'font-awesome'}}
            rightIconOnPress={() => this.setState({index: (this.state.index + 1 ) % 3})}
          >
            <View style={{flex:1,height:1000,backgroundColor: 'rgba(228, 117, 125, 1)',backgroundColor:'red'}}>
                
            <ScrollableTabView
                        initialPage={0}
                        renderTabBar={() => <CustormerBar />}
                        
                    >
                        <Dongtai tabLabel='动态'
                            userinfo={userinfo}

                        />
                        <Collect tabLabel='收藏'
                                userinfo={userinfo}
                        />
                        <Soucang tabLabel='剧本中心'
                              userinfo={userinfo}
                        />
                    </ScrollableTabView>
            </View>
          </ParallaxScrollView>
        )
    }
}
