
import React, { useState, useEffect, useReducer, useCallback, useRef } from 'react';
import { View, Text, ScrollView, Button, TouchableOpacity } from 'react-native';
import GlobalStyles from '../../../assets/css/styles';

import { Form, FormItem, Picker, } from 'react-native-form-component';
import CheckBox from '../../components/form/CheckBox';
import Dropdown from '../../components/form/Dropdown';
import TextBoxAccount from '../../components/form/TextBoxAccount';

const DefaultScreen = () => {
  const [regNo, setRegNo] = useState('');
  const [country, setCountry] = useState('971');
  const [countryCodeMobile, setCountryCodeMobile] = useState('');
  const [orderApproval, setOrderApproval] = useState(false);
  const [credit, setCredit] = useState(false);
  const [mobileNo, setMobileNo] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [countryCodeContact, setCountryCodeContact] = useState('');

  const countryCodeMobileInput = useRef();
  const creditInput = useRef();
  const mobileNumberInput = useRef();
  const contactNameInput = useRef();
  const countryCodeContactInput = useRef();
  const contactNoInput = useRef();

  const [isSelected, setSelection] = useState(false);

  const handleSubmitPress = () => {
    console.log('handle press code goes here')
    if (!countryCodeMobile) {
      countryCodeMobileInput.current.validateDropdown()
    }
    if (!mobileNo) {
      mobileNumberInput.current.validateDropdown()
    }
    if (!contactName) {
      contactNameInput.current.validateDropdown()
    }
    if (!contactNo) {
      contactNoInput.current.validateDropdown()
    }
    if (!countryCodeContact) {
      countryCodeContactInput.current.validateDropdown()
    }
  }


  const countryCode = [
    { label: 'UAE (+971)', value: '971' },
    { label: 'INDIA(+91)', value: '91' },
    { label: 'UAE (+971)', value: '971' },
    { label: 'INDIA(+91)', value: '91' },
  ];

  return (
    <ScrollView>
      <View style={GlobalStyles.defaultScreenContainer}>
        <View>
          <TextBoxAccount
            label="Registration No."
            //type="number"
            value="904984"
            readOnly={true}
          />
          <TextBoxAccount
            label="Registered Phone No"
            type="text"
            value="+971 561855792"
            readOnly={true}
          />
          <TextBoxAccount
            label="Registered Email"
            type="email"
            value="archya@watermelon.market"
            readOnly={true}
          />
          <View style={GlobalStyles.rowTwoInput}>
            <View style={GlobalStyles.defaultScreenCountryCodeSection}>
              <Text style={GlobalStyles.defaultScreenLabel}>Country Code*</Text>
              <View style={GlobalStyles.defaultScreenDropdownContainer}>
                <Dropdown label="Country Code" isRequired={true} data={countryCode} ref={countryCodeMobileInput} onSelect={setCountryCodeMobile} />
              </View>
            </View>
            <View style={GlobalStyles.defaultScreenMobileNoSection}>
              <Text style={GlobalStyles.defaultScreenLabel}>Default Mobile No*</Text>
              <View style={GlobalStyles.defaultScreenDropdownContainer}>
                <Dropdown label="Mobile No" isRequired={true} data={countryCode} ref={mobileNumberInput} onSelect={setMobileNo} />
              </View>
            </View>
          </View>
          <TextBoxAccount
            label="Default Email"
            type="email"
            isRequired={true}
            value=""
            readOnly={false}
          />
          <View>
            <Text style={GlobalStyles.defaultScreenLabel}>Contact Name</Text>
            <View style={GlobalStyles.fullWidthDropDown}>
              <Dropdown label="Select Contact Name" isRequired={true} data={countryCode} ref={contactNameInput} onSelect={setContactName} />
            </View>
          </View>

          <View style={GlobalStyles.rowTwoInput}>
            <View style={GlobalStyles.defaultScreenCountryCodeSection}>
              <Text style={GlobalStyles.defaultScreenLabel}>Country Code*</Text>
              <View style={GlobalStyles.defaultScreenDropdownContainer}>
                <Dropdown label="Country Code" isRequired={true} data={countryCode} ref={countryCodeContactInput} onSelect={setCountryCodeContact} />
              </View>
            </View>
            <View style={GlobalStyles.defaultScreenMobileNoSection}>
              <Text style={GlobalStyles.defaultScreenLabel}>Contact No*</Text>
              <View style={GlobalStyles.defaultScreenDropdownContainer}>
                <Dropdown label="Contact No" isRequired={true} data={countryCode} ref={contactNoInput} onSelect={setContactNo} />
              </View>
            </View>
          </View>
          <TextBoxAccount
            label="Alternate Email1"
            type="text"
            readOnly={false}
          />
          <TextBoxAccount
            label="Alternate Email2"
            type="text"
            readOnly={false}
          />
          <View>
            <Text style={GlobalStyles.defaultScreenLabel}>Credits</Text>
            <View style={GlobalStyles.fullWidthDropDown}>
              <Dropdown label="Select Credits" data={countryCode} ref={creditInput} onSelect={setCountry} />
            </View>
          </View>
          <TextBoxAccount
            label="PO Box"
            type="text"
            readOnly={true}
            value="904984"
          />
          <TextBoxAccount
            label="Business Type"
            type="text"
            readOnly={true}
            value="Dine In"
          />
          <TextBoxAccount
            label="Email"
            type="email"
            readOnly={true}
            value="cofinadxb@gmail.com"
          />
          <TextBoxAccount
            label="Address"
            type="text"
            readOnly={true}
            value="414 - Al Warqa - Dubai near Q1 mall"
          />
          <TextBoxAccount
            label="Modified"
            type="text"
            readOnly={true}
            value="Watermelon Admin"
          />
          <TextBoxAccount
            label="Modified Date"
            type="text"
            readOnly={true}
            value="24-Jan-2022 12:12 PM"
          />
          <View style={GlobalStyles.flexSection}>
            <View style={GlobalStyles.checkboxContainer}>
              <CheckBox onPress={() => setOrderApproval(!orderApproval)}
                title="Order approval is not required for the BuyerMe"
                isChecked={orderApproval}
              />
            </View>
          </View>
        </View>
        <View style={GlobalStyles.signinPasswordInputView}>
          <TouchableOpacity
            style={GlobalStyles.loginBtn}
            onPress={() => handleSubmitPress()}>
            <Text style={GlobalStyles.loginText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default DefaultScreen;