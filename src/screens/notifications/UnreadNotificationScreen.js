
import React,{useState} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import GlobalStyles from '../../../assets/css/styles';
import NotificationCard from '../../components/notification/NotificationCard';


const UnreadNotificationScreen = () => {
   

  return (
    <ScrollView>
    <View style={GlobalStyles.defaultScreenContainer}>
      <Text style={GlobalStyles.notificationDay}>TODAY</Text>
      <NotificationCard 
          style={GlobalStyles.notificationOddContainer}
          ImageSrc= {require('../../../assets/images/McDonalds.png')}
          Title= "Order Accepted - Uni Food - PO-004798"
          Bell={true}
          Details="We are happy to inform you that Uni Food has accepted your Purchase Order # PO-004798 placed on 2nd, April"
          DateValue="11-May-2022" 
      />
      <NotificationCard 
          style={GlobalStyles.notificationOddContainer}
          ImageSrc= {require('../../../assets/images/McDonalds.png')}
          Title= "Order Accepted - Uni Food - PO-004798"
          Bell={true}
          Details="We are happy to inform you that Uni Food has accepted your Purchase Order # PO-004798 placed on 2nd, April"
          DateValue="11-May-2022" 
      />
      <NotificationCard 
          style={GlobalStyles.notificationOddContainer}
          ImageSrc= {require('../../../assets/images/McDonalds.png')}
          Title= "Order Accepted - Uni Food - PO-004798"
          Bell={true}
          Details="We are happy to inform you that Uni Food has accepted your Purchase Order # PO-004798 placed on 2nd, April"
          DateValue="11-May-2022" 
      />
      <Text style={GlobalStyles.notificationDay}>YESTERDAY</Text>
      <NotificationCard 
          style={GlobalStyles.notificationOddContainer}
          ImageSrc= {require('../../../assets/images/McDonalds.png')}
          Title= "Order Accepted - Uni Food - PO-004798"
          Bell={true}
          Details="We are happy to inform you that Uni Food has accepted your Purchase Order # PO-004798 placed on 2nd, April"
          DateValue="11-May-2022" 
      />
      <NotificationCard 
          style={GlobalStyles.notificationOddContainer}
          ImageSrc= {require('../../../assets/images/McDonalds.png')}
          Title= "Order Accepted - Uni Food - PO-004798"
          Bell={true}
          Details="We are happy to inform you that Uni Food has accepted your Purchase Order # PO-004798 placed on 2nd, April"
          DateValue="11-May-2022" 
      />
      <NotificationCard 
          style={GlobalStyles.notificationOddContainer}
          ImageSrc= {require('../../../assets/images/McDonalds.png')}
          Title= "Order Accepted - Uni Food - PO-004798"
          Bell={true}
          Details="We are happy to inform you that Uni Food has accepted your Purchase Order # PO-004798 placed on 2nd, April"
          DateValue="11-May-2022" 
      />
    </View> 
    </ScrollView>
  );
};

export default UnreadNotificationScreen;