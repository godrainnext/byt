import React,{PureComponent} from 'react'
import { View,Text,Image, TouchableOpacity } from 'react-native'
import { pxToDp } from '../../../../utils/styleKits'
class index extends PureComponent{


   
    render(){
        return(
            <View style={{elevation:8,borderColor:'#fff'}}>
                <View style={{marginTop:20,borderBottomWidth:.8,width:'90%',marginLeft:20}}>
                    <Text style={{fontSize:20,fontWeight:'bold',marginBottom:10,borderBottomWidth:0.1}}>{this.props.shopname}</Text>
                </View>
            <View style={{marginLeft:20,marginRight:10,marginBottom:10,width:'90%',height:120}}>
                <View style={{flexDirection:'row'}}>
                <Image source={require('../../../../../src/res/1.jpg')} style={{width:pxToDp(100),height:pxToDp(100),borderRadius:pxToDp(10),margin:pxToDp(12)}}/>
                
                <View style={{marginTop:10,width:150}}>
                <Text style={{fontSize:15,fontWeight:'bold'}} numberOfLines={1}>{this.props.name}</Text>
                 <Text style={{fontSize:15,marginTop:50}}>{this.props.size}</Text>
                </View>
                    <Text style={{marginTop:10,fontSize:18}}>￥{this.props.price}</Text>
                </View>
            </View>
            <View style={{height:50}}>
                <TouchableOpacity style={{position:'absolute',right:20,borderColor:'#ff8b3a',borderWidth:0.8,borderRadius:20,height:30,width:100,justifyContent:'center',alignItems:'center'}}>
                    <Text>
                        去支付
                    </Text>
                </TouchableOpacity>
            </View>
          </View>
        )
    }
}
export default index