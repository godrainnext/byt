import React, { PureComponent,createRef} from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { pxToDp } from '@utils/styleKits';
import { NavigationContext } from "@react-navigation/native";
import SvgUri from 'react-native-svg-uri';
import { BottomSheet, ListItem } from 'react-native-elements';
import { } from 'react-native-elements/dist/list/ListItem';
import { sandian } from '../../../../component/common/iconSvg'
import { Audio } from 'expo-av';
import { Video } from 'expo-av'
import { playmusic,dianzan,zhuanfa,pinglun,stopmusic} from '../../../../component/common/iconSvg';

class Index extends PureComponent {
  state = {
    list: [
      { title: '收藏' },
      { title: '举报' },
      {
        title: '取消',
        containerStyle: { backgroundColor: 'red' },
        titleStyle: { color: 'white' },
        onPress: () => this.setState({ isShow: false })
      }
    ],
    isShow: false,
    isopen: false,
    status: {},
  }
  playSound = async () => {
    if (this.state.sound.length) {
        console.log('Loading Sound');
        console.log('Playing Sound');
        for (const sound of this.state.sound) {
            this.setState({ playingsong: sound })
            await sound.playAsync();
        }
        this.setState({ isplay: true })

        console.log(this.state.sound);

    } else {
        for (const uri of this.state.URI) {
            const { sound } = await Audio.Sound.createAsync(
                { uri }
            );
            this.setState({ sound: [...this.state.sound, sound] });
        }


        console.log('Loading Sound');
        console.log('Playing Sound');
        for (const sound of this.state.sound) {
            this.setState({ playingsong: sound })
            await sound.playAsync();
        }

        this.setState({ isplay: true })
    }

}

pauseSound = async () => {
    console.log('Stopping Sound')
    // this.setState({sound:undefined})
    await this.state.playingsong.pauseAsync()
    this.setState({ isplay: false })
}
showMusic=(obj)=>{
  const video = createRef()
  return(
    <ImageBackground style={{ flex: 1, height: pxToDp(150), marginTop: pxToDp(10),}} source={{uri:obj.picture}}>
    <Video
        ref={video}
        source={{uri:obj.music}}
        resizeMode="contain"
        onPlaybackStatusUpdate={status => this.setState({ status })}
    />
    <TouchableOpacity style={{position:'absolute',bottom:10,right:10,opacity:.5}}
    onPress={()=>
      this.state.status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
  }>
    <SvgUri svgXmlData={this.state.status.isPlaying?stopmusic:playmusic} width='30' height='30' />
    </TouchableOpacity>
</ImageBackground >
  )
}
showArticle=(obj)=>{
  return(
  <ScrollView style={{ flex: 1, height: pxToDp(120), marginTop: pxToDp(10)}} horizontal={true} showsHorizontalScrollIndicator={false}>
  {obj.images.map((item, index) => (
    <Image
      key={index}
      style={{ width: pxToDp(155), height: '100%', borderRadius: pxToDp(10), marginRight: pxToDp(10) }}
      source={{ uri: item }} />
  ))}
</ScrollView>)
}
  static contextType = NavigationContext;
  render() {


    return (
      <View>
  
        <ScrollView>
          <View style={{ width: '95%', marginLeft: pxToDp(10), marginTop: pxToDp(20), marginBottom: pxToDp(20) }}>
            {this.props.dongtai.map((item, dtid) => (

              <View key={item.id} style={{ elevation: 2, borderWidth: 0, marginBottom: pxToDp(20), backgroundColor: 'white', borderRadius: pxToDp(20) }}>

                <BottomSheet
                  isVisible={this.state.isShow}
                  containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)' }}>
                  {this.state.list.map((l, i) => (
                    <ListItem key={i.id} containerStyle={l.containerStyle} onPress={l.onPress}>
                      <ListItem.Content>
                        <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
                      </ListItem.Content>
                    </ListItem>))}
                </BottomSheet>
                <TouchableOpacity style={{ position: 'absolute', top: pxToDp(30), right: pxToDp(30) }}
                  onPress={() => this.setState({ isShow: true })} >
                  <SvgUri svgXmlData={sandian} width='20' height='20' />
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', margin: pxToDp(10), }}>

                  <Image source={{ uri: item.user.avatar }} style={{ width: pxToDp(60), height: pxToDp(60), borderRadius: pxToDp(40), marginLeft: pxToDp(20), marginTop: pxToDp(10) }} />
                  <TouchableOpacity onPress={() => this.context.navigate('Inluntan',item.id)}>
                    <View style={{ marginTop: pxToDp(10) }}>
                      <Text style={{ fontSize: pxToDp(25), fontWeight: 'bold', paddingLeft: pxToDp(20) }}>{item.user.nickName}</Text>
                      <Text style={{ fontSize: pxToDp(15), paddingLeft: pxToDp(20), marginTop: pxToDp(5) }}>{item.createTime}</Text>

                    </View>
                  </TouchableOpacity>
                </View>
                <View style={{ width: '90%', marginBottom: pxToDp(30), alignSelf: 'center' }}>
                  <TouchableOpacity onPress={() => this.context.navigate('Inluntan',item.id)}>
                    <Text style={{ fontSize: pxToDp(18), marginBottom: pxToDp(10), paddingLeft: pxToDp(8), marginTop: pxToDp(10) }}>{item.content}</Text>
                  </TouchableOpacity>
                
              
              {item.label?this.showMusic(item):this.showArticle(item)}
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: pxToDp(10) }}>
                  <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <SvgUri svgXmlData={dianzan} width='20' height='20' />
                    <Text style={{ position: 'absolute', bottom: pxToDp(5), left: pxToDp(30) }}>{item.dz}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.context.navigate('Inluntan',item.id)}>
                    <SvgUri svgXmlData={pinglun} width='20' height='20' />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <SvgUri svgXmlData={zhuanfa} width='25' height='25' />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
       
      </View>
    );
  }
}



export default Index;
