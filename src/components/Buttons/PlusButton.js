import React, { PropTypes } from 'react';
import {
	View,
	Image,
	StyleSheet,
	TouchableWithoutFeedback,
} from 'react-native';

import plusIcon from '../../icons/plus.png';

const PlusButton = (props) => {
	const {
		todos,
		actions,
		style,
		onSubmit,
	} = props;

	const _onPress = () => onSubmit();

	return (
		<View style={style}>
			<TouchableWithoutFeedback onPress={_onPress}>
				<Image source={plusIcon} style={styles.icon} />
			</TouchableWithoutFeedback>
		</View>
	);
};

const styles = StyleSheet.create({
	icon: {
		width: 20,
		height: 20,
	},
});

PlusButton.propTypes = {
	todos: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired,
	style: PropTypes.number,
	onSubmit: PropTypes.func.isRequired,
};

export default PlusButton;