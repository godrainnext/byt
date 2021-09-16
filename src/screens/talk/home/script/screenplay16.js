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
                    宝莲灯
                </Text>
                <View style={{ width: pxToDp(53), height: pxToDp(1), backgroundColor: '#000000', marginLeft: pxToDp(10) }}></View>
            </View>
            <Text
                style={{
                    marginTop: pxToDp(8),
                    color: '#333333',
                    fontSize: pxToDp(16),
                    marginBottom: pxToDp(10)
                }}
            >
                夜宿题寺
            </Text>
            <View>
                <Image
                    style={{
                        height: pxToDp(180),
                        borderRadius: pxToDp(8),
                        width: pxToDp(342)
                    }}
                    source={{
                        uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs2.sinaimg.cn%2Fbmiddle%2F4de57f04bc7b51ad84381&refer=http%3A%2F%2Fs2.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633616371&t=961483f1ba70b39a063df745a4e461ac'
                    }}
                />
            </View>
            <Text style={[styles.Text, { marginTop: pxToDp(8) }]}>
                <Text style={styles.texthead}>（唱）</Text>:
                飞鸟归巢夕阳斜，云雾弥漫遮山崖。行路人何处可歇脚，却原来白云深处有人家。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（白）</Text>:
                见前面一角红墙，不是寺院定是庙宇，正好前去借宿一宵明日再走，想今晚哦。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（唱）</Text>:
                权做个麻鞋箬笠游方客，到禅房与老道煮茗夜话。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（白）</Text>:
                西岳圣地，原来是座古庙，这边可有师傅， 那边可有当家？两旁无人只有在此安歇了吧。闻听人言， 华山圣母娘娘，曾用宝莲神灯指引山间迷路之人，倒是一位慈悲的仙子，我理该祝告一番啊!
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（白）</Text>:
                啊，华山圣母娘娘在上，学生刘彦昌，祖居罗州，幼承庭训，长读诗书，此番上京赴考，路过华山，暂借娘娘仙宫一席之地，做个游子栖身之处，娘娘呀……
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（唱）</Text>:
                恕未曾供香烛酌水献花，我只有拱双手深深一拜，看娘娘彩霞焕作芙蓉面，乌云堆成青丝发，一双眼似秋水盈盈，两道眉似远山脉脉，哪里是河水调泥塑捏成，分明是九天仙女把瑶台下。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（白）</Text>:
                见娘娘双眉并蹙，想必是怜悯流离失所的百姓，令人可钦啊可佩。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（唱）</Text>:
                人言道娘娘是慈悲仙子，为苍生锁双眉煞费心思，怎么奈是人间独多乱离事。你满腹愁思怎消除，你一心莲灯指引迷路客，仙乡寂寞无人知，今晚我挥毫礁壁题诗句，以表仰慕莫笑痴。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（白）</Text>:
                待我在墙上题诗一首，以表仰慕之意有何不可呀。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（白）</Text>:
                踦路莲灯倍可亲，峨眉应为乱离颦。莫愁玉女峰头冷，尤有天台采药人。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（唱）</Text>:
                原待圣母避佑下，一宵好梦平安无话。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（白）</Text>:
                啊呀荒唐呀是荒唐。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（唱）</Text>:
                先只说学刘晨采药入天台，娘娘啊为什么并无仙女梦中来。
            </Text>
        </Fragment>
    );
    render() {
        return (
            <ScreenBase
                top="宝莲灯"
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
