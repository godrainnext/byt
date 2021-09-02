import { StyleSheet, Dimensions, Platform } from 'react-native';
import { colors } from './index.style';
import { pxToDp } from '../../../../../utils/styleKits';
const IS_IOS = Platform.OS === 'ios';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp(percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const entryBorderRadius = 8;

export default StyleSheet.create({
    slideInnerContainer: {
        flexDirection: "row",
        width: pxToDp(270),
        height: pxToDp(140),
        paddingHorizontal: itemHorizontalMargin,
        paddingBottom: 4 ,// needed for shadow
        marginTop:pxToDp(-8)
    },
    shadow: {
        position: 'absolute',
        top: 0,
        left: itemHorizontalMargin,
        right: itemHorizontalMargin,
        bottom: 4,
        shadowColor: colors.black,
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 10,
        borderRadius: entryBorderRadius
    },
    imageContainer: {
        flex: 6,
        marginBottom: -4, // Prevent a random Android rendering issue
        borderTopLeftRadius: entryBorderRadius,
        borderBottomLeftRadius: entryBorderRadius,
        // borderTopRightRadius: entryBorderRadius,
        // borderBottomRightRadius: entryBorderRadius
    },

    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: "cover",
        borderTopLeftRadius: entryBorderRadius,
        borderBottomLeftRadius: entryBorderRadius
    },
    // image's border radius is buggy on iOS; let's hack it!
    radiusMask: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: entryBorderRadius,
        backgroundColor: 'white'
    },

    textContainer: {
        flex: 4,
        height: pxToDp(140),
        backgroundColor: "#D5E8E6",
        justifyContent: 'center',
        alignItems: "center",
        borderTopRightRadius: entryBorderRadius,
        borderBottomRightRadius: entryBorderRadius
    },

    title: {
        flexWrap: "wrap",
        color: colors.black,
        fontSize: 13,
        fontWeight: 'bold',
        letterSpacing: 0.5
    },

    subtitle: {
        marginTop: 6,
        color: colors.gray,
        fontSize: 12,
        fontStyle: 'italic'
    },
    subtitleEven: {
        color: 'rgba(255, 255, 255, 0.7)'
    }
});
