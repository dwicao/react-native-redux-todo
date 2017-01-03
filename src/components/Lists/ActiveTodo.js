import React, { PropTypes } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import List from './List';
import iconCheck from '../../icons/check.png';
import iconUncheck from '../../icons/uncheck.png';
import iconStar from '../../icons/star.png';
import iconUnStar from '../../icons/unstar.png';
import iconDelete from '../../icons/remove.png';

const ActiveTodo = (props) => {
  const {
    todos,
    actions,
  } = props;

  const _leftOnPress = (id) => (event) => actions.toggleTodo(id);
  const _textOnPress = (id) => (event) => actions.toggleEditTodo(id);
  const _rightOnPress = (id) => (event) => actions.toggleStarTodo(id);
  const _onDelete = (id) => (event) => actions.removeTodo(id);

  return (
    <View style={styles.container}>
      <List
        leftOnPress={_leftOnPress}
        leftUnactiveIcon={iconUncheck}
        leftActiveIcon={iconCheck}
        rightOnPress={_rightOnPress}
        rightUnactiveIcon={iconUnStar}
        rightActiveIcon={iconStar}
        textOnPress={_textOnPress}
        onDelete={_onDelete}
        iconDelete={iconDelete}
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