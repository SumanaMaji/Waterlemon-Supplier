import React, { useState, useRef, ReactNode } from 'react';
import {
  TextInput,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import GlobalStyles from '../../../assets/css/styles';
import * as Urls from '../../constant/Urls';
import { COLORS } from '../../constant/Colors';
import TextBox from '../../components/form/TextBox';

const LoginScreen = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errortext, setErrortext] = useState('');
  const emailInput = useRef();
  const passwordInput = useRef();
  const handleSubmitPress = () => {
    navigation.replace('DrawerNavigationRoutes');
    //navigation.navigate('DashboardScreen');
    console.log(email + '-->' + password);
    if (!email) {
      emailInput.current.validateEmail()
    }
    if (!password) {
      passwordInput.current.validateEmail()
    }
    let dataToSend = {
      email: email,
      password: password,
    };
    fetch(Urls.login, {
      method: 'POST',
      body: (dataToSend),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(JSON.stringify(dataToSend));
        if (responseJson.success == 0) {
          let data = responseJson;
          console.log(data);
        } else {
          setErrortext('Please check your user name or password');
        }
      })
      .catch(error => {
        setErrortext(
          'An error occured, Please check your internet and try again later.',
        );
        console.error('rrr->' + error);
      });
  }
  const gotToSignup = () => {
    navigation.navigate('SignupScreen');
    //console.log(navigation)
  }
  const goToForgotpassword = () => {
    navigation.navigate('ForgotPasswordScreen');
  }
  return (
    <ScrollView style={GlobalStyles.scrollViewBG}>
      <View style={GlobalStyles.mainContainer}>
        <View style={GlobalStyles.logo}>
          <Image source={require('../../../assets/images/logo/Layer1.png')} />
        </View>
        <View style={GlobalStyles.container}>
          <Text style={GlobalStyles.titleStyle}>
            Login
          </Text>
          <Text style={GlobalStyles.paragraphStyle}>
            Please enter the details below to continue
          </Text>
          <TextBox
            label="Email or Mobile No"
            type="email"
            isRequired={true}
            ref={emailInput}
            onChangeText={setEmail}
            className='inputViewTextIcon'
          />
          <TextBox
            label="Password"
            type="password"
            isRequired={true}
            secureTextEntry={true}
            ref={passwordInput}
            onChangeText={setPassword}
          />
          <View>
            <TouchableOpacity onPress={() => goToForgotpassword()}>
              <Text style={GlobalStyles.forgot_button}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={GlobalStyles.signinPasswordInputView}>
          <TouchableOpacity
            style={GlobalStyles.loginBtn}
            onPress={() => handleSubmitPress()}>
            <Text style={GlobalStyles.loginText}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={GlobalStyles.labelSignin}>Or sign in with</Text>
          <View style={GlobalStyles.imageIcon}>
            <View style={GlobalStyles.imageBox}>
              <Image
                source={require('../../../assets/images/icons/google-color.png')}
                style={GlobalStyles.logoIcon}
              />
            </View>
            <View style={GlobalStyles.imageBox}>
              <Image
                source={require('../../../assets/images/icons/Icon-awesome-apple.png')}
                style={GlobalStyles.logoIcon}
              />
            </View>
          </View>
          <View style={GlobalStyles.newSignup}>
            <Text style={GlobalStyles.account}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => gotToSignup()}>
              <Text style={GlobalStyles.new_sign}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  errorControl: {
    borderWidth: 1,
    borderColor: 'red',
    display: 'flex',
    flexDirection: 'row',
    height: 45,
    width: '100%',
    paddingTop: 5,
    borderRadius: 5,
  },
  // inputViewTextIcon: {
  //   display: 'flex',
  //   flexDirection: 'row',
  //   width: '100%',
  //   height: 45,
  //   borderWidth: 1,
  //   borderColor: COLORS.textInputBorder,
  //   borderRadius: 5,
  //   marginBottom: 4,
  // },
  errorIcon: {
    marginLeft: 6,
    right: 0,
    marginRight: 0,
    paddingRight: 0,
    height: 20,
    width: 20,
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 5,
  },
});
