import React, { Fragment, PureComponent } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { pxToDp } from '@utils/styleKits';
import ScreenBase from '@components/screenplayBase/ScreenBase';

class Index extends PureComponent {
    renderInner = () => (
        <Fragment>
            <View>
                <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold', color: '#000000' }}>情探</Text>
            </View>
            <Text
                style={{
                    marginTop: pxToDp(8),
                    color: '#333333',
                    fontSize: pxToDp(16),
                    marginBottom: pxToDp(10)
                }}
            >
                送别
            </Text>
            <View>
                <Image
                    style={{
                        height: pxToDp(180),
                        borderRadius: pxToDp(8),
                        width: pxToDp(342)
                    }}
                    source={{
                        uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp8.itc.cn%2Fq_70%2Fimages03%2F20210906%2Fec251149266a46689638a0d642d53a6a.jpeg&refer=http%3A%2F%2Fp8.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633611171&t=569ecdb579a5f55de4fc60e6fe173d5c'
                    }}
                />
            </View>
            <Text style={[styles.Text, { marginTop: pxToDp(8) }]}>
                <Text style={styles.texthead}>（英唱）</Text>:
                送王郎赴帝珠泪难忍，
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（王唱）</Text>:
                最消魂已来到十里长亭。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（英唱）</Text>:
                但愿你此一去鳌头占定，
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（王唱）</Text>:
                倘若是衣锦归改换门庭。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（英白）</Text>:
                王郎，来此已是十里长亭，为妻不能远送你了。菊妹，酒来！王郎，你就满饮此杯。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（王白）</Text>:
                娘子。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（唱）</Text>:
                莱阳相处两年久，你我的恩情蜜样稠。春花秋月懒消受，愿只愿早日占鳌头。此去若得功名就，定接贤妻共度春秋。倘若文章不顺手，
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（英唱）</Text>:
                你早日回家切莫担忧。郎君今年二十五，桂英今年二十秋。青春结伴烟波走，学一学范蠡大夫泛扁舟。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（王唱）</Text>:
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}></Text>:
                娘子呀，本待与你白头相守莱阳郡，怎奈是功名二字困书生。此去一年半载说不定，你眠食衣裳要小心，兰房寂寞劳妻等。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（英唱）</Text>:
                王郎呀，你旅况萧条总断魂。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（王唱）</Text>:
                真乃是流泪眼观流泪眼，
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（英唱）</Text>:
                断肠人送断肠人。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（王唱）</Text>:
                辞别娘子跨金蹬，
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（英唱）</Text>:
                王郎！拉住鞭丝泪满襟。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（王白）</Text>:
                娘子，你还有何言？
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（英唱）</Text>:
                王郎呀，我与你萍水相逢把情定，可怜我孤苦伶仃一个人。你此去若把翰苑进，王郎呀，你切记前盟莫负心。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（王白）</Text>:
                娘子，昨日你我在海神庙内不是盟过誓么？
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（唱）</Text>:
                此去若能有寸进，定当接你进汴京。娘子但请放心等，秋风桂子报佳音。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（英唱）</Text>:
                听此言我才放宽心，王郎义重又情深。青丝一绺忙取定，青丝呀，你代我伴送到汴京。王郎呀，此一去路途寂寞如相忆，见此发犹如见桂英。
            </Text>
        </Fragment>
    );
    render() {
        return (
            <ScreenBase
                top="情探"
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
