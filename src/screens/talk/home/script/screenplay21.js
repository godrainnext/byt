import React, { Fragment, PureComponent } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { pxToDp } from '@utils/styleKits';
import ScreenBase from '@components/screenplayBase/ScreenBase';

class Index extends PureComponent {
    renderInner = () => (
        <Fragment>
            <View>
                <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold', color: '#000000' }}>双烈记</Text>
            </View>
            <Text
                style={{
                    marginTop: pxToDp(8),
                    color: '#333333',
                    fontSize: pxToDp(16),
                    marginBottom: pxToDp(10)
                }}
            >
                夸夫
            </Text>
            <View>
                <Image
                    style={{
                        height: pxToDp(180),
                        borderRadius: pxToDp(8),
                        width: pxToDp(342)
                    }}
                    source={{
                        uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwx4.sinaimg.cn%2Flarge%2F915f61b9gy1fe9ddaiiwoj21kw11xhdw.jpg&refer=http%3A%2F%2Fwx4.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633626235&t=e415f286e9f24609045b8e30d57ae06b'
                    }}
                />
            </View>
            <Text style={[styles.Text, { marginTop: pxToDp(8) }]}>
                <Text style={styles.texthead}>（忠唱）</Text>:
                四野不闻鼓漏声，霜华渐浓月三更，今夜晚计就蟾宫擒玉兔，安排金钩待鱼吞。眼见得擒金酋山河重振，却为何心底忐忑不安宁？信移步，出帐门，眼底长江白浪滚，远眺金焦无消息，只见月华射斗柄。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（玉唱）</Text>:
                戒马生涯二十春，磨穿几件蜀地锦，劳素手，拈铁针，为御将军铁甲冷，咦！适才还闻窸窣声，缘何霎时不见人，
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（白）</Text>:
                莫非又巡视去了？
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（唱）</Text>:
                手携锦袍出帐门，呀，他那里极目江心忘却风露冷。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（忠白）</Text>:
                你怎么起来了？
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（玉白）</Text>:
                我几曾睡过来？
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（忠白）</Text>:
                这就是你的不对，叫你睡，你为什么不睡？
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（玉白）</Text>:
                我见你这件锦袍好几处都磨破了，一时难以入睡，就替你补了几针。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（忠白）</Text>:
                啊呀！哪个要你替我补什么锦袍来？还不快去安歇！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（玉白）</Text>:
                你这个人也真是！只知有已，不知有人！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（忠白）</Text>:
                此话怎么讲？
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（玉白）</Text>:
                那你为何不去睡来？
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（忠白）</Text>:
                哈哈，夫人，想今夜安排妙计，擒捉兀术，待等兀术拿到，吾军即刻乘机出击，为此专等活捉兀术的消息，你叫我如何得以安睡？
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（玉白）</Text>:
                那不就对了，你不能入睡，怎么单叫我能入睡？
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（忠白）</Text>:
                吾乃职责所在，你毕竟与吾不同呀！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（玉白）</Text>:
                二十年了，还好像刚认识！还不知奴的——还说什么同与不同？
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（忠白）</Text>:
                流光似水，戎马倥偬二十年，日长总随铁甲伴，宵来长倚马鞍眠。我与你离时多会时少，只长别不长见，十月寒霜六月天，秋去春来年复年，才觉得改却三分少年气，转眼鬓丝白发添。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（玉唱）</Text>:
                恨煞金虏起狼烟，家国多难遭兵变，好男儿胸悬金印腰悬剑，理该把乾坤旋。说什么离多会少，道什么白发新添，只肌是绿鬓莫使等闲白，空嗟叹老了红颜。为情白头人笑痴，为国白头人敬羡，相公呀熬过了十月寒霜三伏天，患难夫妻要胜当年。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（忠白）</Text>:
                时听你，金玉良言，常使我，心神畅轩，今夜晚，牢宠计定，但愿得，一举凯旋，迎三圣，靖康耻雪，复神州，河山庄严，怎求得，解甲归田，安享些，太平余年。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（白）</Text>:
                只是苏德到现在还不归报，使我不安。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（玉白）</Text>:
                相公神算，今夜必有佳音。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（忠白）</Text>:
                兀术擒到，贼军蛇无头而不行，不战自乱，吾乘机进军，管教他十万贼兵，葬身长江鱼腹。适才观看天时，见月华浓烈，必有大雾，有利于我以少胜多，这真乃天助我成功也。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（玉白）</Text>:
                相公从军廿载，妾身随军亦已一年多了，难道还怕厮杀？只是相公战饭未用，岂不饿坏？日间苏德将军打得山鸡一只，金山回来，奴料必有一场战斗，故已准备煮就与相公下酒，以祝成功！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（忠白）</Text>:
                哈哈，你倒想得周到，只是平日里不许下官饮酒，今日却劝起酒来了？
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（玉白）</Text>:
                我哪曾不许你饮来？只是酒宜少饮罢了，而且酒当饮则饮，当止则止。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（忠白）</Text>:
                到你，就有这许多道理。
            </Text>

            <Text style={styles.Text}>
                <Text style={styles.texthead}>（玉白）</Text>:
                自然，你还不知今日请你饮酒之意。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（忠白）</Text>:
                不外是祝我今日大功可成耳。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（玉白）</Text>:
                这只是其一。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（忠白）</Text>:
                哦？难道还有其他意思？
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（玉白）</Text>:
                自然！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（忠白）</Text>:
                这倒要请教。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（玉白）</Text>:
                不说也罢！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（忠白）</Text>:
                那为什么？
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（玉白）</Text>:
                说出来相公你要见笑。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（忠白）</Text>:
                我不笑就是。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（玉白）</Text>:
                那是庆贺我自己的呀！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（忠白）</Text>:
                呀！夫人有什么喜事，下官倒粗心大意了呀！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（玉白）</Text>:
                相公呀！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（唱）</Text>:
                曾记得当年京口初想逢，但见你骨骼魁伟胆略勇，相公为国去从军，妾在深闺少侍奉。二十年来沙场血，才立下这汗马战功，相公你立功勋逐步登龙，贱妾我叨封荫以夫荣。虽然是位高权重，常使妾忧心忡忡，位高何如才高好，权重怎么德望重，喜今日亲眼见元帅神通，神妙算指挥定大将威风。不羞自夸夸相公，为此备得酒两盅，一贺你，相公妙着擒元凶，
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（忠白）</Text>:
                这二呢？
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（玉唱）</Text>:
                二祝我，自身慧眼识英雄，
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（忠白）</Text>:
                哈哈！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（唱）</Text>:
                二十年夫妻今自夸，被人听见你不脸红？
            </Text>
        </Fragment>
    );
    render() {
        return (
            <ScreenBase
                top="双烈记"
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
