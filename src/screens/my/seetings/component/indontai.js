import React, { PureComponent } from 'react';
import { View, Text, Image, ScrollView,  } from 'react-native';
import { pxToDp } from '@utils/styleKits';
import { NavigationContext } from "@react-navigation/native";
import SvgUri from 'react-native-svg-uri';
import Top from '@components/common/top';
import Comments from '../component/comments'

const point = '<svg t="1627566102075" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7382" width="200" height="200"><path d="M512 0c57.6 0 108.8 44.8 108.8 108.8S569.6 211.2 512 211.2s-108.8-44.8-108.8-102.4S454.4 0 512 0z m0 812.8c57.6 0 108.8 44.8 108.8 108.8S569.6 1024 512 1024s-108.8-44.8-108.8-108.8S454.4 812.8 512 812.8z m0-409.6c57.6 0 108.8 44.8 108.8 108.8S569.6 620.8 512 620.8 403.2 569.6 403.2 512 454.4 403.2 512 403.2z" fill="#8C8C8C" p-id="7383"></path></svg>'
const playnumber = '<svg t="1627565895776" class="icon" viewBox="0 0 1194 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5884" width="200" height="200"><path d="M981.324356 0.01024H213.339396a211.281196 211.281196 0 0 0-213.329156 213.329155v597.321636a211.281196 211.281196 0 0 0 213.329156 213.329156h767.98496a211.281196 211.281196 0 0 0 213.329156-213.329156V213.339395a211.451859 211.451859 0 0 0-213.329156-213.329155z m127.997493 810.650791a125.650873 125.650873 0 0 1-127.997493 127.997494H213.339396a125.736204 125.736204 0 0 1-127.997494-127.997494V213.339395a125.736204 125.736204 0 0 1 127.997494-127.997493h767.98496a125.736204 125.736204 0 0 1 127.997493 127.997493v597.321636z m0 0" fill="#333333" p-id="5885"></path><path d="M829.775324 472.918312l-345.593232-151.335703a42.665831 42.665831 0 0 0-60.585481 38.953904v302.62874a42.665831 42.665831 0 0 0 60.585481 38.953904l345.891893-151.335703a42.239173 42.239173 0 0 0-0.298661-77.865142z m0 0" fill="#333333" p-id="5886"></path></svg>'
const pinglun = '<svg t="1627563771753" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4413" width="200" height="200"><path d="M841.15200031 70.44266698c57.28000031 0 104.12800031 44.67199969 108.864 101.376l0.384 9.53599969v477.12c0 57.91999969-43.776 105.66400031-99.84 110.52799969l-9.408 0.44800031h-90.11200031a31.99999969 31.99999969 0 0 1-5.76-63.48799969l5.76-0.51200062h90.11200031a45.888 45.888 0 0 0 44.79999938-40.57599938l0.44800031-6.40000031V181.35466667a46.39999969 46.39999969 0 0 0-39.168-46.52800031l-6.07999969-0.384H163.712a45.888 45.888 0 0 0-44.86399969 40.512l-0.44800031 6.40000031v477.12c0 23.93599969 17.21599969 43.45600031 39.168 46.52800031l6.144 0.44799938H530.55999969a31.99999969 31.99999969 0 0 1 19.2 6.336l3.84 3.39200062 190.14400031 197.05599938a31.99999969 31.99999969 0 0 1-41.59999969 48.192l-4.416-3.77599969-180.73600031-187.26400031h-353.28a109.95199969 109.95199969 0 0 1-108.864-101.31199969l-0.44800031-9.6V181.35466667c0-57.91999969 43.776-105.6 99.84-110.52799969l9.47200031-0.384h677.44000031z" fill="#515151" p-id="4414"></path><path d="M243.2 270.50666698m37.56799969 0l287.808 0q37.56799969 0 37.56800062 37.56799969l0 0.06400031q0 37.56799969-37.56800062 37.56799969l-287.808 0q-37.56799969 0-37.56799969-37.56799969l0-0.06400031q0-37.56799969 37.56799969-37.56799969Z" fill="#515151" p-id="4415"></path><path d="M243.2 466.09066667m37.56799969 0l440.57600062 0q37.56799969 0 37.56799969 37.56799969l0 0.06400031q0 37.56799969-37.56799969 37.56799969l-440.57600062 0q-37.56799969 0-37.56799969-37.56799969l0-0.06400031q0-37.56799969 37.56799969-37.56799969Z" fill="#515151" p-id="4416"></path></svg>'

class Index extends PureComponent {
    state = {
        louzhu: { lzimg: 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg', lzname: '🐷杯', dt: '是云在想你呀', date: '2021-08-03', dtimg: ['https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg', 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg', 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg', 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg'] },
        comments: [
            {
                commentid: 1, plimg: 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg',
                pl: '别狗叫', plname: '啊啊啊', pldate: '2021-08-03', commetdate: '2021-08-03',
                reply: [{
                    rpid: 1, rpname: '✌🐷✌', rpimg: 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg',
                    rptext: '别狗叫', rpdate: '1999-07-15', rpto: '✌🐷✌'
                }],
            },
            {
                commentid: 1, plimg: 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg',
                pl: '别狗叫', plname: '啊啊啊', pldate: '2021-08-03', commetdate: '2021-08-03',
                reply: [{
                    rpid: 1, rpname: '✌🐷✌', rpimg: 'https://img2.baidu.com/it/u=2116882029,1761299726&fm=26&fmt=auto&gp=0.jpg',
                    rptext: '别狗叫', rpdate: '1999-07-15', rpto: '✌🐷✌'
                }],
            },


        ]

    }
    render() {
        return (
            <ScrollView style={{ backgroundColor: '#fff' }}>
                <Top icon1='arrow-back' title="设置" />
                <View style={{ width: '100%', height: pxToDp(100), marginTop: pxToDp(20), flexDirection: 'row' }}>
                    <Image source={{ uri: this.state.louzhu.lzimg }} style={{ height: pxToDp(60), width: pxToDp(60), borderRadius: pxToDp(60), margin: pxToDp(15) }} />
                    <View style={{ marginTop: pxToDp(20), paddingLeft: pxToDp(5) }}>
                        <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold' }}>{this.state.louzhu.lzname}</Text>
                    </View>
                </View>
                <View style={{ margin: pxToDp(15) }}>
                    <Text style={{ fontSize: pxToDp(18) }}>{this.state.louzhu.dt}</Text>
                </View>
                <ScrollView style={{ height: pxToDp(150), marginTop: pxToDp(10), width: '95%', marginLeft: pxToDp(10) }} horizontal={true}>

                    {this.state.louzhu.dtimg.map((item, index) => (
                        <View key={index} style={{ marginBottom: pxToDp(10) }}>
                            <Image
                                style={{ width: pxToDp(150), height: pxToDp(150), borderRadius: pxToDp(15), marginRight: pxToDp(10) }}
                                source={{ uri: item }} />
                        </View>
                    ))}
                </ScrollView>
                {/* <Text style={{paddingLeft:pxToDp(15),color:'gray'}}>{this.state.louzhu.date}</Text> */}
                <View style={{ backgroundColor: '#fff', marginTop: pxToDp(30) }}>
                    <Text style={{ fontSize: pxToDp(18), margin: pxToDp(15), }}>全部</Text>

                    <Comments
                        comments={this.state.comments} />

                </View>
            </ScrollView >
        );
    }
}



export default Index;