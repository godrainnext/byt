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
                title: '双烈记',
                author:
                    '张四维',
                year: '明代',
                int1: '《双烈记》讲述南宋抗金英雄韩世忠与巾帼英雄梁红玉夫妇的故事。',
                int2: '韩世忠人才俊伟，武艺超群，投奔杭州兵马大元帅王渊帐下。梁红玉才貌双全，占籍教坊。新正元旦，梁在官衙府前见到韩世忠，一见倾心，愿付终身，但鸨母嫌韩穷困，韩决心建立功名，适逢出征方腊，韩活捉方腊，皇上升他为浙江宣抚使，封梁为诰命夫人。',
                int3: '苗、刘作乱，杀害王渊，意在篡位，韩生擒苗、刘，平定叛乱。金兀术引兵南下，韩在金山龙王庙大败之，第二天，韩、梁二人督军，大败金兀术于黄天荡，由于韩轻敌，使金兀术逃走，梁弹劾丈夫，皇上赦免。秦桧主和，削夺韩兵权，陷害岳飞，韩上表辞官，隐居西湖。',
                text1:
                    '暂无',
                path1:
                    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fphoto.rednet.cn%2Fattachment%2F201903%2F14%2F597895_1552565094Zmfz.jpg&refer=http%3A%2F%2Fphoto.rednet.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633536070&t=0a66ec0d165560a048aedcb80a080889',
                path2:
                    'https://img2.baidu.com/it/u=2791833992,399721011&fm=26&fmt=auto&gp=0.jpg'
            }
            ]
        };
    }
    static contextType = NavigationContext;
    render() {
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <Top icon1="arrow-back" title="双烈记" />
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
                            onPress={() => this.context.navigate('Screenpaly21', {
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
        alignSelf: 'center'
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
