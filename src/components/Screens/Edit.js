import React, { Component, PropTypes } from 'react';
import { Actions, ActionConst } from 'react-native-router-flux';
import {
	StyleSheet,
	StatusBar,
	View,
	Text,
	TouchableOpacity,
} from 'react-native';

import Wallpaper from '../Wallpaper';
import EditTodo from '../EditTodo';

export default class EditScreen extends Component {
	render() {
		return (
			<View style={styles.container}>
				<StatusBar translucent={true} />
				<Wallpaper>
					<EditTodo />
				</Wallpaper>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 20,
	}
});