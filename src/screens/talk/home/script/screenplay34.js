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
                    周仁哭坟
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
                哭坟
            </Text>
            <View>
                <Image
                    style={{
                        height: pxToDp(180),
                        borderRadius: pxToDp(8),
                        width: pxToDp(342)
                    }}
                    source={{
                        uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190705%2F3774ceb87e234506a3049e7bce90474e.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633763922&t=f3938636eee8800d2f1290a712a11371'
                    }}
                />
            </View>
            <Text style={[styles.Text, { marginTop: pxToDp(8) }]}>
                <Text style={styles.texthead}>（旁白）</Text>:
                满面蒙羞上街行
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（旁白）</Text>:
                周仁 你这个无情无义的小人
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（旁白）</Text>:
                周仁 你这卖友求荣的奸贼
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（旁白）</Text>:
                小人 奸贼 小人 奸贼
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（旁白）</Text>:
                你贪图富贵 你献嫂求官
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（旁白）</Text>:
                你还有人性吗？！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（旁白）</Text>:
                打死他！打死他！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                声声辱骂刺我心
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                想我周仁
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                为救仁兄 为保仁嫂
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                以妻代嫂 献于严贼
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                我那贤妻她她她……
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                刺贼未成 自刎而死
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                我被众人辱骂众人毒打
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                有口难辩 忍辱蒙垢
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                众人骂我卖友求荣
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                众人恨我背盟弃义
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                足见公道人心
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                如今我周仁夫妻
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                李代桃僵之计业已成功
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（旁白）</Text>:
                嘿嘿 打得好 嘿嘿 打得好
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（旁白）</Text>:
                这打 打得好
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（旁白）</Text>:
                哈哈哈
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                妻啊 你在哪里
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                你可听见你可知晓
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                你可知我生不如死啊
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                妻啊 你在哪里呀
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                妻啊 你在哪里呀
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                烈妇杜少夫人之墓
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                京师义民立
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                杜少夫人 杜少夫人 杜少夫人
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                我那屈死的贤妻
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                妻呀……
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                你可知为夫寻你千百里
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                却只见荒郊野外一捧黄土泥
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                你可知这湛湛青天茫茫大地
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                却无有一寸土地
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                容得为夫暗哭妻
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                暗哭妻
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                你可知千言万语
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                闷在夫心里呀
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                与何人诉冤道冤共栖息
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                你可知我奴颜婢膝在白日里
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                到夜晚我只能苟延残喘
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                蜷缩角落双手掩面
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                独自暗泣思爱妻
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                悔不该当初只尽忠诚信义
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                到如今坟前不敢把妻名提
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                悔不该让你只身赴难尽忠义
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                到头来恩爱夫妻
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                阴阳异地两分离
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                害得你三魂缈缈无处归
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                我只落得独对荒丘空悲啼
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                妻呀妻妻呀妻我的爱妻呀
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                恨不能扒开黄土
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                与妻同眠坟穴里
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                苍天呐 你怎能
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                忠奸不辨 是非不分
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                错勘贤愚 妄断善恶
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                背天理 背天理
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                天呐 天
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                你分明看的清楚看的明白
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                忠良无辜惨遭这人亡家破
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                你为何不管 你为何不管 你为何不管
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                天呐天 你响惊雷夹闪电
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                怎不撕破这奸贼的肝胆
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                狂风啊 你拼命的吹吧
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                狂风暴雨你快快洗刷这人间的冤屈
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                啊……
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                日月同我悲
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                风雨同我泣
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                挥泪出苍穹
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                仰面责天意
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                蘸鲜血
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                提妻字
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（周唱）</Text>:
                藏心底
            </Text>
        </Fragment>
    );
    render() {
        return (
            <ScreenBase
                top="周仁哭坟"
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
