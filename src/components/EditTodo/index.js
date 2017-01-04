import React, { Component, PropTypes } from 'react';
import { Actions, ActionConst } from 'react-native-router-flux';
import {
	StyleSheet,
	View,
	Text,
	Image,
	TouchableOpacity,
} from 'react-native';

import backIcon from '../../icons/back.png';

const EditTodo = props => {
	const _onPress = () => Actions.mainScreen({type: ActionConst.RESET});

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={_onPress}
				activeOpacity={0.5}
				style={styles.btn}>
				<Image source={backIcon} style={styles.image}/>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
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