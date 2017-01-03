import React, { PropTypes } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import List from './List';
import iconUncheck from '../../icons/uncheck.png';
import iconUnStar from '../../icons/unstar.png';

const ActiveTodo = (props) => {
  const {
    todos,
    actions,
  } = props;

  const _leftOnPress = () => {

  }

  const _rightOnPress = () => {

  }

  return (
    <View style={styles.container}>
      <List
        leftOnPress={_leftOnPress}
        leftIconSrc={iconUncheck}
        rightOnPress={_rightOnPress}
        rightIconSrc={iconUnStar}
        {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginBottom: 10,
  },
});

ActiveTodo.propTypes = {
  style: PropTypes.number,
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

export default ActiveTodo;