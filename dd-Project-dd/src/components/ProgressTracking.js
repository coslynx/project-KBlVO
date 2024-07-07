import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProgressData } from '../redux/actions/progressActions';

const ProgressTracking = () => {
  const dispatch = useDispatch();
  const progressData = useSelector(state => state.progressData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchProgressData())
      .then(() => setLoading(false))
      .catch(error => console.error('Error fetching progress data: ', error));
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading progress data...</Text>
      ) : (
        <View>
          <Text>Today's Progress:</Text>
          <Text>Steps: {progressData.steps}</Text>
          <Text>Workout Hours: {progressData.workoutHours}</Text>
          <Text>Water Intake: {progressData.waterIntake} ml</Text>
          {/* Add more progress data here */}
        </View>
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

export default ProgressTracking;