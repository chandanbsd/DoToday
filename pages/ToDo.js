import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Button,
  Alert,
} from "react-native";

export default function ToDo() {
  const [tickets, setTickets] = useState([["Eat Pasta"], ["Buy Groceries"]]);
  const [newTicket, setNewTicket] = useState(undefined);
  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Add New To Do"
          onChangeText={(data) => setNewTicket(data)}
          defaultValue={newTicket}
        />
        <Button
          style={styles.add}
          title="Add"
          onPress={() => {
            if (newTicket !== undefined) setTickets([...tickets, newTicket]);
            else Alert.alert("Enter ToDo description");
            setNewTicket(undefined);
          }}
        />
      </View>
      <FlatList
        data={tickets}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    width: "90%",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  input: {
    padding: 10,
    fontSize: 18,
    height: 44,
    width: "85%",
    backgroundColor: "grey",
  },
  add: {
    width: "25%",
  },
});
