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
                    甄嬛
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
                生死诀别
            </Text>
            <View>
                <Image
                    style={{
                        height: pxToDp(180),
                        borderRadius: pxToDp(8),
                        width: pxToDp(342)
                    }}
                    source={{
                        uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180922%2F2dc46c0dda5f4b619efa2ab518b29431.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633759394&t=1858334f05cd1d52267261962de399ae'
                    }}
                />
            </View>
            <Text style={[styles.Text, { marginTop: pxToDp(8) }]}>
                <Text style={styles.texthead}>甄嬛（唱）</Text>:
                黑云裂，沉雷滚，地覆天坠——眼面前，到处是，路斜径危。蓦又见，鬼影来，魂散魄飞。对毒酒，心懵懂，我欲何为？隐约约，桐花台，灯闪清辉；怕牵累，终牵累，绝地放悲！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（白）</Text>:
                玄清——玄清——
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（唱）</Text>:
                剑戟丛中忙收泪，似见皇上横怒眉。为什么，同胞手足轻易斩？为什么，血脉亲情恣意毁？为什么，情缘已断祸不断？为什么，痴心已死还有罪？桐花台，人在咫尺盼相会，生死关，阴阳千里怕面对。一步步，脚下似觉滚油沸，一阵阵，心中犹如尖刀锥……
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（唱）</Text>:
                我与你，欢少聚短长避讳，怎能够，亲手再将你命追。且将这，一壶毒酒斟双杯，生死合欢尽情醉，不言别，永相随。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>清河王（白）</Text>:
                皇兄慈悲，果然遣你来了。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>甄嬛（白）</Text>:
                玄清。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>清河王（白）</Text>:
                玄清。好久没有听你如此唤我。皇上要惩戒的是我，与你无干。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>甄嬛（白）</Text>:
                可你是嬛儿的夫……（被制止）玄清——不怕，不怕，如今什么都不用怕了！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>清河王（白）</Text>:
                娘娘！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（唱）</Text>:
                我的娘娘啊！话在心，莫出口，珍藏千古永不朽。长相忆，一曲笛韵舞姿秀，难忘怀，两支连理凌云守；实欣慰，三生石畔鸳鸯媾，谁比我，四季心暖无霜秋；虽说是，五更凄寒梦醒后，总盼望，六月回暖赏花稠；最煎熬，七夕鹊桥独自走，常痴想，八抬花轿娶鸾俦；恨不能，九州歌遍唱好逑，哄来个，十全十美知心妻、永世相守！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>甄嬛（唱）</Text>:
                他温言婉语不说愁，他有泪分明心底流，心底流。他为我，一生轻抛无怨尤，更叫我，万箭穿心深痛疚。他专情生相佑，我铁心死相酬，定神斟杯酒，一笑掩泪眸，掩泪眸。柔声轻轻唤，轻轻唤，
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（白）</Text>:
                玄清！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（唱）</Text>:
                愿嬛儿，欢颜长在你心坎留！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>清河王（白）</Text>:
                莫忘了，堂上双亲将儿盼，白发人，牵肠挂肚眼望穿。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>甄嬛（唱）</Text>:
                父母定知儿心愿，负疚长揖祝平安。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>清河王（唱）</Text>:
                莫忘了，姐妹冤死需告慰，年年香火不能断。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>甄嬛（唱）</Text>:
                华氏罪孽己清算，黄泉姐妹好作伴。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>清河王（唱）</Text>:
                莫忘了，眉庄遗子托付重，石头还需娘照看。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>甄嬛（白）</Text>:
                石头！石头么？你、你可知道哇？
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（唱）</Text>:
                石头来自凌云峰。他是……它是人间一奇石，玄风清雨十月整。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>清河王（白）</Text>:
                你、你是说？
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>甄嬛（唱）</Text>:
                凌云峰，石裂天开扎下根！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>清河王（唱）</Text>:
                天啊——天降奇石喜欲狂，泣泪滚滚谢上苍。朔风竟送三春暖，黑云裂现一明光。娘娘啊，苦心深深今方晓，感恩重重难言讲。从今后，万般辛苦你承当，石头更盼好滋养：春露秋霜常浸润，冬寒夏酷莫珍藏。恣意山水由他去，清风朗月是故乡。娘娘啊，养石成品丰容易，我深深一拜，谢恩长，谢恩长。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（白）</Text>:
                娘娘保重，玄清去了！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>甄嬛（白）</Text>:
                王爷！寡酒无味，来，我们一起喝！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>清河王</Text>:
                娘娘！君要臣死，臣不得不死！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>甄嬛（白）</Text>:
                心既死，人不能不死！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>清河王（白）</Text>:
                若跨出此门，万箭穿身！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>甄嬛（白）</Text>:
                那就上拴挂锁，永不出门！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>清河王（白）</Text>:
                你好糊涂！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>甄嬛（白）</Text>:
                你怎忍心！你怎忍心？
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>清河王（白）</Text>:
                娘娘！皇上杀臣，不仅仅是为了儿女私情，臣自请出征剿灭华氏，便已犯了皇家大忌！臣早己将生死置之度外，求的是娘娘母子一生平安。亲人生死、幼儿性命，臣，拜托了！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>甄嬛（白）</Text>:
                王爷！玄清！不——
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>伴唱</Text>:
                非是爱琼楼，偏为宫墙柳。爱也不由人，恨也谁深究？
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>甄嬛（白）</Text>:
                玄清！玄清！玄清——
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>伴唱</Text>:
                唯愿君心似我心，执子手长相守，长相守，唯愿君心似我心，执子手长相守，长相守……
            </Text>
        </Fragment>
    );
    render() {
        return (
            <ScreenBase
                top="甄嬛"
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
