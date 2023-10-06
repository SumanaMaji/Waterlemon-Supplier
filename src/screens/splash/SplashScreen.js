import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {
  View,
  Text,
} from 'react-native';
import { SvgUri } from 'react-native-svg';
import AppIntroSlider from '../../components/introSlider/IntroSlider';
import {COLORS} from '../../../src/constant/Colors';
import {FONTS} from '../../../src/constant/Font';
import GlobalStyles from '../../../assets/css/styles';
import LoginScreen from '../login/LoginScreen';

const SplashScreen = ({navigation}) => {
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    navigation.navigate('LoginScreen');
  };
  const onSkip = () => {
    navigation.navigate('LoginScreen');
  };

  const RenderItem = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 200,
          paddingLeft:10,
          paddingRight:10,
          paddingTop: 50,
        }}>
        <SvgUri
          style={GlobalStyles.introImageStyle}
          uri={item.image} height="80%" width="80%"/>
          <Text style={GlobalStyles.introTitleStyle}>
          {item.title}
        </Text>
        <Text style={GlobalStyles.introTextStyle}>
          {item.text}
        </Text>
      </View>
    );
  };

  return (
    
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          showSkipButton={true}
          onSkip={onSkip}
        />
  );
};

export default SplashScreen;



const slides = [
  {
    key: 's1',
    text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
    title: 'Inventory',
    image : 'https://svgshare.com/i/p15.svg', 
    backgroundColor: COLORS.theme,
  },
  {
    key: 's2',
    title: 'Add Product to Cart',
    text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
    image : 'https://svgshare.com/i/p1n.svg', 
    backgroundColor: COLORS.theme,
  },
  {
    key: 's3',
    title: 'Get Quickly',
    text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
    image : 'https://svgshare.com/i/p0G.svg', 
    backgroundColor: COLORS.theme,
  },
];
