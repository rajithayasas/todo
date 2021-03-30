import React, {useState, useEffect} from 'react';

// import UI elements
import {View, StyleSheet, FlatList} from 'react-native';
import {Title, Card, Button, TextInput} from 'react-native-paper';

// import react edux
import {connect} from 'react-redux';
import {addAllTasks, addTask, deleteTodo} from '../store/actions/actions';

import {fetchAlltask, createTask, deleteTask} from '../api';

const Todo = ({tasks, addAllTasks, addTask, deleteTodo}) => {
  // Declare a new state variable, which we'll call "task"
  const [task, setTask] = useState('');

  useEffect(async () => {
    // Fetch all tasks
    const res = await fetchAlltask();

    try {
      const {data} = res.data;
      addAllTasks(data);
    } catch (error) {}
  }, []);

  // Add New Task to the List
  const onClickAddTask = async () => {
    if (task) {
      // Fetch all tasks
      const res = await createTask(task);

      try {
        const {data} = res.data;

        addTask(data);
        setTask('');
      } catch (error) {}
    }
  };

  // Delete Task from the List
  const onClickDeleteTask = async id => {
    const res = await deleteTask(id);

    try {
      const {status} = res.data;

      if (status === 'success') {
        deleteTodo(id);
      }
    } catch (error) {}
  };

  return (
    <View style={styles.container}>
      <Card>
        <Card.Content>
          <Title>TO-DO APP</Title>

          <TextInput
            mode="outlined"
            label="Type your task here"
            value={task}
            onChangeText={task => setTask(task)}
          />

          <Button mode="contained" onPress={onClickAddTask}>
            Add
          </Button>
        </Card.Content>
      </Card>

      {/* List of task displayed here */}
      <FlatList
        data={tasks}
        keyExtractor={item => item._id}
        renderItem={({item, index}) => {
          return (
            <>
              <Card>
                <Card.Title
                  title={item.task}
                  right={props => (
                    <Button onPress={() => onClickDeleteTask(item._id)}>
                      X
                    </Button>
                  )}
                />
              </Card>
            </>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#ecf0f2',
    padding: 10,
  },
});

const mapStateToProps = (state, ownProps) => {
  return {
    tasks: state.todos.tasks,
  };
};

const mapDispatchToProps = {addAllTasks, addTask, deleteTodo};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
