
import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Modal, Image, TextInput } from 'react-native';
import GlobalStyles from '../../../assets/css/styles';
import Icon from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const InvoiceScreen = () => {

    const [invoiceModal, setInvoiceModal] = useState(false);
    const showDetailsModal = (id) => {
        setInvoiceModal(true);
    }
    return (
        <ScrollView>
            <View style={GlobalStyles.defaultScreenContainer}>
                <View style={GlobalStyles.invoiceSearchContainer}>
                        <AntDesign name='search1' size={16} color='#0F141A' style={GlobalStyles.invoiceSearch} />
                        <TextInput style={GlobalStyles.searchText}></TextInput>
                        <Ionicons name='options-outline' size={24} style={GlobalStyles.invoiceFilter} color='#0F141A' />
                </View>
                <TouchableOpacity onPress={() => showDetailsModal(1)}>
                    <View style={GlobalStyles.notificationOddContainer}>
                        <View style={GlobalStyles.invoiceContainer}>
                            <View style={GlobalStyles.invoiceTwoSectionRow}>
                                <Text style={GlobalStyles.invoiceTitle}>Unibic Dubai International</Text>
                                <View style={GlobalStyles.invoiceButtonPaid}>
                                    <Text style={GlobalStyles.invoiceButtonText}>Paid</Text>
                                </View>
                            </View>
                            <View style={GlobalStyles.invoiceSingleSectionRow}>
                                <Text style={GlobalStyles.invoiceAddress}>Outlet : Abu Dhabi</Text>
                            </View>
                            <View style={GlobalStyles.invoiceSingleSectionRow}>
                                <Text style={GlobalStyles.invoiceInv}>INV-000039</Text>
                            </View>
                            <View style={GlobalStyles.invoiceTwoSectionRow}>
                                <Text style={GlobalStyles.invoiceAed}>AED 12.55</Text>

                                <Text style={GlobalStyles.invoiceDate}><Icon name='calendar' size={10}></Icon> Mar 23   <Icon name='calendar' size={10}></Icon> 11:50:00</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => showDetailsModal(1)}>
                    <View style={GlobalStyles.notificationOddContainer}>
                        <View style={GlobalStyles.invoiceContainer}>
                            <View style={GlobalStyles.invoiceTwoSectionRow}>
                                <Text style={GlobalStyles.invoiceTitle}>Unibic Dubai International</Text>
                                <View style={GlobalStyles.invoiceButtonUnPaid}>
                                    <Text style={GlobalStyles.invoiceButtonText}>Unpaid</Text>
                                </View>
                            </View>
                            <View style={GlobalStyles.invoiceSingleSectionRow}>
                                <Text style={GlobalStyles.invoiceAddress}>Outlet : Abu Dhabi</Text>
                            </View>
                            <View style={GlobalStyles.invoiceSingleSectionRow}>
                                <Text style={GlobalStyles.invoiceInv}>INV-000039</Text>
                            </View>
                            <View style={GlobalStyles.invoiceTwoSectionRow}>
                                <Text style={GlobalStyles.invoiceAed}>AED 12.55</Text>

                                <Text style={GlobalStyles.invoiceDate}><Icon name='calendar' size={10}></Icon> Mar 23   <Icon name='calendar' size={10}></Icon> 11:50:00</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <Modal
                    animationType={"fade"}
                    transparent={false}
                    visible={invoiceModal}
                    onRequestClose={() => { console.log("Modal has been closed.") }}>
                    <ScrollView>
                        <View style={GlobalStyles.modal}>
                            <View style={GlobalStyles.topModelSection}>
                                <TouchableOpacity onPress={() => {
                                    setInvoiceModal({ invoiceModal: !invoiceModal })
                                }}>

                                    <AntDesign name='close' size={30} style={GlobalStyles.closeIcon}></AntDesign>
                                </TouchableOpacity>
                                <View style={GlobalStyles.modelPaidButton}>
                                    <Text style={GlobalStyles.invoiceButtonText}>Paid</Text>
                                </View>
                                <Text style={GlobalStyles.modelInvoiceNo}>Invoice No : INV-000195</Text>
                                <Text style={GlobalStyles.modelTitle}>Unibic Dubai International</Text>
                                <Text style={GlobalStyles.modelAddress}>Outlet : Abu Dhabi</Text>
                            </View>
                            <View style={GlobalStyles.modelTopBoxSection}>
                                <View style={GlobalStyles.modelTopBoxContainer}>
                                    <View style={GlobalStyles.invoiceContainer}>
                                        <View style={GlobalStyles.modelTwoSectionRow}>
                                            <View style={GlobalStyles.modelOneBox}>
                                                <Text style={GlobalStyles.modelSingleBoxTitle}>Order No</Text>
                                                <Text style={GlobalStyles.modelSingleBoxValue}>PO-004720</Text>
                                                <Text style={GlobalStyles.modelSingleBoxTitle}>Outlet</Text>
                                                <Text style={GlobalStyles.modelSingleBoxBottomValue}>Outlet 1</Text>
                                            </View>
                                            <View style={GlobalStyles.modelTwoBox}>
                                                <Text style={GlobalStyles.modelSingleBoxTitle}>Amount</Text>
                                                <Text style={GlobalStyles.modelSingleBoxUniqValue}>AED4567</Text>
                                                <Text style={GlobalStyles.modelSingleBoxDate}>Created On 29 May 2022</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={GlobalStyles.notificationOddContainer}>
                                    <View style={GlobalStyles.invoiceContainer}>
                                        <View style={GlobalStyles.modelImageBoxSectionRow}>
                                            <View style={GlobalStyles.modelImageBox}>
                                                <View style={GlobalStyles.modelImageCircleBox}>
                                                    <Image source={require('../../../assets/images/Avocados.jpeg')} style={GlobalStyles.modelImage} resizeMode='cover' />
                                                </View>
                                                <View style={GlobalStyles.modelAmmountUpdateRow}>
                                                    <View style={GlobalStyles.modelAmmountUpdateBox}>
                                                        <AntDesign name='minus' size={15} style={GlobalStyles.mpIcon}></AntDesign>
                                                    </View>
                                                    <View style={GlobalStyles.modelAmmountUpdateBoxNumber}>
                                                        <Text style={GlobalStyles.mpText}>1</Text>
                                                    </View>
                                                    <View style={GlobalStyles.modelAmmountUpdateBox}>
                                                        <AntDesign name='plus' size={15} style={GlobalStyles.mpIcon}></AntDesign>
                                                    </View>
                                                </View>
                                            </View>
                                            <View style={GlobalStyles.modelContentBox}>
                                                <Text style={GlobalStyles.modelImageBoxTitle}>Avocado (HAAS)</Text>
                                                <Text style={GlobalStyles.modelImageBoxContent}>#261311</Text>
                                                <Text style={GlobalStyles.modelImageBoxContentPackage}>Package (500 G)</Text>
                                                <Text style={GlobalStyles.modelImageBoxUniqValue}>AED 12.55</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={GlobalStyles.notificationOddContainer}>
                                    <View style={GlobalStyles.invoiceContainer}>
                                        <View style={GlobalStyles.invoiceTwoSectionRow}>
                                            <Text style={GlobalStyles.invoiceTitle}>Billing Address</Text>
                                        </View>
                                        <View style={GlobalStyles.invoiceSingleSectionRow}>
                                            <Text style={GlobalStyles.billingAddress}>Syed Muzamil Ahmed {"\n"}
                                                27,Sakthi Nagar East Street 2 {"\n"}Nethajipuram, N K Palayam Post {"\n"}Dubai PO Box - 568974</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={GlobalStyles.notificationOddContainer}>
                                    <View style={GlobalStyles.invoiceContainer}>
                                        <View style={GlobalStyles.invoiceTwoSectionRow}>
                                            <Text style={GlobalStyles.invoiceTitle}>Delivery Address</Text>
                                            <View style={GlobalStyles.invoiceButtonEdit}>
                                                <Text style={GlobalStyles.invoiceButtonEditText}>Edit</Text>
                                            </View>
                                        </View>

                                        <View style={GlobalStyles.invoiceSingleSectionRow}>
                                            <Text style={GlobalStyles.billingAddress}>Syed Muzamil Ahmed {"\n"}
                                                27,Sakthi Nagar East Street 2 {"\n"}Nethajipuram, N K Palayam Post {"\n"}Dubai PO Box - 568974</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={GlobalStyles.notificationOddContainer}>
                                    <View style={GlobalStyles.invoiceContainer}>
                                        <View style={GlobalStyles.invoiceTwoSectionRow}>
                                            <Text style={GlobalStyles.invoiceTitle}>Delivery Date
                                            <Icon name='info' size={16} color='red' ></Icon>
                                            </Text>
                                            <View style={GlobalStyles.invoiceButtonEdit}>
                                                <Text style={GlobalStyles.invoiceButtonEditText}>Edit</Text>
                                            </View>
                                        </View>

                                        <View style={GlobalStyles.invoiceSingleSectionRow}>
                                            <Text style={GlobalStyles.billingAddress}>17/05/2022</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={GlobalStyles.notificationOddContainer}>
                                    <View style={GlobalStyles.invoiceContainer}>
                                        <View style={GlobalStyles.invoiceTwoSectionRow}>
                                            <View style={GlobalStyles.invoiceCardLeft}>
                                                <Text style={GlobalStyles.billingAddress}>Estimated SubTotal</Text>
                                            </View>
                                            <View style={GlobalStyles.invoiceCardRight}>
                                                <Text style={GlobalStyles.billingCurrency}>AED 48</Text>
                                            </View>
                                        </View>
                                        <View style={GlobalStyles.invoiceTwoSectionRow}>
                                            <View style={GlobalStyles.invoiceCardLeft}>
                                                <Text style={GlobalStyles.billingAddress}>Estimated Delivery Fee</Text>
                                            </View>

                                            <View style={GlobalStyles.invoiceCardRight}>
                                                <Text style={GlobalStyles.billingCurrency}>AED 5</Text>
                                            </View>
                                        </View>
                                        <View style={GlobalStyles.invoiceTwoSectionRow}>
                                            <View style={GlobalStyles.invoiceCardLeft}>
                                                <Text style={GlobalStyles.billingAddress}>VAT(5%)</Text>
                                            </View>

                                            <View style={GlobalStyles.invoiceCardRight}>
                                                <Text style={GlobalStyles.billingCurrency}>AED 2.5</Text>
                                            </View>
                                        </View>
                                        <View style={GlobalStyles.invoiceTwoSectionRow}>
                                            <View style={GlobalStyles.invoiceCardLeft}>
                                                <Text style={GlobalStyles.estimatedTotal}>Estimated total</Text>
                                            </View>

                                            <View style={GlobalStyles.invoiceCardRight}>
                                                <Text style={GlobalStyles.estimatedTotal}>AED 55.5</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={GlobalStyles.invoiceNoMarginContainer}>
                                    <View style={GlobalStyles.invoiceContainer}>
                                        <View style={GlobalStyles.invoiceTwoSectionRow}>
                                            <View style={GlobalStyles.invoiceCardLeft}>
                                                <Text style={GlobalStyles.estimatedTotal}>STATUS</Text>
                                            </View>

                                            <View style={GlobalStyles.invoiceCardRight}>
                                                <Text style={GlobalStyles.estimatedTotal}>Paid</Text>
                                            </View>
                                        </View>
                                        <View style={GlobalStyles.invoiceTwoSectionRow}>
                                            <View style={GlobalStyles.invoiceCardLeft}>
                                                <Text style={GlobalStyles.billingAddress}>PAID AMOUNT</Text>
                                            </View>
                                            <View style={GlobalStyles.invoiceCardRight}>
                                                <Text style={GlobalStyles.billingCurrency}>AED 55.5</Text>
                                            </View>
                                        </View>
                                        <View style={GlobalStyles.invoiceTwoSectionRow}>
                                            <View style={GlobalStyles.invoiceCardLeft}>
                                                <Text style={GlobalStyles.billingAddress}>REMAINING AMOUNT</Text>
                                            </View>

                                            <View style={GlobalStyles.invoiceCardRight}>
                                                <Text style={GlobalStyles.billingCurrency}>AED 0</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <TouchableOpacity style={GlobalStyles.buttonStyleRounded}>
                                    <Text style={GlobalStyles.buttonStyleRoundedText}>Download Invoice</Text>
                                </TouchableOpacity>
                            </View>


                        </View>
                    </ScrollView>
                </Modal>
            </View >
        </ScrollView >
    );
};

export default InvoiceScreen;