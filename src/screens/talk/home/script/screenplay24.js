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
                    沉香扇
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
                书房会
            </Text>
            <View>
                <Image
                    style={{
                        height: pxToDp(180),
                        borderRadius: pxToDp(8),
                        width: pxToDp(342)
                    }}
                    source={{
                        uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.xn--1lqu4gsuaz7hssl7n8e.com%2Fupfile%2Feditor%2Fimage%2F20160226142454045404.jpg&refer=http%3A%2F%2Fwww.xn--1lqu4gsuaz7hssl7n8e.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633672685&t=709a286c964971b293e23eddc3e35352'
                    }}
                />
            </View>
            <Text style={[styles.Text, { marginTop: pxToDp(8) }]}>
                <Text style={styles.texthead}>（蔡白）</Text>:
                表兄请。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（徐白）</Text>:
                表弟请。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（蔡唱）</Text>:
                见徐郎宫花斜插神采飞，
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（徐唱）</Text>:
                见表弟玉带围腰透英气。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（蔡唱）</Text>:
                我这里春风满面暗自喜，
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（徐唱）</Text>:
                我这里越看越稀奇。这位表弟似相识？
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（蔡唱）</Text>:
                他怎知表弟就是他的妻！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（徐唱）</Text>:
                舅父他殷勤款待将我留，怎知我急于赴约去会小姐。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（蔡唱）</Text>:
                今日夫妻书房会，倾吐衷肠天赐良机。表兄啊，我与你此刻相会书房地，稍停分手各东西。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（徐唱）</Text>:
                你我兄弟初相见，一见如故很投机。表弟你缘何匆匆要分手？
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（蔡唱）</Text>:
                小弟我身有要事河南去……
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（徐白）</Text>:
                慢来，表弟呀！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（唱）</Text>:
                上前尊声好表弟，愚兄有话欲商议。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（蔡唱）</Text>:
                既然有话需商议，为什么吞吞吐吐欲言又止将口闭？
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（徐唱）</Text>:
                说出来只怕表弟要见笑，将我愚兄看不起。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（蔡唱）</Text>:
                你我是同科好兄弟，小弟怎会来见笑你。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（徐唱）</Text>:
                我与河南蔡小姐……
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（蔡白）</Text>:
                怎么样？
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（徐唱）</Text>:
                我与河南蔡小姐……
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（蔡白）</Text>:
                你与蔡小姐究竟怎么样呀？
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（徐唱）</Text>:
                我与河南蔡小姐……
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（蔡白）</Text>:
                表兄说呀！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（徐白）</Text>:
                这……
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（蔡白）</Text>:
                表兄不说不讲，小弟告辞了。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（徐白）</Text>:
                慢来。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（蔡白）</Text>:
                那么，你快讲呀！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（徐唱）</Text>:
                我与她山誓海盟结连理！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（蔡唱）</Text>:
                表兄你读书之人不明理，私订终身少礼仪！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（徐唱）</Text>:
                愚兄实话告诉你，表弟呀，河南完婚让我去。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（蔡唱）</Text>:
                小姐才貌世无双，天赐良缘称我意，我盼她求她都来不及，怎可不到河南去！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（徐唱）</Text>:
                表弟你金榜题名正少年，完婚一事何太急？
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（蔡唱）</Text>:
                大登科后小登科，洞房花烛正佳期。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（徐唱）</Text>:
                他那里话儿出口似利箭，我这里后退无路少主意。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（徐唱）</Text>:
                我说破舌尖你不肯让，愚兄我……
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（蔡白）</Text>:
                怎么样？
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（徐唱）</Text>:
                愚兄我，唯有一死表心意！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（蔡白）</Text>:
                哎呀！慢来！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（徐白）</Text>:
                表弟，那末你肯让了？
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（蔡白）</Text>:
                好呀！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（唱）</Text>:
                你去一死成全了我，我正好到河南去拜天地！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（徐唱）</Text>:
                小姐呀，原以为状元及第了夙愿，谁知平地风波起。小生一死何足惜，只是害你受孤凄！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（蔡白）</Text>:
                啊，表兄，怎么，你不去寻死了？
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（徐白）</Text>:
                嘿！表弟，只怕你到了河南也难与小姐成婚。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（蔡白）</Text>:
                这是为何？
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（徐白）</Text>:
                我与小姐两心相印，她岂肯与你成婚呀！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（唱）</Text>:
                我与小姐订鸳盟，她赠我沉香扇儿做表记。小姐心意我深知，她岂会与你结连理！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（蔡唱）</Text>:
                我看你雪塑观音枉费心，沉香扇怎能做聘礼！怎及我父母之命媒妁言，我是名正言顺，堂堂皇皇，吹吹打打去拜天地！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（徐唱）</Text>:
                他那里越说越喜越得意，我这里越听越急痛心肺。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（蔡唱）</Text>:
                表兄啊，你蟾宫折桂名天下，何愁此身无娇妻。自有那王公贵族侯门女，挑你拣你作佳婿。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（徐白）</Text>:
                表弟此言差矣！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（唱）</Text>:
                沉香扇是小姐亲手赠，见扇犹如见小姐。文秀岂是薄情辈，怎可得中忘情义。表弟呀，愚兄向你行大礼，求表弟河南完婚让我去！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（蔡唱）</Text>:
                徐郎果然玉石坚，不负兰英心一片。急忙上前来扶起……
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（蔡唱）</Text>:
                自从闺房两分离，望穿秋水盼归期。谁知道母亲将我许昌家，我只得女扮男装奔京畿。途中巧遇你舅父，继作螟蛉为后裔。我为你闺中女子充男儿，我为你历尽艰辛费心机；我为你堂上生父不敢认，我为你一女竟招三女婿；我为你抛头露面离故乡，我为你孤身漂泊在异乡地。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（徐唱）</Text>:
                千怪我来万怪我，怪我害你受苦凄。怪你父母太糊涂，如今一女有三婿。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（蔡唱）</Text>:
                怪你舅父老眼昏，如今裙钗怎伴帝？
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（蔡、徐同唱）</Text>:
                欺君之罪大如天，快请爹爹、舅父共商议。
            </Text>
        </Fragment>
    );
    render() {
        return (
            <ScreenBase
                top="沉香扇"
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
