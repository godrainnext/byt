import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { pxToDp } from '@utils/styleKits';
import Top from '@components/common/top';
import GenerView from '@components/common/generview';
import { NavigationContext } from '@react-navigation/native';
import { getListByStatus } from '@service/home';

class Index extends PureComponent {
  static contextType = NavigationContext;
  state = {
gener:[
  {
    id:'1',title:'袁派',text:'袁派唱腔的特点是质朴平易，委婉细腻，深沉含蓄，韵味醇厚。',school:'School1',
    path:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimages.china.cn%2Fnews%2Fattachement%2Fjpg%2Fsite3%2F20110316%2F46106135519015070.jpg&refer=http%3A%2F%2Fimages.china.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632125362&t=9dc7035d2f632f36988eda52463462a9'
  },
  {
    id:'2',title:'范派',text:'范瑞娟中低音厚实，高音响亮有力，唱腔凝重大方，富有阳刚之美。',school:'School2',
    path:'https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/baike/s%3D220/sign=9ebe18840f2442a7aa0efaa7e142ad95/a08b87d6277f9e2f07e73f0f1f30e924b999f3e2.jpg'
  },
  {
    id:'3',title:'尹派',text:'尹派的特点是委婉缠绵，洒脱深沉，纯朴隽永，清新舒展，是一种典型的以柔为主、柔中寓刚的风格。',school:'School3',
    path:'https://img0.baidu.com/it/u=4138705196,415315772&fm=26&fmt=auto&gp=0.jpg'
  },
  {
    id:'4',title:'傅派',text:'傅派唱腔婉转圆润，华彩绮丽，曲调跳跃多姿，小腔丰富，演唱的时候富有激情。',school:'School4',
    path:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimagev2.xmcdn.com%2Fgroup34%2FM02%2F10%2F1E%2FwKgJYFnXLnSg3HzxAABj6s_20mM307.jpg%21op_type%3D5%26upload_type%3Dalbum%26device_type%3Dios%26name%3Dlarge_pop%26strip%3D0%26quality%3D7&refer=http%3A%2F%2Fimagev2.xmcdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632127333&t=3184f51e80f84a8d159e7a0a30821160'
  },
  {
    id:'5',title:'徐派',text:'徐玉兰唱腔的特点是高亢激昂，热情奔放，刚柔并蓄，华彩跌宕。',school:'School5',
    path:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimages.shobserver.com%2Fnews%2Fnews%2F2017%2F4%2F19%2F21041bf1-f868-499a-9d81-0f927cd4ec52.jpg&refer=http%3A%2F%2Fimages.shobserver.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632126792&t=2cdcb8c2c041bd383fdf8e09c7f02949'
  },
  {
    id:'6',title:'戚派',text:'戚派唱腔简而不繁，不事花哨，通俗易学、易记，常用的乐汇看上去很简洁，但通过各种，使唱腔丰富多彩',school:'School6',
    path:'https://ss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/baike/pic/item/5ab5c9ea15ce36d3c23cf44c3af33a87e950b195.jpg'
  },
  {
    id:'7',title:'王派',text:'王文娟的唱腔平易朴实，自然流畅，韵味浓郁。',school:'School7',
    path:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwx1.sinaimg.cn%2Fmw690%2F006CYoirly1gt6qmkyo2xj30qe0xnabf.jpg&refer=http%3A%2F%2Fwx1.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632126903&t=dde8f49ac57251a3bc59489bf26355e1'
  },
  {
    id:'8',title:'陆派',text:'陆派嗓音清亮，音质纯净，音调朴实流畅，行腔松弛舒展',school:'School8',
    path:'https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/baike/pic/item/9c16fdfaaf51f3debc5c051d94eef01f3b2979d8.jpg'
  },
  {
    id:'9',title:'毕派',text:'毕派嗓音脆亮，音域较宽，底气充足，唱腔中常出现一种切分符点音型，因此行腔棱角分明，音调富有弹性。',school:'School9',
    path:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs13.sinaimg.cn%2Forignal%2F497e7d15baaf1bc0793fc&refer=http%3A%2F%2Fs13.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632126971&t=019352e3f102827e09595be5e9120b28'
  },
  {
    id:'10',title:'张派',text:'张云霞唱腔旋律性强，起伏较大，小腔丰富，变化灵活，擅用多种装饰音加以润腔，以婉转柔和、华丽多姿的风格独树一帜。',school:'School10',
    path:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimagev2.xmcdn.com%2Fgroup2%2FM02%2F6B%2F27%2FwKgJRFs1xmSwp_T-AADAxWDDwuA839.jpg%3Fop_type%3D3%26device_type%3Dios%26name%3Dweb_meduim%26columns%3D72%26rows%3D72&refer=http%3A%2F%2Fimagev2.xmcdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632127012&t=6e98656ec5397f5bbeb9c5e53a0e6e41'
  },
  {
    id:'11',title:'吕派',text:'吕派唱腔在继承袁派委婉典雅、细腻隽永的风格的基础上，又增加了活泼娇美、昂扬明亮的旋律色彩。',school:'School11',
    path:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171214%2F435bf7efd57e4a71b0f1fcdd9e886409.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632127052&t=d6a1582257af37fd70fefc44500c4ae6'
  },
  {
    id:'12',title:'金派',text:'金采风的唱腔婉转秀丽，刚柔相济。她的嗓音明亮，行腔自然流畅，质朴中展风采，秀婉中显棱角，柔中寓刚，端庄大方。',school:'School12',
    path:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffdfs.xmcdn.com%2Fgroup24%2FM09%2F17%2F09%2FwKgJNVhnIqXwRgegAACm05FRF7g242.jpg&refer=http%3A%2F%2Ffdfs.xmcdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632127076&t=099f229752390ab3d2b6257437296b05'
  },
  {
    id:'13',title:'张派',text:'张桂凤唱腔上较多吸收绍剧高亢的音调和棱角分明的润腔方法使唱腔激昂奔放，富有力度，从而增强了男性气质。',school:'School13',
    path:'https://img0.baidu.com/it/u=62687186,3945356944&fm=26&fmt=auto&gp=0.jpg'
  },
]
  };

  render() {
    return (
      <View style={{ backgroundColor: '#E2F4FE', flex: 1 }}>
        <Top icon1="arrow-back" title="流派传奇" />
        <ScrollView
          style={{ flex: 1, padding: pxToDp(8) }}
          showsVerticalScrollIndicator={false}
        >
          <View style={{  marginBottom: pxToDp(32),marginLeft:pxToDp(8),marginRight:pxToDp(8)}}>
            {this.state.gener.map((item) => (
              <TouchableOpacity
                onPress={() => this.context.navigate(item.school)}
                style={{
                  height: pxToDp(130),
                  borderRadius: pxToDp(8),
                  flexDirection: 'row',
                  marginTop: pxToDp(10),
                  backgroundColor: 'white',
                  marginBottom:pxToDp(4),
                  elevation: 4,
shadowColor: 'black',  //  阴影颜色
 shadowOffset: { width: 0, height: 0 },  // 阴影偏移
 shadowOpacity: 1,  // 阴影不透明度
 shadowRadius: 10,  //  圆角
                }}
              >
                <Image
                  style={{
                    width: pxToDp(90),
                    height: pxToDp(110),
                    borderRadius: pxToDp(8),
                    marginLeft: pxToDp(10),
                    marginTop: pxToDp(10)
                  }}
                  source={{ uri: item.path }}
                />
                <View
                  style={{
                    width: pxToDp(235),
                    height: pxToDp(130),
                    marginLeft: pxToDp(10),
                    justifyContent: 'center',
                    paddingRight: pxToDp(8)
                  }}
                >
                  <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold' }}>
                    {item.title}
                  </Text>
                  <Text style={{ fontSize: pxToDp(14) }} numberOfLines={2}>
                    {item.text}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Index;
