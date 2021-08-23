import React,{ PureComponent } from "react";
import { View,Text, ImagePropTypes} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { pxToDp } from "../../utils/styleKits";
import { Button} from 'react-native-elements'
import LinearGradient from "react-native-linear-gradient";

class Mybtn extends PureComponent{
    render(){
        return(
           <View> 
               <Button
                   ViewComponent={LinearGradient}
               {...this.props}
               linearGradientProps={{
                colors: ['#fa9222', '#ffd501'],
                start: { x: 0, y: 0.5 },
                end: { x: 1, y: 0.5 }
              }}
                />
           </View>
        )
    }
}


export default  Mybtn;
