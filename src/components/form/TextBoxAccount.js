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
import IconEye from 'react-native-vector-icons/Feather';
import { COLORS } from '../../constant/Colors';

const TextBoxAccount = (props) => {

  const [value, setValue] = useState('');
  const [errorText, setErrorText] = useState('');
  const textInput = useRef();
  const validateEmail = () => {
    if (props.type == 'email') {
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
      if (!value) {
        setErrorText(<Text style={{ color: 'red' }}>Please enter email address</Text>);
      } else if (reg.test(value) === false) {
        setErrorText(<Text style={{ color: 'red' }}>The email address must include @</Text>);
      } else {
        setErrorText('')
      }
    }
    else {
      if (props.isRequired) {
        if (!value) {
          setErrorText(<Text style={{ color: 'red' }}>Please enter {props.label.toLowerCase()}</Text>);
        } else {
          setErrorText('')
        }
      }
      else {
        setErrorText('')
      }
    }
  }

  const handleChange = (val) => {
    if (props.type == 'email') {
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
      if (!val) {
        setErrorText(<Text style={{ color: 'red' }}>Please enter email address</Text>);
      } else if (reg.test(val) === false) {
        setErrorText(<Text style={{ color: 'red' }}>The email address must include @</Text>);
      } else {
        setErrorText('')
        setValue(val)
      }
    }
    else {
      if (props.isRequired) {
        if (!val) {
          setErrorText(<Text style={{ color: 'red' }}>Please enter {props.label.toLowerCase()}</Text>);
        } else {
          setErrorText('')
          setValue(val)
        }
      }
      else {
        setErrorText('')
        setValue(val)
      }
    }

  }
  return (
    <View style={GlobalStyles.inputView}>
      <Text style={GlobalStyles.defaultScreenLabel}>{props.label}{(props.isRequired) ? '*' : null}</Text>
      <View style={`${errorText}` ? styles.errorControl : styles.inputViewTextIcon}>
        {
          (props.readOnly !== undefined && props.readOnly == true) ?
            <TextInput
              style={styles.disableText}
              editable={false}
              contextMenuHidden={true}
              value={props.value}
            />
            :
            (props.type == 'number') ?
              (<TextInput
                style={{
                  ...GlobalStyles.textInput,
                  width: '90%',
                  color: COLORS.loginText,
                  backgroundColor: COLORS.white,
                }}
                onChangeText={(event) => handleChange(event)}
                onBlur={validateEmail}
                keyboardType={'numeric'}
              />
              ) :
              <TextInput
                style={{
                  ...GlobalStyles.textInput,
                  width: '90%',
                  color: COLORS.loginText,
                  backgroundColor: COLORS.white,
                }}
                onChangeText={(event) => handleChange(event)}
                onBlur={validateEmail}
              />
        }

        {`${errorText}` ?
          <View>
            <Image source={require('../../../assets/images/Iconly-Light-Outline-Info-Square.png')} style={styles.errorIcon} />
          </View>
          : ''}
      </View>
      <View style={GlobalStyles.mrgnBtn}>
        {
          (errorText) ?
            <View>
              <Text>{errorText}</Text>
            </View>
            : null
        }
      </View>
    </View>
  );
};
export default TextBoxAccount;

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
    backgroundColor: 'white',
  },
  inputViewTextIcon: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 45,
    backgroundColor: 'white',
    borderColor: '#DCDCDC',
    borderWidth: 1,
    marginBottom: 4,
  },
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
  disableText: {
    width: '100%',
    padding: 15,
    paddingLeft: 12,
    color: COLORS.loginText,
    backgroundColor: '#F6F5F5',
    borderRadius: 5,
  }
});


