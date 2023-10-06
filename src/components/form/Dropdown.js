import React, { useRef, useState, forwardRef, useImperativeHandle } from 'react';
import { StyleSheet, Text, TouchableOpacity,Modal,View,FlatList,TouchableWithoutFeedback } from 'react-native';
import { Icon } from 'react-native-elements';
import GlobalStyles from '../../../assets/css/styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Dropdown = forwardRef((props, ref) => {
  //console.log('hello'+ JSON.stringify(ref))
//const  Dropdown = ({ label,data,onSelect, ref }) => {
  const [errorText, setErrorText] = useState('');
  const [visible, setVisible] = useState(false);
  const DropdownButton = useRef(null);
  const DropdownContainer = useRef(null);
  const [dropdownTop, setDropdownTop] = useState(0);
  const [dropdownWidth, setDropdownWidth] = useState(0);
  const [dropdownLeft, setDropdownLeft] = useState(0);
  const [selected, setSelected] = useState(undefined);
  const dropdownSelect = useRef();

  useImperativeHandle(ref, () => ({
    validateDropdown : validateDropdown
  }));
  const validateDropdown = () => {
      if (props.isRequired === true) {
        if (!selected) {
          setErrorText(<Text style={{ color: 'red', fontSize: 15 }}>Please select {props.label.toLowerCase()}</Text>);
        } else {
          setErrorText('')
        }
      }
      else {
        setErrorText('')
      }
  }
  const renderDropdown = () => {
    return (
      <Modal visible={visible} transparent animationType="none" >
        <TouchableOpacity
            style={styles.overlay}
            onPress={() => setVisible(false)}
            >
          <View style={[`${errorText}` ? styles.errorControl : styles.dropdown, { top: dropdownTop,left:dropdownLeft,width:dropdownWidth }]}>
            <FlatList
              data={props.data}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </TouchableOpacity>
      </Modal>
      
    );
  };
  const toggleDropdown = () => {
    console.log(visible);
    visible ? setVisible(false) : openDropdown();
  };
  
  const openDropdown = () => {
    DropdownButton.current.measure((_fx, fy, width, height, px, py) => {
      console.log('dd->'+width)
      setDropdownWidth(width);
      setDropdownLeft(px)
    setDropdownTop(py + height-5);
   });
    setVisible(true);
  };
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
      <Text>{item.label}</Text>
    </TouchableOpacity>
  );
  const onItemPress = (item) => {
    setSelected(item);
    props.onSelect(item);
    setVisible(false);
    setErrorText('')
  };
  return (
    <View  style={[`${errorText}` ? styles.errorControl : '']}>
    <TouchableOpacity
      style={styles.button}
      onPress={toggleDropdown}
      ref={DropdownButton}
    >
      {renderDropdown()}
      <Text style={styles.buttonText}>{(selected && selected.label) || props.label}</Text>
      <AntDesign  name='down' size={15} style={styles.dropdownIcon}/>
    </TouchableOpacity>
    {/* <View style={GlobalStyles.mrgnBtn}>
        {
          (errorText) ?
            <View>
              <Text>{errorText}</Text>
            </View>
            : null
        }
      </View> */}
    </View>
  );
});
export default  Dropdown;
const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    paddingTop:16,
    height: 44,
    width: '100%',
    paddingHorizontal: 10,
    zIndex: 1,
  },
  overlay: {
    width: '100%',
    height: '100%',
  },
  buttonText: {
    flex: 1,
    textAlign: 'left',

  },
  dropdown: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: '90%',
    shadowColor: '#000000',
    shadowRadius: 4,
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.5,
    
  },
  item: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    backgroundColor:'#fff',
  },
  dropdownIcon:{
    color:'black',
    right:0,
    paddingRight:0,
    justifyContent:'flex-end',
  },
  errorControl: {
    borderWidth: 1,
    borderColor: 'red',
    display: 'flex',
    flexDirection: 'row',
    //height: 45,
    //width: '100%',
    //paddingTop: 5,
    borderRadius: 5,
  },
});