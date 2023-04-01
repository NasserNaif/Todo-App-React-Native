import { View, Text, StyleSheet, Pressable } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

function TaskCard(props) {
  return (
    <View style={styles.taskView}>
      <Text style={styles.text}>{props.Text}</Text>
      <View style={styles.deleteButton}>
        <Pressable
          onPress={props.onDeleteItem.bind(this, props.id)}
          android_ripple={{ color: "#dddddd" }}
          style={({ pressed }) => pressed && styles.press}
        >
          <Icon name={"delete"} size={30} color={"white"} />
        </Pressable>
      </View>
    </View>
  );
}

export default TaskCard;

const styles = StyleSheet.create({
  taskView: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    minHeight: 70,
    borderWidth: 0.3,
    borderRightWidth: 20,
    borderRightColor: "#bfdbf7",
    borderRadius: 8,
  },

  deleteButton: {
    backgroundColor: "#e63946",
    borderRadius: 10,
    padding: 7,
  },
  press: {
    opacity: 0.5,
  },

  text: {
    fontSize: 23,
    fontWeight: "500",
  },
});
