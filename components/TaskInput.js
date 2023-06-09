import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Pressable,
  Text,
  Modal,
} from "react-native";

function TaskInput(props) {
  const [newTask, setNewTask] = useState("");

  function textChange(text) {
    setNewTask(text);
  }

  function addNewTaskHandler() {
    props.addNewTask(newTask);
    setNewTask("");
  }

  return (
    <Modal visible={props.visible} animationType={"slide"} transparent>
      <Pressable
        onPress={() => props.onCancel()}
        style={styles.pressableStyle}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputSt}
          placeholder="Enter your task"
          value={newTask}
          onChangeText={textChange}
        />
        <View style={styles.buttonContauner}>
          <Pressable
            android_ripple={{ color: "#dddddd" }}
            onPress={addNewTaskHandler}
            style={({ pressed }) =>
              pressed ? [styles.addButton, styles.press] : styles.addButton
            }
          >
            <Text
              style={{
                color: "white",
                fontSize: 20,
              }}
            >
              Add Task
            </Text>
          </Pressable>
          <Pressable
            android_ripple={{ color: "#dddddd" }}
            onPress={() => props.onCancel()}
            style={({ pressed }) =>
              pressed ? [styles.addButton, styles.press] : styles.addButton
            }
          >
            <Text
              style={{
                color: "white",
                fontSize: 20,
              }}
            >
              cancel
            </Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

export default TaskInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    height: 70,
    padding: 14,
    // marginTop: 300,
    backgroundColor: "#bfdbf7",
    borderTopEndRadius: 30,
    borderTopLeftRadius: 30,
  },

  pressableStyle: {
    height: 300,
    opacity: 0.1,
  },

  inputSt: {
    color: "black",
    width: "100%",
    borderWidth: 1,
    borderColor: "#cccccc",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "white",
  },
  addButton: {
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: "#00a6fb",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  press: {
    opacity: 0.7,
  },

  buttonContauner: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
