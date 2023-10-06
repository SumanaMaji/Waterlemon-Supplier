
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import GlobalStyles from '../../../assets/css/styles';
import {COLORS} from '../../../src/constant/Colors';
import {FONTS} from '../../../src/constant/Font';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AllNotificationScreen from './AllNotificationScreen';
import UnreadNotificationScreen from './UnreadNotificationScreen';
import MarkAllReadModal from './MarkAllReadModal';
const Tab = createMaterialTopTabNavigator();
const MarkAllRead = () =>{
    return null;
}
const NotificationScreen = ({navigation}) => {

  return (
    <Tab.Navigator style={{backgroundColor: '#1F9CEF',width:'100%',}}
    screenOptions={{
      tabBarItemStyle: {margin:20, marginLeft:0,flex:1,marginRight:16,},
      tabBarStyle: { backgroundColor: '#1F9CEF', height:80,padding:0,margin:0,marginLeft:16,marginRight:16,lineHeight:20,},
      tabBarActiveTintColor: '#1F9CEF',
      tabBarInactiveTintColor: 'white',
      tabBarIndicatorStyle: { backgroundColor: 'white', height: '55%',borderRadius:25 ,marginBottom:15, width:100, },
      
    }}
    
    >
      <Tab.Screen name="ALL" component={AllNotificationScreen} style={GlobalStyles.tabScreens} tabBarInactiveTintColor='red'
        options={{
          tabBarLabelStyle: {fontSize:14,fontFamily: FONTS.SemiBold,marginLeft:-10, }
        }}
      />
      <Tab.Screen name="UNREAD" component={UnreadNotificationScreen} style={GlobalStyles.tabScreens}
        options={{
          tabBarLabelStyle: {fontSize:14,fontFamily: FONTS.SemiBold,marginLeft:-13, }
        }}
      />
      <Tab.Screen name="MARK" component={MarkAllRead} onPress={()=> console.log('sd')}
         options={{
            tabBarLabel: 'MARK ALL AS READ',
            tabBarLabelStyle: {fontSize:14,width:'100%',
              fontFamily: FONTS.SemiBold,textDecorationLine:'underline',lineHeight:20},
              tabBarIndicatorStyle:{borderRadius:0,backgroundColor:'none'},
              tabBarActiveTintColor: '#FFF',
            //tabBarButton: (props) => <TouchableOpacity {...props} onPress={() => console.log('wa')}><Text>Touch</Text></TouchableOpacity>,
          }}
      />
    </Tab.Navigator>
  );
};

export default NotificationScreen;