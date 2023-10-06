
import React from 'react';
import {View, Text, Button} from 'react-native';
import GlobalStyles from '../../../assets/css/styles';
const MarkAllReadModal = () => {
  const markAllNotificationRead = () => {
    alert('dee')
}
  return (
    <Button title='dee'  onPress={()=>markAllNotificationRead()}/>
  );
};

export default MarkAllReadModal;