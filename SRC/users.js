import React from "react";
import { StyleSheet } from "react-native";
import { DataTable } from "react-native-paper";
import { students } from "./user";
import { View } from "react-native";
import { ScrollView } from "react-native";

const Userdata = () => {
  return (
    <DataTable style={styles.container}>
      <DataTable.Header style={styles.tableHeader}>
        <DataTable.Title>ID</DataTable.Title>
        <DataTable.Title>FIRSTNAME</DataTable.Title>
        <DataTable.Title>LASTNAME</DataTable.Title>
        <DataTable.Title>COURSE</DataTable.Title>
        <DataTable.Title>YEAR & SECTION</DataTable.Title>
      </DataTable.Header>
      <ScrollView>
        {User.map((users) => (
          <DataTable.Row key={users.id}>
            <DataTable.Cell>{users.id}</DataTable.Cell>
            <DataTable.Cell>{users.name.firstname}</DataTable.Cell>
            <DataTable.Cell>{users.name.lastname}</DataTable.Cell>
            <DataTable.Cell>{users.course}</DataTable.Cell>
            <DataTable.Cell>{users.yearsection}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </ScrollView>
    </DataTable>
  );
};

export default Userdata;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  tableHeader: {
    backgroundColor: "#EAD7BB",
  },
});