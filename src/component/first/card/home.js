import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    PanResponder,
    Animated,
    Image,
    Dimensions
} from 'react-native'
import Card from './Card'


const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height 

class Home extends Component {
    state = {
        backgroundColor: 'transparent',
        pan: new Animated.ValueXY(0, 0),
        scale: new Animated.Value(0.9),
        translateY: new Animated.Value(40),
        thirdTranslateY: new Animated.Value(20),
        dataIndex: 0,
    }
    UNSAFE_componentWillMount() {
        this._panResponder = PanResponder.create({
            onMoveShouldSetPanResponder: (event, gestureState) => {
                if (gestureState.dx === 0 && gestureState.dy === 0) {
                    return false
                } else {
                    if (this.props.action === 'openCard') {
                        // console.log(123)
                        return false
                    } else {
                        return true
                    }
                }
            },
            onPanResponderGrant: () => {
                Animated.spring(this.state.scale, { toValue: 1, useNativeDriver: false }).start()
                Animated.spring(this.state.translateY, { toValue: 0, useNativeDriver: false }).start()
                this.setState({ backgroundColor: 'transparent' })
                Animated.spring(this.state.thirdTranslateY, { toValue: 45, useNativeDriver: false }).start()
            },
            onPanResponderMove: Animated.event([
                null,
                { dx: this.state.pan.x, dy: this.state.pan.y }
            ],
                { useNativeDriver: false }),
            onPanResponderRelease: () => {
                const currentY = this.state.pan.y.__getValue();
                if (currentY > 250) {
                    Animated.timing(this.state.pan, {
                        toValue: { x: 0, y: 800 },
                        duration: 200,
                        useNativeDriver: false
                    }).start(() => {
                        Animated.timing(this.state.pan, {
                            toValue: { x: 0, y: 0 },
                            duration: 0,
                            useNativeDriver: false
                        }).start()
                        this.setState({ dataIndex: shouldIndex(this.state.dataIndex) })
                        Animated.spring(this.state.scale, { toValue: 0.9, useNativeDriver: false }).start()
                    })
                } else {
                    Animated.spring(this.state.pan, {
                        toValue: { x: 0, y: 0 },
                        useNativeDriver: false
                    }).start()
                    Animated.spring(this.state.scale, { toValue: 0.9, useNativeDriver: false }).start()
                    Animated.spring(this.state.translateY, { toValue: 40, useNativeDriver: false }).start()
                    Animated.spring(this.state.thirdTranslateY, { toValue: 20, useNativeDriver: false }).start()
                }
                this.setState({ backgroundColor: 'transparent' })
            }
        })
    }

    render() {
        const { scale, translateY, backgroundColor, thirdScale, thirdTranslateY, dataIndex } = this.state
        return (
            <View style={[styles.container, { backgroundColor: backgroundColor }]}>
                <Animated.View style={
                    {
                        transform: [
                            { translateX: this.state.pan.x, },
                            { translateY: this.state.pan.y, }
                        ]
                    }}
                    {...this._panResponder.panHandlers}
                >
                    <Card canOpen={true} {...CardData[dataIndex]} />
                </Animated.View>
                <Animated.View style={[
                    styles.otherCard,
                    {
                        transform: [
                            { scale: scale },
                            { translateY: translateY }
                        ]
                    }]}
                >
                    <Card {...CardData[shouldIndex(dataIndex)]} />
                </Animated.View>
                <Animated.View style={[
                    styles.otherCard,
                    {
                        transform: [
                            { scale: 0.9 },
                            { translateY: thirdTranslateY }
                        ],
                        zIndex: -2
                    }]}
                >
                    <Card {...CardData[shouldIndex(dataIndex + 1)]} />
                </Animated.View>
                {/* <Login /> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    otherCard: {
        position: 'absolute',
        zIndex: -1
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ddd',
        width: '100%',
        height: screenHeight-80
    }
});

function shouldIndex(index) {
    let shouldIndex = index + 1
    if (shouldIndex > CardData.length - 1) {
        return 0
    }
    return shouldIndex
}

const CardData = [
    {
        image: require('../../../res/3.jpg'),
        title: 'Awesome Styled Components',
        startNum: 29.5,
        info: 'Visual primitives for the component age Use the best bits of ES6 and CSS to style your apps without stress 💅Visual primitives for the component age Use the best bits of ES6 and CSS to style your apps without stress 💅Visual primitives for the component age Use the best bits of ES6 and CSS to style your apps without stress 💅Visual primitives for the component age Use the best bits of ES6 and CSS to style your apps without stress 💅'
    },
    {
        image: require('../../../res/3.jpg'),
        title: 'Vue.js',
        startNum: 165,
        info: 'Vue is a JavaScript framework for building websites. The intent of Vue is to make the integration of other JavaScript libraries easy. It is designed to organize and simplify web development.'
    },
    {
        image: require('../../../res/13.jpg'),
        title: 'react-native',
        startNum: 87.5,
        info: 'A framework for building native apps with React. '
    },
    {
        image: require('../../../res/14.jpg'),
        title: 'react.js',
        startNum: 149,
        info: 'A declarative, efficient, and flexible JavaScript library for building user interfaces.'
    },
    {
        image: require('../../../res/15.jpg'),
        title: 'node.js',
        startNum: 70,
        info: '一个用Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行时'
    },
    {
        image: require('../../../res/16.jpg'),
        title: 'jQuery',
        startNum: 53.4,
        info: 'jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. '
    }
]

export default Home;