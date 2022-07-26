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
            if (newTicket != undefined && newTicket.length > 0) {
              setTickets([...tickets, [uuid.v4(), newTicket, false]]);
            } else Alert.alert("Enter ToDo description");
            setNewTicket(undefined);
          }}
        />
      </View>
      <Text style={styles.heading}>Incomplete:</Text>

      <FlatList
        style={styles.incompleteList}
        data={
          tickets.length > 0
            ? tickets.filter((ticket) => ticket[2] == false)
            : tickets
        }
        renderItem={({ item }) => (
          <View style={styles.ticketContainer}>
            <Text style={styles.item}>{item[1]}</Text>
            <Button
              title="Complete"
              onPress={() => {
                setTickets(
                  tickets.map((val) => {
                    if (val[0] == item[0]) {
                      val[2] = true;
                    }
                    return val;
                  })
                );
              }}
            />
            <Button
              title="Remove"
              onPress={() => {
                setTickets(tickets.filter((ticket) => ticket[0] !== item[0]));
              }}
            />
          </View>
        )}
      />

      <Text style={styles.heading}>Completed:</Text>
      <FlatList
        style={styles.incompleteList}
        data={tickets.filter((ticket) => ticket[2] == true)}
        renderItem={({ item }) => (
          <View style={styles.ticketContainer}>
            <Text style={styles.item}>{item[1]}</Text>
            <Button
              title="Incomplete"
              onPress={() => {
                setTickets(
                  [...tickets].map((val) => {
                    if (val[0] == item[0]) val[2] = false;
                    return val;
                  })
                );
              }}
            />
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
    flex: 1,
    padding: 10,
    marginTop: 5,
    fontSize: 18,
    height: 44,
    width: "30%",
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
  heading: {
    paddingTop: 10,
    fontSize: 20,
    textAlign: "center",
  },
  incompleteList: {
    heading: 50,
  },
});
