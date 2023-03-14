import { useState } from "react";
import {
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
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
        {allTasks.map((elm) => (
          <View
            key={elm.id}
            style={{
              flex: 1,
              justifyContent: "space-evenly",
              flexDirection: "row",
              alignItems: "center",
              // height: 20,
              maxHeight: 70,
              borderWidth: 1,
              marginTop: 10,
              paddingHorizontal: 10,
            }}
          >
            <Text>{elm.task}</Text>
            <Button title="Delete" onPress={() => deleteFunc(elm.id)} />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 55,
    paddingHorizontal: 13,
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
});
