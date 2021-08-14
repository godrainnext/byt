import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { pxToDp } from "../../../utils/styleKits";
class Index extends PureComponent{
    render(){
    //console.log(this.props);
    const {goToPage,tabs,activeTab}=this.props;
    //goToPag 函数 负责跳转页面
    //tabs 标题数组
    //activeTab 当前激活索引
        return(
       <ImageBackground 
       style={{height:pxToDp(60),flexDirection:"row",paddingLeft:pxToDp(16),
       justifyContent:"flex-start"
    }}
       source={require("../../../res/2.png")}
       >
           {tabs.map((v,i)=><TouchableOpacity
           key={i}
           onPress={()=>goToPage(i)}
           style={{justifyContent:'center',
           borderBottomColor:"red",
           borderBottomWidth:activeTab===i?pxToDp(3):0
        }}
        >
            <Text
            style={{color:activeTab===i?"black":"grey",fontSize:activeTab===i?pxToDp(20):pxToDp(15)}}
            >{v}</Text>
            </TouchableOpacity>)}
       </ImageBackground>
        );
    }
}
export default Index;