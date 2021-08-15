import React, { Component } from 'react';
import { View, ImageBackground, TouchableOpacity, Text, StatusBar } from 'react-native';
import VideoPlayScreen from '../VideoPlayScreen';
import { pxToDp } from '@utils/styleKits';
import { Button } from 'react-native-elements';
class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoHeight: pxToDp(220),
            hidden:false
        };
    }
    onIt = () => {
        // if (this.state.videoHeight = pxToDp(220)) {
        //     this.setState({
        //         videoHeight: this.state.videoHeight = pxToDp(800),
        //     });
        // } else {
        //     this.setState({
        //         videoHeight: this.state.videoHeight = pxToDp(220),
        //     });
        // }
        this.setState({
            videoHeight: this.state.videoHeight = pxToDp(800),
            hidden:this.state.hidden = true,
        });
    };
    upIt = () => {
        this.setState({
            videoHeight: this.state.videoHeight = pxToDp(220),
            hidden:this.state.hidden = false,
        });
    }
    render() {
        const { goToPage, tabs, activeTab } = this.props;
        const { videoHeight } = this.state;
        return (
            <View>
                <StatusBar
                    hidden={this.state.hidden}
                >
                </StatusBar>
                <View style={{ height: videoHeight, width: '100%', backgroundColor: 'red' }}>
                    <VideoPlayScreen onIt={this.onIt} upIt={this.upIt} />
                    {/* <Button onPress={()=>this.onIt()} title='111'></Button> */}
                </View>
                <View>
                    <ImageBackground
                        style={{
                            height: pxToDp(28), flexDirection: "row", paddingLeft: pxToDp(20), paddingRight: pxToDp(20),
                            justifyContent: "space-evenly", alignItems: 'center',
                        }}
                    // source={require("../../../images/b7.png")}
                    >
                        {tabs.map((v, i) => <TouchableOpacity
                            key={i}
                            onPress={() => goToPage(i)}
                            style={{
                                justifyContent: "center",
                                borderBottomColor: "#50935E ",
                                borderBottomWidth: activeTab === i ? pxToDp(3) : 0
                            }}
                        >
                            <Text
                                style={{ color: "black", fontSize: activeTab === i ? pxToDp(20) : pxToDp(18), fontWeight: activeTab === i ? 'bold' : 'normal' }}
                            >{v}</Text>
                        </TouchableOpacity>)}
                        {/* <View style={{ height: pxToDp(40), width: pxToDp(40), marginRight:pxToDp(-10) ,justifyContent:'center',alignItems:'center',flex:1}}>
          <Image style={{width:pxToDp(30),height:pxToDp(30)}} source={require('../../../../images/分类(1).png')}></Image>
        </View> */}
                    </ImageBackground>
                </View>
            </View>

        );
    }
}

export default index;