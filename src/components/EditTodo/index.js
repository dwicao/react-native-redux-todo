import React, { Component, PropTypes } from 'react';
import { Actions, ActionConst } from 'react-native-router-flux';
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	Image,
	TouchableOpacity,
} from 'react-native';

import backIcon from '../../icons/back.png';

const EditTodo = props => {
	const {
		todos,
		actions,
		id,
		text
	} = props;

	let textInput = '';

	const _onPress = () => {
		actions.editTodo(id, textInput);
		Actions.mainScreen({type: ActionConst.RESET});
	}

	const _onChangeText = text => textInput = text;

	return (
		<View style={styles.container}>
			<View style={styles.textInputWrapper}>
				<TextInput style={styles.textInput}
					onChangeText={_onChangeText}
					ref={el => textInput = el}
					multiLine={true}>
					<Text style={styles.text}>{text}</Text>
				</TextInput>
			</View>
			<View style={styles.btnWrapper}>
				<TouchableOpacity onPress={_onPress}
					activeOpacity={0.5}
					style={styles.btn}>
					<Image source={backIcon} style={styles.image}/>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	textInputWrapper: {
		margin: 20,
	},
	textInput: {
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
	text: {
		color: 'white',
	},
	btnWrapper: {
		flex: 1,
		alignItems: 'flex-end',
		justifyContent: 'flex-end',
	},
	btn: {
		margin: 20,
		width: 40,
		height: 40,
		borderRadius: 100,
		backgroundColor: 'rgba(255, 255, 255, 0.2)',
	},
	image: {
		width: 40,
		height: 40,
	},
});

export default EditTodo;