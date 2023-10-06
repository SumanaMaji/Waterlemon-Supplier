import React, {useState, useEffect, useReducer, useCallback, useRef} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import GlobalStyles from '../../../assets/css/styles';
import TextBox from '../../components/form/TextBox';

const ForgotPasswordScreen = ({navigation}) => {
  
  const [email, setEmail] = useState('');
  const emailInput = useRef();

  const handleSubmitPress = () => {
    console.log('handle press code goes here')
    if (!email) {
      emailInput.current.validateEmail()
    }
  }

  return ( 
    <ScrollView  style={GlobalStyles.scrollViewBG}>
      
  <View style={GlobalStyles.mainContainer}>
    <View style={GlobalStyles.logo}>
       <Image source={require('../../../assets/images/logo/Layer1.png')}/>
    </View>
        <View style={GlobalStyles.signupInputContainer}>   
        
           <TextBox
            label="Email or Mobile No"
            type="email"
            isRequired={true}
            ref={emailInput}
            onChangeText={setEmail}
          />
  
      </View>
      <View style={GlobalStyles.signinPasswordInputView}>
        <TouchableOpacity
          style={GlobalStyles.loginBtn}
          onPress={() => handleSubmitPress()}>
          <Text style={GlobalStyles.loginText}>Sign In</Text>
        </TouchableOpacity>
      </View>
  </View>
  </ScrollView>
  );
};

export default ForgotPasswordScreen;


