
import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import GlobalStyles from '../../assets/css/styles';
import {COLORS} from '../../src/constant/Colors';
import {FONTS} from '../../src/constant/Font';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardContentScreen from '../screens/DashboardContentScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';
const Tab = createBottomTabNavigator();


const DashboardScreen = () => {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: COLORS.blue,
          tabBarInactiveTintColor: COLORS.textInputBorder,
          tabBarLabelStyle: {
            fontSize:14,
            fontFamily: FONTS.SemiBold,
          }
        })}
    >
        <Tab.Screen 
              name="Dashboard" 
              component={DashboardContentScreen} 
              options={{headerShown: false, tabBarIcon: (tabInfo) => {
                return (
                  <Icon
                    name="th-large"
                    size={20}
                    color={tabInfo.focused ? COLORS.blue : COLORS.textInputBorder}
                  />
                );
              }
              }}
         />
        <Tab.Screen 
              name="Orders" 
              component={DashboardContentScreen} 
              options={{headerShown: false, tabBarIcon: (tabInfo) => {
                return (
                  <Icon
                    name="dice-d6"
                    size={21}
                    color={tabInfo.focused ? COLORS.blue : COLORS.textInputBorder}
                  />
                );
              }}}
        />
        <Tab.Screen 
              name="Catalogue" 
              component={DashboardContentScreen} 
              options={{headerShown: false, tabBarIcon: (tabInfo) => {
                return (
                  <Icon
                    name="shopping-cart"
                    size={21}
                    color={tabInfo.focused ? COLORS.blue : COLORS.textInputBorder}
                  />
                );
              }}}
        />
        <Tab.Screen 
              name="Payment" 
              component={DashboardContentScreen} 
              options={{headerShown: false, tabBarIcon: (tabInfo) => {
                return (
                  <Icon
                    name="credit-card"
                    size={21}
                    color={tabInfo.focused ? COLORS.blue : COLORS.textInputBorder}
                  />
                );
              }}}
        />
        <Tab.Screen 
              name="Account" 
              component={DashboardContentScreen} 
              options={{headerShown: false, tabBarIcon: (tabInfo) => {
                return (
                  <Icon
                    name="user-circle"
                    size={21}
                    color={tabInfo.focused ? COLORS.blue : COLORS.textInputBorder}
                  />
                );
              }}}
        />
      </Tab.Navigator>
  );
};

export default DashboardScreen;