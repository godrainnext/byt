import React, { Fragment, PureComponent } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { pxToDp } from '@utils/styleKits';
import ScreenBase from '@components/screenplayBase/ScreenBase';

class Index extends PureComponent {
    renderInner = () => (
        <Fragment>
            <View>
                <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold', color: '#000000' }}>盘夫索夫</Text>
            </View>
            <Text
                style={{
                    marginTop: pxToDp(8),
                    color: '#333333',
                    fontSize: pxToDp(16),
                    marginBottom: pxToDp(10)
                }}
            >
                陆锦花演曾荣，金采风演严兰贞，朱东韵演赵婉贞
            </Text>
            <View>
                <Image
                    style={{
                        height: pxToDp(180),
                        borderRadius: pxToDp(8),
                        width: pxToDp(342)
                    }}
                    source={{
                        uri: 'https://img2.baidu.com/it/u=3255763343,3905485501&fm=26&fmt=auto&gp=0.jpg'
                    }}
                />
            </View>
            <Text style={[styles.Text, { marginTop: pxToDp(8) }]}>
                <Text style={styles.texthead}>（贞白）</Text>:
                官人啊！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（唱）</Text>:
                官人你好比天上月，我为妻可比是月边星。那月若亮来星也明，月若暗来星也昏。官人你若有千斤担，我为妻分挑五百斤。我问君你有何疑难的事，快把真情说我听。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（曾唱）</Text>:
                我道奸臣生奸女，谁知她说话贤惠人聪明；有道荒田出稗草，谁知沙土拌黄金！兰贞待我是真情，岂可负她一片心！手抚香肩轻声唤——（白）娘子。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（贞白）</Text>:
                官人。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（曾唱）</Text>:
                你道我是哪里人？
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（贞白）</Text>:
                官人，你是杭州人氏。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（曾白）</Text>:
                非也。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（唱）</Text>:
                我不住钱塘住南京，
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（贞白）</Text>:
                哦，官人你是南京人氏。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（曾唱）</Text>:
                不姓张来本……
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（贞白）</Text>:
                本什么？
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（曾白）</Text>:
                本……
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（贞白）</Text>:
                讲啊！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（曾白）</Text>:
                本……啊呀！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（唱）</Text>:
                逢人只说三分话，未可全抛一片心。常言道：画龙画虎难画骨，知人知面不知心。我若与她真情讲，未必她心似我心。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（白）</Text>:
                啊！罢！罢！罢！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（唱）</Text>:
                不别兰贞下楼去，
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（贞白）</Text>:
                官人！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（曾唱）</Text>:
                随你自己去思忖。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（贞白）</Text>:
                官人转来，官人转来！唉！世上哪有你这种奇人吓！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（唱）</Text>:
                见冤家半句阴来半句阳，我兰贞不是当初的诸葛亮。既然冤家不肯讲。他说道不住钱塘住南京，不姓张来本……啊呀！这本字下面有文章。官人啊！你真人跟前莫说假，假人跟前你莫细详；你妻前不把真情讲，我问你要与谁商量？！我今日不问他真心的话，好似钩藤挂心肠。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（白）</Text>:
                啊！是啊。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（唱）</Text>:
                我不带使女下楼去，要到书房去问端详。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（曾白）</Text>:
                小生不说，你哪里会知道吓！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（唱）</Text>:
                不住钱塘住南京，不姓张来本姓曾。爹爹曾铣为总制，镇守三边掌大军；父母不生多男女，所生弟兄两个人，我曾贵，我曾荣，我弟弟七岁承继罗家门；一家人共享天伦乐，恨只恨朝中出奸臣！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（贞白）</Text>:
                呀！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（唱）</Text>:
                不知道奸臣是哪一个？你说出来我兰贞与你把冤伸。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（曾白）</Text>:
                不提奸臣倒也罢了，提起奸臣，我骂你这严嵩呀老贼！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（贞白）</Text>:
                唔？骂起我祖父来了。你骂他做什么？
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（曾唱）</Text>:
                骂你奸贼老严嵩，横行霸道在朝中，我爹爹南征北战赤胆忠心保国家，你屈害我父心太凶，你以为斩草已除根，偏偏逃出我两弟兄。小生若遂凌云志，先斩你奸贼老严嵩！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（贞唱）</Text>:
                听此言来恨满胸，怪声堂上老祖公，曾严两家结冤仇，你为什么将兰贞的终身去许曾荣？怪不得他见我像眼中钉，夫妻到老合不拢。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（曾白）</Text>:
                严世藩啊严世藩！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（贞白）</Text>:
                啊！骂起我爹爹来了！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（曾唱）</Text>:
                骂你奸臣严世藩，父子同朝一样奸，将兰贞终身许配我，你要靠半子难上难，小生若有出头日，定将父子一齐斩！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（贞唱）</Text>:
                听此言来心惊胆战，我兰贞做人难上难；常言道不共戴天杀父仇，我只好任凭冤家斩。爹爹呀！并非女儿不孝顺，只怪你做人心太奸！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（曾白）</Text>:
                赵文华啊赵文华！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（贞白）</Text>:
                他怎么骂起赵叔父来了？
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（曾唱）</Text>:
                骂声奸贼赵文华，哪个要你媒来做，别人用金银珠宝谢大媒，我用那上方宝剑谢文华！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（白）</Text>:
                鄢茂卿呀鄢茂卿！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（贞唱）</Text>:
                啊呀呀！连他自己父亲都骂起来了！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（曾唱）</Text>:
                骂你奸臣鄢茂卿，狐假虎威滥小人！留你一点父子情，我将你革职定罪去充军！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（贞唱）</Text>:
                冤家你说话不中听，哪有儿子罪父亲。唉！他骂别人我不管，只要不骂我严兰贞。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（曾白）</Text>:
                严兰贞，我骂你这妖娆！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（贞白）</Text>:
                呀！怎的骂起我来了？真正岂有此理！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（曾唱）</Text>:
                骂你妖娆严兰贞，你是奸臣半脉根，任凭你相国之女花容貌，总是我仇深似海对头人。小生若有出头日，我将你一封休书遣娘门，先斩严嵩严世藩，后斩妖娆严兰贞！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（贞白）</Text>:
                好气……好气也！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（唱）</Text>:
                听此言来怨气升，世上有此无情人！兰贞没有待错你，你不该斩我严兰贞！我有情来他无义，人不伤虎他虎伤人。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（白）</Text>:
                唉！我罢！罢！罢！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（唱）</Text>:
                我还是到画堂祖父禀，
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（白）</Text>:
                不可，不可啊！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（唱）</Text>:
                我若到画堂祖父禀，那冤家他是羊入虎口命难存。想兰贞本是出嫁女，我一世终身去靠何人？常言道人不三思要后悔，我还是看风使舵把计定。待我举手把门敲，又恐吓坏了我官人。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（白）</Text>:
                官人开门，兰贞来了。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（曾白）</Text>:
                哎呀，不……不好了！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（唱）</Text>:
                我在书房骂奸臣，忽然来了严兰贞，我心急装作心宽样，假装笑脸去相迎。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（贞白）</Text>:
                曾荣，你……你好！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（唱）</Text>:
                我兰贞没有待错你，你斩尽杀绝心太狠，你无情来我无义，我还有什么夫妻的情，你来来来，去去去，要到画堂禀父亲。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（白）</Text>:
                真正岂有此理！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（曾白）</Text>:
                啊！娘……娘子啊！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（贞白）</Text>:
                谁是你的娘子？
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（曾唱）</Text>:
                曾荣双膝跪在地，叫声娘子好贤妻，若到画堂去禀告，我一命送在妻手里，娘子啊，我今一死何足惜，我舍不下……
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（贞白）</Text>:
                什么？
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（曾唱）</Text>:
                舍不下大贤大德好贤妻。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（贞唱）</Text>:
                等你状元身及第，你把兰贞婚来离；今日识破你机关事，你是佛口蛇心将我欺。今日先要你冤家死，我看你插翅也难飞！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（曾白）</Text>:
                娘子啊！你看我家破人亡多孤苦，难道你眼睁睁看我走绝路？见死不救你心何忍，娘子啊，你我到底是夫妇，今天你杀了亲丈夫，害得你年纪轻轻做寡妇。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（贞唱）</Text>:
                听得冤家来哭诉，左难右难难煞了我！他说道虽死何足惜，要害我兰贞做寡妇。我若救了冤家命，严家满门我难顾；我若救子父亲与祖父，我难救眼前的亲丈夫。唉！两条生死要我定，那阎王好比我兰贞来做。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（曾白）</Text>:
                娘子，你就饶了我罢！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（贞白）</Text>:
                唉！
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>（唱）</Text>:
                只要我们夫妻和，天翻地覆我都不顾。
            </Text>
        </Fragment>
    );
    render() {
        return (
            <ScreenBase
                top="盘夫索夫"
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
