import React, { PropTypes } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import ButtonIcon from '../Buttons/ButtonIcon';

const ListTodo = (props) => {
  const {
    todos,
    actions,
    leftOnPress,
    leftIconSrc,
    rightOnPress,
    rightIconSrc,
  } = props;

  return (
      <ScrollView style={styles.scroll}
        showsVerticalScrollIndicator={false}>
        {todos.map((todo, i) =>
          <View key={i} style={styles.row}>
            <ButtonIcon onPress={leftOnPress}
              source={leftIconSrc}
              style={styles.leftButton}
              width={20} height={20} />
            <Text numberOfLines={1}
              style={styles.text}>
                {todo.text}
            </Text>
            <ButtonIcon onPress={rightOnPress}
              source={rightIconSrc}
              style={styles.rightButton}
              width={20} height={20} />
          </View>
        )}
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  text: {
    flex: 1,
    color: 'white',
  },
  leftButton: {
    marginHorizontal: 10,
  },
  rightButton: {
    marginHorizontal: 10,
  },
  row: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 40,
    marginHorizontal: 10,
    marginVertical: 1,
    borderRadius: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
});

ListTodo.propTypes = {
  style: PropTypes.number,
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  leftOnPress: PropTypes.func.isRequired,
  leftIconSrc: PropTypes.number.isRequired,
  rightOnPress: PropTypes.func.isRequired,
  rightIconSrc: PropTypes.number.isRequired,
};

export default ListTodo;