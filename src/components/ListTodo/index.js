import React, { PropTypes } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const ListTodo = (props) => {
  const {
    todos,
    actions,
    style,
  } = props;

  return (
    <View style={style}>
      <ScrollView style={styles.scroll}
        showsVerticalScrollIndicator={false}>
        {todos.map((todo, i) =>
          <View key={i} style={styles.row}>
            <Text style={styles.text}>{todo.text}</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
  row: {
    height: 40,
    paddingLeft: 40,
    marginHorizontal: 10,
    marginVertical: 1,
    borderRadius: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
  },
});

ListTodo.propTypes = {
  style: PropTypes.number,
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

export default ListTodo;