import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ToDo from "./pages/ToDo";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}> DoToday App</Text>
      <ToDo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 20,
    alignItems: "center",
  },

  heading: {
    fontSize: 30,
  },
});
