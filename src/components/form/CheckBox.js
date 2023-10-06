import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import  MaterialCommunityIcons  from "react-native-vector-icons/MaterialCommunityIcons";
import {FONTS} from '../../constant/Font';

const CheckBox = (props) => {
	const iconName = props.isChecked ?
		"checkbox-marked" : "checkbox-blank-outline";

	return (
		<View style={styles.container}>
			<Pressable onPress={props.onPress}>
				<MaterialCommunityIcons
					name={iconName} size={24} color="#9CB8AE" />
			</Pressable>
			<Text style={styles.title}>{props.title}</Text>
		</View>
	);
};

export default CheckBox;

const styles = StyleSheet.create({
	container: {
		justifyContent: "flex-start",
		alignItems: "center",
		flexDirection: "row",
		width: '100%',
		marginTop: 5,
		marginHorizontal: 5,
        marginLeft:0,
	},
	title: {
		fontSize: 14,
		color: "#1F222F",
		marginLeft: 5,
        fontFamily: FONTS.Regular,
	},
});
