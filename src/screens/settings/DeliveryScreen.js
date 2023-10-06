
import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import { Form, FormItem, Picker } from 'react-native-form-component';
import GlobalStyles from '../../../assets/css/styles';
import CheckBox from '../../components/form/CheckBox';
import ToggleSwitch from '../../components/form/ToggleSwitch';
import Dropdown from '../../components/form/Dropdown';
import TextBoxAccount from '../../components/form/TextBoxAccount';

const DeliveryScreen = () => {

  const [country, setCountry] = useState('971');
  const [countryNo, setCountryNo] = useState('971');
  const [regNo, setRegNo] = useState('');
  const [isSelected, setSelection] = useState(false);
  const [rejectOrder, setRejectOrder] = useState(false);
  const [cancelOrder, setCancelOrder] = useState(false);
  const [notDeliveryFee, setNotDeliveryFee] = useState(false);
  const [deliveryFee, setDeliveryFee] = useState(false);
  const [selectAll, setSelectAll] = useState(false);

  const countryCode = [
    { label: 'AED', value: 'AED' },
    { label: 'USD', value: 'USD' },
  ];
  const countryCodeNo = [
    { label: 'UAE (+971)', value: '971' },
    { label: 'INDIA(+91)', value: '91' },
  ];
  return (
    <ScrollView>
      <View style={GlobalStyles.deliveryScreenContainer}>
        <View>
      <View style={GlobalStyles.rowTwoInput}>
        <View style={GlobalStyles.defaultScreenMobileNoSection}>
        <TextBoxAccount 
          label="Minimum Order"
          type="text"
          value="20"
          readOnly={false}
         />
        </View>
        <View style={GlobalStyles.defaultScreenCountryCodeSection}>
          <View style={GlobalStyles.deliveryScreenSideDropdownContainer}>
          <Dropdown label="Currency" data={countryCode} onSelect={setCountry} />
          </View>
        </View> 
      </View>
     </View>

     <View style={GlobalStyles.deliveryFlexSection}>
      <View style={GlobalStyles.checkboxContainer}>
        <CheckBox onPress={() => setRejectOrder(!rejectOrder)}
                title="Reject Orders if below minimum value"
                isChecked={rejectOrder}
        />
      </View>
    </View>
    <View style={GlobalStyles.deliveryFlexSection}>
      <View style={GlobalStyles.checkboxContainer}>
      <CheckBox onPress={() => setCancelOrder(!cancelOrder)}
                title="Do not allow buyers to cancel orders after cut off"
                isChecked={cancelOrder} />
      </View>
    </View>
    <Text style={GlobalStyles.deliveryFeeScreenLabel}>Delivery Fees</Text>
    <View style={GlobalStyles.deliveryFlexSection}>
      <View style={GlobalStyles.checkboxContainer}>
      <CheckBox onPress={() => setNotDeliveryFee(!notDeliveryFee)}
                title="Do not apply delivery fee"
                isChecked={notDeliveryFee}
        />
      </View>
    </View>
    <View style={GlobalStyles.deliveryFlexSection}>
      <View style={GlobalStyles.checkboxContainer}>
      <CheckBox onPress={() => setDeliveryFee(!deliveryFee)}
                title="Apply delivery fee"
                isChecked={deliveryFee} />
      </View>
    </View>
    <View>
          <Text style={GlobalStyles.deliveryAreaScreenLabel}>Delivery Area for marketplace</Text>
          <View style={GlobalStyles.fullWidthDropDown}>
          <Dropdown label="Country" data={countryCodeNo} onSelect={setCountryNo} />
          </View>
     </View> 
     <View>
     <View style={GlobalStyles.fullWidthDropDown}>
          <Dropdown label="City" data={countryCodeNo} onSelect={setCountryNo} />
          </View>
     </View> 
     <View>
     <View style={GlobalStyles.fullWidthDropDown}>
          <Dropdown label="Area" data={countryCodeNo} onSelect={setCountryNo} />
          </View>
     </View> 
     <Text style={GlobalStyles.defaultScreenLabel}>Cut Off Times</Text>
     <View style={GlobalStyles.deliveryFlexSection}>
      <View style={GlobalStyles.checkboxContainer}>
      <CheckBox onPress={() => setSelectAll(!selectAll)}
                title="Select All"
                isChecked={selectAll}
        />
      </View>
    </View>
    <View style={GlobalStyles.deliveryFlexSectionLabels}>
      <View><Text style={GlobalStyles.deliveryFlexLabel}>Cut off Day</Text></View>
      <View><Text style={GlobalStyles.deliveryFlexLabel}>Cut off Time</Text></View>
    </View>
    <ToggleSwitch onPress={() => setSelectAll(!selectAll)}
                  firstTitle="Sunday"
                  secTitle="Days Earlier"
                  isChecked={selectAll}
    />
    <ToggleSwitch onPress={() => setSelectAll(!selectAll)}
                  firstTitle="Monday"
                  secTitle="Days Earlier"
                  isChecked={selectAll}
    />
    <ToggleSwitch onPress={() => setSelectAll(!selectAll)}
                  firstTitle="Tuesday"
                  secTitle="Days Earlier"
                  isChecked={selectAll}
    />
    <ToggleSwitch onPress={() => setSelectAll(!selectAll)}
                  firstTitle="Wednesday"
                  secTitle="Days Earlier"
                  isChecked={selectAll}
    />
    <ToggleSwitch onPress={() => setSelectAll(!selectAll)}
                  firstTitle="Thursday"
                  secTitle="Days Earlier"
                  isChecked={selectAll}
    />
    <ToggleSwitch onPress={() => setSelectAll(!selectAll)}
                  firstTitle="Friday"
                  secTitle="Days Earlier"
                  isChecked={selectAll}
    />
    <ToggleSwitch onPress={() => setSelectAll(!selectAll)}
                  firstTitle="Saturday"
                  secTitle="Days Earlier"
                  isChecked={selectAll}
    />
 <View style={GlobalStyles.signinPasswordInputView}>
          <TouchableOpacity
            style={GlobalStyles.loginBtn}
            //onPress={() => handleSubmitPress()}
            >
            <Text style={GlobalStyles.loginText}>Submit</Text>
          </TouchableOpacity>
        </View>
    </View>
    </ScrollView>
  );
};

export default DeliveryScreen;