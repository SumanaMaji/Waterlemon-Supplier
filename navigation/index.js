import * as React from 'react';
import {Image,StyleSheet,View,Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../src/screens/login/LoginScreen';
import SignupScreen from '../src/screens/login/SignupScreen';
import SplashScreen from '../src/screens/splash/SplashScreen';
import InvoiceScreen from '../src/screens/invoice/InvoiceScreen';
import AppSettingsScreen from '../src/screens/settings/AppSettingsScreen';
import NotificationScreen from '../src/screens/notifications/NotificationScreen';
import ForgotPasswordScreen from '../src/screens/login/ForgotPasswordScreen';
import DrawerNavigationRoutes from './DrawerNavigatorRoutes';
import { COLORS } from '../src/constant/Colors';
import { FONTS } from '../src/constant/Font';
const Stack = createStackNavigator();
//const Drawer = createDrawerNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" >
         <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignupScreen"
        component={SignupScreen}
        options={{
          title: 'Sign Up', 
          headerBackTitleVisible:false,
        }}
      />
        <Stack.Screen 
          name="ForgotPasswordScreen" 
          component={ForgotPasswordScreen} 
          options={{title: 'Reset Password',headerBackTitleVisible:false}}
        />
        <Stack.Screen 
          name="InvoiceScreen"
          component={InvoiceScreen}
          options={{headerBackTitleVisible:false, headerStyle:{backgroundColor: '#1F9CEF'},headerTintColor:'white',
          headerShadowVisible:false,
          headerTitleStyle: {color:'white'},
          headerTitle: () => (
            <View style={{width:300,flexDirection:'row'}}>
                <Text style={{color:COLORS.white,fontSize:16,fontFamily:FONTS.SemiBold,paddingTop:7}}>Invoices</Text>
            </View>
          ),
        }}
          />
        <Stack.Screen 
          name="AppSettingsScreen"
          component={AppSettingsScreen}
          options={{headerBackTitleVisible:false, headerStyle:{backgroundColor: '#1F9CEF'},headerTintColor:'white',
          headerShadowVisible:false,
          headerTitleStyle: {color:'white'},
          //title:'Unibic Dubai International',
          headerTitle: () => (
            <View style={{width:300,flexDirection:'row'}}>
                <Image style={{ width: 35, height: 35,  marginRight:15}} source={require("../assets/images/logo/watermelon_logo.png")} />
                <Text style={{color:COLORS.white,fontSize:16,fontFamily:FONTS.SemiBold,paddingTop:7}}>Unibic Dubai International</Text>
            </View>
          ),
        }}
          />
          <Stack.Screen 
            name="NotificationScreen"
            component={NotificationScreen}
            options={{headerBackTitleVisible:false, headerStyle:{backgroundColor: '#1F9CEF'},headerTintColor:'white',
            headerShadowVisible:false,
            headerTitleStyle: {color:'white'},
            headerTitle: () => (
              <View style={{width:300,flexDirection:'row'}}>
                  <Text style={{color:COLORS.white,fontSize:16,fontFamily:FONTS.SemiBold,paddingTop:7}}>Notifications</Text>
              </View>
            ),
          }}
            />
        <Stack.Screen
          name="DrawerNavigationRoutes"
          component={DrawerNavigationRoutes}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
};

export default Routes;
