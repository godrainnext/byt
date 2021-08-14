import React, { PureComponent } from "react";
import { View, Text } from "react-native";
import Slider from '@react-native-community/slider';

class Index extends PureComponent {
    constructor() {
        super();

        this.state = {
            currentTime: 0.0,					//当前播放的时间
            paused: 1.0,						//播放
            sliderValue: 0,					//进度条的进度
            duration: 0.0						//总时长
        };
    }
    //格式化音乐播放的时间为0：00
    formatMediaTime(duration) {
        let min = Math.floor(duration / 60);
        let second = duration - min * 60;
        min = min >= 10 ? min : "0" + min;
        second = second >= 10 ? second : "0" + second;
        return min + ":" + second;
    }

    //设置进度条和播放时间的变化
    setTime(data) {
        let sliderValue = parseInt(this.state.currentTime);
        this.setState({
            slideValue: sliderValue,
            currentTime: data.currentTime
        });
    }

    //设置总时长
    setDuration(duration) {
        this.setState({ duration: duration.duration });
    }
    render() {
        return (
            <View>
                <Slider
                    style={{width: 320, height: 40}}
                    value={this.state.slideValue}
                    maximumValue={this.state.duration}
                    step={1}
                    onValueChange={value => this.setState({ currentTime: value })}
                />
            </View>
        );
    }
}

export default Index;