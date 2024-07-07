import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { getUserData } from '../redux/actions/userActions';

const SecurityScreen = () => {
  const [userData, setUserData] = useState(null);
  
  const user = useSelector(state => state.user);

  useEffect(() => {
    if (user) {
      setUserData(user);
    }
  }, [user]);

  useEffect(() => {
    dispatch(getUserData());
  }, []);

  return (
    <View style={styles.container}>
      {userData ? (
        <View>
          <Text>User Name: {userData.name}</Text>
          <Text>Email: {userData.email}</Text>
          <Text>Security Level: {userData.securityLevel}</Text>
        </View>
      ) : (
        <Text>Loading user data...</Text>
      )}
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

export default SecurityScreen;