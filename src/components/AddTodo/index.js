import React, { PropTypes } from 'react';
import Dimensions from 'Dimensions';
import {
	View,
	TextInput,
	StyleSheet,
} from 'react-native';

import plusIcon from '../../icons/plus.png';
import ButtonIcon from '../Buttons/ButtonIcon';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const AddTodo = (props) => {
	const {
		todos,
		actions,
		style,
	} = props;

	let textInput;
	let textValue = '';

	const _onSubmitEditing = () => {
		if (textValue.length > 0) {
			actions.addTodo(textValue);
		}
		textInput.clear();
	}

	const _onChangeText = (text) => {
		textValue = text;
	}

	return (
		<View style={style}>
			<TextInput style={styles.textInput}
				autoCorrect={false}
				placeholder='Add an item...'
				placeholderTextColor='gray'
				returnKeyType='done'
				onChangeText={_onChangeText}
				onSubmitEditing={_onSubmitEditing}
				ref={el => textInput = el} />
			<ButtonIcon onPress={_onSubmitEditing}
				source={plusIcon}
				style={styles.plusButton}
				width={20} height={20} />
		</View>
	);
};

const styles = StyleSheet.create({
	plusButton: {
		marginRight: 20,
		marginTop: -30,
		alignItems: 'flex-end',
	},
	textInput: {
		alignSelf: 'center',
		height: 40,
		width: DEVICE_WIDTH - 20,
		marginTop: 10,
		paddingLeft: 10,
		paddingRight: 35,
		color: 'white',
		borderRadius: 2,
		backgroundColor: 'rgba(0, 0, 0, 0.3)',
	},
});

AddTodo.propTypes = {
	todos: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired,
};

export default AddTodo;