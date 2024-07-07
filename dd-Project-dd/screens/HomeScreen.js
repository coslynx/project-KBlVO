import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from '../redux/actions/userActions';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.userData);

  useEffect(() => {
    dispatch(fetchUserData());
  }, []);

  return (
    <View style={styles.container}>
      <Text>Welcome to dd App</Text>
      {userData ? (
        <View>
          <Text>User Name: {userData.name}</Text>
          <Text>Email: {userData.email}</Text>
          <Text>Age: {userData.age}</Text>
          <Text>Goals: {userData.goals}</Text>
        </View>
      ) : (
        <Text>Loading user data...</Text>
      )}
      <Button title="Edit Profile" onPress={() => navigation.navigate('ProfileScreen')} />
      <Button title="Track Activity" onPress={() => navigation.navigate('ActivityScreen')} />
      <Button title="Set Goals" onPress={() => navigation.navigate('GoalScreen')} />
      <Button title="View Progress" onPress={() => navigation.navigate('ProgressScreen')} />
      <Button title="View Dashboard" onPress={() => navigation.navigate('DashboardScreen')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;