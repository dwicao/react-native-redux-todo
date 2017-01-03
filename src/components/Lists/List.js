import React, { PropTypes } from 'react';
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

import ButtonIcon from '../Buttons/ButtonIcon';

const ListTodo = (props) => {
  const {
    todos,
    actions,
    leftOnPress,
    leftUnactiveIcon,
    leftActiveIcon,
    rightOnPress,
    rightUnactiveIcon,
    rightActiveIcon,
    textOnPress,
  } = props;

  return (
      <ScrollView style={styles.scroll}
        showsVerticalScrollIndicator={false}>
        {todos.map((todo, i) => {
          const doneOrNot = (todo.isDone) ? leftActiveIcon : leftUnactiveIcon;
          const starredOrNot = (todo.isStarred) ? rightActiveIcon : rightUnactiveIcon;
          return (
            <View key={i} style={styles.row}>
              <ButtonIcon onPress={leftOnPress(todo.id)}
                source={doneOrNot}
                style={styles.leftButton}
                width={20} height={20} />
              <TouchableOpacity onPress={textOnPress(todo.id)}
                style={styles.textButton}
                activeOpacity={0.7}>
                <Text numberOfLines={1}
                  style={styles.text}>
                    {todo.text}
                </Text>
              </TouchableOpacity>
              <ButtonIcon onPress={rightOnPress(todo.id)}
                source={starredOrNot}
                style={styles.rightButton}
                width={20} height={20} />
            </View>
          );
        })}
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  textButton: {
    flex: 1,
  },
  text: {
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
  leftUnactiveIcon: PropTypes.number.isRequired,
  leftActiveIcon: PropTypes.number.isRequired,
  rightOnPress: PropTypes.func.isRequired,
  rightUnactiveIcon: PropTypes.number.isRequired,
  rightActiveIcon: PropTypes.number.isRequired,
  textOnPress: PropTypes.func.isRequired,
};

export default ListTodo;