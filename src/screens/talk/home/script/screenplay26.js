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
                    张羽煮海
                </Text>
                <View style={{ width: pxToDp(70), height: pxToDp(1), backgroundColor: '#000000', marginLeft: pxToDp(10) }}></View>
            </View>
            <Text
                style={{
                    marginTop: pxToDp(8),
                    color: '#333333',
                    fontSize: pxToDp(16),
                    marginBottom: pxToDp(10)
                }}
            >
                闯海
            </Text>
            <View>
                <Image
                    style={{
                        height: pxToDp(180),
                        borderRadius: pxToDp(8),
                        width: pxToDp(342)
                    }}
                    source={{
                        uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190916%2Fd656e6b689be45cf925d1d04e89b6027.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633674070&t=43baaddad0a936735edba7f7e9df22d9'
                    }}
                />
            </View>
            <Text style={[styles.Text, { marginTop: pxToDp(8) }]}>
                <Text style={styles.texthead}>（张唱）</Text>:
                我日出等到月影移，靴儿量遍了海滩地。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（张唱）</Text>:
                容易盼得圆月笑微微，为什么不闻青鸾把信递？
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（张唱）</Text>:
                我整隶衣冠再恭候……细思量长老之言耐玩味。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（张唱）</Text>:
                为什么他笑我是个傻秀才？
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（张唱）</Text>:
                为什么他问我赠帕是何意？
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（张唱）</Text>:
                小姐她的音容笑貌在眼前，她赠帕之情我难忘记。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（张唱）</Text>:
                她要我藏帕莫相弃，她约我月圆再见期。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（张唱）</Text>:
                她谆谆叮咛言真切，她依依惜别步懒移。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（张唱）</Text>:
                莫非她赠帕有心含深意，莫非她弦外有音把情寄。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（张唱）</Text>:
                多年来我孤风野鹤飘四方，空谷未闻幽兰香。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（张唱）</Text>:
                都只为知音未得情难托，因此上我年过弱冠未求凰。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（张唱）</Text>:
                我以为风流韵事唯古有，几曾想意外奇缘从天降。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（张唱）</Text>:
                前日里只道欣逢知音作师长，今日里我定要当面问短长。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（张唱）</Text>:
                决不再做傻秀才，我要学一学相如凤求凰。
            </Text>
        </Fragment>
    );
    render() {
        return (
            <ScreenBase
                top="张羽煮海"
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
