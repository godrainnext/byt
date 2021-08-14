import React, { PureComponent } from "react";
import { View, Text, Image, ScrollView, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import { pxToDp } from "../../../utils/styleKits";
import Top from '../../../component/common/top';
import Icon from 'react-native-vector-icons/AntDesign';


class Index extends PureComponent {
    state = {
        schoolstate: {
            image: 'https://tse1-mm.cn.bing.net/th/id/R-C.1693d122b9478d7792a51f549aadb2c9?rik=q5ATrivKbTnqzg&riu=http%3a%2f%2fd.ifengimg.com%2fq100%2fimg1.ugc.ifeng.com%2fnewugc%2f20190421%2f16%2fwemedia%2f51bf42238f5692a72322a20d11f6f10d01091eae_size425_w640_h360.png&ehk=YsxOvziJPS9igx1T%2b9GKznbYEGxsre4EhhwxE1A269s%3d&risl=&pid=ImgRaw&r=0',
            text: '袁派唱腔的特点是质朴平易，委婉细腻,深沉含蓄，韵味醇厚。袁雪芬擅长依照人物的特定性格和感情创腔，不追求曲调的花梢，而注意以情带声，以真情实感和润腔韵味扣人心弦。在演唱上，她气息饱满，运腔婉转，喷口有力，吐字坚实而富有弹性，运腔中运用欲放又收、抑扬有致的处理，形成特有的韵味美。她常根据唱词的寓意，采用特殊的节奏形式，改变原来较为平稳的字位节奏，使唱腔和唱词语气紧密结合起来。如《西厢记》“赖婚”中的“若不是张解元他识人多”，在“若不是”后面的拖腔中运用了后起半拍的特殊的节奏形式，形象地显露了莺莺一提到意中人时难以掩饰的喜悦；“琴心”中“宝髻玲珑”的“玲珑”二字和“身在墙东”的“墙东”二字，都采用了前切分音节奏，使唱腔旋律在流畅中有跌宕，平稳中有跳跃。\n        袁派十分讲究重点唱句的演唱，擅用喷口、气口、加虚词以及强音、顿音等技巧进行特殊处理，造成演唱上的高潮。如《祥林嫂》中“阎王要把我一锯两半分”一句中，“一锯”二字以重音强调，"分"字以喷口唱法吐出，随即在三小节的拖腔中又多次运用气口，使唱腔若断若续，渲染了人物内心的恐惧。袁派的甩腔也常通过句幅的扩充、节奏的顿挫、调式的交替、结构的变化，使旋律迂回曲折，回味无穷。如《白蛇传·断桥》中的"到如今，凤泊鸾飘两地怨"的甩腔，通过句头、句幅的乐汇扩充，显得柔婉悠长；《祥林嫂》中“这真是走也难来留也难，进退两难怎安排”两句，通过宫徵调式交替的手法产生回肠荡气的效果。\n        袁派影响很大，戚雅仙、吕瑞英、金采风、张云霞等都师承袁派而后自成一家；师承袁派的演员有上海的朱东韵、方亚芬、华怡青和南京的陶琪等。',
            video1: 'https://tse1-mm.cn.bing.net/th/id/R-C.1ab89fef7cc91ff8b288c7127f95b69e?rik=C%2fifpGj17xRn6w&riu=http%3a%2f%2fi0.hdslb.com%2fbfs%2farchive%2f9c87d0c61fb7e03a5e842b0a44d83b2b9ee99112.jpg&ehk=BkzVVrJJQM9%2ftrNGYCnXpftTwexUySj6ypqyUWTqYwI%3d&risl=&pid=ImgRaw&r=0',
            video2: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181016%2F45c85fb7dbcc48058ee5f94c2d799cc9.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630714303&t=bc77a6fb87c8f73930403585149cf29c',
            videotitle1: '袁雪芬专辑',
            videotitle2: '越剧“女王”方亚芬',
            videotitle3: '赵心瑜越剧名段',
            videotitle4: '袁派·华怡青专辑',
        }
    }
    render() {
        return (
            <View style={styles.view}>
                <Top icon1="arrow-back" title="袁派" />
                <ScrollView style={styles.box}>
                    <Image style={styles.image} source={{ uri: this.state.schoolstate.image }} />
                    <Text style={styles.title}>流派特点</Text>
                    <Text style={styles.text}>&emsp;&emsp;{this.state.schoolstate.text}</Text>
                    <Text style={styles.title}>经典赏析</Text>
                    <TouchableOpacity>
                        <ImageBackground style={styles.video} imageStyle={styles.videoimage} source={{ uri: this.state.schoolstate.video1 }}>
                            <Icon name="playcircleo" size={30} color={'white'} />
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <ImageBackground style={styles.video} imageStyle={styles.videoimage} source={{ uri: this.state.schoolstate.video2 }}>
                            <Icon name="playcircleo" size={30} color={'white'} />
                        </ImageBackground>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: '#E2F4FE'
    },
    box: {
        marginLeft: pxToDp(10),
        marginLeft: pxToDp(10),
        marginTop: pxToDp(10),
        marginBottom: pxToDp(80)
    },
    image: {
        width: pxToDp(355),
        borderRadius: pxToDp(12),
        height: pxToDp(170)
    },
    title: {
        fontSize: pxToDp(20)
    },
    text: {
        fontSize: pxToDp(14)
    },
    videobox: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: pxToDp(357)
    },
    video: {
        justifyContent: "space-between",
        height: pxToDp(150),
        width: pxToDp(355),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: pxToDp(10)
    },
    videoimage: {
        borderRadius: pxToDp(10),
        width: pxToDp(355),
        height: pxToDp(150),
    }
})
export default Index;