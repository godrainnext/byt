{/*import React, { PureComponent } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions ,StyleSheet} from 'react-native';
import Top from '@components/common/top';
import { pxToDp } from '@utils/styleKits'
import Carousel from 'react-native-snap-carousel'; // Version can be specified in package.json
import jpg1 from '../../../res/16.jpg'
import jpg2 from '../../../res/20.jpg'
import { scrollInterpolator, animatedStyles } from './animation';
import * as ImagePicker from 'expo-image-picker';

const SLIDER_WIDTH = Dimensions.get('screen').width
const ITEM_WIDTH = SLIDER_WIDTH *0.5;
const ITEM_HEIGHT = ITEM_WIDTH * 1;

const DATA = [
   jpg1,jpg2,jpg1,jpg2
]




class Index extends PureComponent {
    state={index:0,localUri:''}
    _renderItem({ item }) {
    return (
        <Image source={item} style={[styles.itemContainer]} />
    );
  }

 openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
      
    console.log(pickerResult);
    if (pickerResult.cancelled === true) {
      return;
    }

    this.setState({ localUri: pickerResult.uri });
  };
    render() {
        return (
            <View style={{backgroundColor:'#E2F4FE',flex:1}}>
                <Top icon1="arrow-back" title="戏服体验馆" />
                <View style={{ alignItems: 'center', alignSelf: 'center', marginTop: pxToDp(30),height:500 }}>
                    <Text style={{ fontSize: pxToDp(20) }}>想知道自己穿上戏服是什么样吗？{"\n"}
                        来试试看吧!
                    </Text>
             
                   
                    <Carousel
                        ref={(c) => { this._carousel = c; }}
                      data={DATA}
                     renderItem={this._renderItem}
                      sliderWidth={ITEM_HEIGHT}
                        itemWidth={ITEM_WIDTH*1.1}
                    containerCustomStyle={styles.carouselContainer}
                     onSnapToItem={(index) => this.setState({ index })}
                      scrollInterpolator={scrollInterpolator}
                      slideInterpolatedStyle={animatedStyles}
                        loop={true}
                        sliderHeight={ITEM_HEIGHT}
                        itemHeight={ITEM_HEIGHT}
                           
                    />
                   
                </View>
                  <TouchableOpacity onPress={this.openImagePickerAsync}  style={{ marginTop: pxToDp(20), backgroundColor: '#008080', alignItems: 'center', alignSelf: 'center', height: pxToDp(50), width: pxToDp(200), justifyContent: 'center' }}>
                        <Text style={{ fontSize: pxToDp(25), color: 'white' }}>+导入</Text>
                    </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    carouselContainer: {

        margin: 25,
        marginLeft:50
        
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
      backgroundColor: 'dodgerblue',
      borderRadius:5
  }
});
export default Index;*/}