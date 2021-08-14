/*import React, { PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Easing,
    TouchableOpacity,
    Animated,
    Image
} from 'react-native';
export default class Mixture extends PureComponent {

  constructor(props) {
      super(props)

      this.state = {
          animatedValue: new Animated.Value(0),
      }

      this.rotateAnimated = Animated.timing(
          this.state.animatedValue,
          {
              toValue: 1,
              duration: 3000,
              easing: Easing.in,
          }
      );
  }

  _startAnimated() {
    this.timer = setTimeout(
      () => {
          if(this.state.color==='red'){
              this.setState({
                  color:'blue',
                  text:'反面'
              })
          }else {
              this.setState({
                  color:'red',
                  text:'正面'
              })
          }
          },//延时操作
      1500       //延时时间
  );
      this.state.animatedValue.setValue(0);
      this.rotateAnimated.start(() => this._startAnimated());
  }

  render(){
       const rotateY = this.state.animatedValue.interpolate({
         inputRange: [0, 0.5,1],
         outputRange: ['0deg', '90deg','0deg']
       });



      const opacity = this.state.animatedValue.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: [0, 1, 0]
      });

      const rotateX = this.state.animatedValue.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: ['0deg', '180deg', '0deg']
      });

      const textSize = this.state.animatedValue.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: [18, 32, 18]
      });

      const marginLeft = this.state.animatedValue.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: [0, 200, 0]
      });

      return (
          <View style={styles.mainStyle}>
               <Animated.View
                    style={{
                        alignSelf:'center',
                        marginTop: 10,
                        width:100,
                        height:100,
                        justifyContent:'center',
                        alignItems:'center',
                        fontSize: 18,
                        color: 'white',
                        backgroundColor:this.state.color,
                        transform: [
                            {rotateY:rotateY},
                        ]
                    }}
                >
                    <Text style={{color:'#fff'}}>
                        {this.state.text}
                    </Text>
                </Animated.View>


              <Animated.View
                  style={{
                      marginTop: 10,
                      width: 100,
                      height: 100,
                      opacity:opacity,
                      backgroundColor:'red',
                  }}
              />

              <Animated.Text
                  style={{
                      marginTop: 10,
                      width:100,
                      fontSize: 18,
                      color: 'white',
                      backgroundColor:'red',
                      transform: [
                          {rotateX:rotateX},
                      ]
                  }}
              >
                  sjidhiaucbusibciod。
              </Animated.Text>

              <Animated.Text
                  style={{
                      marginTop: 10,
                      height: 100,
                      lineHeight: 100,
                      fontSize: textSize,
                      color: 'red'
                  }}
              >
                  jdisofdisncvjonss
              </Animated.Text>

              <Animated.View
                  style={{
                      marginTop: 10,
                      width: 100,
                      height: 100,
                      marginLeft:marginLeft,
                      backgroundColor:'red',
                  }}
              />

              <TouchableOpacity style={styles.touchStyle} onPress={this._startAnimated.bind(this)}>
                  <Text style={{width:200,height:100,textAlign:'center',lineHeight:100}}>点击开始动画</Text>
              </TouchableOpacity>
          </View>
      );
  }
}

const styles = StyleSheet.create({
    mainStyle:{
        flex:1
    },
    touchStyle:{
        padding:10,
        alignSelf:'flex-end'
    }
})*/