import React, { Fragment, PureComponent } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { pxToDp } from '@utils/styleKits';
import ScreenBase from '@components/screenplayBase/ScreenBase';

class Index extends PureComponent {
    renderInner = () => (
        <Fragment>
            <View>
                <View style={{
                    height: pxToDp(30),
                    width: pxToDp(30),
                    borderRadius: pxToDp(15),
                    backgroundColor: '#D5E8E6',
                    marginBottom: pxToDp(-20),
                }} ></View>
                <Text
                    style={{ fontSize: pxToDp(18), fontWeight: 'bold', color: '#000000', marginLeft: pxToDp(10) }}
                >
                    柳永
                </Text>
                <View style={{ width: pxToDp(40), height: pxToDp(1), backgroundColor: '#000000', marginLeft: pxToDp(10) }}></View>
            </View>
            <Text
                style={{
                    marginTop: pxToDp(8),
                    color: '#333333',
                    fontSize: pxToDp(16),
                    marginBottom: pxToDp(10)
                }}
            >
                我这一生啊
            </Text>
            <View>
                <Image
                    style={{
                        height: pxToDp(180),
                        borderRadius: pxToDp(8),
                        width: pxToDp(342)
                    }}
                    source={{
                        uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg1001.pocoimg.cn%2Fimage%2Fpoco%2Fworks%2F90%2F2013%2F0830%2F21%2F64538678201308302117502196233708479_022_64538678.jpg&refer=http%3A%2F%2Fimg1001.pocoimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633760857&t=edd18911baa19d477e34e41ee2a2f57e'
                    }}
                />
            </View>
            <Text style={[styles.Text, { marginTop: pxToDp(8) }]}>
                <Text style={styles.texthead}>（柳唱）</Text>:
                我这一生啊——
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（柳唱）</Text>:
                有时深沉、有时肤浅，有些执着、有些懒散，
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（柳唱）</Text>:
                也曾恶俗、也曾绚烂，非凡非圣、不咸不淡，
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（柳唱）</Text>:
                得意时，数尽绮词丽语一篇篇；
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（柳唱）</Text>:
                失意时，不堪屈指话当年。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（柳唱）</Text>:
                我是自家与自家过不去，读书人与填词人相交缠，
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（柳唱）</Text>:
                那时节，贪恋帝里风光好，我也曾，朝耽醇酒暮寻欢。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（柳唱）</Text>:
                结识狂朋与怪侣，红楼绮陌竞留连。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（柳唱）</Text>:
                赢得了，笔下轻浮入另册，青楼薄幸名狂狷。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（柳唱）</Text>:
                谁知晓，蜗角利名长羁绊，身在江湖心不甘。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（柳唱）</Text>:
                我也曾，写颂词，去投献，干谒豪门路八千;
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（柳唱）</Text>:
                我也曾，几回榜落孙山后，廿载奔波求一官。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（柳唱）</Text>:
                我啊——
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（柳唱）</Text>:
                风月场中孟浪子，来作诗余一异端。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（柳唱）</Text>:
                名利场中失意客，误入利名纷扰间。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（柳唱）</Text>:
                我是愧对亲先有负皇天，文章轻薄根基浮浅，
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（柳唱）</Text>:
                不立功德何曾立一言
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（柳唱）</Text>:
                回首平生追往事，不觉淡然又漠然，
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（柳唱）</Text>:
                我只待，爱我的恨我的痛我的怨我的再相逢在晓风残月杨柳岸
            </Text>
        </Fragment>
    );
    render() {
        return (
            <ScreenBase
                top="柳永"
                renderInner={this.renderInner}
                arr={[
                    {
                        id: 1,
                        avatar:
                            'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp0.qhmsg.com%2Ft01c0bee555e7f14acf.jpg&refer=http%3A%2F%2Fp0.qhmsg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631928400&t=8fa3da0873ef4c8b3fbc9f9a83582446',
                        createTime: '两天前',
                        nickName: '我吃西红柿啊',
                        content: '每个人都有不一样的童年'
                    },
                    {
                        id: 2,
                        avatar:
                            'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp0.qhmsg.com%2Ft01c0bee555e7f14acf.jpg&refer=http%3A%2F%2Fp0.qhmsg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631928400&t=8fa3da0873ef4c8b3fbc9f9a83582446',
                        createTime: '两天前',
                        nickName: '我吃西红柿啊',
                        content: '每个人都有不一样的童年'
                    }
                ]}
            />
        );
    }
}

const styles = StyleSheet.create({
    Text: {
        fontSize: pxToDp(16),
        color: '#333333',
        marginTop: pxToDp(4),
        lineHeight: pxToDp(25)
    },
    texthead: {
        fontWeight: 'bold',
        color: '#333333',
        fontSize: pxToDp(16)
    }
});
export default Index;
