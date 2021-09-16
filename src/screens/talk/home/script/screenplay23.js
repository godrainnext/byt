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
                    白蛇传
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
                断桥
            </Text>
            <View>
                <Image
                    style={{
                        height: pxToDp(180),
                        borderRadius: pxToDp(8),
                        width: pxToDp(342)
                    }}
                    source={{
                        uri: 'https://img2.baidu.com/it/u=2816264913,312695987&fm=15&fmt=auto&gp=0.jpg'
                    }}
                />
            </View>
            <Text style={[styles.Text, { marginTop: pxToDp(8) }]}>
                <Text style={styles.texthead}>（白唱）</Text>:
                西湖山水还依旧，我憔悴难对满眼秋。山边枫叶红又染，不堪回首忆旧游。好花偏遭无情雨，恨法海与我作对头。青儿啊，我与你金山寻夫人不见，不由我又是心酸又是愁。难道他已遭法海害？难道他果真出家将我负？恨法海——
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（青唱）</Text>:
                许仙他也不应该，他与你不是鸾侣与凤友。我恨他亲人不信信仇人，私上金山把法海求。若非你我武艺精，在金山寺外一命休。他日若遇这负心汉，休怪我手执青锋情不留。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（白唱）</Text>:
                青儿呀，非是许郎无情义，恨只恨法海他恶计谋。几次三番陷害我，苦苦拆散我鸳鸯俦。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（青唱）</Text>:
                我怨姐姐太痴心，你一往情深不回头。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（白唱）</Text>:
                怨许郎不该私自上金山，到如今凤泊鸾飘两地忧。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（青唱）</Text>:
                先将那负心之人一刀断，我与你同上金山报冤仇。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（许唱）</Text>:
                吓得许仙魂魄飞……
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（青唱）</Text>:
                管叫你青锋剑下一命休！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（白唱）</Text>:
                想起前情怒冲霄，我还是燕子衔泥空作巢。素贞何处错待你，你竟然将夫妻恩情一旦抛。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（许唱）</Text>:
                娘子息怒莫生气，容我将此事实情告。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}></Text>:
                官人你心太狠，全不念夫妻恩爱情。想当初风雨同舟情相投，在钱王池畔两联姻。保和堂把药铺开，成家立业费尽心。恨只恨端阳惊变你病沉重，为取仙草到昆仑。休提那千山万水跋涉苦，为妻是险些丧了命。一番恩情你全不念，为妻之言你不听。你私上金山把香烧，把法海离间之语你全当了真。一去金山无影踪，我是左盼右等急死人。无奈何带动青儿上金山，为薄幸寺前动刀兵。那法海满怀毒心肠，他暗害为妻伤不轻。金山索夫夫不见，我欲待回家又无处奔。我以为今生不再见薄幸，却不料冤家狭路在断桥亭。你休怪青儿怒气部，你……你有何面目再见人！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（青唱）</Text>:
                休理他这无情无义薄幸人，从此后恩断义绝各自奔前程。
            </Text>
        </Fragment>
    );
    render() {
        return (
            <ScreenBase
                top="白蛇传"
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
