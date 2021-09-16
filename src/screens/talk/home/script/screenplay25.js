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
                    浪荡子
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
                叹钟点
            </Text>
            <View>
                <Image
                    style={{
                        height: pxToDp(180),
                        borderRadius: pxToDp(8),
                        width: pxToDp(342)
                    }}
                    source={{
                        uri: 'https://img0.baidu.com/it/u=2789245060,592697393&fm=26&fmt=auto&gp=0.jpg'
                    }}
                />
            </View>
            <Text style={[styles.Text, { marginTop: pxToDp(8) }]}>
                <Text style={styles.texthead}>（金唱）</Text>:
                耳听得，一点钟，钟声勾起我浪子梦。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（金唱）</Text>:
                往事历历多心酸，回忆不禁眼圈红。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（金唱）</Text>:
                我爱读书勤用功，幼小是一个好儿童。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（金唱）</Text>:
                青梅竹马有伴侣，萍妹妹与我爱相共。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（金唱）</Text>:
                小山湖边长爱苗，花前月下情意浓。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（金唱）</Text>:
                岁月更换人长大，却将情线系春风。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（金唱）</Text>:
                爱情债，相思梦，结成了一对鸾和凤。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（金唱）</Text>:
                新婚之乐乐无穷，我写尽笔墨难形容。想到以前甜蜜处，我热泪已向眼边涌。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（金唱）</Text>:
                钟声悠悠已二下，叫我如何不想她。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（金唱）</Text>:
                曾记得有了一个小天使，我是满脸春风做爸爸。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（金唱）</Text>:
                牙牙学语逗人笑，软软走路脚步歪。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（金唱）</Text>:
                一间阁楼小天地，充满欢乐和愉快。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（金唱）</Text>:
                妻子含笑结绒线，老父有兴讲笑话。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（金唱）</Text>:
                我在学校把书教，无限幸福在我家。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（金唱）</Text>:
                谁知道我变得快，跟了朋友去学坏。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（金唱）</Text>:
                黄金股票将投机做，鸦片赌博把良心卖。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（金唱）</Text>:
                荡妇风流诱人态，美酒樱唇乐无涯。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（金唱）</Text>:
                我是留恋沉醉在脂粉里，丢了家花爱野花。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（金唱）</Text>:
                妻子哭泣把我劝，老父心痛将我骂。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（金唱）</Text>:
                偷首饰，在深夜，我句句言语刺痛她。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（金唱）</Text>:
                这真是郎心如铁难回转，妾命太薄如桃花。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（金唱）</Text>:
                良药苦口我不听，把礼仪廉耻丢在那天边外。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（金唱）</Text>:
                时钟响，响三点，浪荡的生活好像在眼前。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（金唱）</Text>:
                幺二三，四五六，“爱司”“匣格”“皮蛋”“凯”。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（金唱）</Text>:
                葡萄美酒鸦片烟，我在迷魂阵里做神仙。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（金唱）</Text>:
                我以为这是花花好世界，哪知道背后杀人血不见。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（金唱）</Text>:
                到后来我投机失败没有钱，那荡妇就把心肠变。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（金唱）</Text>:
                千种妩媚移别人，一张笑脸变恶脸。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（金唱）</Text>:
                从此踢出大门外，我到此良心才发现。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（金唱）</Text>:
                抬头望见是青天，悔也太迟我泪涟涟。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（金唱）</Text>:
                风送钟声四点响，夜深人静多寒冷。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（金唱）</Text>:
                我似疾似疯在江边立，泪如雨下叹几声。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（金唱）</Text>:
                前无去路我方回头，回头想着旧家乡。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（金唱）</Text>:
                虽无面目去见妻女，且作忏悔求原谅。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（金唱）</Text>:
                我脚步重，心里伤，怕见娇妻倚门旁。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（金唱）</Text>:
                回到家中吃一惊，但见一片火烧场。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（金唱）</Text>:
                瓦砾堆中有孩子哭，看此情此景太凄凉。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（金唱）</Text>:
                闻听是老父受伤进医院，妻子帮佣在他乡。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（金唱）</Text>:
                我是心酸无言千遍悔，悔不转往日的天伦乐来恩爱长。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（金唱）</Text>:
                五分钟，钟声起，鱼肚天色光亮微。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（金唱）</Text>:
                我满腔愁绪难安排，一片创伤没法医。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（金唱）</Text>:
                父女二人饥饿苦，流落在街头拾垃圾。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（金唱）</Text>:
                孩子患病在芦棚中，无医无药太惨凄。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（金唱）</Text>:
                雪飘飘满天雪花飞，痴呆呆泪落泪满衣。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（金唱）</Text>:
                抢钞票为的是孩子病，无意中重逢好贤妻。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（金唱）</Text>:
                应该骂你骂得有理，我此生已毫无出息。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（金唱）</Text>:
                使她们母女重团圆，背转身我就将步移。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（金唱）</Text>:
                在黄浦江边长声叹，叹不完罪罪恶恶把旧事提。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（金唱）</Text>:
                劝人莫学浪荡子，休拈闲花被色迷；
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（金唱）</Text>:
                劝人莫学浪荡子，夫妻恩爱要和气；
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（金唱）</Text>:
                劝人莫学浪荡子，赌博害人至死地；
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（金唱）</Text>:
                劝人莫学浪荡子，鸦片会得葬送你；
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（金唱）</Text>:
                劝人莫学浪荡子，劳力换钱莫投机；
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（金唱）</Text>:
                劝人莫学浪荡子，努力工作为前提；
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（金唱）</Text>:
                劝人莫学浪荡子，尊重父母懂礼义；
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（金唱）</Text>:
                劝人莫学浪荡子，认清好坏与是非；
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（金唱）</Text>:
                劝人莫学浪荡子，以免懊悔来不及。
            </Text>
        </Fragment>
    );
    render() {
        return (
            <ScreenBase
                top="浪荡子"
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
