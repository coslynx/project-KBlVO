import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile } from '../redux/actions/userActions';

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const userProfile = useSelector(state => state.user.profile);

  useEffect(() => {
    dispatch(getUserProfile());
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile</Text>
      {userProfile ? (
        <View>
          <Text>Name: {userProfile.name}</Text>
          <Text>Email: {userProfile.email}</Text>
          <Text>Age: {userProfile.age}</Text>
          <Text>Gender: {userProfile.gender}</Text>
          <Text>Goals: {userProfile.goals.join(', ')}</Text>
        </View>
      ) : (
        <Text>Loading profile...</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default ProfileScreen;