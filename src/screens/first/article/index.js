import React, { PureComponent } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from "react-native";
import Top from '@components/common/top'
import { pxToDp } from "@utils/styleKits";
import Ionicons from 'react-native-vector-icons/Ionicons';

class Index extends PureComponent {
    render() {
        return (
            <View style={{backgroundColor:'#E2F4FE'}}>
                <Top icon1="arrow-back" title="文章详情" icon2="ellipsis-horizontal" />
                <View >
                    <ScrollView style={{ marginBottom: pxToDp(180) }}>
                        <View style={{ marginLeft: pxToDp(15), marginRight: pxToDp(15), marginTop: pxToDp(15) }}>
                            {/**文章标题 */}
                            <Text style={{ fontSize: pxToDp(20), fontWeight: 'bold' }}>嵊州 越剧的起源地</Text>
                            {/**作者信息 */}
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: pxToDp(5) }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Image style={{ height: pxToDp(26), width: pxToDp(26), borderRadius: pxToDp(13) }} source={require('../../../res/1.jpg')} />
                                    <Text style={{ fontSize: pxToDp(14), marginLeft: pxToDp(5) }}>名家名篇</Text>
                                </View>
                                <TouchableOpacity style={{ height: pxToDp(20), width: pxToDp(60), borderRadius: pxToDp(15), backgroundColor: '#008080', alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: pxToDp(12), color: 'white' }}>+关注</Text>
                                </TouchableOpacity>
                            </View>
                            {/**字数信息 */}
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: pxToDp(5) }}>
                                <Text style={{ color: 'grey', fontSize: pxToDp(12) }}>字数3578</Text>
                                <Text style={{ color: 'grey', fontSize: pxToDp(12) }}>阅读约8分钟</Text>
                            </View>
                            {/**文章内容 */}
                            <View>
                                <Text style={{ fontSize: pxToDp(18) }}>        越剧是中国脍炙人口的经典剧种之一，与京剧、评剧、豫剧、黄梅戏并称中国五大戏种。以唱为主，在国内外都享有很高的声誉与广泛的群众基础，是我国流传最广的剧目。晚清时期，在浙江嵊县（今嵊州）地区流行一种名叫“落地唱书”的说唱艺术形式，据考证这就是越剧前身。越剧是中国传统戏曲种类之一。</Text>
                                <Image style={{ width: pxToDp(340), height: pxToDp(280) }} source={require('../../../res/article/1.jpg')} />
                                <Text style={{ fontSize: pxToDp(18) }}>        这种说唱形式最早在浙江嵊县（今嵊州）一带的“田头歌唱”的基础上发展起来的，并开始流行起来，后流行于江、浙、沪、皖、赣等地，又称“绍兴戏”。由最初的单纯自娱，经过半个世纪的演变，最终形成专业演出的一种别具一格的艺术形式。</Text>
                                <Text style={{ fontSize: pxToDp(18) }}>        之后，“落地唱书”又历经“沿门唱书”与“走台书”两个阶段后，加入大量传书、唱本的表现手法，并进一步融入社会各阶层的生活元素，形成的艺术感染力非常强，这就是后来越剧影响力为何能迅速扩大的原因。“落地唱书”的初级阶段为“沿门唱书”，一般是挨家挨户卖唱，以乞讨为目的演出，之后形成固定的演出书目。代表人物有金其炳等。</Text>
                                <Image style={{ width: pxToDp(320), height: pxToDp(280) }} source={require('../../../res/article/2.jpg')} />
                                <Text style={{ fontSize: pxToDp(18) }}>        落地唱书”的高级阶段就是“走书台”了。和“沿门唱书”相比，它发展到进入到茶楼等固定场所演出，且对曲目、曲调也有了更进一步的改进。代表人物有金和林等。1910年左右，上海、杭州地区迎来了“小歌班”，历经大批艺人、编剧的努力，几次全面的改良变革了越剧。其曲艺形式发生非常大的变化，基本由男生向女生。在剧目、题材编写方面，越剧内容扩大，表现在针莅时弊、弘扬爱国思想等方面，而这也正是新越剧所主要表现的内容。随着名剧《祥林嫂》的演出，越剧开始在变革中不断发展。1920年后，艺人在表演、音乐、语言方面进行改革，并采用丝弦伴奏，开始在上海扎根。1922年8月，小歌班男艺人进入上海大世界演出后，改为“绍兴文戏”，以与在上海演出的“绍兴大班”相区别。1925年，上海《申报》第一次将其称为“越剧”，各地越剧剧团也相继更名，从此越剧作为一个剧种被大众熟知。</Text>
                                <Image style={{ width: pxToDp(340), height: pxToDp(230) }} source={require('../../../res/article/3.jpg')} />
                                <Text style={{ fontSize: pxToDp(18) }}>        新中国成立后，越剧的曲艺形式日益完善，风靡海内外。实际上，越剧长于抒情，以唱为主，声腔清悠婉丽优美动听，表演真切动人，展现出一种江南灵秀之气；大多数以“才子佳人”题材的戏为主，艺术流派也很多。2006年5月20日，国务院批准将越剧列为中国首批非物质文化遗产。</Text>
                            </View>
                            {/**评论区 */}
                            <View>
                                <Text style={{ fontSize: pxToDp(20), fontWeight: 'bold' }}>相关评论</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: pxToDp(10) }}>
                                    <Image style={{ height: pxToDp(34), width: pxToDp(34), borderRadius: pxToDp(17) }} source={require('../../../res/3.jpg')} />
                                    <Text style={{ fontSize: pxToDp(16), marginLeft: pxToDp(5) }}>jauua</Text>
                                </View>
                                <Text style={{ fontSize: pxToDp(20), marginLeft: pxToDp(25) }}> 打卡</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: pxToDp(10) }}>
                                <Image style={{ height: pxToDp(34), width: pxToDp(34), borderRadius: pxToDp(17) }} source={require('../../../res/6.jpg')} />
                                <Text style={{ fontSize: pxToDp(16), marginLeft: pxToDp(5) }}>第三百金币</Text>
                            </View>
                            <Text style={{ fontSize: pxToDp(20), marginLeft: pxToDp(25) }}> 打卡</Text>
                        </View>
                      
                    </ScrollView>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around',alignItems:'center',alignContent:'center', height: pxToDp(42), width:'100%', position:'absolute',bottom:70}}>
                    <TextInput style={{ height: pxToDp(30), width: pxToDp(180), borderRadius:pxToDp(10),backgroundColor: '#F5F5F5',paddingLeft:pxToDp(5) }}  placeholder="我要评论"></TextInput>
                    <Ionicons name="md-chatbox-ellipses-outline" size={28} color="grey" />
                    <Ionicons name="heart-outline" size={28} color="grey" />
                    <Ionicons name="star-outline" size={28} color="grey" />
                    <Ionicons name="share-outline" size={28} color="grey" />
                </View>
            </View>
        );
    }
}
export default Index;