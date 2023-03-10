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
  return (
    <View style={styles.container}>
      <View style={styles.v1}>
        <TextInput style={styles.inputSt} placeholder="Enter your name" />
        <Pressable
          style={{
            padding: 10,
            backgroundColor: "red",
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    padding: 10,
    height: 300,
    backgroundColor: "lightgray",
  },
  v1: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 50,
    padding: 5,
  },

  inputSt: {
    backgroundColor: "white",
    color: "black",
    width: "40%",
    height: "100%",
    padding: 5,
    borderRadius: 10,
  },
});
