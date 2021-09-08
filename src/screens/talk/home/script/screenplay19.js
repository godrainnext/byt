import React, { Fragment, PureComponent } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { pxToDp } from '@utils/styleKits';
import ScreenBase from '@components/screenplayBase/ScreenBase';

class Index extends PureComponent {
    renderInner = () => (
        <Fragment>
            <View>
                <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold', color: '#000000' }}>大观园</Text>
            </View>
            <Text
                style={{
                    marginTop: pxToDp(8),
                    color: '#333333',
                    fontSize: pxToDp(16),
                    marginBottom: pxToDp(10)
                }}
            >
                浙江小百花越剧团
            </Text>
            <View>
                <Image
                    style={{
                        height: pxToDp(180),
                        borderRadius: pxToDp(8),
                        width: pxToDp(342)
                    }}
                    source={{
                        uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180911%2F699cbf34704843da8832998356b5e592.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633624433&t=a639c6d1d1ba5a8ceded7a7e5e17f215'
                    }}
                />
            </View>
            <Text style={[styles.Text, { marginTop: pxToDp(8) }]}>
                <Text style={styles.texthead}>贾宝玉</Text>:
                宝玉来也，行宫门前等得我腿酸软，火树银花看得我眼迷离。一声宣召我快步儿如飞，见一见我难得相见的亲姐姐。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>伴唱</Text>:
                香风过处鸣玉佩，一对丽姝姗姗来。绝色女儿风流态，恰似那娇花照水润玉生辉。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>贾元春</Text>:
                衔山抱水建来精，多少功夫筑始成。天上人间诸景备，芳园应赐大观名。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>贾元春</Text>:
                想当初你送女儿入宫门，一入宫门似海深。长年蜇居黄墙内，至亲骨肉两离分。弟妹音容渐淡薄，难奉萱堂伴晨昏。纵然是锦衣玉食享富贵，反不如田舍之家乐天伦。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>贾政</Text>:
                贾政草莽出寒门，幸喜得祖宗积德聚你身。鸦鸠巢中生鸾凤，女儿你册封贵妃沐皇恩。娘娘一人受眷宠，臣下全家蒙庇荫。祈娘娘勤慎肃恭侍君主，皇恩如天胜亲恩。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>伴唱</Text>:
                一夕省亲洒泪别，群芳荟萃大观园。薛宝钗居住蘅芜院，潇湘馆安顿病婵娟。怡红公子称心愿，终日里在园中与风花雪月结下了不解缘。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>贾宝玉</Text>:
                读厌了八股文高谈阔论，似枯木无生意死气沉沉。倒不如花间去寻愁觅恨，凭自然随天性即兴闲吟。鱼儿啊，可允我化作鱼与你同乐，喋浮香戏碧水无限欢欣。燕子啊，你可见林妹妹梳洗起身，她是否又把那西厢轻吟。 央求你振翅儿在前带引，到潇湘见一见我那朝思暮想袅袅婷婷的小姐莺莺。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>袭人</Text>:
                想当初老爷让你进园内，承望你立志功名莫懈怠。偏生你把仕途经济冷眼看，只会调脂弄粉混杂在裙衩队。二爷呀，你若再不把脾气改，我就要禀太太将你从大观园里搬出来。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>晴雯</Text>:
                太太把你交付给袭人姐，这真是前世修来的好福气。她是进庙不烧两柱香，一个菩萨拜到底。当初服侍老太太，她只把老太太放在心眼里。如今服侍你宝二爷，她心里眼里只有你。这样的好奴才千里挑一，你就是死了啊，她也会爬进棺材来服侍你。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>贾宝玉</Text>:
                你看我像张生多愁多病，整日价想着你小姐莺莺。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>薛宝钗</Text>:
                当初我也是个淘气的小姑娘，识了字也爱读闲书野史杂文章。兄妹们背着大人偷偷看，看过了唐宋传奇元人百部琵琶拜月与西厢。到后来被父母知道了，打的打骂的骂烧的烧，把闲书杂本一烧光。妹妹啊，女孩儿读书本非份内事，遵古训只须刺绣在闺房。倘被那闲书杂本移心性，怕只怕离规出矩受人谤。妹妹啊，姐姐把心腹的话儿悄悄讲，望妹妹心儿忖度自思量。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>林黛玉</Text>:
                宝姐姐她切切规劝发议论，言词辞可畏又可亲。黛玉是寄身人篱下一孤草，更须要时时自省多留神。低声含笑去求恳，恕妹妹一时忘了情。行令失口诵西厢，姐姐呀，你休说与旁人听。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>合唱</Text>:
                繁花似锦大观园，群芳争春竞吐艳。凭借东风一片力，风筝带香上云天。却不料乐极生悲祸患起，不孝子违父训气坏了贾老爷。打得宝玉死去活来气奄奄，急得那老太君痛哭娇孙泪涟涟。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>贾母</Text>:
                叫一声心肝宝贝小孙孙，无情棍打在你身痛我的心。只恨我人到白头耳不聋，年过八十眼未昏。听得见你满嘴呼痛声，看得见你浑身紫血痕。你父心狠手也恨，打得你是死去又还魂。幸亏祖宗积德厚，保住了贾门一条根。哎呀宝玉啊，待你伤好能走动，我带你离开京都回金陵。从此离开不孝子，免得你鼠儿见猫再受惊。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>王熙凤</Text>:
                一丸药满室香，千金难买情意长。来日宝玉能走动，定会亲自登门谢姑娘。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>合唱</Text>:
                多情哥哥想妹妹，泪人儿悄悄进门来。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>贾宝玉</Text>:
                午后暑热未散尽，你何苦带病走上门。要是受暑再添病，你病上加病我怎安心。今日我虽然受了打，三分痛装成八九分。哄人传与老爷听，其实是假莫当真。妹妹呀，你绝顶聪明也受骗，真假不辨笑煞人。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>林黛玉</Text>:
                哥哥他心口不相应，十分痛装成两三分。只见他眉儿皱牙儿紧，额冒汗痛难忍。不知他哪块皮肉淤血积，哪边紫来哪边青。恨只恨兄妹大了难亲近，不能够抚一抚哥哥身上伤痛痕。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>合唱</Text>:
                宝钗低头绣鸳鸯，鸳鸯交颈花下藏。手拈针线心遐想，
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>薛宝钗</Text>:
                一声梦呓撼心肠。是梦话是真话，为什么宝玉他偏在此时讲。他若对黛玉无深爱，怎会在梦中把妹妹高声嚷。不敢想啊不敢想，不敢想时心更想。有情偏被无情恼，想到寒处透心凉。坐不安立不宁无限惆怅，一句话蓦地惊醒梦一场。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>紫鹃</Text>:
                紫鹃我出自至诚心一片，替你愁了好几年。你无父无母无兄弟，心中有话向谁言。趁今儿老太太硬朗还明白，终身大事莫迟延，姑娘明日赶我走，今晚我索性说个透。姑娘啊，万两黄金容易得，知音一个也难求。你为谁将心揉碎，你又为谁把泪流。你愿与谁相厮守，你愿与谁共白头。指望你与宝玉天长地久，紫鹃我明日人走心也留。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>林黛玉</Text>:
                恍惚迷离如梦境，问宝玉莫非梦中将我寻。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>贾宝玉</Text>:
                妹妹呀，你说是梦就是梦，梦里相见情更真。心中惦念妹妹的病，愁煞风雨不眠人。梦魂飞出怡红院，问妹妹今宵病体可安宁。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>林黛玉</Text>:
                心里想你你就来，十分病苦轻三分。 哥哥你伤痛尚未好，又何必风宵雨夜走出门。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>贾宝玉</Text>:
                看你双颊泛红微微喘，容颜憔悴少精神。见你这副病模样，更添宝玉病三分。劝妹妹一日三餐添饮食，衣衫冷暖多留神。劝妹妹闲言风语休去听，他们是七分假来三分真。劝妹妹早安息莫劳神，病体不宜到夜深。妹妹呀，你的病连我的病，不同病症同病根。只有好了你的病，我才会放下心来病转轻。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>林黛玉</Text>:
                看你头上戴着大斗笠，一件蓑衣披在身。俨然像个渔夫样，莫非你欲驾扁舟桃源江上行。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>贾宝玉</Text>:
                妹妹说话真知音，宝玉我早想脱离这烦恼境。寄情山水一叶舟，只可惜缺少个摇橹煮饭的人。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>林黛玉</Text>:
                渔夫浪迹江湖上，自有渔妇伴晨昏。只可惜黛玉一身都是病，不能够陪伴你天涯海角同舟行。
            </Text>
            <Text style={styles.Text}>
                <Text style={styles.texthead}>贾宝玉</Text>:
                妹妹呀，我做渔翁遂心意，你做渔妇正相称。渔翁渔妇永厮守，风雨同舟不离分。
            </Text>
        </Fragment>
    );
    render() {
        return (
            <ScreenBase
                top="大观园"
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
