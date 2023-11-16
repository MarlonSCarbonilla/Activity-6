import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { DataTable, Divider } from 'react-native-paper';
import { students } from './SRC/user';

const boldText = { fontWeight: 'bold' };

const Userdata = () => {
  return (
    <DataTable style={styles.container}>
      <DataTable.Header style={[styles.tableHeader, { backgroundColor: 'skyblue' }]}>
        <DataTable.Title style={boldText}>ID</DataTable.Title>
        <DataTable.Title style={boldText}>FIRSTNAME</DataTable.Title>
        <DataTable.Title style={boldText}>LASTNAME</DataTable.Title>
        <DataTable.Title style={boldText}>COURSE</DataTable.Title>
        <DataTable.Title style={boldText}>YEAR & SECTION</DataTable.Title>
      </DataTable.Header>
      <ScrollView>
        {students.map((users) => (
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

const Studentdata = () => {
  const studentUsers = students.filter((user) => user.usertype === 'STUDENT');
  return (
    <DataTable style={styles.container}>
      <DataTable.Header style={[styles.tableHeader, { backgroundColor: 'skyblue' }]}>
        <DataTable.Title style={boldText}>ID</DataTable.Title>
        <DataTable.Title style={boldText}>NAME</DataTable.Title>
        <DataTable.Title style={boldText}>COURSE</DataTable.Title>
      </DataTable.Header>
      {studentUsers.map((student) => (
        <DataTable.Row key={student.id}>
          <DataTable.Cell>{student.id}</DataTable.Cell>
          <DataTable.Cell>{`${student.name.firstname} ${student.name.lastname}`}</DataTable.Cell>
          <DataTable.Cell>{student.course}</DataTable.Cell>
        </DataTable.Row>
      ))}
    </DataTable>
  );
};

const Account = () => {
  const accounts = students.filter((user) => user.usertype === 'TEACHER' || user.usertype === 'STUDENT');

  return (
    <DataTable style={styles.container}>
      <DataTable.Header style={[styles.tableHeader, { backgroundColor: 'skyblue' }]}>
        <DataTable.Title style={boldText}>ID</DataTable.Title>
        <DataTable.Title style={boldText}>USERNAME</DataTable.Title>
        <DataTable.Title style={boldText}>PASSWORD</DataTable.Title>
        <DataTable.Title style={boldText}>USERTYPE</DataTable.Title>
      </DataTable.Header>
      {accounts.map((account) => (
        <DataTable.Row key={account.id}>
          <DataTable.Cell>{account.id}</DataTable.Cell>
          <DataTable.Cell>{account.username}</DataTable.Cell>
          <DataTable.Cell>{account.password}</DataTable.Cell>
          <DataTable.Cell>{account.usertype}</DataTable.Cell>
        </DataTable.Row>
      ))}
    </DataTable>
  );
};

const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Account />
        <Divider />
        <Userdata />
        <Divider />
        <Studentdata />
        <Divider />
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 16,
  },
  tableHeader: {
    backgroundColor: 'skyblue',
  },
});

export default App;
