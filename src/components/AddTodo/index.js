import React, { PropTypes } from 'react';
import Dimensions from 'Dimensions';
import {
	View,
	TextInput,
	StyleSheet,
} from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const AddTodo = (props) => {
	const {
		todos,
		actions,
	} = props;

	let _textInput;
	let textValue = '';

	const _onSubmitEditing = () => {
		if (textValue.length > 0) {
			actions.addTodo(textValue);
		}
		_textInput.clear();
	}

	const _onChangeText = (text) => {
		textValue = text;
	}

	return (
		<View style={styles.container}>
			<TextInput style={styles.textInput}
				autoCorrect={false}
				placeholder='Add an item...'
				placeholderTextColor={'gray'}
				returnKeyType='done'
				onChangeText={_onChangeText}
				onSubmitEditing={_onSubmitEditing}
				ref={el => _textInput = el} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	textInput: {
		alignSelf: 'center',
		height: 40,
		width: DEVICE_WIDTH - 20,
		marginTop: 10,
		paddingLeft: 10,
		color: 'white',
		backgroundColor: 'rgba(0, 0, 0, 0.3)',
	},
});

AddTodo.propTypes = {
	todos: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired,
};

export default AddTodo;