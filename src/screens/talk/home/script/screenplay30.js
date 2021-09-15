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
                    北地王
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
                哭庙
            </Text>
            <View>
                <Image
                    style={{
                        height: pxToDp(180),
                        borderRadius: pxToDp(8),
                        width: pxToDp(342)
                    }}
                    source={{
                        uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20180225%2F0fd6c5358ad5409cae115bcbe6aa46a2.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633760278&t=3ed9fb971e51ff3bdfaf37be7bd2af96'
                    }}
                />
            </View>
            <Text style={[styles.Text, { marginTop: pxToDp(8) }]}>
                <Text style={styles.texthead}>（刘唱）</Text>:
                呼天痛号进祖庙，先帝呀！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（唱）</Text>:
                未见先帝血泪抛，一见先帝心如绞，皇祖开国创业艰赤手空拳兴皇朝。实指望江山一统万万年，谁料社稷会顷刻倒，老谯周妄谈天象惑父皇,贼黄皓专权误国施奸巧！欲正独立难回天，姜维出师未在朝，皇兄懦弱尽忠孝，孙儿我也无能为力把国保。羞见江山改别姓，妻儿殉国登泉道，孙将一命报祖先，先帝你在天之灵可知道！如今父皇向魏降，把先帝东荡西扫、南征北剿、衣不卸甲、马不停蹄，挣来的三分天下、蜀汉江山，白白断送在今朝！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（白）</Text>:
                二皇祖！三皇祖！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（唱）</Text>:
                桃园结拜情义重，出生入死建奇功，扶助先帝登皇基，铁打的江山谁敢动！怎奈是后辈不强枉费功，把先辈心血付东风！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（白）</Text>:
                丞相，诸葛丞相啊！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（唱）</Text>:
                你神机妙算定汉中，不忘先帝托孤重，鞠躬尽瘁保父皇，你六出祁山把魏攻。可恨天不假人寿啊，你出师未捷一命终，你若在世把兵统，魏国焉敢犯蜀中！啊！丞相呀！四皇祖！四皇祖呀！你长坂坡，逞威内，一人独当百万众，怀抱幼主出重围，那时我父皇睡正浓。可叹他一睡睡了数十年啊，至今他还在睡梦中。这一旁蒋琬、费袆与董允，燮理阴阳比周公；那一旁张嶷、马超、老黄忠啊，一个要比一个勇。眼前若有你先辈在啊，江山哪会就此终！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（白）</Text>:
                月儿啊月儿，从明天起，你再也照不到我——
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（唱）</Text>:
                蜀国的山河了！夜沉沉，风萧萧，满地银霜，月蒙蒙，云迷迷，越觉悲伤；悲切切，恨绵绵，国破家亡，泪汪汪，心荡荡，妻死儿丧。怪父皇，少主张，懦弱无刚，势去啊，又可比，病入膏肓；山河破啊，社稷倒，一场恶梦，到今日，哭祖庙，我泪洒胸膛！
            </Text>
        </Fragment>
    );
    render() {
        return (
            <ScreenBase
                top="北地王"
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
