
import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import GlobalStyles from '../../../assets/css/styles';
import {COLORS} from '../../../src/constant/Colors';
import {FONTS} from '../../../src/constant/Font';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DefaultScreen from './DefaultScreen';
import DeliveryScreen from './DeliveryScreen';
import OutletsScreen from './OutletsScreen';
const Tab = createMaterialTopTabNavigator();
const AppSettingsScreen = () => {
  return (
    <Tab.Navigator  style={{backgroundColor: '#1F9CEF',width:'100%',}}
    screenOptions={{
      
      tabBarItemStyle: {margin:20, marginLeft:0,flex:1,marginRight:0,},
      tabBarStyle: { backgroundColor: '#1F9CEF', height:80,padding:0,margin:0,marginLeft:16,marginRight:16,},
      tabBarActiveTintColor: '#1F9CEF',
      tabBarInactiveTintColor: 'white',
      tabBarLabelStyle: {
        fontSize:16,
        fontFamily: FONTS.SemiBold,
        width:120,
      },
      tabBarIndicatorStyle: { backgroundColor: 'white', height: '60%',borderRadius:25 ,marginBottom:15 },
      tabBarPressOpacity:1,
    }}>
      <Tab.Screen name="Default" component={DefaultScreen} style={GlobalStyles.tabScreens} tabBarInactiveTintColor='red' />
      <Tab.Screen name="Delivery" component={DeliveryScreen} style={GlobalStyles.tabScreens} />
      <Tab.Screen name="Outlets" component={OutletsScreen} style={GlobalStyles.tabScreens} />
    </Tab.Navigator>
  );
};

export default AppSettingsScreen;