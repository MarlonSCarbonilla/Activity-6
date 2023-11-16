import React from 'react';
import { StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';
import {students} from './user';
import { View } from 'react-native';

const Account = () => {
  return (
    <DataTable style={styles.container}>
      <DataTable.Header style={styles.tableHeader}>
        <DataTable.Title>ID</DataTable.Title>
        <DataTable.Title>USERNAME</DataTable.Title>
        <DataTable.Title>PASSWORD</DataTable.Title>
        <DataTable.Title>USERTYPE</DataTable.Title>
      </DataTable.Header>

      {User.map((Users) => (
        <DataTable.Row key={Users.id}>
          <DataTable.Cell>{Users.id}</DataTable.Cell>
          <DataTable.Cell>{Users.username}</DataTable.Cell>
          <DataTable.Cell>{Users.password}</DataTable.Cell>
          <DataTable.Cell>{Users.usertype}</DataTable.Cell>
        </DataTable.Row>
      ))}
    </DataTable>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  tableHeader: {
    backgroundColor: '#EAD7BB',
  },
});