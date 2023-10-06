
import React,{useState} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import GlobalStyles from '../../../assets/css/styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const NotificationCard = (props) => {
    
  return (
    <View style={[props.style]}> 
          <View style={GlobalStyles.notificationImageContainer}>
          <Image style={{ width: 40, height: 40,  marginRight:15}} 
          source={props.ImageSrc}
           />
          
          </View>
          <View style={GlobalStyles.notificationTextContainer}>
            <View>
              <Text style={GlobalStyles.notificationTitle}>{props.Title}</Text>
              {
                (props.Bell)?<Icon name="bell" size={21} color="red" style={GlobalStyles.notificationBell} />:null
              }
              
            </View>
            <Text style={GlobalStyles.notificationText}>{props.Details}</Text>
            <Text style={GlobalStyles.notificationDate}>{props.DateValue}</Text>
          </View>
      </View>
  );
};

export default NotificationCard;