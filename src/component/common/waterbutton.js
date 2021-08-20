import React, { PureComponent } from "react";
import { View,Animated,TouchableOpacity,Image,Easing} from 'react-native';
import { pxToDp } from "../../utils/styleKits";

class Index extends PureComponent {
     state={
         spreadAni: new Animated.Value(0)
     }
    componentDidMount() {
        this.loopTouchAnimated();
    }

    loopTouchAnimated() {

        Animated.timing(this.state.spreadAni, {
            toValue: 1,
            easing: Easing.linear,
            duration: 1000,

        }).start(
            () => {
                this.state.spreadAni.setValue(0);
            }
        );
    }


    render() { 
        const  math = this.state.spreadAni.interpolate({
        inputRange: [0, 1],
        outputRange: [100, 200],
    });
    const  alph = this.state.spreadAni.interpolate({
        inputRange: [0, 1],
        outputRange: ['rgba(70,140,211,1)', 'rgba(70,140,211,0)'],})
        return (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: pxToDp(200),
              width: pxToDp(200)
            }}
          >
            <Animated.View
              style={{
                borderColor: alph,
                borderWidth: 2,
                width: math,
                height: math,
                borderRadius: math,
                backgroundColor: alph,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  this.loopTouchAnimated();
                }}
              >
                <Image
                  style={{
                    height: pxToDp(92),
                    width: pxToDp(92),
                    borderRadius: pxToDp(48)
                  }}
                  source={require('../../res/麦克风.jpg')}
                />
              </TouchableOpacity>
            </Animated.View>
          </View>
        );
    }
}
export default Index;