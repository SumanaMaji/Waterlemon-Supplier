
import React from 'react';
import {View, Text, ScrollView,Image} from 'react-native';
import GlobalStyles from '../../../assets/css/styles';
const OutletsScreen = () => {
  return (
    <ScrollView>
    <View style={GlobalStyles.defaultScreenContainer}>
        <View style={GlobalStyles.notificationOddContainer}>
        <View style={GlobalStyles.notificationImageContainer}>
          <Image style={{ width: 40, height: 40,  marginRight:15}} 
          source={require('../../../assets/images/McDonalds.png')}
           />  
          </View>
          <View style={GlobalStyles.invoiceTwoSectionRow}>
                <View style={{
                  marginLeft:10
                }}>
                  <Text style={GlobalStyles.invoiceTitle}>Unibic Dubai International</Text>
                </View>
                <View style={GlobalStyles.outletButton}>
                    <Text style={GlobalStyles.outletButtonText}>Edit</Text>
                </View>
          </View>
        </View>
    </View>
    </ScrollView>
  );
};

export default OutletsScreen;