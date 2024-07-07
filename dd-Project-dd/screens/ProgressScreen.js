import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProgressData } from '../redux/actions/progressActions';

const ProgressScreen = () => {
  const [progressData, setProgressData] = useState(null);
  const isLoading = useSelector(state => state.progress.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProgressData());
  }, [dispatch]);

  useEffect(() => {
    if (!isLoading) {
      setProgressData(progressData);
    }
  }, [isLoading, progressData]);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text>Loading progress data...</Text>
      ) : (
        <View>
          <Text>Progress Screen</Text>
          {progressData && (
            <View>
              <Text>Steps: {progressData.steps}</Text>
              <Text>Workout Hours: {progressData.workoutHours}</Text>
              <Text>Hydration: {progressData.hydration}</Text>
            </View>
          )}
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

export default ProgressScreen;