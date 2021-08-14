import React, { Component } from "react";
import { View, Text, ImageBackground, FlatList, TouchableOpacity, Button, Image } from "react-native";
import { pxToDp } from "../../../utils/styleKits";
import { NavigationContext } from "@react-navigation/native";
import Top from '../../../component/common/top'
const TEA_data = [
    {
        id: "1",
        title: '女子越剧的生命力与美学价值',
        subtitle: '女子越剧的生存与发展，是越剧艺术的美学与情感价值同强大的政治和道德压力的博弈的范本，启迪了政治与艺术关系的新的思考方向。',
        illustration: 'https://img0.baidu.com/it/u=1752414660,3344020033&fm=26&fmt=auto&gp=0.jpg'
    },
    {
        id: "2",
        title: '越剧全历史',
        subtitle: '“以下内容由广大历史爱好者精心提供，期待您也成为内容的共建者，一起搭建更具有温度的全历史。',
        illustration: 'https://img1.baidu.com/it/u=1322644164,3519551591&fm=26&fmt=auto&gp=0.jpg'
    },
    {
        id: "3",
        title: '谁翻乐府旧谣？',
        subtitle: '恋上越剧的人必是痴情者。轻吟浅唱间，宝玉黛玉眉眼深情，鲤鱼精一往情深，唐婉凄哀的眼神钻碎人心，山伯英台翩翩化蝶……越剧在情上作文章，看天地看前后，唱不离一个情字。',
        illustration: 'https://img1.baidu.com/it/u=1901648492,3311744043&fm=26&fmt=auto&gp=0.jpg'
    },
    {
        id: "4",
        title: '越剧的意境美',
        subtitle: '演唱唯美，唱词唯美，一腔一韵，短短的几句，有如读《红楼梦》中的“荷衣欲动兮，听环佩之铿锵。纤腰之楚楚兮，若回风舞雪”，与李商隐的“何当共剪西窗烛，却话巴山夜雨时”诗词的意境一般优美！',
        illustration: 'https://img0.baidu.com/it/u=2218639897,3986178039&fm=26&fmt=auto&gp=0.jpg'
    },
    {
        id: "5",
        title: '如水的越剧',
        subtitle: '从六朝金粉的秦淮到晓风残月的西湖，从烟花三月的扬州到枫桥夜泊的姑苏，再没有哪种戏剧比越剧更令人缱绻悱恻、至性至情了。',
        illustration: 'https://img0.baidu.com/it/u=1876423826,1384171009&fm=26&fmt=auto&gp=0.jpg'
    },
    {
        id: "6",
        title: '喜欢越剧',
        subtitle: '当那幕布被轻轻打开，灯光矜持地泻下，戏文中的角色将如行云流水般美丽优雅的水袖一一展开、刚劲而柔韧的力量深情浮现，我恍惚置身于另外一个年代，悄然迷离于别人的故事里的这个舞台，真正地混沌于“你中有我、我中有你”的境界。此时的喜欢，已不再是单纯意义上的爱慕，更是一种心灵深处纠结的依恋。',
        illustration: 'https://img0.baidu.com/it/u=952587805,2463391979&fm=26&fmt=auto&gp=0.jpg'
    },
    {
        id: "7",
        title: '在江南遇见越剧',
        subtitle: '越剧，喜以女子的形态出现。她们左手捏着鸳鸯嬉水的丝绢，右手翘起兰花指，莲步细细碎碎，云中仙女一样飘到台上，顾盼神飞，轻甩水袖，款款情深，那样地楚楚动人，我见犹怜，一举手一投足尽显江南女子特有的妩媚温柔。男主角也是清澈无比的，由女子扮演则显得更加儒雅俊逸。',
        illustration: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg8.zol.com.cn%2Fbbs%2Fupload%2F18932%2F18931615.jpg&refer=http%3A%2F%2Fimg8.zol.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631538524&t=cdf57d952c56cc2a228e09258869ed0a'
    },
    {
        id: "8",
        title: '越剧就是一篇隽永淡泊的生活散文',
        subtitle: '“越剧已成了我生活中重要的一部分，注定今生要与越剧牵手走过漫长的花季雨季。如果说京剧是波澜壮阔的历史小说，越剧则是一篇隽永淡泊的生活散文。”连日来，第二届中国越剧艺术节大赛越来越进入“白热化”，而读者品评越剧的热情也越来越高涨，昨日，读者吴玉英以散文化的笔调诉说了自己与越剧的渊源。',
        illustration: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp35.qhimg.com%2Ft01b2fe9cc9bdc1a56d.jpg%3Fsize%3D689x385&refer=http%3A%2F%2Fp35.qhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631538524&t=a27bc3d94fe68abec957ea01a58e36a8'
    },
    {
        id: "9",
        title: '往日台上追鱼，今朝台下追忆',
        subtitle: '“她岂止桃李丰神容颜美，更有那湖海豪情令人敬。”1962年，越剧电影《红楼梦》播放，“天上掉下个林妹妹”一曲火遍大江南北，许多不懂越剧的朋友想必也听过这一段。在此之前，越剧《追鱼》已被天马电影制片厂摄制成彩色戏曲艺术片，主演正是我们的“林妹妹”。如今，“张郎你听我从实讲”一段成了越剧经典唱段，被戏迷传唱。',
        illustration: 'https://img2.baidu.com/it/u=3626926874,4037369461&fm=26&fmt=auto&gp=0.jpg'
    },
];
class history extends Component {
    static contextType = NavigationContext;

    render() {
        return (
            <View style={{ marginBottom: pxToDp(60),backgroundColor:'#ecf6fc'}}>
                <Top icon1="arrow-back" />
                <FlatList
                    data={TEA_data}
                    renderItem={({ item }) =>
                        // 视频大图  开始
                        <View style={{ height: pxToDp(220), flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: pxToDp(10), elevation: 10, shadowColor: 'black', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 1, shadowRadius: 10, }}>
                            <View style={{ width: '96%', height: '100%', }}>
                                <TouchableOpacity>
                                    <ImageBackground style={{ width: '100%', height: pxToDp(220), }} imageStyle={{ borderRadius: pxToDp(10) }} source={{ uri: item.illustration }}>
                                        <View style={{ justifyContent: 'center', alignItems: 'center', height: '64%' }}>
                                        </View>
                                        <View style={{ backgroundColor: '#eaffff', opacity: 0.8, width: '100%', height: '36%', borderRadius: pxToDp(10), }}>
                                            <View style={{ margin: pxToDp(10) }}>
                                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                                    <Text numberOfLines={1} style={{ fontSize: pxToDp(16), width: '96%', marginBottom: pxToDp(6) }}>
                                                        {item.title}
                                                    </Text>
                                                </View>
                                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                    <Text numberOfLines={2} style={{ marginLeft: pxToDp(4) }}>{item.subtitle}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </ImageBackground>
                                </TouchableOpacity>
                            </View>
                        </View>
                    }
                    keyExtractor={item => item.id}
                />

            </View>
        );
    }
}
export default history;