/**
 *   duration: 1400, // 动画执行时间
 *   delay: 2000,   // 动画间隔时间
 *   easing: Easing.linear,    // 缓动函数
 *   startOpacity: 0,       // 动画初始透明度
 *   endOpacity: 1,     // 动画结束透明度
 *   startScale: 0.95,       // 动画初始放大比例
 *   endScale: 1,    // 动画结束放大比例
 *   cardStyle: {}        // 每个图片的样式
 */

import React, { PureComponent } from 'react';
import { View, Animated, Easing } from 'react-native';

class index extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            opacity: new Animated.Value(this.props.startOpacity || 0),
        }
        this.duration = this.props.duration || 2000;
        this.delay = this.props.delay || 3000;
        this.easing = this.props.easing || Easing.linear;
        this.startOpacity = this.props.startOpacity || 0;
        this.endOpacity = this.props.startOpacity || 1;
        this.startScale = this.props.startScale || 1;
        this.endScale = this.props.endScale || 1;
        this.zindex = new Animated.Value(0);
        // this.ondelay = this.props.ondelay || false;
    }
    startAnimated = () => {
        const animation = Animated.sequence([
            Animated.timing(this.state.opacity, {
                toValue: this.endOpacity,
                duration: this.duration,
                delay: this.delay,
                easing: this.easing,// 缓动函数
                useNativeDriver:true
            }),
            Animated.timing(this.zindex, {
                toValue: 1,
                duration: 0,
                delay: 0,
                easing: this.easing ,// 缓动函数
                useNativeDriver:true
            }),
            Animated.timing(this.state.opacity, {
                toValue: this.startOpacity,
                duration: this.duration,
                delay: this.delay,
                easing: this.easing,// 缓动函数
                useNativeDriver:true
            })
        ]);
        Animated.loop(animation, {
            useNativeDriver: true,
            // iterations: 2
        }).start(() => {
            this.zindex.setValue(0);
        });
    }
    componentDidMount() { this.startAnimated(); }

    render() {
        var subopacity = Animated.subtract(new Animated.Value(this.endOpacity), this.state.opacity);
        let imageAddStyle = {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
        }

        var zindex1 = this.zindex;
        var zindex2 = Animated.subtract(new Animated.Value(1), this.zindex);
        return (
            <View style={this.props.style}>
                <Animated.View
                    style={[
                        {
                            zIndex: zindex2,
                            opacity: subopacity,
                            transform: [
                                {
                                    scale: subopacity.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [this.startScale, this.endScale],
                                    })
                                },
                            ],
                        },
                        imageAddStyle
                    ]}
                >
                    {this.props.children[0]}
                </Animated.View>
                <Animated.View
                    style={[
                        {
                            zIndex: zindex1,
                            opacity: this.state.opacity,
                            transform: [
                                {
                                    scale: this.state.opacity.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [this.startScale, this.endScale],
                                    })
                                },
                            ],
                        },
                        imageAddStyle
                    ]}
                >
                    {this.props.children[1]}
                </Animated.View>
            </View>
        );
    }
}

export default index;