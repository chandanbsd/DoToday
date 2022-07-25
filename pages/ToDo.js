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
import uuid from "react-native-uuid";

// uuid.v4()
export default function ToDo() {
  const [tickets, setTickets] = useState([]);
  const [newTicket, setNewTicket] = useState(undefined);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
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
            if (newTicket !== undefined)
              setTickets([...tickets, [uuid.v4(), newTicket]]);
            else Alert.alert("Enter ToDo description");
            setNewTicket(undefined);
          }}
        />
      </View>
      <FlatList
        data={tickets}
        renderItem={({ item }) => (
          <View style={styles.ticketContainer}>
            <Text style={styles.item}>{item[1]}</Text>
            {/* <Button
              title="Complete"
              onPress={() => {
                setTickets(tickets.filter((ticket) => ticket[0] !== item[0]));
              }}
            /> */}
            <Button
              title="Remove"
              onPress={() => {
                setTickets(tickets.filter((ticket) => ticket[0] !== item[0]));
              }}
            />
          </View>
        )}
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
    marginTop: 5,
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
    width: "15%",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
  },
  ticketContainer: {
    display: "flex",
    flexDirection: "row",
  },
});
