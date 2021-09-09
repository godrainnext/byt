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
                title: '杨贵妃',
                author:
                    '根据京剧移植',
                year: '1941年',
                int1: '唐玄宗选杨玉环入宫，册封为贵妃。玉环之兄杨国忠晋封丞相，独揽大权。平卢节度使安禄山进京，厚贿国忠，并拜玉环为义母，后禄山因得玄宗、玉环宠悦，渐呈骄态。国忠亦不示弱，两人遂成水火，玄宗命禄山回平卢，禄山蓄意谋反，阴谋益暴。',
                int2: '玉环进宫后，深得玄宗宠爱，七夕佳节，两人密誓于长生殿，情意更笃。安禄山反后，派人人京与将军陈之礼勾结，伺机杀杨国忠÷一日玉环重试霓裳羽衣舞，正歌舞，忽报安禄山已攻破潼关，玄宗乃与玉环仓皇赴蜀地避难。',
                int3: '至马嵬驿，陈之礼勒兵不发，将杨国忠杀死，更逼玄宗杀玉环。玄宗不得已，赐帛令玉环白尽。待安禄山之乱平定以后，玄宗回京，思念贵妃，召道士以术引至海上仙山，与玉环相见，互诉衷情，不胜伤感。',
                text1:
                    '1941年由筱丹桂首演，当时分一、二、三本，连演100多场，曾轰动一时。',
                text2:
                    '1987年由上海越剧院演出，金采风饰杨贵妃、金美芳饰唐明皇。',
                path1:
                    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi0.bbs.fd.zol-img.com.cn%2Ft_s1200x5000%2Fg5%2FM00%2F0D%2F0D%2FChMkJlbdfL-ILYrpACKwaVbsnDMAAM2DAJtq5gAIrCB366.jpg&refer=http%3A%2F%2Fi0.bbs.fd.zol-img.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633534313&t=29e0f37b27dace7ed18634071c1a277c',
                path2:
                    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi2.hdslb.com%2Fbfs%2Farchive%2Fe733069380d0ff32d9a7a82981a5393ff359f02d.jpg&refer=http%3A%2F%2Fi2.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633534298&t=160d71393d5d15aa90d3238db25aa46b'
            }
            ]
        };
    }
    static contextType = NavigationContext;
    render() {
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <Top icon1="arrow-back" title="杨贵妃" />
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
                    <Text style={styles.title}>
                        &emsp;&emsp;作者：{this.state.dramalist[0].author}
                    </Text>
                    <Text style={styles.title}>
                        &emsp;&emsp;创作年代：{this.state.dramalist[0].year}
                    </Text>
                    <View>
                        <Text style={styles.text}>剧情简介</Text>
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
                        <Text style={styles.title}>
                            &emsp;&emsp;{this.state.dramalist[0].text1}
                        </Text>
                        <Text style={styles.title}>
                            &emsp;&emsp;{this.state.dramalist[0].text2}
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.text}>
                            剧本详情
                        </Text>
                        <TouchableOpacity
                            style={styles.book}
                            onPress={() => this.context.navigate('Screenpaly18', {
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
        lineHeight: pxToDp(24),
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
        marginLeft: pxToDp(16)
    },
    book: {
        height: pxToDp(100),
        borderRadius: pxToDp(8),
        marginBottom: pxToDp(50)
    }
});
export default Index;

