import { useState } from "react";
import {
  Button,
  FlatList,
  StatusBar,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from "react-native";

export default function App() {
  const [newTask, setNewTask] = useState("");
  const [allTasks, setAllTasks] = useState([]);

  function textChange(text) {
    setNewTask(text);
  }

  function addingNewTask() {
    const item = {
      id: Math.floor(Math.random() * 1000),
      task: newTask,
    };

    setAllTasks((oldItem) => [...oldItem, item]);
    setNewTask("");
  }

  function deleteFunc(id) {
    const newArr = allTasks.filter((elmID) => {
      if (elmID.id !== id) return elmID;
    });
    setAllTasks(newArr);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputSt}
          placeholder="Enter your name"
          value={newTask}
          onChangeText={textChange}
        />
        <Pressable
          onPress={addingNewTask}
          style={{
            padding: 10,
            backgroundColor: "#00a6fb",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 16,
            }}
          >
            Click me
          </Text>
        </Pressable>
      </View>

      <View style={styles.taskContainer}>
        <FlatList
          data={allTasks}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          renderItem={(itemData) => {
            return (
              <View style={styles.taskView}>
                <Text>{itemData.item.task}</Text>
                <Button
                  title="Delete"
                  onPress={() => deleteFunc(itemData.item.id)}
                />
              </View>
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
    paddingTop: StatusBar.currentHeight,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 70,
    padding: 5,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },

  inputSt: {
    color: "black",
    width: "60%",
    borderWidth: 1,
    borderColor: "#cccccc",
    padding: 5,
    borderRadius: 10,
  },

  taskContainer: {
    flex: 7,
    padding: 10,
  },

  taskView: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 10,
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignItems: "center",
    minHeight: 70,
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 8,
  },
});
