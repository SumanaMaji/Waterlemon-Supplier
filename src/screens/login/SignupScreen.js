import React, {useState, useEffect, useReducer, useCallback, useRef} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
  ProgressBarAndroid,
  ProgressViewIOS,
  Platform
} from 'react-native';
import { SvgUri } from 'react-native-svg';
import GlobalStyles from '../../../assets/css/styles';

import { Form, FormItem, Picker, } from 'react-native-form-component';
import * as Urls from '../../constant/Urls';
import Dropdown from '../../components/form/Dropdown';
import TextBox from '../../components/form/TextBox';
import Textarea from '../../components/form/Textarea';
import PercentageBar from '../../components/form/PercentageBar';
// Import Document Picker
import DocumentPicker from 'react-native-document-picker';
import RNFS from 'react-native-fs';
import * as Progress from 'react-native-progress';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import ImageProgress from 'react-native-image-progress';

const SignupScreen = props => {

  const [company, setCompany] = useState('');
  const [trn, setTRN] = useState('');
  const [email, setEmail] = useState('');
  const [regNo, setRegNo] = useState('');
  const [contactperson, setContactperson] = useState('');
  const [password, setPassword] = useState('');
  
  const [countrycode, setCountrycode] = useState('');
  const [country, setCountry] = useState('');
  const [phNo, setPhNo] = useState('');
  const [address, setAddress] = useState('');
  const [trncertificate, setTrncertificate] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorPassword, setPasswordText] = useState('');
  const [errorText, setErrorText] = useState('');
  const [error, setError] = useState('');
  const [singleFile, setSingleFile] = useState('');
  const [imageURI, setImageURI] = useState('');
  const [pdfURI, setPDFURI] = useState('');
  const [pdfFile, setPdfFile] = useState('');
  const [percentage, setPercentage] = useState(0);
  

  //const icon = 'https://svgshare.com/i/pSH.svg';
  const countryData = [
    { label: 'One', value: '1' },
    { label: 'Two', value: '2' },
    { label: 'Three', value: '3' },
    { label: 'Four', value: '4' },
    { label: 'Five', value: '5' },
  ];
  const [selected, setSelected] = useState(undefined);
  const conpanyNameInput = useRef();
  const regNoInput = useRef();
  const trnNumberInput = useRef();
  const emailInput = useRef();
  const contact = useRef();
  const addressValue = useRef();
  const countryCodeInput = useRef();
  const mobileNo = useRef();
  const trnCertificate = useRef();
  const passwordInput = useRef();
  const confirmPasswordInput = useRef();
  const uploadRef = React.useRef();
  const statusRef = React.useRef();
  const loadTotalRef = React.useRef();
  const progressRef = React.useRef();

  const selectOneFile = async (type) => {
    console.log("select file type--"+type);
    //Opening Document Picker for selection of one file
    try {
      if(type == 'image'){
        const res = await DocumentPicker.pick({
          type: [DocumentPicker.types.images],
          //There can me more options as well
          // DocumentPicker.types.allFiles
          // DocumentPicker.types.images
          // DocumentPicker.types.plainText
          // DocumentPicker.types.audio
          // DocumentPicker.types.pdf
        });
        setImageURI(res[0].uri);
        console.log('res : ' + JSON.stringify(res));
      console.log('URI : ' + res[0].uri);
      console.log('Type : ' + res[0].type);
      console.log('File Name : ' + res[0].name);
      console.log('File Size : ' + res[0].size);
      
      }else{
        const res = await DocumentPicker.pick({
          type: [DocumentPicker.types.pdf],
          //There can me more options as well
          // DocumentPicker.types.allFiles
          // DocumentPicker.types.images
          // DocumentPicker.types.plainText
          // DocumentPicker.types.audio
          // DocumentPicker.types.pdf
        });
        setPDFURI(res[0].uri)
        setPdfFile(res[0].name);
        console.log('res : ' + JSON.stringify(res));
      console.log('URI : ' + res[0].uri);
      console.log('Type : ' + res[0].type);
      console.log('File Name : ' + res[0].name);
      console.log('File Size : ' + res[0].size);
      }
      
      //Printing the log realted to the file
      
      //Setting the state to show single file attributes

      // const file = uploadRef.current.files[0];
      // setFile(URL.createObjectURL(file));
      // var formData = new FormData();
      // formData.append("image", file);
      // var xhr = new XMLHttpRequest();
      // xhr.upload.addEventListener("progress", ProgressHandler, false);
      // xhr.addEventListener("load", SuccessHandler, false);
      // xhr.addEventListener("error", ErrorHandler, false);
      // xhr.addEventListener("abort", AbortHandler, false);
      // xhr.open("POST", "fileupload.php");
      // xhr.send(formData);

      //setSingleFile(res[0]);
      
      // alert('File: Data--' + JSON.stringify(res));
      // alert('File: ' + JSON.stringify(singleFile));
    } catch (err) {
      //Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        //If user canceled the document selection
        alert('Canceled from single doc picker');
      } else {
        //For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  const handleSubmitPress = () => {
    console.log(email + '-->' + password);
    if (!company) {
      conpanyNameInput.current.validateEmail()
    }
    if (!password) {
      passwordInput.current.validateEmail()
    }   
    if (!regNo) {
      regNoInput.current.validateEmail()
    }
    if (!trn) {
      trnNumberInput.current.validateEmail()
    }

    if (!email) {
      emailInput.current.validateEmail()
    }
    if (!phNo) {
      mobileNo.current.validateEmail()
    }   
    if (!contactperson) {
      contact.current.validateEmail()
    }
    if (!country) {
      countryCodeInput.current.validateDropdown()
    }

    let dataToSend = {
      company_name : "Watermelon_deepak1",
      firstname : "POS",
      lastname : "WM",
      email : "deepak1@gmail.com",
      password : "1234",
      cpassword: "1234",
      countrycode : "971",
      mobile_no : "96963697",
      address: "Dubai",
      country : "UAE",
      city : "Dubai"
      }
    fetch(Urls.register, {
      method: 'POST',
      body: JSON.stringify(dataToSend),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(JSON.stringify(dataToSend));
        console.log(responseJson);
        if (responseJson.success == 1) {
          let data = responseJson;
          console.log(data);
        } else {
          setError('Please check your user name or password');
        }
      })
      .catch(error => {
        setError(
          'An error occured, Please check your internet and try again later.',
        );
        console.error('rrr->'+error);
      });
    //console.log('handle press code goes here')
  }
  const checkPassword = (pass) => {
    //let confirmPass = event.target.value;
    
    if (typeof pass !== "undefined") 
    {
      if (pass == '') {
        setErrorText(<Text style={{ color: 'red' }}>Please enter password</Text>)
      }
      else if (pass) 
      {    
        const uppercaseRegExp   = /(?=.*?[A-Z])/;
        const lowercaseRegExp   = /(?=.*?[a-z])/;
        const digitsRegExp      = /(?=.*?[0-9])/;
        const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
        const minLengthRegExp   = /.{8,}/;

        const passwordLength =      pass.length;
        const uppercasePassword =   uppercaseRegExp.test(pass);
        const lowercasePassword =   lowercaseRegExp.test(pass);
        const digitsPassword =      digitsRegExp.test(pass);
        const specialCharPassword = specialCharRegExp.test(pass);
        const minLengthPassword =   minLengthRegExp.test(pass);

        let errMsg = "";
          if(passwordLength === 0){
                errMsg="Password is empty";
          }else if(!uppercasePassword){
                errMsg="At least one Uppercase";
          }else if(!lowercasePassword){
                errMsg="At least one Lowercase";
          }else if(!digitsPassword){
                errMsg="At least one digit";
          }else if(!specialCharPassword){
                errMsg="At least one Special Characters";
          }else if(!minLengthPassword){
                errMsg="At least minumum 8 characters";
          }else{
            errMsg="";
          }
          setPasswordText(<Text style={{ color: 'red' }}>{errMsg}</Text>);
          }
      else
      {
        setPasswordText('')
        setPassword(pass);
      }
    }
  }
  const matchPassword = (confirmPass) => {
    //let confirmPass = event.target.value; 
    if (typeof password !== "undefined" && typeof confirmPass !== "undefined") 
    {
      if (!confirmPass) {
        setErrorText(<Text style={{ color: 'red' }}>Please enter confirm password</Text>)
      }
      if (password != confirmPass) {
        setErrorText(<Text style={{ color: 'red' }}>Confirm password does not match.</Text>)
      }
      else
      {
        setErrorText('')
        setConfirmPassword(confirmPass);
      }
    }
  }
  const handleFileDelete =(type) => {
    if(type == 'image'){
      setImageURI('')
    }
    else{
      setPDFURI('');
    }
  };
  const UploadFile = () => {
    const file = uploadRef.current.files[0];
    setFile(URL.createObjectURL(file));
    var formData = new FormData();
    formData.append("image", file);
    var xhr = new XMLHttpRequest();
    xhr.upload.addEventListener("progress", ProgressHandler, false);
    xhr.addEventListener("load", SuccessHandler, false);
    xhr.addEventListener("error", ErrorHandler, false);
    xhr.addEventListener("abort", AbortHandler, false);
    xhr.open("POST", "fileupload.php");
    xhr.send(formData);
  };

  const ProgressHandler = (e) => {
    loadTotalRef.current.innerHTML = `uploaded ${e.loaded} bytes of ${e.total}`;
    var percent = (e.loaded / e.total) * 100;
    progressRef.current.value = Math.round(percent);
    statusRef.current.innerHTML = Math.round(percent) + "% uploaded...";
  };

  const SuccessHandler = (e) => {
    statusRef.current.innerHTML = e.target.responseText;
    progressRef.current.value = 0;
  };
  const ErrorHandler = () => {
    statusRef.current.innerHTML = "upload failed!!";
  };
  const AbortHandler = () => {
    statusRef.current.innerHTML = "upload aborted!!";
  };
  const uploadProgress = (progressEvent) => {
    var Percentage = Math.round(
      (progressEvent.loaded / progressEvent.total) * 100,
    );
    setPercentage(Percentage);
    console.log(progressEvent.loaded, progressEvent.total);
    console.log(
      'Upload progress: ' +
        Math.round((progressEvent.loaded / progressEvent.total) * 100) +
        '%',
    );
  };
  return ( 
    <ScrollView style={GlobalStyles.scrollViewBG}>
    <View style={GlobalStyles.signupContainer}>
    {/* <View style={GlobalStyles.signupTitle}>
      <Text style={GlobalStyles.signupTitleStyle}>
        Sign Up
      </Text> 
    </View> */}
    <Text style={GlobalStyles.signupParagraph}>
      * Mandatory Fields are required
    </Text>
    <View style={GlobalStyles.backgrey}>
      <View style={GlobalStyles.signupInputContainer}>  
      <TextBox
            label="Company Name"
            type="text"
            isRequired={true}
            ref={conpanyNameInput}
            onChangeText={setCompany}
          />
          <TextBox
            label="TRN Number"
            type="number"
            isRequired={true}
            ref={trnNumberInput}
            onChangeText={setTRN}
          />
          <TextBox
            label="Registration No"
            type="text"
            isRequired={true}
            ref={regNoInput}
            onChangeText={setRegNo}
          />
          <TextBox
            label="Contact Person Name"
            type="text"
            isRequired={true}
            ref={contact}
            onChangeText={setContactPerson}
          />
           <TextBox
            label="Email Id"
            type="email"
            isRequired={true}
            ref={emailInput}
            onChangeText={setEmail}
          />
      </View>
    </View>
    <View style={GlobalStyles.backgrey}>
      <View style={GlobalStyles.signupInputContainer} > 
        <View style={GlobalStyles.imageIcon}>
        <View style={GlobalStyles.countryCodeSection}>
        <Text style={GlobalStyles.signupLabel}>Country Code*</Text>
          <View style={GlobalStyles.dropdownContainer}>
          <Dropdown label="Select Phone" isRequired={true} data={countryData} ref={countryCodeInput} onSelect={setCountry} />
          </View>
        </View> 
        <View style={GlobalStyles.mobileNoSection}>
          <TextBox
            label="Mobile No"
            type="number"
            isRequired={true}
            ref={mobileNo}
            onChangeText={setPhNo}
          />
        </View>
        </View>
        <View style={[GlobalStyles.inputView, GlobalStyles.inputTextareaSection]}>
          <Textarea
            label="Address"
            type="textarea"
            ref={addressValue}
            onChangeText={setAddress}
          />
        </View> 
        </View>
    </View>
    <View style={GlobalStyles.backgrey}>
      <View style={GlobalStyles.signupInputContainer}> 
     <View style={GlobalStyles.inputView}>
     <TextBox
            label="Password"
            type="password"
            isRequired={true}
            secureTextEntry={true}
            ref={passwordInput}
            //onChangeText={setPassword}
            onChangeText={(event) => checkPassword(event)}
          />
     </View>
     <View>
            {
              (errorPassword) ?
                <Text>{errorPassword}</Text>
              : null
            }
      </View> 
     <View style={GlobalStyles.inputView}>
     <TextBox
            label="Confirm Password"
            type="password"
            isRequired={true}
            secureTextEntry={true}
            ref={confirmPasswordInput}
            //onChangeText={checkPassword}
            onChangeText={(event) => matchPassword(event)}
          />
            {
              (errorText) ?
                <Text>{errorText}</Text>
              : null
            }
     </View>         
      </View>
    </View> 
  <View style={GlobalStyles.backgrey}>
  <View style={GlobalStyles.signupInputContainer}>
    <View style={GlobalStyles.inputView}>
    <Text style={GlobalStyles.signupLabel}>Upload Trade License</Text>
      <View style={GlobalStyles.uploadContainer}>
      {imageURI ?
          <View style={{flex:1}}>
             <TouchableOpacity onPress={() => handleFileDelete('image')}>
                    <View style={styles.deleteIcon}>
                      <MaterialCommunityIcons  size={35} color="red" name={'delete-circle-outline'} />
                    </View>
                </TouchableOpacity>
            <Image 
              source={{uri:imageURI}} 
              style={{height:80,width:150,  justifyContent: 'flex-start',
              alignSelf:'flex-start',}}/>
             
            </View>         
            :
            <TouchableOpacity
              activeOpacity={0.5}
              //style={styles.buttonStyle}
              onPress={() => selectOneFile('image')}
              ref={uploadRef} onChange={UploadFile} 
              >
              {/*Single file selection button*/}
              <SvgUri 
              uri={"https://svgshare.com/i/pSH.svg"} height="35%" width="50%" style={GlobalStyles.iconStyle}/>
            <Text style={GlobalStyles.uploadContainerFirstText}>Choose file here</Text>
            <Text style={GlobalStyles.uploadContainerBottomText}>Tap here to upload your Trade License</Text>
            </TouchableOpacity>
}     
      </View>
  </View>
  <ImageProgress 
  source={{ uri: imageURI}} 
  indicator={Progress.bar}
  // barColor="red"
  // trackColor="black"
  //indicator={Progress.pie}
  //indicator={Progress.circle}
  indicatorProps={{
    size: 80,
    borderWidth: 0,
    color: 'rgba(150, 150, 150, 1)',
    unfilledColor: 'rgba(200, 200, 200, 0.2)'
  }}
  style={{
    width: 320,
    height: 240,
  }}/>
</View>
</View>

{/* 
 */}

<View style={GlobalStyles.backgrey}>
  <View style={GlobalStyles.signupInputContainer}>
    <View style={GlobalStyles.inputView}>
    <Text style={GlobalStyles.signupLabel}>Upload TRN Certificate*</Text>
      <View style={GlobalStyles.uploadContainer}>
      {pdfURI ?
          <View style={{flex:1}}>
             <View>      
                <TouchableOpacity onPress={() => handleFileDelete('pdf')}>
                    <View style={styles.deleteIcon}>
                      <MaterialCommunityIcons  size={35 } color="red" name={'delete-circle-outline'} />
                    </View>
                </TouchableOpacity>
              </View>
              <View style={{flexDirection:'row'}}>
              <TouchableOpacity onPress={() => handleFileDelete('pdf')}>
                    <View>
                      <MaterialCommunityIcons  size={35 } color="red" name={'file-pdf-box'} />
                    </View>
                </TouchableOpacity>
              <Text style={{marginTop:8,}}>{pdfFile}</Text>
              </View>
          </View>         
            :
      <TouchableOpacity
          activeOpacity={0.5}
          //style={styles.buttonStyle}
          onPress={() => selectOneFile('pdf')}
          ref={uploadRef} onChange={UploadFile} 
          >
          {/*Single file selection button*/}
          <SvgUri 
          uri={"https://svgshare.com/i/pSH.svg"} height="35%" width="50%" style={GlobalStyles.iconStyle}/>
       <Text style={GlobalStyles.uploadContainerFirstText}>Choose file here</Text>
        <Text style={GlobalStyles.uploadContainerBottomText}>Tap here to upload your TRN Certificate</Text>
        </TouchableOpacity>
    }
      </View>
  </View>
  
</View>
</View> 
{/* <View style={styles.example}>
        <Text>Horizontal Progress Indicator</Text>
        <ProgressViewIOS styleAttr="Horizontal" />
      </View>
      <View style={styles.example}>
        <Text>Colored Progress Indicator</Text>
        <ProgressViewIOS styleAttr="Horizontal" color="#2196F3" />
      </View>
      <View style={styles.example}>
        <Text>Fixed Progress Value</Text>
        <ProgressViewIOS
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0.5}
        />
      </View> */}
     
{/* <Text>
        File progress: <Progress.Bar ref={progressRef} value="0" max="100" height={20} color={'skyblue'}/>
      </Text>
      <Text ref={statusRef}></Text>
      <Text ref={loadTotalRef}></Text> */}
</View>
<View style={GlobalStyles.signinPasswordInputView}>
        <TouchableOpacity
          style={GlobalStyles.loginBtn}
          onPress={() => handleSubmitPress()}>
          <Text style={GlobalStyles.loginText}>Sign In</Text>
        </TouchableOpacity>      
      </View>
</ScrollView>
  );
};

export default SignupScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    backgroundColor: '#fff',
    fontSize: 15,
    marginTop: 16,
    color: 'black',
  },
  buttonStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#DDDDDD',
    padding: 5,
  },
  imageIconStyle: {
    height: 20,
    width: 20,
    resizeMode: 'stretch',
  },
  deleteIcon: {
    alignItems:'flex-end',
   },
});
