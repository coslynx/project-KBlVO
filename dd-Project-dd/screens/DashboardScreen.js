import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserGoals } from '../redux/actions/goalActions';

const DashboardScreen = () => {
  const dispatch = useDispatch();
  const userGoals = useSelector(state => state.goalReducer.userGoals);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchUserGoals())
      .then(() => setLoading(false))
      .catch(error => console.error('Error fetching user goals: ', error));
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading user goals...</Text>
      ) : (
        <>
          <Text style={styles.title}>Your Goals:</Text>
          {userGoals.map(goal => (
            <View key={goal.id} style={styles.goalContainer}>
              <Text>{goal.title}</Text>
              <Text>{goal.description}</Text>
            </View>
          ))}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  goalContainer: {
    marginBottom: 20,
  },
});

export default DashboardScreen;