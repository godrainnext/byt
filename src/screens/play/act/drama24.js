import React, { PureComponent } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    StyleSheet
} from 'react-native';
import Top from '../../../component/common/top';
import { pxToDp } from '../../../utils/styleKits';
import { NavigationContext } from '@react-navigation/native';
import Svg from 'react-native-svg-uri';
import { right } from '../../../component/common/iconSvg';
class Index extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            dramalist: [{
                title: '宝莲灯',
                author:
                    '暂无',
                year: '暂无',
                int1: '这是一出美丽的神话故事。描写古代一个思凡的女神圣母与凡间书生刘彦昌相爱缔婚，生子沉香。圣母兄二郎神怒妹思凡，将其压在华山之下。',
                int2: '圣母临难时，遣婢灵芝护送刘彦昌父子逃离虎口。后刘中状元，继娶宰相之女王桂英，抚养沉香，又生子秋儿。',
                int3: '十三年后，沉香读书路上，失手打死秦府官保，王桂英仗义，放走沉香。遇霹雳大仙点化，脱去凡胎，授以武艺，又赐予劈山神斧。',
                int4: '沉香乃持斧战败二郎神，力劈华山，救出圣母，母子团圆。',
                text1: '2021年01月22日，温州市越剧演艺中心在温州·温州东南剧院演出越剧《宝莲灯》，徐未、周莉、周莉莉、陈思文、潘婉婉、陈园园、张露霞、金巧敏、高晓燕、徐晓、张亚参与演出。',
                path1:
                    'https://bkimg.cdn.bcebos.com/pic/b219ebc4b74543a9b9a10c8f1e178a82b901143e?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U5Mg==,g_7,xp_5,yp_5/format,f_auto',
                path2:
                    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg1.jinciwei.cn%2Fmmbiz_jpg%2FVGJJgicpDJRIwRniaiatTAZ58BqDw5nxFa936Iho7HCyTPJzV0S9Kg0Es92PFT5aWFx7txacUvFV6Ydlo0slx8DVA%2F640%3Fwx_fmt%3Djpeg&refer=http%3A%2F%2Fimg1.jinciwei.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633528173&t=06b8f6852591f67846110ca66ce9f2d4'
            }
            ]
        };
    }
    static contextType = NavigationContext;
    render() {
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <Top icon1="arrow-back" title="宝莲灯" />
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{
                        flex: 1
                    }}
                    showsVerticalScrollIndicator={false}
                >
                    <Image
                        style={{
                            height: pxToDp(180),
                            borderRadius: pxToDp(8),
                            marginLeft: pxToDp(16),
                            marginRight: pxToDp(16),
                            marginTop: pxToDp(8)
                        }}
                        source={{ uri: this.state.dramalist[0].path1 }}
                    />
                    <Text style={styles.text}>
                        {this.state.dramalist[0].title}
                    </Text>
                    <View style={styles.line}></View>
                    <Text style={styles.title}>
                        &emsp;&emsp;作者：{this.state.dramalist[0].author}
                    </Text>
                    <Text style={styles.title}>
                        &emsp;&emsp;创作年代：{this.state.dramalist[0].year}
                    </Text>
                    <View>
                        <Text style={styles.text}>剧情简介</Text>
                        <View style={styles.line}></View>
                        <Text style={styles.title}>
                            &emsp;&emsp;{this.state.dramalist[0].int1}
                        </Text>
                        <Text style={styles.title}>
                            &emsp;&emsp;{this.state.dramalist[0].int2}
                        </Text>
                        <Text style={styles.title}>
                            &emsp;&emsp;{this.state.dramalist[0].int3}
                        </Text>
                        <Text style={styles.title}>
                            &emsp;&emsp;{this.state.dramalist[0].int4}
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.text}>演出历史</Text>
                        <View style={styles.line}></View>
                        <Text style={styles.title}>
                            &emsp;&emsp;{this.state.dramalist[0].text1}
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.text}>
                            剧本详情
                        </Text>
                        <View style={styles.line}></View>
                        <TouchableOpacity
                            style={styles.book}
                            onPress={() => this.context.navigate('Screenpaly16', {
                                ...this.state.dramalist,
                                title: this.state.dramalist[0].title
                            }
                            )}
                        >
                            <Image
                                style={{
                                    height: pxToDp(100),
                                    borderRadius: pxToDp(8),
                                    marginLeft: pxToDp(16),
                                    marginRight: pxToDp(16),
                                    marginTop: pxToDp(24)
                                }}
                                source={{ uri: this.state.dramalist[0].path2 }}
                            />
                            <View style={{ marginTop: pxToDp(-60), marginLeft: pxToDp(300) }}>
                                <Svg width="32" height="32" svgXmlData={right} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title: {
      fontSize: pxToDp(16),
      lineHeight: pxToDp(30),
      color: '#333333',
      marginTop: pxToDp(16),
      marginLeft: pxToDp(16),
      marginRight: pxToDp(16)
    },
    text: {
      fontSize: pxToDp(18),
      color: '#000000',
      fontWeight: 'bold',
      marginTop: pxToDp(24),
      alignSelf:'center'
    },
    book: {
      height: pxToDp(100),
      borderRadius: pxToDp(8),
      marginBottom: pxToDp(50)
    },
    line: {
      alignSelf: 'center',
      height: pxToDp(5),
      width: pxToDp(100),
      backgroundColor: '#62bfad',
      marginTop: pxToDp(4)
    }
  });
  export default Index;