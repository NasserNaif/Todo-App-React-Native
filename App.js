import { useState } from "react";
import {
  FlatList,
  StatusBar,
  StyleSheet,
  View,
  Pressable,
  Text,
} from "react-native";

import TaskCard from "./components/TaskCard";
import TaskInput from "./components/TaskInput";
import Icon from "react-native-vector-icons/AntDesign";

export default function App() {
  const [allTasks, setAllTasks] = useState([]);
  const [modaIsVisible, setModalIsVisible] = useState(false);

  function startAddTaskHanler() {
    setModalIsVisible(true);
  }

  function cancelAddTaskHandler() {
    setModalIsVisible(false);
  }

  function addingNewTask(newTask) {
    setAllTasks((oldItem) => [
      ...oldItem,
      { id: Math.floor(Math.random() * 1000), task: newTask },
    ]);
    cancelAddTaskHandler();
  }

  function deleteFunc(id) {
    setAllTasks((prev) => {
      return prev.filter((task) => task.id !== id);
    });
  }

  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        style={styles.addButton}
        onPress={startAddTaskHanler}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
          }}
        >
          New Task <Icon name="edit" size={20} />
        </Text>
      </Pressable>

      {/* Task Input Component  */}
      <TaskInput
        visible={modaIsVisible}
        onCancel={cancelAddTaskHandler}
        addNewTask={addingNewTask}
      />

      <View style={styles.taskContainer}>
        <FlatList
          data={allTasks}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          renderItem={(itemData) => {
            return (
              <TaskCard
                Text={itemData.item.task}
                id={itemData.item.id}
                onDeleteItem={deleteFunc}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingTop: StatusBar.currentHeight || 25,
  },

  taskContainer: {
    flex: 7,
    padding: 10,
  },
  addButton: {
    padding: 10,
    marginTop: 10,
    backgroundColor: "#00a6fb",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});
