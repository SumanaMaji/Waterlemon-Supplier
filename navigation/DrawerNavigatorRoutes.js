
import React from 'react';
import {Image,StyleSheet,TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DashboardScreen from '../src/screens/DashboardScreen';
import CustomSidebarMenu from './CustomSidebarMenu';
import NavigationDrawerHeader from './NavigationDrawerHeader';
import {COLORS} from '../src/constant/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Badge} from 'react-native-elements';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DashboardScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="DashboardScreen">
      <Stack.Screen
        name="DashboardScreen"
        component={DashboardScreen}
        options={{
          title: 'DashboardScreen', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() =>navigation.navigate('NotificationScreen')}>
              <Ionicons name="notifications-outline" size={26} 
            style={{marginRight:10,color:'white'}}
          />
          <Badge
              status="error" 
              containerStyle={{ position: 'absolute', top:0, right:14, }}
              badgeStyle={{width: 10,height: 10}}
            />
          </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: COLORS.blue, //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

const DrawerNavigatorRoutes = (props) => {
  return (
    <Drawer.Navigator
    // drawerContentOptions={{
    //   activeTintColor: COLORS.loginTextInput,
    //   color: COLORS.loginTextInput,
    //   itemStyle: {marginVertical: 5, color: 'white'},
    //   drawerActiveBackgroundColor: COLORS.white,
    //   labelStyle: {
    //     color: COLORS.loginTextInput,
    //   },
    // }}
      screenOptions={{headerShown: false,
        drawerActiveBackgroundColor: COLORS.white,
        drawerActiveTintColor: COLORS.loginTextInput,
        drawerStyle: {
          width: 350,
        },
        labelStyle: {
          color: COLORS.loginTextInput,
        },
        itemStyle: {marginVertical: 5, color: 'white'},
      }}
      drawerContent={CustomSidebarMenu}>
      <Drawer.Screen
        name="DashboardScreenStack"
        options={{drawerLabel: 'Dashboard',
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="grid-outline" size={18} 
            style={[styles.icon, { tintColor: tintColor }]}
          />
        ),}}
        component={DashboardScreenStack}
      />
    </Drawer.Navigator>
  );
};
const styles = StyleSheet.create({
  icon: {
    alignSelf: "center",
    marginLeft:30,
    marginRight:-20,
  },
});
export default DrawerNavigatorRoutes;