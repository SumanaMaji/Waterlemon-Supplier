import React, {useState,useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  I18nManager
} from 'react-native';
import mergeExtradata from './MergeExtradata';
import {COLORS} from '../../constant/Colors';
import {FONTS} from '../../constant/Font';

const isAndroidRTL = I18nManager.isRTL && Platform.OS === 'android';
const introSlider = (props) => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const flatListRef = useRef<FlatList>(null);

    const goToSlide = (pageNum, triggerOnSlideChange) => {
        const prevNum = activeIndex;
        setActiveIndex(pageNum);
        flatListRef.current?.scrollToOffset({
            offset: rtlSafeIndex(pageNum) * width,
        });
        if (triggerOnSlideChange && props.onSlideChange) {
            props.onSlideChange(pageNum, prevNum);
        }
    };
    const rtlSafeIndex = (i) => isAndroidRTL ? props.data.length - 1 - i : i;
    const renderItemIntro = (flatListArgs) => {
        const props = { ...flatListArgs, dimensions: { width, height } };
        //console.log(<View style={{ width, flex: 1 }}>{renderItem(props)}</View>);
        return <View style={{ width, flex: 1 }}>{renderItem(props)}</View>;
    };
    const renderButton = (name, label, onPress, render) => {
        const content = render ? render() : renderDefaultButton(name, label);
        return renderOuterButton(content, name, onPress);
    };
    const  renderDefaultButton = (name, label) => {
        (label==='Skip')? content = <Text style={styles.buttonTextSkip}>{label}</Text>: content = <Text style={styles.buttonText}>{label}</Text>;
       
        if (props.bottomButton) {
            content = (<View style={[
                name === 'Skip' || name === 'Prev'
                    ? styles.transparentBottomButton
                    : styles.bottomButton,
            ]}>
      {content}
    </View>);
        }
        return content;
    };
   const  renderOuterButton = (content, name, onPress) => {
        const style = name === 'Skip' || name === 'Prev'
            ? styles.leftButtonContainer
            : styles.rightButtonContainer;
        return (<View style={!props.bottomButton && style}>
    <TouchableOpacity onPress={onPress} style={props.bottomButton && styles.flexOne}>
      {content}
    </TouchableOpacity>
  </View>);
    };

    const renderNextButton = () => props.showNextButton &&
        renderButton('Next', props.nextLabel, () => goToSlide(activeIndex + 1, true), props.renderNextButton);
    const renderPrevButton = () => props.showPrevButton &&
        renderButton('Prev', props.prevLabel, () => goToSlide(activeIndex - 1, true), props.renderPrevButton);
    const renderDoneButton = () => props.showDoneButton &&
        renderButton('Get Started', props.doneLabel, props.onDone, props.renderDoneButton);

       const  renderSkipButton = () => 
        props.showSkipButton &&
            renderButton('Skip', props.skipLabel, () => props.onSkip
                ? props.onSkip()
                : goToSlide(props.data.length - 1), props.renderSkipButton);
        const renderSkipButtonLabel = () => {
            const isLastSlide = activeIndex === props.data.length - 1;
            const isFirstSlide = activeIndex === 0;
            const secondaryButton = (!isFirstSlide && renderPrevButton()) ||
                (!isLastSlide && renderSkipButton());
            
            return (<View style={styles.skipContainer}>
            {secondaryButton}
        </View>);
        };

       const renderPaginationIntro = () => {
            const isLastSlide = activeIndex === props.data.length - 1;
            const isFirstSlide = activeIndex === 0;
            const secondaryButton = (!isFirstSlide && renderPrevButton()) ||
                (!isLastSlide && renderSkipButton());
            const primaryButton = isLastSlide
                ? renderDoneButton()
                : renderNextButton();
            return (<View style={styles.paginationContainer}>
        <SafeAreaView>
          <View style={styles.paginationDots}>
            {props.data.length > 1 &&
                props.data.map((_, i) => props.dotClickEnabled ? (<TouchableOpacity key={i} style={[
                    styles.dot,
                    rtlSafeIndex(i) === activeIndex
                        ? props.activeDotStyle
                        : props.dotStyle,
                ]} onPress={() => goToSlide(i, true)}/>) : (<View key={i} style={[
                    styles.dot,
                    rtlSafeIndex(i) === activeIndex
                        ? props.activeDotStyle
                        : props.dotStyle,
                ]}/>))}
          </View>
          {primaryButton}
        </SafeAreaView>
      </View>);
        };
       const  onMomentumScrollEndIntro = (e) => {
            const offset = e.nativeEvent.contentOffset.x;
            const newIndex = rtlSafeIndex(Math.round(offset / width));
            if (newIndex === activeIndex) {
                return;
            }
            const lastIndex = activeIndex;
            setActiveIndex(newIndex);
            props.onSlideChange && props.onSlideChange(newIndex, lastIndex);
        };
       const onLayoutIntro = ({ nativeEvent }) => {
        const widthIntro = nativeEvent.layout.width;
        const heightIntro = nativeEvent.layout.height;
            if (widthIntro !== width || heightIntro !== height) {
                setWidth(widthIntro);
                setHeight(heightIntro);
                const func = () => {
                    flatListRef.current?.scrollToOffset({
                        offset: rtlSafeIndex(activeIndex) * widthIntro,
                        animated: false,
                    });
                };
                setTimeout(func, 0); 
            }
        };
    //render() {
        const { renderPagination, activeDotStyle, dotStyle, skipLabel, doneLabel, nextLabel, prevLabel, renderItem, data, extraData, ...otherProps } = props;
        const extra = mergeExtradata(extraData, width);
        return (
           // <ScrollView>
        <View style={styles.flexOne}>
            {renderSkipButtonLabel()}
        <FlatList ref={(ref) => (flatListRef)} data={props.data} horizontal pagingEnabled showsHorizontalScrollIndicator={false} bounces={false} style={styles.flatList} renderItem={renderItemIntro} onMomentumScrollEnd={onMomentumScrollEndIntro} extraData={extra} onLayout={onLayoutIntro} 
        // make sure all slides are rendered so we can use dots to navigate to them
        initialNumToRender={data.length} {...otherProps}/>
        {renderPagination
            ? renderPagination(activeIndex)
            : renderPaginationIntro()}
      </View>);
    //}
}
export default introSlider;
introSlider.defaultProps = {
    activeDotStyle: {
        backgroundColor: 'rgba(31, 156, 239, 1)',//'rgba(255, 255, 255, .9)',
    },
    dotStyle: {
        backgroundColor: 'rgba(204, 214, 222, 1)',
    },
    dotClickEnabled: true,
    skipLabel: 'Skip',
    doneLabel: 'Get Started',
    nextLabel: 'Next',
    prevLabel: 'Back',
    showDoneButton: true,
    showNextButton: true,
    showPrevButton: false,
    showSkipButton: false,
    bottomButton: false,
};
const styles = StyleSheet.create({
    flexOne: {
        flex: 1,
        backgroundColor: COLORS.theme,
    },
    flatList: {
        flex: 1,
        flexDirection: isAndroidRTL ? 'row-reverse' : 'row',
    },
    paginationContainer: {
        position: 'absolute',
        bottom: 16,
        left: 16,
        right: 16,
    },
    skipContainer: {
        right: 16,
        marginTop:50,
        flex:0.05, 
    },
    paginationDots: {
        height: 16,
        margin: 16,
        flexDirection: isAndroidRTL ? 'row-reverse' : 'row',
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 4,
    },
    leftButtonContainer: {
        position: 'absolute',
        backgroundColor :'#F7F9FA',
        top: 0,
        right: 0,
        paddingLeft:10,
        paddingRight:10,
        borderRadius:10,
    },
    rightButtonContainer: {
        position: 'absolute',
        backgroundColor :COLORS.button,
        right: 0,
        paddingLeft:10,
        paddingRight:10,
        borderRadius:5,
        color:COLORS.white,
    },
    bottomButton: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, .3)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    transparentBottomButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonTextSkip: {
        color: COLORS.button,
        fontSize: 15,
        padding: 5,
        fontFamily: FONTS.Medium,
    },
    buttonText: {
        color: COLORS.white,
        fontSize: 15,
        padding: 8,
        fontFamily: FONTS.Medium,
    },
});
