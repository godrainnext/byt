import React, { Component, createRef } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    SafeAreaView,
    ImageBackground,
    TouchableNativeFeedback, TextInput
} from 'react-native';
import { stopmusic, playmusic } from '../../../component/common/iconSvg';
import { pxToDp } from '../../../utils/styleKits';
import { Video } from 'expo-av';
import SvgUri from 'react-native-svg-uri';
import { Slider } from 'react-native-elements';
import Mybtn from '../../../component/common/mybtn';
import Top from '@components/common/top';
import { } from 'react-native-gesture-handler';
const shangchuan='<svg t="1629966816319" class="icon" viewBox="0 0 1316 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2125" width="200" height="200"><path d="M930.404387 182.903426s129.849913-1.359936 129.849914 127.994001c0 0 12.111432 125.210131-129.817915 127.994 0 0-127.258035 2.703873-125.914098-127.994a129.593925 129.593925 0 0 1 125.882099-127.994001z m312.96133-118.906426v521.159571q-5.455744-2.671875-10.975485-5.183757a315.281221 315.281221 0 0 0-62.157087-19.999063v-559.973751c0 0.143993 73.132572 5.375748 73.132572 63.997zM914.165149 987.425714H62.893052C2.55988 987.425714 0 925.252629 0 925.252629V73.18057h61.613112l1.471931 732.765651 55.181413-1.27994 247.90838-367.022796 251.604206 307.185601 185.047326-183.991375 94.571566 94.891552a258.867866 258.867866 0 0 0 16.86321 331.760448z m255.988-987.29772v73.052576H0C0-1.455932 62.973048 0 62.973048 0h1107.260097z m-75.612456 807.018171h5.11976v-5.11976z m2.55988-221.989594a219.413715 219.413715 0 1 0 219.413715 219.413715 219.413715 219.413715 0 0 0-219.413715-219.413715z m36.558287 226.005406v139.657453h-73.132572v-139.657453h-73.132572l109.706857-116.330547 109.706858 116.330547h-73.148571z m0 0" fill="#468CD3" p-id="2126"></path></svg>'
export default class hello extends Component {

    openImagePickerAsync = async () => {
        launchImageLibrary(

        );
        /*
         */
    };
 
    render() {
        const video = createRef()
        return (
            <View>
                <Top icon1="arrow-back" title='穆桂英挂帅' />
                <View style={{ margin: pxToDp(16), height: pxToDp(200), borderRadius: pxToDp(20), elevation: 1, backgroundColor: '#fff' }}>
                    <TextInput
                        multiline={true}
                        placeholder='发表一下感受吧~'
                        autoFocus={true}

                        style={{ fontSize: pxToDp(18),}} />
                </View>
                <View style={{padding:pxToDp(16),flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <Text style={{fontSize:pxToDp(18),fontWeight:'bold'}}>上传封面</Text>
                    <TouchableOpacity style={{marginLeft:pxToDp(20),marginTop:pxToDp(10)}}>
                        <SvgUri svgXmlData={shangchuan} width='60' height='60'/>
                    </TouchableOpacity>
                </View>
                <Mybtn
                    title="确认发布"
                    // onPress={() => this.context.navigate('Video', item.id)}
                    buttonStyle={{
                        width: pxToDp(200),
                        height: pxToDp(40),
                        alignSelf:'center',
                        marginTop: pxToDp(25),
                        borderRadius: pxToDp(32),
                        marginRight: pxToDp(16),

                    }}
                    titleStyle={{
                        position:'absolute',
                        fontSize: pxToDp(18)
                    }}
                />
            </View>
        );
    }
}
