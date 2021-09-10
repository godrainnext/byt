import React, { Fragment, PureComponent } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { pxToDp } from '@utils/styleKits';
import ScreenBase from '@components/screenplayBase/ScreenBase';

class Index extends PureComponent {
    renderInner = () => (
        <Fragment>
            <View>
                <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold', color: '#000000' }}>蝴蝶梦</Text>
            </View>
            <Text
                style={{
                    marginTop: pxToDp(8),
                    color: '#333333',
                    fontSize: pxToDp(16),
                    marginBottom: pxToDp(10)
                }}
            >

            </Text>
            <View>
                <Image
                    style={{
                        height: pxToDp(180),
                        borderRadius: pxToDp(8),
                        width: pxToDp(342)
                    }}
                    source={{
                        uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffile.whqy.cn%2F0%2F3%2Fc%2Fb%2F03cb236a-7220-4e29-a815-456862666fe8.jpg&refer=http%3A%2F%2Ffile.whqy.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633760371&t=62581f9e0818e6f59070baed66879a8e'
                    }}
                />
            </View>
            <Text style={[styles.Text, { marginTop: pxToDp(8) }]}>
                <Text style={styles.texthead}>合唱</Text>:
                我所思兮，远在天涯。欲往相从兮，似隔万重烟霞。我所盼兮，游仙归家。欲往相依兮，碎了梦中图画。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>田秀</Text>:
                年年伴竹做针黹，绣成蝴蝶寄心事。欲知无限苦相思，尽在这浓浓密密针针线线缕缕丝丝。雁归人未归，无怨只有痴。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>鹃儿</Text>:
                小姐是侯门独苗千金体，违父命自把郎君选。你眼里他是人中杰杰中奇，是天下男子无二独一。恨不能心傍心影随影，含他在嘴里化他在怀里。可他对小姐不在意，新婚三朝就把家离。今秋若还无行踪，我看你不如回转娘家里。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>田秀</Text>:
                与庄周奇人奇书结奇缘，有幸成绝俗绝伦好夫妻。他神游云海为悟道，我留守寂寞情相依。虽挥不去缕缕缠绵苦相思，也总不能凄凄惨惨常戚戚。居南华清幽地，伴清风明月正好读书悟玄机。让淙淙溪水怡我性，任山风絮语解我谜。人融山水心自平，再长等待我愿意。啊鹃儿啊，绣蝶寒衣虽难寄，蝶儿双飞总有期。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>田秀</Text>:
                藐姑射之山，有神人居焉。肌肤若冰雪，绰约若处子。不食五谷，吸风饮露。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>田喜</Text>:
                想当初先生曾做蝴蝶梦，还说梦详梦兴意稠。说人梦蝶兮蝶梦人，是一道绝妙玄题可深究。今日我卖绣品草药山下走，猛见告示贴街口。说有圣贤来传道，讲题就是周梦蝶来还是蝶梦周。我预感有喜来报喜，这定是你们夫妻团圆好兆头。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>田秀</Text>:
                人归美亦归，妆盒拂尘开。淡敷胭脂添明艳，轻点黛眉增光彩。换我红嫁衣，戴我绿玉珮，教夫君依然惊我美。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>楚王孙</Text>:
                好一座人间仙境呀，望脚下一朵两朵白云绕，迎面来三片四片红叶飘。耳边厢秋雁清啼五六声，访庄子登越峰岚七八道。九曲幽径不通樵，果然是清虚圣地十分逍遥。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>楚王孙</Text>:
                蓦地一道彩虹掠过，是真是幻邂逅嫦娥。梦里寻她千百度，蓦然相见却在云深雾绕处。她是谁谁是她，红衣绿珮衬婀娜，可曾结丝萝。真若一瞬成永恒，这无底相思今生今世命中注。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>田秀</Text>:
                劳公子怀诚意亲到南华，请容我代夫君面谢答话。先生他不求闻达遁迹天涯，一向视功名富贵如浮云尘沙。屡拒卿相辞高聘，这千金礼也万难收下。夫效鹏鸟自在翱翔，寒舍是清静无为淡泊人家。曲径深涧走累贵客，违慢处歉敬一杯云雾茶。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>楚王孙</Text>:
                绕梁音回响深谷，开言处吐玉含珠。才撼她花月神容人间无，又惊这松柏襟怀实堪慕。总以为秀外慧中难两全，未料想完美如许藏深坞。我奇思暗慕忍不住，再看一看圣哲夫人贤内助。止止止莫莫莫，省省省错错错。圣门同心花一朵，岂容邪念生恋错剪错。此乃姑射神女府，岂容俗子与凡夫。纵想留也不敢留，再留定然要闯祸。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>庄周</Text>:
                为什么十年不见桃李更艳，眼前人神采风韵更胜当年。三分腼腆醉明眸，两朵红云浮笑靥。莫非老天心也偏，不向美人年痕添。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>庄周</Text>:
                鲜艳艳一身美嫁衣，红扑扑两眼醉且迷。说是迎我夫子归，未卜先知太离奇。风流倜傥楚王孙，匆匆离去又何意。她十年等等得住，她十年守守得成。世间难测女人心，爱河最怕斜风起。蓦地一股酸酸味，翻起心头重重疑。哲人爱解大千谜，此酸味不关风月只为推理。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>合唱</Text>:
                我所思兮，远在天涯。欲往相从兮，似隔万重烟霞。我所盼兮，游仙归家。欲往相依兮，碎了梦中图画。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>合唱</Text>:
                藐姑射之山，有神人居焉。肌肤若冰雪，绰约若处子。不食五谷，吸风饮露。
            </Text>
        </Fragment>
    );
    render() {
        return (
            <ScreenBase
                top="蝴蝶梦"
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
