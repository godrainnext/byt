import React, { PureComponent } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableHighlight,
	Image,
	TouchableOpacity,
} from 'react-native';
// import FastImage from 'react-native-fast-image';
import Masonry from 'react-native-masonry';
// import Slider from '@react-native-community/slider';

// list of images
let data = [
	{
		data: {
			caption: '生活细碎万物成诗，今晚的月亮分你一半',
			user: {
				name: '不拱大白菜'
			},
		},
		uri: 'https://t7.baidu.com/it/u=1485780900,1171834527&fm=193&f=GIF',
		// onPress: (data) => goTo(data.id),
		renderFooter: (data) => {
			return (
				<View key='brick-header' style={{ backgroundColor: 'white', padding: 5, paddingRight: 9, paddingLeft: 9, borderTopWidth: 1, borderTopColor: 'gary' }}>
					<TouchableOpacity>
						<View style={{ flexDirection: 'row', alignItems: 'center' }}>
							<Image
								source={{ uri: 'https://t7.baidu.com/it/u=810585695,3039658333&fm=193&f=GIF' }}
								style={styles.userPic} />
							<Text style={styles.userName}>{data.user.name}</Text>
						</View>
						<Text style={{ lineHeight: 20, fontSize: 14 }}>{data.caption}</Text>
					</TouchableOpacity>
				</View>
			)
		},
		// renderHeader: (data) => {
		// 	return (
		// 		<View key='brick-footer' style={styles.headerTop}>
		// 			{/* 用户名+用户头像 */}

		// 		</View>
		// 	)
		// }
	},
	{
		data: {
			caption: '你看他笑得多开心',
			user: {
				name: '大黑'
			},
		},
		uri: 'https://t7.baidu.com/it/u=128764686,1887614532&fm=193&f=GIF',
		renderFooter: (data) => {
			return (
				<View key='brick-header' style={{ backgroundColor: 'white', padding: 5, paddingRight: 9, paddingLeft: 9, borderTopWidth: 1, borderTopColor: 'gary' }}>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<Image
							source={{ uri: 'https://t7.baidu.com/it/u=810585695,3039658333&fm=193&f=GIF' }}
							style={styles.userPic} />
						<Text style={styles.userName}>{data.user.name}</Text>
					</View>
					<Text style={{ lineHeight: 20, fontSize: 14 }}>{data.caption}</Text>
				</View>
			)
		},
	},
	{
		uri: 'https://t7.baidu.com/it/u=810585695,3039658333&fm=193&f=GIF',
	},
	{
		uri: 'https://t7.baidu.com/it/u=839828294,1619278046&fm=193&f=GIF',
	},
	{
		uri: 'https://t7.baidu.com/it/u=473647396,2784348303&fm=193&f=GIF'
	},
	{
		uri: 'https://t7.baidu.com/it/u=4188671375,2323574798&fm=193&f=GIF'
	},
	{
		uri: 'https://t7.baidu.com/it/u=3876201379,2104650373&fm=193&f=GIF'
	},
	{
		uri: 'https://t7.baidu.com/it/u=1492471725,655950677&fm=193&f=GIF'
	},
	{
		uri: 'https://t7.baidu.com/it/u=3768299387,3978912548&fm=193&f=GIF'
	},
	{
		uri: 'https://t7.baidu.com/it/u=1475136080,1340374137&fm=193&f=GIF',
	},
	{
		uri: 'https://t7.baidu.com/it/u=689116808,1050880775&fm=193&f=GIF',
	},
	{
		uri: 'https://t7.baidu.com/it/u=4156702370,720145431&fm=193&f=GIF'
	},
	{
		uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2015-03/17/15/enhanced/webdr13/enhanced-6527-1426620797-18.jpg'
	},
	{
		uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2014-12/1/15/enhanced/webdr02/enhanced-18393-1417466529-5.jpg'
	},
	{
		uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXXTmdaGSOFK8iBeYqoA6_XiQGGWvu6KGnqAxXYyvJA-JKin8ImQ'
	},
	{
		uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2015-04/3/15/enhanced/webdr06/enhanced-24427-1428089292-2.jpg'
	},
	{
		uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2016-12/28/12/asset/buzzfeed-prod-web-09/sub-buzz-24236-1482944714-1.jpg'
	},
	{
		uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2016-03/7/17/enhanced/webdr08/enhanced-buzz-8155-1457391039-5.jpg'
	},
	{
		uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2017-03/30/12/asset/buzzfeed-prod-fastlane-01/sub-buzz-24597-1490890739-1.jpg'
	},
	{
		uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2016-01/14/20/campaign_images/webdr15/which-delicious-mexican-food-item-are-you-based-o-2-20324-1452822970-1_dblbig.jpg'
	},
	{
		uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2015-11/30/10/enhanced/webdr15/enhanced-18265-1448896942-17.jpg'
	},
	{
		uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2015-12/30/16/enhanced/webdr04/enhanced-15965-1451509932-6.jpg'
	}
];

const createBrick = uri => ({ uri });

const data1 = [
	'https://i.pinimg.com/736x/48/ee/51/48ee519a1768245ce273363f5bf05f30--kaylaitsines-dipping-sauces.jpg',
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGYfU5N8lsJepQyoAigiijX8bcdpahei_XqRWBzZLbxcsuqtiH',
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPL2GTXDuOzwuX5X7Mgwc3Vc9ZIhiMmZUhp3s1wg0oHPzSP7qC',
].map(createBrick);

const data2 = [
	'https://i.pinimg.com/236x/ee/ea/61/eeea61b03a2de8216384ff1be9544b82--what-you-see-follow-me.jpg',
	'https://i.pinimg.com/originals/a0/30/87/a03087e36c083a665cd3392d2d59cf0b.jpg',
	'https://i.pinimg.com/736x/59/ae/8e/59ae8ee0e9e84aa234f80a345fa7f1c6--wedding-ceremony-wedding-menu.jpg'
].map(createBrick);

const data3 = [
	'https://i.pinimg.com/736x/6a/53/0a/6a530a49f764ce51a9742162f46c1e05--soul-food-pinterest.jpg',
	'https://i.pinimg.com/originals/a0/30/87/a03087e36c083a665cd3392d2d59cf0b.jpg',
	'https://img.buzzfeed.com/buzzfeed-static/static/2018-02/19/3/asset/buzzfeed-prod-fastlane-03/sub-buzz-12799-1519030318-7.jpg'
].map(createBrick);

const appendData = [data1, data2, data3];

export default class example extends PureComponent {
	constructor() {
		super();

		this.state = {
			columns: 2,
			padding: 5,
			data,
			dataIndex: 0
		};
	}

	_addData = () => {
		if (this.state.dataIndex < 3) {
			this.setState(state => {
				const addData = appendData[this.state.dataIndex];
				const appendedData = [...state.data, ...addData];

				return {
					data: appendedData,
					dataIndex: state.dataIndex + 1
				};
			});
		}
	}

	render() {
		return (
			<View style={{ flex: 1, backgroundColor: '#f4f4f4' }}>
				<View style={[styles.center, styles.header]}>
					<Text style={{ fontWeight: '800', fontSize: 20 }}>市集</Text>
				</View>
				{/* 
				<View style={[styles.center, styles.buttonGroup, { marginTop: 10, marginBottom: 25 }]}>
					<TouchableHighlight style={styles.button} onPress={() => this.setState({ columns: 2 })}>
						<Text>2 Column</Text>
					</TouchableHighlight>
					<TouchableHighlight style={styles.button} onPress={() => this.setState({ columns: 3 })}>
						<Text>3 Columns</Text>
					</TouchableHighlight>
					<TouchableHighlight style={styles.button} onPress={() => this.setState({ columns: 6 })}>
						<Text>6 Columns</Text>
					</TouchableHighlight>
					<TouchableHighlight style={styles.button} onPress={() => this.setState({ columns: 9 })}>
						<Text>9 Columns</Text>
					</TouchableHighlight>
				</View> */}

				{/* <View style={styles.buttonGroup, { marginLeft: 4 }}>
					<TouchableHighlight style={styles.button} onPress={this._addData}>
						<Text>点击刷新</Text>
					</TouchableHighlight>
				</View> */}

				{/* <View style={[styles.center, styles.slider, { marginTop: 10, marginBottom: 25, flexDirection: 'column' }]}>
					<View style={{ paddingLeft: 10 }}>
						<Text>Dynamically adjust padding: {this.state.padding}</Text>
					</View>
					<View style={{ width: '100%' }}>
						<Slider
							style={{ height: 10, margin: 10 }}
							maximumValue={40}
							step={5}
							value={20}
							onValueChange={(value) => this.setState({ padding: value })} />
					</View>
				</View> */}

				<View style={{ flex: 1, flexGrow: 10, padding: this.state.padding, backgroundColor: '#aaa' }}>
					<Masonry
						bricks={this.state.data}
						columns={this.state.columns}
						onEndReached={this._addData}
						priority='balance'
						//缝隙
						spacing={2}
						imageContainerStyle={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
					// customImageComponent={FastImage}
					/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f4f4f4',
		flex: 1,
		flexBasis: '10%'
	},
	header: {
		flexGrow: 1
	},
	buttonGroup: {
		flexGrow: 1
	},
	slider: {
		flexGrow: 1
	},
	button: {
		backgroundColor: '#dbdcdb',
		padding: 10,
		marginRight: 4,
		borderRadius: 4,
	},
	buttonText: {
		color: '#404040'
	},
	center: {
		marginTop: 30,
		// marginBottom: 20,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center'
	},
	headerTop: {
		flexDirection: 'row',
		padding: 5,
		alignItems: 'center',
		backgroundColor: 'white'
	},
	userPic: {
		height: 20,
		width: 20,
		borderRadius: 10,
		marginRight: 10
	},
	userName: {
		fontSize: 20
	}
});